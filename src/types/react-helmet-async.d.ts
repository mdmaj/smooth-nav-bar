declare module 'react-helmet-async' {
  import * as React from 'react';

  export interface HelmetProps {
    children?: React.ReactNode;
  }

  export class Helmet extends React.Component<HelmetProps> {}
  export class HelmetProvider extends React.Component<{ children?: React.ReactNode }> {}
  export function renderHelmetToString(): string;

  export default Helmet;
}
