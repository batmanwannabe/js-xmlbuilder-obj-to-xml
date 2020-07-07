// Import stylesheets
import './style.css';
import 'xmlbuilder'

var obj = { newData:{
number: [ 
    "one", 
    "two"
  ]
}
}

var builder = require('xmlbuilder');
var root = builder.create(obj);
var xml = root.end({ pretty: true});
console.log(xml);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${xml}</h1>`;