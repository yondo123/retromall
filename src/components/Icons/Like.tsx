import React from 'react';
import { constants } from '../../types';
import { IconProps } from '../../types/IconProps';

const LikeIcon = (props: IconProps) => {
  const { colors } = constants;
  const { width = 24, height = 24, color = colors.lightPink } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        {...(props.handleClick && { onClick: props.handleClick })}
        d="M17 4.5C14.9 4.5 13.05 5.55 12 7.2C10.95 5.55 9.1 4.5 7 4.5C3.7 4.5 1 7.2 1 10.5C1 16.45 12 22.5 12 22.5C12 22.5 23 16.5 23 10.5C23 7.2 20.3 4.5 17 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LikeIcon;
