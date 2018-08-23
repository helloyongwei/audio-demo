# 使用说明 
由于github不适合媒体文件, 所以我并没有将音频文件传上来. 

音频文件的位置在`audios/`目录中

第一步:
下载这个库到本地:
```
git clone git@github.com:helloyongwei/audio-demo.git
```

第二步:
从你的本机上找一个音频文件, 放入audio-demo/audios目录中.

并且修改index.html中的audio标签, 使audio标签的src属性指向你的音频文件

例如: 我将hello.mp3文件放入audio-demo/audios目录中, 则audio像下面这样:
```
<audio src="./audios/hello.mp3"></audio>
```

第三步:
进入audio-demo根目录, 执行http-server -c-1命令, 即:
```
cd audio-demo
http-server -c-1
```
根据提示打开浏览器, 就可以了看到结果了.
