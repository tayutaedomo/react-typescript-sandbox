import { useEffect } from 'react';

export const useComponentDidMount = (onMountHandler) => {
  useEffect(() => {
    onMountHandler();
  }, []);
};

export const useComponentWillUnmount = (onUnmountHandler) => {
  useEffect(
    () => () => {
      onUnmountHandler();
    },
    []
  );
};
