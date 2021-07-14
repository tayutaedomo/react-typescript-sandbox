import { RefObject, useEffect } from 'react';

export const useClickInside = (
  ref: RefObject<HTMLButtonElement>,
  callback: () => void
) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const useClickOutside = (
  ref: any,
  callback: () => void,
  disabled: boolean
) => {
  const handleClick = (e) => {
    if (disabled) return;

    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
