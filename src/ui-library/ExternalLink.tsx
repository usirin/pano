import { styled } from "../stitches.config";

export const ExternalLink = styled("a", {
  color: "$gray12",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "none",
  },
});
