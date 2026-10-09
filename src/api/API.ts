import { useEffect, useState } from 'react';
import { STORES } from './data';
import type { TStore } from './types';

type TState = {
  data: TStore[] | null;
  error: Error | null;
  isLoading: boolean;
};

export const useMockData = () => {
  const [state, setState] = useState<TState>({
    data: null,
    error: null,
    isLoading: false,
  });

  const fetch = () => {
    setState((old) => ({
      ...old,
      isLoading: true,
    }));
    const shouldError = Math.random() * 100 > 90;
    setTimeout(() => {
      if (shouldError) {
        setState({
          data: null,
          error: new Error('Something went wrong!'),
          isLoading: false,
        });
      } else {
        setState({ data: STORES, error: null, isLoading: false });
      }
    }, 1000);
  };

  // Initial load; the mock fetch intentionally sets state from the effect.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => fetch(), []);

  return { ...state, refetch: fetch };
};

