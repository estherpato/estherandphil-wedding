import { styled } from "@mui/material"
import { FC, useEffect, useState } from "react";

const StyledDivider = styled('img')`
  width: 100%;
  margin-top: 1rem;
`

type SectionDividerProps = {
  activeTheme: 'light' | 'dark';
}

const SectionDivider: FC<SectionDividerProps> = ({ activeTheme }) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const secondaryUrl = activeTheme === 'light' ? 'light_sec_divider.png' : 'dark_sec_divider.png';
    setUrl(secondaryUrl);
  }, [activeTheme])

  return <StyledDivider src={url} width={'100%'} />
}

export default SectionDivider;