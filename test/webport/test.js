$(document).ready(function(){
    //获得所有的按钮
    let iconButtons = $('.icon-download');
    // console.log(iconButtons);
    for (var i = 0; i <iconButtons.length; i++) {
        let pdfName = $(iconButtons[i]).prev().text();
        console.log(pdfName);
        let pdfUrl = `http://localhost:63342/test/webport/web/viewer.html?file=${pdfName}.pdf`;
        $(iconButtons[i]).click(function () {
            $(location).attr('href',pdfUrl);
        });
    }
});