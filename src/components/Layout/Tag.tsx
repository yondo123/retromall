import React from 'react';
import style from './styles/tag.module.scss';

const Tag = (props: { value: string }) => {
  const { value = '' } = props;
  return <span className={style.tag}>{value}</span>;
};

export default Tag;
