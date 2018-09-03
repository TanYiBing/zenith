$(document).ready(function(){
    const productsSection = $('.products');
    const zongceSection = $('.zongce');
    const otherSection = $('.other');

    let topCards = $('.topCard span');
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

    // console.log(topCards);
    for (let i = 0; i < topCards.length; i++){
        $(topCards[i]).click(function (tar) {
            // console.log(tar);
            cardSelected(tar.currentTarget);
        })
    }

   $('.shibangAlbum-move').click(function () {
       let pdfName = $(this).attr('id');
       // console.log(pdfName);
       let pdfUrl = `./web/viewer.html?file=${pdfName}.pdf`;
       // console.log(pdfUrl);
       $(location).attr('href',pdfUrl);
   });



});