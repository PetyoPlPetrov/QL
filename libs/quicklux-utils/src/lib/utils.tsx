import { withAuthintication } from './authentication';
import { withPermissions } from './authorizations/permissions';

/* eslint-disable-next-line */
export const compose =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduceRight((v, f) => f(v), x);

export const mergeConfig = (config: any, newConfig: any) => {
  function mergeProperty(key: any, value1: any, value2: any) {
    if (typeof value1 === 'function' && typeof value2 === 'function') {
      return () => {
        value1();
        value2();
      };
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      return [...new Set([...value1, ...value2])];
    } else {
      return value2 === undefined ? value1 : value2;
    }
  }
  const mergedConfig: any = {};
  for (const key in config) {
    if (config.hasOwnProperty(key)) {
      const value1 = config[key];
      const value2 = newConfig[key];
      mergedConfig[key] =
        typeof value1 === 'object' && typeof value2 === 'object'
          ? mergeConfig(value1, value2)
          : mergeProperty(key, value1, value2);
    }
  }
  return mergedConfig;
};

export const verifyPermissions = compose(withPermissions, withAuthintication);
