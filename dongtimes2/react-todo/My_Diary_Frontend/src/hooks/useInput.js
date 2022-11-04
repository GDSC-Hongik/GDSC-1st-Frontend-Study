import { useState, useCallback } from 'react';

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onRefresh = useCallback(() => {
    setValue('');
  }, []);

  return [value, onChange, onRefresh];
};

export default useInput;
