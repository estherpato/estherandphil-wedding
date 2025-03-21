import { styled } from "@mui/material"
import { FC, useEffect, useState } from "react";

const StyledDivider = styled('img')`
  width: 100%;
  margin-top: 1rem;
`

type SectionDividerProps = {
  activeTheme: 'light' | 'dark';
  type: 'primary' | 'secondary'
}

const SectionDivider: FC<SectionDividerProps> = ({ activeTheme, type }) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (type === 'secondary') {
      const secondaryUrl = activeTheme === 'light' ? 'light_sec_divider.png' : 'dark_sec_divider.png';
      setUrl(secondaryUrl);
    } else {
      const primary = activeTheme === 'light' ? 'light_pri_divider.png' : 'dark_pri_divider.png';
      setUrl(primary);
    }
  }, [activeTheme])

  return <StyledDivider src={url} width={'100%'} />
}

export default SectionDivider;