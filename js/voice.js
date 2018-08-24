var audio = document.getElementById('audio')
var audioVoice = document.getElementById('voice')
var voiceProgress = document.getElementById('voice-progress')
var voiceFill = document.getElementById('voice-fill')
let voice = audioVoice.getElementsByClassName('icon-voice')[0]
let mute = audioVoice.getElementsByClassName('icon-mute')[0]
let dragVoice = document.getElementById('dragVoice')

//拖曳或点击音量
dragVoice.addEventListener('drag', setVoice)
dragVoice.addEventListener('dragend', setVoice)
voiceProgress.addEventListener('click', setVoice)

//展示音量图标呢
audioVoice.addEventListener('click', showVoiceIcon)

//展示音量图标
function showVoiceIcon(e) {
  if (voice.style.display === 'inline-block') {
    setAudioMuted()
    drawVoiceProgress()
  } else {
    setAudioVoice()
    drawVoiceProgress()
  }
}

//设置声音
function setVoice(event) {
  let a = event.clientX
  let left = voiceProgress.offsetLeft
  let right = voiceProgress.offsetLeft + voiceProgress.offsetWidth
  
  //滑动块不超出进度条
  a = a < left ? left : a
  a = a > right ? right : a

  let width = a - left
  let percent = width / voiceProgress.offsetWidth
  audio.volume = percent

  if (audio.volume === 0) {
    setAudioMuted()
  } else {
    setAudioVoice()
  }
  drawVoiceProgress()
}

//设置静音
function setAudioMuted() {
  voice.style.display = 'none'
  mute.style.display = 'inline-block'
  audio.muted = true
}
function setAudioVoice() {
  voice.style.display = 'inline-block'
  mute.style.display = 'none'
  audio.muted = false
}

//绘制声音进度条
function drawVoiceProgress() {
  var voiceFill = document.getElementById('voice-fill')
  let percent = audio.volume * 100
  voiceFill.style.width = audio.muted === true ? '0%' : percent + '%'
}



