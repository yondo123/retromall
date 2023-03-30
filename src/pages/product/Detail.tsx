import React from 'react';
import style from './styles/detail.module.scss';
import Textarea from '../../components/Layout/Textarea';
import Tag from '../../components/Layout/Tag';
import Like from '../../components/Icons/Like';
import Button from '../../components/Layout/Button';
import useHashtag from '../../hooks/useHashtag';
import usePrice from '../../hooks/usePrice';
import { constants } from '../../types';
import type { ProductDetailItem } from '../../types';

const ProductView = (props: ProductDetailItem) => {
  const { colors } = constants;
  const { images, amount, isAuthor, isLiked, category, hashTags = [], content, title, likes, author } = props;
  const { convertHashtagFormat } = useHashtag();
  const { convertPriceFormat } = usePrice();

  return (
    <section className={style['detail-section']}>
      <div>
        <img src={images ? images[0] : ''} alt={title} />
      </div>
      <div className={style['detail-content-wrap']}>
        <h2 className={style['detail-title']}>{title}</h2>
        <ul className={style.tags}>
          {hashTags.map((tag, index) => (
            <li key={index}>
              <Tag value={convertHashtagFormat(tag)} />
            </li>
          ))}
        </ul>
        <dl className={style['detail-content']}>
          <div className="mt-8">
            <dt>
              <Like
                color={isLiked ? colors.pink : colors.lightPink}
                {...(!isAuthor && {
                  handleClick: () => {
                    alert('click.');
                  }
                })}
              />
            </dt>
            <dd className={style.like}>{likes}</dd>
          </div>
          <div className="mt-8">
            <dt>카테고리&#58;&#32;</dt>
            <dd>{category}</dd>
          </div>
          <div className="mt-8">
            <dt>작성자&#58;&#32;</dt>
            <dd>{author}</dd>
          </div>
          <div className="mt-8">
            <dt>가격&#58;</dt>
            <dd>{convertPriceFormat(amount)}원</dd>
          </div>
        </dl>
        <Textarea disabled={true} defaultValue={content} />
        {isAuthor && (
          <div className={style['detail-button-wrap']}>
            <Button variants={'fill'} color={'primary'} size={'full'}>
              수정하기
            </Button>
            <Button variants={'fill'} color={'accent'} size={'full'}>
              삭제하기
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductView;
