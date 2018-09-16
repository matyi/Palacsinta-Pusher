require('dotenv').config();
var player = require('play-sound')(opts = {})
var Pusher = require('pusher-client');
const say = require('say')

var pusher = new Pusher(process.env.PUSHER_API_KEY, {
  secret: process.env.PUSHER_SECRET,
  appId: process.env.PUSHER_APP_ID,
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true
});

var my_channel = pusher.subscribe('palacsinta-channel');
my_channel.bind('palacsinta-happened',
  function(data) {
    var random = 'sounds/' + (Math.floor(Math.random() * 4) + 1) + '.mp3';
    var process = player.play(random, { detached: true }, function(err){
      if (err) throw err;
      if (data && data.name) say.speak('Good job ' + data.name + '!');
    });
    
    process.unref();
  }
);

