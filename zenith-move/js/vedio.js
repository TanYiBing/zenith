$(function(){
    $(".index-slide").css('display','block');
    $(".swiper-container").swiper({
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    $( ".menu-icon" ).on( "click", function() {

        $( ".menu-nav").stop(true).slideToggle();

    });

});

$(document).ready(function(){
    $(".mapIco").mouseover(function(){
        $(this).css("background","url(/images/contact/mapicon1.png)");
        var p=$(this).parents().next(".info").text();
        $.toast(p, "text");
        $(".mapIco").mouseout(function(){
            $(this).css("background","url(/images/contact/mapicon.png)");

        });
    });
});
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
        $(location).attr('href','./index_back.html');
    })
});

$(function(){

    var i = 1; //设置当前页数

    $('#loadmore').click(function(){

        $.ajax({
            url : '/e/action/getMore.php',
            type:'POST',
            data:{"next":i,'table':'news','action':'getmorenews','limit':15,'small_length':3000},
            dataType : 'html',
            beforeSend:function(){
                $("#loadmore").show().html('Get More...');
                $('#loadmore').attr('disabled','disabled');
            },
            success : function(data){
                if(data){
                    $(".news-list").append(data);
                    $("#loadmore").removeAttr('disabled');
                    $("#loadmore").html('More');
                    i++;
                }else{
                    $("#loadmore").show().html("No More News");
                    $('#loadmore').attr('disabled','disabled');
                    return false;
                }
            }
        });
    });
});

