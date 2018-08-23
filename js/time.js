let fill = document.getElementById('fill')
let progress = document.getElementById('progress')
let dragTime = fill.nextElementSibling
var audio = document.getElementById('audio')

setAudioTime()
timer()
progress.addEventListener('click', clickProgress)

//拖动
dragTime.addEventListener('drag', clickProgress)
dragTime.addEventListener('dragend', clickProgress)


function setAudioTime() {
  let audioTime = document.getElementById('audioTime')
  renderTime(audioTime, audio.duration)
}


function timer() {
  timerId = setInterval(() => {
    let currentTime = document.getElementById('currentTime')
    renderTime(currentTime, audio.currentTime)
    drawProgress()
  }, 1000)
}

function drawProgress() {
  let percent = parseInt(audio.currentTime) / parseInt(audio.duration)
  fill.style.width = percent * 100 + '%'
}

function renderTime(el, value) {
  let time = parseInt(value)
  let sec = time % 60
  let min = (time - sec) / 60

  let minStr = min < 10 ? '0' + min : `${min}`
  let secStr = sec < 10 ? '0' + sec : `${sec}`

  el.textContent = minStr + ":" + secStr
}

function clickProgress(event) {
  let a = event.clientX
  let b = progress.offsetLeft
  let clickWidth = a - b
  let percent = clickWidth / progress.offsetWidth
  audio.currentTime = percent * audio.duration
  timer()
}



