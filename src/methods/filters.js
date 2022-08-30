export function getDate(data) {
  const date = new Date(data);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month / 10 < 1 ? `0${month}` : month;
  let day = date.getDate();
  day = day / 10 < 1 ? `0${day}` : day;
  return `${year}-${month}-${day}`;
}

export function getStemp(data) {
  return new Date(data).getTime();
}

export function currency(num) {
  return num && num.toString()
    .replace(/\d+/, (s) => s.replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
}
