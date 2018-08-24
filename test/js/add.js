$(document).ready(function(){
    //画册奇数行加深色背景
    $(".album1 .albumCard:Even").addClass("albumEven");
    $(".album2 .albumCard:Even").addClass("albumEven");
    $(".album3 .albumCard:Even").addClass("albumEven");


    const companyPromotion = $('.companyPromotion');
    const hardwareStrength = $('.hardwareStrength');
    const industryConference = $('.industryConference');
    const productTopic = $('.productTopic');
    const industrialMill = $('.industrialMill');
    const buildingBroke = $('.buildingBroke');
    const metalMine = $('.metalMine');

    const album1 = $('.album1');
    const album2 = $('.album2');
    const album3 = $('.album3');

    //图标交互效果
    function iconChange() {
        $('.conLeft li img:nth-child(2)').css('display','none');
        $('.conLeft li img:nth-child(1)').css('display','block');
        $('.curLi img:nth-child(1)').css('display','none');
        $('.curLi img:nth-child(2)').css('display','block');
    }

    //改变左边导航的高度
    function changeConLeftHeight() {
        if($('#conLeft')){
            let conRightHeight= $('.mainBox').outerHeight()+$('.conRightTop').outerHeight();
            // console.log(conRightHeight);
            $('#conLeft').height(conRightHeight);
        }
    }

    function changeVideoView(target) {
        let id = $(target).attr('id');
        companyPromotion.css('display','none');
        hardwareStrength.css('display','none');
        industryConference.css('display','none');
        productTopic.css('display','none');
        industrialMill.css('display','none');
        buildingBroke.css('display','none');
        metalMine.css('display','none');
        let targetClass = '.'+id;
        $(targetClass).css('display','block');
    }

    function changeAlbumView(target) {
        let id = $(target).attr('id');
        album1.css('display','none');
        album2.css('display','none');
        album3.css('display','none');
        let targetClass = '.'+id;
        $(targetClass).css('display','block');
    }


    function liSelected(target) {
        $(target).siblings('li').removeClass('curLi');
        $(target).addClass('curLi');
        iconChange();
        //实现点击li的效果

        changeVideoView(target);
        changeAlbumView(target);
        changeConLeftHeight();
    }


    let lis = $('.conLeft li');
    // console.log(topCards);
    for (let i = 0; i < lis.length-1; i++){
        $(lis[i]).click(function (tar) {
            // console.log(tar);
            liSelected(tar.currentTarget);
        });
    }


    //pdf处理
    let albumCards = $('.albumCard');
    // console.log(iconButtons);
    for (let i = 0; i < albumCards.length; i++) {
        $(albumCards[i]).click(function () {
            let pdfName = $(albumCards[i]).children('a')[0].innerText;
            let pdfUrl = `http://localhost:63342/test/webport/web/viewer.html?file=${pdfName}.pdf`;
            $(location).attr('href',pdfUrl);
            // console.log(pdfName);
        });
    }

});
