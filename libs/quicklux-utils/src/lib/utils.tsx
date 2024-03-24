import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { withAuthintication } from './authentication';
import { withPermissions } from './authorizations/permissions';

/* eslint-disable-next-line */
export const compose = (...fns: Function[]) => (x: any) => fns.reduceRight((v, f) => f(v), x);

export const useDelayedApi = <InputProps, OutputProps, Mappped = OutputProps>({
    api, defaultData, transform
}: {
    api: (args: InputProps) => Promise<OutputProps>;
    defaultData: Mappped;
    transform: (data: OutputProps) => Mappped;
}) => {
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [trigger, setTrigger] = useState(false);
    const callback = useRef<((props: Mappped) => void) | {}>();
    const argsRef = useRef<InputProps>({} as InputProps);

    const triggerApi = useCallback((args: { apiArgs: InputProps, callback?: (props: Mappped) => void }) => {
        const { apiArgs, callback: callback_ } = args || {};

        if (typeof callback_ === 'function') {
            callback.current = callback_;
        }
        argsRef.current = apiArgs;
        setTrigger(true)

    }, []);

    useEffect(() => {
        if (trigger) {
            setLoading(true);
            api(argsRef.current)
                .then((res) => {
                    setData(transform(res));
                    setLoading(false);

                    if (typeof callback.current === 'function') {
                        callback.current(res as unknown as Mappped);
                    }
                })
                .catch((err) => {
                    setError(err);
                    setLoading(false);
                })
                .finally(() => {
                    setTrigger(false);
                    setLoading(false);
                });
        }

    }, [trigger]);

    return [triggerApi, data, loading, error];

}

interface States {
    [key: string]: {
        [key: string]: () => void;
    }
}

export interface Step {
    status: string;
    type: string;
}

export const mergeConfig = (config: any, newConfig: any) => {
    function mergeProperty(key: any, value1: any, value2: any) {
        if (typeof value1 === 'function' && typeof value2 === 'function') {
            return () => {
                value1();
                value2();
            }
        } else if (Array.isArray(value1) && Array.isArray(value2)) {
            return [...new Set([...value1, ...value2])]
        } else {
            return value2 === undefined ? value1 : value2;
        }
    }
    const mergedConfig: any = {};
    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            const value1 = config[key];
            const value2 = newConfig[key];
            mergedConfig[key] = typeof value1 === 'object' && typeof value2 === 'object' ? mergeConfig(value1, value2) : mergeProperty(key, value1, value2);
        }
    }
    return mergedConfig;
}

export const useStateMachine = <T extends States>(argument: T, initStep: Step) => {
    const [stateStep, setStateStep] = useState(initStep || {});
    const stateStepType = stateStep?.type;
    const stateStepStatus = stateStep?.status;

    const goToNextStep = useCallback((nextStep: Step) => {
        setStateStep(nextStep);
    }, []);


    useEffect(() => {

        if (!stateStepType || !stateStepStatus) {
            return
        }
        const function_ = argument[stateStepType]?.[stateStepStatus];

        if (typeof function_ === 'function') {
            function_();
            setStateStep({
                type: stateStepType,
                status: stateStepStatus
            });
        }
    }, [stateStepType, stateStepStatus]);

    return {
        stateStep,
        goToNextStep
    }
}
interface StateMachineContextProps {
    stateStep: any;
    goToNextStep: (step: Step) => void;
    setConfig: (config: any) => void;
}
export const StateMachineContext = createContext<StateMachineContextProps | null>(null);

export const withStateMachine = (Component: React.FC) => {

    return (props: any) => {
        const [config, setConfig] = useState({});

        const memoConfig = useMemo(() => {
            return mergeConfig(config, {})
        }, [config]);

        const { stateStep, goToNextStep } = useStateMachine(memoConfig, {
            type: 'INIT',
            status: 'INIT',
        });

        return <StateMachineContext.Provider value={{ stateStep, goToNextStep, setConfig }}>
            <Component {...props} />
        </StateMachineContext.Provider>;
    };
}

export const useFoodStateMachine = (config = {}) => {
    const context = useContext(StateMachineContext);
    if (!context) {
        throw new Error('State Machine context not provided');
    }

    useEffect(() => {
        context.setConfig(config);
    }, []);

    return context;
}


export const baseAllowed = compose(withPermissions, withAuthintication);