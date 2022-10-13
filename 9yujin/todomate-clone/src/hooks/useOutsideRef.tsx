import { useEffect, useRef } from 'react';

function useOutsideRef(handler: (value: string) => void, inputValue: string) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        handler(inputValue);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, inputValue]);

  return inputRef;
}

export default useOutsideRef;
