var audio = document.getElementById('audio')
var audioVoice = document.getElementById('voice')

audioVoice.addEventListener('click', (e)=>{
    let voice = audioVoice.getElementsByClassName('icon-voice')[0]
    let mute = audioVoice.getElementsByClassName('icon-mute')[0]
    // console.log('audio.muted = ' + audio.muted)
    if (voice.style.display === 'inline-block') {
        voice.style.display = 'none'
        mute.style.display = 'inline-block'
        audio.muted = true
    } else {
        voice.style.display = 'inline-block'
        mute.style.display = 'none'
        audio.muted = false
    }
})

// console.log('audio.muted = ' + audio.muted)