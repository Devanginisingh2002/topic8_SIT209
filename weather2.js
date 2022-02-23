let request = require('request');

let apiKey = 'eb7ebb56520fd0c23b3ccc4fb063c58c';
let location = 'melbourne,AU';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});