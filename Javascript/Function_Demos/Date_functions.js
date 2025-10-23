const now = new Date();
console.log(now);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getUTCHours());
console.log(now.getFullYear());

const dob = new Date("2025-5-9");
console.log(dob);
dob.setDate(11);
console.log(dob);
dob.setMonth(6);
console.log(dob);