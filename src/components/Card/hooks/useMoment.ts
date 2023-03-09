import moment from 'moment';
import 'moment/locale/ko';

export const useMoment = () => {
  const getNowFrom = (time: string): string => {
    const momentTime = moment(time);
    return momentTime ? moment().startOf('hour').fromNow() : '';
  };
  return { getNowFrom };
};
