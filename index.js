
require('dotenv').config();

const {RTMClient} = require('@slack/rtm-api');

const tokenModule = require('./data.js')
token = tokenModule.getToken();
console.log(token);

var rtm = new RTMClient(token);
rtm.start();
//const token = t.token;
var greeting = require('./greeting');
var square = require('./square');

rtm.on('message', function (message) {
    var channel = essage.channel;
    var text = message.text;

    if (!isNaN(text)){
        square(rtm, text, channel);
    } else {
        switch (text){
            case 'hi':
                greeting(rtm, channel);
                break;
            default:
                rtm.sendMessage("I'm alive", channel);
        }
    }
});
