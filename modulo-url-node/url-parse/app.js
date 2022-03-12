//el módulo url divide una dirección web en partes legibles
const url = require('url');

const adr = 'http://localhost:8080/default.html?year=2017&month=february';

const q = url.parse(adr, true);

console.log(q.host); //localhost:8080
console.log(q.pathname) // /default.html
console.log(q.search) // ?year=2017&month=february

const data = q.query //returns an object

console.log(data); //{ year: '2017', month: 'february' }
console.log(data.month) // february