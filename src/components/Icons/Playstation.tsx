import React from 'react';
import type { IconProps } from '../../types';

const PlaystationIcon = (props: IconProps) => {
  const { width = 24, height = 24, color = '#AEAEAE' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.584 17.011C22.154 17.554 21.102 17.941 21.102 17.941L13.269 20.758V18.68L19.033 16.623C19.688 16.389 19.788 16.057 19.256 15.883C18.726 15.708 17.765 15.758 17.11 15.994L13.27 17.348V15.193L13.49 15.118C13.49 15.118 14.6 14.724 16.161 14.551C17.721 14.379 19.633 14.575 21.133 15.144C22.823 15.679 23.013 16.468 22.584 17.011ZM14.014 13.474V8.162C14.014 7.538 13.9 6.964 13.315 6.802C12.868 6.658 12.59 7.074 12.59 7.697V21L9.00599 19.861V4C10.53 4.283 12.75 4.953 13.943 5.355C16.978 6.398 18.007 7.697 18.007 10.622C18.007 13.473 16.249 14.554 14.015 13.474H14.014ZM2.43099 18.464C0.695986 17.974 0.406986 16.954 1.19799 16.367C1.92899 15.825 3.17199 15.417 3.17199 15.417L8.30999 13.587V15.673L4.61299 16.998C3.95999 17.232 3.85899 17.564 4.38999 17.738C4.92099 17.913 5.88299 17.863 6.53699 17.628L8.30999 16.984V18.849L7.95699 18.909C6.18299 19.199 4.29299 19.078 2.43099 18.464Z"
        fill={color}
      />
    </svg>
  );
};

export default PlaystationIcon;
