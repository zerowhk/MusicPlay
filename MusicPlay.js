(function(global){
    //用来定义音乐播放器的信息
    var __INFO__ = {
        musicName:'MusicPlayer',
        version:'1.0.0',
        author:'whk'
    };
    //用来定义音乐播放器的参数默认值
    var options = {
        audioUrl:'',   //播放器音乐源
        audioImg:'',   //播放器背景图片
        nodeID:'',     //播放器要插入的节点Id
        boxStyle:'',    //播放器风格自定义,包括位置,背景色等
                        //播放器默认模板
        htmls:`
        <audio autoplay>
            <source src="" type="audio/mpeg">
        </audio>
        <a href="javascript:void(0)" style="width:24px;height:24px;display:inline-block;
        background:url(data:image/png;base64,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) transparent no-repeat top left;background-size:
        100% auto;" title="音乐开关"></a>
        <select style="vertical-align:top;">
        </select>`
    };
    var MusicPlayer = function(customOptions){
        //将用户传入的参数与默认参数合并
        var settings = Object.assign({ },options,customOptions);

        //找到音乐播放器要插入的节点
        var parentBox = document.getElementById(settings.nodeID);
      
        if(!parentBox) {
            parentBox = document.body;  //如果没有传入节点ID,则追加到body上
        }
        //创建音乐播放器盒子
        var MusicBox = document.createElement('div');
        MusicBox.id = 'musicBox';
        MusicBox.style = 'opacity:0.5;overflow:hidden;position:absolute;z-index:2147483646;' + settings.boxStyle;
        MusicBox.innerHTML = settings.htmls;

        //将音乐播放器追加到父节点上
        parentBox.appendChild(MusicBox);
        //获取音乐播放器里面的标签
        var MusicButton = MusicBox.querySelector('a');
        var MusicList = MusicBox.querySelector('select');
        var MusicTag = MusicBox.querySelector('audio');
        //播放器背景图片
        if(settings.audioImg){
            MusicButton.style.backgroundImage = "url(" + settings.audioImg + ")";            
        }

         //实现循环播放
        var curIndex = 0 ;  //记录目前播放的是那首歌,默认为0
        var loopPlay = function() {
             var MusicTimer = setInterval(function(){
                  //判断是否播放结束
                if(MusicTag.ended) {  
                    curIndex ++; //切换到下一首
                    if(curIndex == MusicList.length) curIndex = 0;
                     //设置音乐列表为当前歌曲
                    MusicList.options[curIndex].selected = true;
                    //播放下一首
                    MusicTag.src = settings.audioUrl[curIndex].source;
                    MusicTag.play();   
                }
            },10000);
        };

        //配置音乐播放器歌曲列表
        if(!settings.audioUrl) {
            console.log('因没有音乐资源,所以音乐播放器启动失败,请添加audioUrl选项');
            return;
        }
        //判断audioUrl是 String Array Object,如果是object,转换成Array
        if(settings.audioUrl.toString() == '[object Object]') {
            var _tempArr = [];
            _tempArr.push(settings.audioUrl);
            settings.audioUrl = _tempArr; 
        }
        
        if(typeof settings.audioUrl === 'object') {  //有多首歌曲
            //遍历数组,添加音乐列表
            for(var i = 0; i < settings.audioUrl.length; i++){
                var _option = new Option(settings.audioUrl[i].title,settings.audioUrl[i].source);
                MusicList.add(_option);
            }
            //默认播放第一首歌
             MusicTag.src = settings.audioUrl[0].source;
             //设置循环播放
             loopPlay();
        }else {
            //说明就一首歌,是一个字符串
            MusicTag.src = settings.audioUrl;
            //隐藏音乐列表
            MusicList.style.display = 'none';
            //设置循环播放
            MusicTag.loop = true;
        }

       
         //实现播放暂停功能
        var PlayFN = {
            play:function(url){
                if(url) {
                     MusicTag.src = url;
                } 
                MusicTag.play();
                MusicButton.style.backgroundPosition = "0 0";
            },
            stop:function(){
                 MusicTag.pause();
                 MusicButton.style.backgroundPosition = "0 bottom";
            }
        };
        //给音乐播放器按钮添加事件
        
        //判断是PC端,还是移动端
        if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){
            var EventName = 'touchstart';
        }
        else {
             var EventName = 'click';
        }
        
        //播放状态,默认为true
        MusicButton.state = true;
        MusicButton.addEventListener(EventName,function(){
            if(this.state) {   //此时的this是MusicButton
                PlayFN.stop();       
                this.state = false;
            }else {
                PlayFN.play();       
                this.state = true;
            }
        });
        //列表切换歌曲
        MusicList.addEventListener('change',function(){  
            //设置当前播放音乐的索引
            curIndex = this.selectedIndex;
            PlayFN.play(this.options[this.selectedIndex].value);
            MusicButton.state = true;

        })

        //微信自动播放
        if(navigator.userAgent.toLowerCase().match(/micromessenger/i)){ //判断是微信
            document.addEventListener('WeixinJSBridgeReady',function(){
                //获取网络状态欺骗微信
                WeixinJSBridge.invoke('getNetworkType',{}, function(e){   
                    PlayFN.play();
                })   
            },false);
        }
    };
    //将定义好的播放器函数赋值给window对象
    global[__INFO__.musicName] = MusicPlayer;
})(window);

