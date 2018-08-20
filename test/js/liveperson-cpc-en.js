document.write('<div class="fr" style="float:right;z-index:2000;position:fixed;right:30px;top:100px; border:none;display:block;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+200));">'); 
document.write('<div id="lpButDivID-1320914009318"></div>');
document.write('<script type="text/javascript" charset="UTF-8" src="https://server.iad.liveperson.net/hc/33878321/?cmd=mTagRepstate&site=33878321&buttonID=1&divID=lpButDivID-1320914009318&bt=1&c=1"></script>'); 
document.write('<script language=\'javascript\'> var lpMTagConfig = {\'lpServer\' : "server.iad.liveperson.net",\'lpNumber\' : "33878321",\'lpProtocol\' : (document.location.toString().indexOf(\'https:\')==0) ? \'https\' : \'http\'}; function lpAddMonitorTag(src){if(typeof(src)==\'undefined\'||typeof(src)==\'object\'){src=lpMTagConfig.lpMTagSrc?lpMTagConfig.lpMTagSrc:\'/hcp/html/mTag.js\';}if(src.indexOf(\'http\')!=0){src=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+src+\'?site=\'+lpMTagConfig.lpNumber;}else{if(src.indexOf(\'site=\')<0){if(src.indexOf(\'?\')<0)src=src+\'?\';else src=src+\'&\';src=src+\'site=\'+lpMTagConfig.lpNumber;}};var s=document.createElement(\'script\');s.setAttribute(\'type\',\'text/javascript\');s.setAttribute(\'charset\',\'iso-8859-1\');s.setAttribute(\'src\',src);document.getElementsByTagName(\'head\').item(0).appendChild(s);} if (window.attachEvent) window.attachEvent(\'onload\',lpAddMonitorTag); else window.addEventListener("load",lpAddMonitorTag,false);</script>'); 
document.write('</div>'); 
function openZoosUrl(){
	window.open('https://server.iad.liveperson.net/hc/33878321/?cmd=file&file=visitorWantsToChat&site=33878321','','height=500,width=600,scrollbars=no,status=no');
}

function changeurl(){
	urls = document.getElementsByTagName("a");
	for( var n=0;n<urls.length;n++){
		if(urls[n].href.toLowerCase() == "http://dx.zoosnet.net/lrserver/lr/chatpre.aspx?id=lzs47357147&lng=en"){
		urls[n].href = "javascript:void(0);";
		urls[n].onclick = function(){openZoosUrl();}
		}
	}
}

function hidename(classnam,tagnam){
	tags = document.getElementsByTagName(tagnam);
	for(var i=0;i<tags.length;i++){
		if(tags[i].className == classnam){
			tags[i].style.display="none";
		}
	}
}

function page_load(){
	changeurl();
	hidename("lpPoweredBy","tr");
	hidename("lpEmtStarRating","tr");
}

window.onload = page_load;

document.write('<script type="text/javascript" charset="utf-8" src="http://js.unisbm.com/"></script>');