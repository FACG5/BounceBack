import { decode } from 'jsonwebtoken';

export function checkUser() {
  const token = getCookie('jwt');
  return decode(token);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export function getDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  return `${year}-${month}-${day}`;
}

export function checkNI(str) {
  return (/^([a-zA-Z]){2}([0-9]){6}([a-z])$/.test(str));
}
