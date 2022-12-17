var Owlbot = require('owlbot-js');
const prompt  = require('prompt-sync')();
var client = Owlbot("1500940e97975d1313df39437616ddebc9e0366c");

let word = prompt("What word do you want to define? ");

client.define(word).then(function(result){
   console.log(result);
});
