import { styled } from "@mui/material"
import { FC, useEffect, useState } from "react";

const StyledDivider = styled('img')`
  width: 100%;
  margin-top: 1rem;
`

type SectionDividerProps = {
  type: 'primary' | 'secondary';
  activeTheme: 'light' | 'dark';
}

const SectionDivider: FC<SectionDividerProps> = ({ type, activeTheme }) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (type === 'primary') {
      const primaryUrl = activeTheme === 'light' ? '' : '';
      setUrl(primaryUrl);
    } else if (type === 'secondary') {
      const secondaryUrl = activeTheme === 'light' ? 'light_sec_divider.png' : 'dark_sec_divider.png';
      setUrl(secondaryUrl);
    }
  }, [type, activeTheme])

  return <StyledDivider src={url} width={'100%'} />
}

export default SectionDivider;