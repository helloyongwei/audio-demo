// 获取歌曲时间并显示进度
let audioTime = document.getElementById('audioTime')
let currentTime = document.getElementById('currentTime')

let ad = parseInt(audio.duration)
let sec = ad%60
let min = (ad - sec)/60

let minStr = min < 10 ? '0'+min : `${min}`
let secStr = sec < 10 ? '0'+sec : `${sec}`

// 歌曲总时长
audioTime.textContent=minStr+":"+secStr

// 每隔1s更新时间
timer()
let fill = document.getElementById('fill')
function timer() {
    timerId = setInterval(()=>{
        let ct = audio.currentTime
        ct = parseInt(ct)
        currentSec = ct%60
        currentMin = (ct - currentSec)/60
    
        currentMinStr = currentMin < 10 ? '0'+currentMin : `${currentMin}`
        currentSecStr = currentSec < 10 ? '0'+currentSec : `${currentSec}`
        currentTime.textContent=currentMinStr+':'+currentSecStr
    
        let percent = ct/ad
        // let fill = document.getElementById('fill')

        fill.style.width = percent*100 + '%'
    
    }, 1000)
}

let progress = document.getElementById('progress')
progress.addEventListener('click', click)

function click(e){
        window.clearInterval(timerId)
        let a = e.clientX
        let b = progress.offsetLeft
        let width = a-b
        // let fill = document.getElementById('fill')
        let percent = width/progress.offsetWidth
        audio.currentTime = percent*audio.duration
        console.log(audio.currentTime)
        // console.log(percent)
        // fill.style.width = width + '%'
        timer()
}
