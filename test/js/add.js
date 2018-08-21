$(document).ready(function(){
    //画册奇数行加深色背景
    $(".albumCard:Even").addClass("albumEven");


    const companyPromotion = $('.companyPromotion');
    const hardwareStrength = $('.hardwareStrength');
    const industryConference = $('.industryConference');
    const productTopic = $('.productTopic');
    const industrialMill = $('.customerSite');
    const buildingBroke = $('.customerSite');
    const metalMine = $('.customerSite');

    function iconChange() {
        $('.conLeft li img:nth-child(2)').css('display','none');
        $('.conLeft li img:nth-child(1)').css('display','block');
        $('.curLi img:nth-child(1)').css('display','none');
        $('.curLi img:nth-child(2)').css('display','block');
    }

    function changeConLeftHeight() {
        if($('#conLeft')){
            let conRightHeight= $('.mainBox').outerHeight()+$('.conRightTop').outerHeight();
            // console.log(conRightHeight);
            $('#conLeft').height(conRightHeight);
        }
    }


    function liSelected(target) {
        $(target).siblings('li').removeClass('curLi');
        $(target).addClass('curLi');
        iconChange();
        //实现点击li的效果

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
        changeConLeftHeight();
    }


    let lis = $('.conLeft li');
    // console.log(topCards);
    for (let i = 0; i < lis.length-1; i++){
        $(lis[i]).click(function (tar) {
            // console.log(tar);
            liSelected(tar.currentTarget);
        })
    }

    let iconButtons = $('.icon-download');
    // console.log(iconButtons);
    for (var i = 0; i <iconButtons.length; i++) {
        let pdfName = $(iconButtons[i]).prev().text();
        console.log(pdfName);
        let pdfUrl = `http://localhost:63342/test/webport/web/viewer.html?file=1.pdf`;
        $(iconButtons[i]).click(function () {
            $(location).attr('href',pdfUrl);
        });
    }
});

