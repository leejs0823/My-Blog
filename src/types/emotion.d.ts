import "@emotion/react";
import type { Theme as DesignTokens } from "../styles/tokens";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- Emotion theme augmentation
  export interface Theme extends DesignTokens {}
}
