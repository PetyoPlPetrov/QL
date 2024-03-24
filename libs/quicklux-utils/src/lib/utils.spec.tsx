import { renderHook } from '@testing-library/react';

import { mergeConfig, useStateMachine } from './utils';

describe('tests utils', () => {

  describe('State machine', () => {
    it('Should has a correct default state', () => {

      const callbackStateA = () => {

      };
      const callbackStateB = () => {

      };;
      const callbackStateC = () => {

      };;
      const defaultState = {
        type: 'A',
        status: 'INIT'
      }

      const { result } = renderHook(() => useStateMachine({
        A: {
          INIT: callbackStateA,
          NEXT: callbackStateB
        },
        B: {
          INIT: callbackStateC
        }
      }, defaultState));

      expect(result.current.stateStep).toEqual(defaultState);


    });

    it('Should go to next step', () => {

      const callbackStateA = () => {

      };
      const callbackStateB = () => {

      };;
      const callbackStateC = () => {

      };;
      const defaultState = {
        type: 'A',
        status: 'INIT'
      }

      const { result, rerender } = renderHook(() => useStateMachine({
        A: {
          INIT: callbackStateA,
          NEXT: callbackStateB
        },
        B: {
          INIT: callbackStateC
        }
      }, defaultState));

      result.current.goToNextStep({ type: 'A', status: 'NEXT' });
      rerender();

      expect(result.current.stateStep).toEqual({ type: 'A', status: 'NEXT' });

    });
  });

  describe('merge config', () => {
    it('Should merge correctly', () => {
      const counter = {
        count: 0
      }
      const config = {
        a: {
          b: () => {
            counter.count++;
          }
        },
        c: () => {

        }
      };

      const config2 = {
        a: {
          b: () => {
            counter.count++;

          }
        },
      }

      const mergedConfig = mergeConfig(config, config2);
      mergedConfig.a.b();
      expect(counter.count).toEqual(2);

    });
  });
});
