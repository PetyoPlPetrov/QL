import { useCallback, useEffect, useRef, useState } from 'react';

export const useDelayedApi = <InputProps, OutputProps, Mappped = OutputProps>({
  api,
  defaultData,
  transform,
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

  const triggerApi = useCallback(
    (args: { apiArgs: InputProps; callback?: (props: Mappped) => void }) => {
      const { apiArgs, callback: callback_ } = args || {};

      if (typeof callback_ === 'function') {
        callback.current = callback_;
      }
      argsRef.current = apiArgs;
      setTrigger(true);
    },
    []
  );

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
};
