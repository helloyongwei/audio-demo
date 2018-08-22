
getAudioTime()

// 每隔1s更新时间
timer()
let fill = document.getElementById('fill')

let progress = document.getElementById('progress')
progress.addEventListener('click', clickProgress)

function getAudioTime() {
    // 获取歌曲时间并显示进度
    let audioTime = document.getElementById('audioTime')

    xx(audioTime, audio.duration)
}


function xx(el, value) {
    let time = parseInt(value)
    let sec = time%60
    let min = (time - sec)/60

    let minStr = min < 10 ? '0'+min : `${min}`
    let secStr = sec < 10 ? '0'+sec : `${sec}`

    // 歌曲总时长
    el.textContent=minStr+":"+secStr
}

function timer() {
    timerId = setInterval(()=>{
        let currentTime = document.getElementById('currentTime')
        xx(currentTime, audio.currentTime)
    
        drawProgress()
    
    }, 1000)
}

function drawProgress() {
    let percent = parseInt(audio.currentTime)/parseInt(audio.duration)
    fill.style.width = percent*100 + '%'
}

function clickProgress(event){
        // window.clearInterval(timerId)
        let a = event.clientX
        let b = progress.offsetLeft
        let width = a-b

        let percent = width/progress.offsetWidth
        audio.currentTime = percent*audio.duration
        console.log(audio.currentTime)

        timer()
}
