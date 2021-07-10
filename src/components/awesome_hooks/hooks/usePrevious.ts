import { useEffect, useRef } from 'react';

export const usePrevious = (value: number) => {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
