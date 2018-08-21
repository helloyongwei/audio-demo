// 获取歌曲信息: 歌手, 歌名(使用第三方库)
new jsmediatags.Reader(audio.currentSrc).read( {
	onSuccess: function(data){
        let songName = document.getElementById('songName')
        let singer = document.getElementById('singer')
        songName.textContent = data.tags.title
        singer.textContent = data.tags.artist
    
        console.log(data)
	},
	onError: function(err){
		console.log(err)
	}
})