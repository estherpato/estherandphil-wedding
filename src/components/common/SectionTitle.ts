import { styled, Typography } from "@mui/material";
import { ElementType } from "react";

export const SectionTitle = styled(Typography)<{ component?: ElementType }>`
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  margin: 0 0 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000C2B;
`