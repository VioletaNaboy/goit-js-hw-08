import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
player.on('timeupdate', function () {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(player.currentTime(), 1000)
  );
});
// const savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime) {
//   player.currentTime(savedTime);
// }
