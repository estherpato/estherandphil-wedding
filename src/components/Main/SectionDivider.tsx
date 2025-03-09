import { styled } from "@mui/material"
import { FC } from "react";

const StyledDivider = styled('img')`
  width: 100%;
  margin-top: 1rem;
`

type SectionDividerProps = {
  type: 'primary' | 'secondary';
}

const SectionDivider: FC<SectionDividerProps> = ({ type }) => {
  const srcUrl = type === 'primary' ? '' : 'light_sec_divider.png';
  return <StyledDivider src={srcUrl} width={'100%'} />
}

export default SectionDivider;