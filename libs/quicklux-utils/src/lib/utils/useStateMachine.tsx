import { useCallback, useEffect, useState } from 'react';
import { createContext } from 'react';

export interface Step {
  status: string;
  type: string;
}
interface States {
  [key: string]: {
    [key: string]: () => void;
  };
}
export const useStateMachine = <T extends States>(
  argument: T,
  initStep: Step
) => {
  const [stateStep, setStateStep] = useState(initStep || {});
  const stateStepType = stateStep?.type;
  const stateStepStatus = stateStep?.status;

  const goToNextStep = useCallback((nextStep: Step) => {
    setStateStep(nextStep);
  }, []);

  useEffect(() => {
    if (!stateStepType || !stateStepStatus) {
      return;
    }
    const function_ = argument[stateStepType]?.[stateStepStatus];

    if (typeof function_ === 'function') {
      function_();
      setStateStep({
        type: stateStepType,
        status: stateStepStatus,
      });
    }
  }, [stateStepType, stateStepStatus]);

  return {
    stateStep,
    goToNextStep,
  };
};

interface StateMachineContextProps {
  stateStep: any;
  goToNextStep: (step: Step) => void;
  setConfig: (config: any) => void;
}
export const StateMachineContext =
  createContext<StateMachineContextProps | null>(null);
