const player = document.getElementById('player');
const playerBtn = document.getElementById('videoBtn')

function PlayPause() {
	if (player.paused) {
		player.play();
		playerBtn.src = './img/pause.svg';
	} else {
		player.pause();
		playerBtn.src = './img/play.svg';
	}
}