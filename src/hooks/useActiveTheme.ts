import { useEffect, useState } from 'react';

export const useActiveTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [switchChecked, setSwitchChecked] = useState(false);

  useEffect(() => {
    const newTheme = switchChecked ? 'dark' : 'light';
    setMode(newTheme);
  }, [switchChecked])

  return {mode, switchChecked, setSwitchChecked}
}