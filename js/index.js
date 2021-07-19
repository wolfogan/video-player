const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $foreward = document.querySelector("#foreward");
const $backward = document.querySelector("#backward");
const $progress = document.querySelector("#progress");

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click',handlePause);
$backward.addEventListener('click',handleBackward);
$foreward.addEventListener('click',handleForeward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate',handleTimeUpdate);
$progress.addEventListener('input',handleInput);

function handlePlay(){
	console.log("Le diste click a play");
	$video.play();
	$play.hidden = true;
	$pause.hidden = false;
}

function handlePause(){
	$video.pause();
	$play.hidden = false;
	$pause.hidden = true;
}

function handleForeward(){
	console.log($video.currentTime);
	$video.currentTime += 10;
}

function handleBackward(){
	console.log($video.currentTime);
	$video.currentTime -= 10;
}

function handleLoaded(){
	$progress.max = $video.duration;
	console.log('Ha cargado mi video',$video.duration,$progress.max);
}

function handleTimeUpdate(){
	// console.log('Tiempo actual: ', $video.currentTime)
	$progress.value = $video.currentTime;
}

function handleInput(){
	console.log($progress.value);
	$video.currentTime = $progress.value;
}