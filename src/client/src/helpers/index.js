
import { decode } from 'jsonwebtoken';

export function checkUser() {
  const token = getCookie('jwt');
  console.log(token)
  return decode(token);
}


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
} 