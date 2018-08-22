var audio = document.getElementById('audio')
var audioPlay = document.getElementById('play')
var voiceFill = document.getElementById('voice-fill')

audioPlay.addEventListener('click', playAndPause)
audioPlay.addEventListener('click', showPlayIcon)

renderVoiceProgress()

function playAndPause() {
  var state = audio.getAttribute('data-state')
  if (state === 'playing') {
    state = 'paused'
    audio.setAttribute('data-state', state)
    audio.pause()
  } else if (state === 'paused') {
    state = 'playing'
    audio.setAttribute('data-state', state)
    audio.play()
  }
}

function showPlayIcon() {
  let play = audioPlay.getElementsByClassName('icon-play')[0]
  let pause = audioPlay.getElementsByClassName('icon-pause')[0]
  if (play.style.display === 'inline-block') {
    play.style.display = 'none'
    pause.style.display = 'inline-block'
  } else {
    play.style.display = 'inline-block'
    pause.style.display = 'none'
  }
}

function renderVoiceProgress(){
  var voiceFill = document.getElementById('voice-fill')
  let percent = audio.volume*100
  voiceFill.style.width = audio.muted === true ? '0%' : percent + '%'
}
