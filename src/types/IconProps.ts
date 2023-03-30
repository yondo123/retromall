import { MouseEventHandler } from 'react';

export interface IconProps {
  color?: `#${string}`;
  width?: number;
  height?: number;
  handleClick?: MouseEventHandler<SVGPathElement>;
}
