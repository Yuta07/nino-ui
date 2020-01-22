import { useState, useCallback } from 'react';

export const useInput = (text = '') => {
  const [value, setValue] = useState(text);

  const handleInputChange = useCallback((event: any) => {
    setValue(event.currentTarget.value)
  }, [setValue])

  return [value, handleInputChange];
} 