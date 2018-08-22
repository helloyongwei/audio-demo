var audio = document.getElementById('audio')
var audioVoice = document.getElementById('voice')
var voiceProgress = document.getElementById('voice-progress')
var voiceFill = document.getElementById('voice-fill')

audioVoice.addEventListener('click', (e)=>{
    let voice = audioVoice.getElementsByClassName('icon-voice')[0]
    let mute = audioVoice.getElementsByClassName('icon-mute')[0]
    // console.log('audio.muted = ' + audio.muted)
    if (voice.style.display === 'inline-block') {
        voice.style.display = 'none'
        mute.style.display = 'inline-block'
        audio.muted = true
        renderVoiceProgress()
    } else {
        voice.style.display = 'inline-block'
        mute.style.display = 'none'
        audio.muted = false
        renderVoiceProgress()
    }
})

//声音点击

voiceProgress.addEventListener('click', setVoice)

function setVoice(event) {
  let a = event.clientX
  let b = voiceProgress.offsetLeft
  let width = a - b 
  let percent = width/voiceProgress.offsetWidth
  audio.volume = percent
  renderVoiceProgress()
  if (audio.volume === 0)  {
    audio.muted = true
  } else {
    audio.muted = false
  }
  console.log(percent)
  console.log(width)
}

function renderVoiceProgress(){
  var voiceFill = document.getElementById('voice-fill')
  let percent = audio.volume*100
  voiceFill.style.width = audio.muted === true ? '0%' : percent + '%'
}