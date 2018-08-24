$(document).ready(function(){
    function cardSelected(target) {
        $(target).siblings('span').removeClass('selected');
        $(target).addClass('selected');
        let id = $(target).attr('id');
        productsSection.css('display','none');
        zongceSection.css('display','none');
        otherSection.css('display','none');
        let targetClass = '.'+id;
        $(targetClass).css('display','block');
    }
    let topCards = $('.topCard span');
    const productsSection = $('.products');
    const zongceSection = $('.zongce');
    const otherSection = $('.other');
    // console.log(topCards);
    for (let i = 0; i < topCards.length; i++){
        $(topCards[i]).click(function (tar) {
            // console.log(tar);
            cardSelected(tar.currentTarget);
        })
    }

    let albums = $('.album');
    // console.log(iconButtons);
    for (var i = 0; i <albums.length; i++) {
        let pdfName = $(albums[i]).prev().text();
        console.log(pdfName);
        let pdfUrl = `http://localhost:63342/test/webport/web/viewer.html?file=1.pdf`;
        $(albums[i]).click(function () {
            $(location).attr('href',pdfUrl);
        });
    }
});