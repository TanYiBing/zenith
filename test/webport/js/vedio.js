
$(document).ready(function(){
    // let videos = $('.vedioCard');
    // for (let i = 0; i < videos.length; i++){
    //     $(videos[i]).click(function () {
    //         $(location).attr('href','http://localhost:63342/test/webport/最终版/video.html');
    //         let video = $('.my-video');
    //         let source = $('#videoMP4');
    //         video.pause();
    //         source.setAttribute('src', '//vjs.zencdn.net/v/oceans.mp4');
    //         video.load();
    //         video.play();
    //     });
    // }

    //点击不同的标签展示不同的视频

    const companyPromotion = $('#companyPromotion');
    const hardwareStrength = $('#hardwareStrength');
    const industryConference = $('#industryConference');
    const productTopic = $('#productTopic');
    const industrialMill = $('#industrialMill');
    const buildingBroke = $('#buildingBroke');
    const metalMine = $('#metalMine');


    $('.titlebar-select').change(function(){

        let targetSection = '#'+$(this).children('option:selected').val();
        console.log(targetSection);
        companyPromotion.css('display','none');
        hardwareStrength.css('display','none');
        industryConference.css('display','none');
        productTopic.css('display','none');
        industrialMill.css('display','none');
        buildingBroke.css('display','none');
        metalMine.css('display','none');

        $(targetSection).css('display','block');
    });

    $('.more').click(function () {
        $(location).attr('href','./video2.html');
    })
});

