const express = require('express');
const app = express();

const VoiceResponse = require('twilio').twiml.VoiceResponse;

var number = process.env.NUMBER;

var selectGlados = ["https://i1.theportalwiki.net/img/c/c8/GLaDOS_02_part1_entry-1.wav",
				   "https://i1.theportalwiki.net/img/e/e5/GLaDOS_00_part1_entry-1.wav",
				   "https://i1.theportalwiki.net/img/3/38/GLaDOS_00_part1_entry-7.wav",
				   "https://i1.theportalwiki.net/img/d/d0/GLaDOS_05_part1_entry-1.wav",
				   "https://i1.theportalwiki.net/img/9/97/GLaDOS_14_part1_entry-2.wav",
				   "https://i1.theportalwiki.net/img/4/47/GLaDOS_08_part1_trapped-2.wav",
				   "https://i1.theportalwiki.net/img/6/6d/GLaDOS_10_part1_entry-2.wav",
				   "https://i1.theportalwiki.net/img/d/d5/GLaDOS_10_part1_entry-1.wav",
				   "https://i1.theportalwiki.net/img/2/22/GLaDOS_07_part1_trapped-1.wav",
				   "https://i1.theportalwiki.net/img/9/9e/GLaDOS_15_part1_entry-1.wav"
				   ];

// function to select a random Glados wav file
var pickAGlados = function () {
	
	var todaysGlados = selectGlados[Math.floor(Math.random() * 10)];

	return todaysGlados;
};

app.post('/', function (req, res) {

   const twiml = new VoiceResponse();

   twiml.play(pickAGlados());

   const dial = twiml.dial();

   dial.number(number);

   res.writeHead(200, { 'Content-Type': 'text/xml' });
   res.end(twiml.toString());
})


app.get('/test', function(req, res) {
	res.send('app functioning ok!');
});

var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Example app listening on port' + port);
})