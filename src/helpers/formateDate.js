import { format } from 'date-fns';

export const formateDate = data => {
  return format(new Date(data), 'yyyy');
};
