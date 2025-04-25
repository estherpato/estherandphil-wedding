import { styled } from "@mui/material";

const StyledBackground = styled('div')`
  margin-bottom: -6px;
`;

export const StyledBackgroundPrimary = styled(StyledBackground)`
  background: ${({theme}) => `linear-gradient(0deg, ${theme.palette.secondary.main} 0%, ${theme.palette.background.default} 100%)`};
`;


export const StyledBackgroundSecondary = styled(StyledBackground)`
  background: linear-gradient(0deg, rgba(146,189,129,1) 0%, rgba(255,255,255,1) 100%);;
`;