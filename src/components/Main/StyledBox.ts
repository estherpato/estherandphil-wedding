import { styled } from "@mui/material";

const StyledBox = styled('div')`
  mask:
    radial-gradient(111.8px at 50% calc(100% - 150px),#000 99%,#0000 100%) calc(50% - 100px) 0/200px 100%,
    radial-gradient(111.8px at 50% calc(100% + 100px),#0000 99%,#000 100%) 50% calc(100% - 50px)/200px 100% repeat-x;
  background: rgb(255,255,255);
  padding-bottom: 6rem;
`;

export const StyledBoxPrimary = styled(StyledBox)`
  background: ${({theme}) => (`linear-gradient(0deg, ${theme.palette.primary.main} 0%, rgba(255,255,255,1) 100%);`)};
`;

export const StyledBoxSecondary = styled(StyledBox)`
  background: ${({theme}) => (`linear-gradient(0deg, ${theme.palette.secondary.main} 0%, rgba(255,255,255,1) 100%);`)};
`;