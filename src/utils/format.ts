<<<<<<< HEAD
export const formatNumber = (number: number) => {
    return number.toLocaleString();
=======
import dayjs from "dayjs";

export const formatNumber = (number: number) => {
  return number.toLocaleString();
}

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
>>>>>>> 067a098 (Final)
}