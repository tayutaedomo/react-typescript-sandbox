import { useEffect } from 'react';

export const useComponentDidMount = (onMountHandler) => {
  useEffect(() => {
    onMountHandler();
  }, []);
};
