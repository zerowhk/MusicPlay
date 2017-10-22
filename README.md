 # MusicPlay

 ### 一款极简的js音乐播放插件，适配PC端和微信端

  它要怎么使用?      

    1.单个音乐资源
    MusicPlayer({      
      audioUrl:'music/李易峰 - 剑伤.mp3'  //这种不显示播放列表    
    })    
    或者         
    MusicPlayer({              
      audioUrl:{               
        title:'李易峰 - 剑伤',source:'music/李易峰 - 剑伤.mp3' //这种显示播放列表             
      }            
    })              
    2.多个音乐资源             
    MusicPlayer({              
      audioUrl:[{        
        title:'李易峰 - 剑伤',source:'music/李易峰 - 剑伤.mp3'         
      },{
        title:'潘广益 - 纪念的歌',source:'music/潘广益 - 纪念的歌.mp3'          
      }]                   
    })                             
    3.更改播放器的位置              
    MusicPlayer({                 
      audioUrl:'music/李易峰 - 剑伤.mp3',             
      boxStyle:'left:10px;top:10px;'             
    })
    4.更换播放器图片             
    MusicPlayer({                      
      audioImg:'img/music.png', //需要提供一个精灵图(两个24 X 24的小图标,竖排显示,没有间距)            
      audioUrl:'music/李易峰 - 剑伤.mp3'               
    })                 
    5.指定要插入的父节点,如果不指定会直接插入到body中               
    MusicPlayer({               
      nodeID:'id',                   
      audioUrl:'music/李易峰 - 剑伤.mp3'                
    })                
    6.自定义播放器模板          
    MusicPlayer({             
      htmls:'<div>....</div>',            
      audioUrl:'music/李易峰 - 剑伤.mp3'                           
    })              

  
