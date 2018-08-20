$(document).ready(function(){
    let videos = $('.vedioCard');
    console.log(videos);
    for (let i = 0; i < videos.length; i++){
        $(videos[i]).click(function (target) {
            $(location).attr('href','http://localhost:63342/test/webport/最终版/video.html');
            let video = $('.my-video');
            let source = $('#videoMP4');
            video.pause();
            source.setAttribute('src', '//vjs.zencdn.net/v/oceans.mp4');
            video.load();
            video.play();
        })
    }
});

