import { StyledTag } from "./Tag.styled";

interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return <StyledTag>{children}</StyledTag>;
}
