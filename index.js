require("dotenv").config();
const player = require("play-sound")((opts = {}));
const Pusher = require("pusher-client");
const say = require("say");

const pusher = new Pusher(process.env.PUSHER_API_KEY, {
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true
});

const channel = pusher.subscribe("palacsinta-channel");
channel.bind("palacsinta-happened", data => {
  const random = "sounds/" + (Math.floor(Math.random() * 4) + 1) + ".mp3";
  const process = player.play(random, { detached: true }, err => {
    if (err) throw err;
    if (data && data.name) say.speak("Good job " + data.name + "!");
  });

  process.unref();
});
