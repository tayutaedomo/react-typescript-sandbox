import { ReactNode } from 'react';

export type HomeCardType = {
  headline: string;
  content: string | ReactNode;
  to: string;
};
