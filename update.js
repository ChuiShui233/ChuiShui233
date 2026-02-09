const fs = require("fs");
const birth = new Date("2011-05-14"); //666别开我盒呀(ó﹏ò｡) 
const now = new Date();
let age = now.getFullYear() - birth.getFullYear();
const m = now.getMonth() - birth.getMonth();
if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
  age--;
}
// 计算存活天数
const diffTime = now - birth;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

let readme = fs.readFileSync("README.md", "utf8");

readme = readme
  .replace(/<!--AGE-->.*?<!--AGE_END-->/, `<!--AGE-->${age}<!--AGE_END-->`)
  .replace(/<!--DAYS-->.*?<!--DAYS_END-->/, `<!--DAYS-->${days}<!--DAYS_END-->`);
//卧槽原来老子活了这么久了还那么废物TwT
fs.writeFileSync("README.md", readme);

console.log(`Updated: ${age} years, ${days} days`);
