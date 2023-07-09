import Player from '@vimeo/player';

const frame = document.querySelector('iframe');
const player = new Player(frame);

player.on('timeupdate', savedTime);

function savedTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}

const savedTimeLS = localStorage.getItem('videoplayer-current-time');
if (savedTimeLS) {
  const savedTimeObj = JSON.parse(savedTimeLS);
  player.setCurrentTime(savedTimeObj).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Invalid time');
        break;
      default:
        console.log('Error setting current time:', error);
        break;
    }
  });
}