import { Item } from '../types/Item'
export const getCurrentMonth = () => {
  let now = new Date();
  return `${ now.getFullYear() }-${ now.getMonth() + 1 }`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [ year, month ] = date.split('-');

  for (let i in list) {
    if (list[ i ].date.getFullYear() === parseInt(year)
      && list[ i ].date.getMonth() === parseInt(month)) {
      newList.push(list[ i ]);
    }
  }
  return newList;
}

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${ addZeroToDate(day) }/${ addZeroToDate(month) }/${ year }`
}

export const addZeroToDate = (n: number): string => n < 10 ? `0${ n }` : `${ n }`;
