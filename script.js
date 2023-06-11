const video = document.getElementById('video');
//btn
const playbtn = document.getElementById('play');
const stopbtn = document.getElementById('stop');
//...
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function pausePlayIcon() {
	if (video.paused) {
		playbtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		playbtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

function updateProgress() {
	progress.value = (video.currentTime / video.duration) * 100;
	//console.log(progress.value);

	// Get minutes
	let minutes = Math.floor(video.currentTime / 60);
	if (minutes < 10) {
		/*adds one more zero, concatinates and converts minutes to a 
    string to get two zerros*/
		minutes = '0' + String(minutes);
	}

	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		/*adds one more zero, concatinates and converts seconds to a 
    string to get two zerros*/
		seconds = '0' + String(seconds);
		console.log(seconds);
	}

	timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
	video.currentTime = (progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('play', pausePlayIcon);
video.addEventListener('pause', pausePlayIcon);
playbtn.addEventListener('click', playPause);
stopbtn.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', updateProgress);
//set click range reponse
progress.addEventListener('click', setProgress);
