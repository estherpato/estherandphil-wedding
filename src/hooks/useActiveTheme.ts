import { useEffect, useState } from "react";
import { themes } from "../theme/theme";

export const useActiveTheme = () => {
  const [theme, setTheme] = useState(themes.light);
  const [switchChecked, setSwitchChecked] = useState(false);
  const activeTheme = theme.palette.mode === 'light' ? 'light' : 'dark';

  useEffect(() => {
    const newTheme = switchChecked ? themes.dark : themes.light;
    setTheme(newTheme);
  }, [switchChecked])

  return {theme, activeTheme, switchChecked, setSwitchChecked}
}