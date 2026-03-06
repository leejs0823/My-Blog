import { StyledCard, CardHeader, CardTitle, CardContent } from "./Card.styled";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Card({ title, children, as }: CardProps) {
  return (
    <StyledCard as={as}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
