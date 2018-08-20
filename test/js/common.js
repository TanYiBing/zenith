// Right Bottom PopUp begin 
// document.writeln("<div id=\"footerPopup\"><a href=\"http://www.zenithcrusher.com/news/20150417818.html\" target=\"_blank\"><img src=\"http://static.zenithcrusher.com/d/file/images/head-footer/18th-BUILD-EXPO-Africa.jpg\"></a><span>X</span></div>");
// setTimeout(function(){
// 	$("#footerPopup").animate({"right" : 0}, 500);
// 	$("#footerPopup span").css({"display" : "block"})
// }, 3000);
// $("#footerPopup span").click(function(){
// 	$("#footerPopup").animate({"right" : -301}, 500);
// 	$("#footerPopup span").css({"display" : "none"});
// })  


document.writeln("<a id=\"gotop\"  title=\"Back to Top\"><img src=\"http://static.zenithcrusher.com/d/file/images/head-footer/gotop.png\"></a>");

//shangwutong
var LiveAutoInvite0='您好，来自%IP%的朋友';
var LiveAutoInvite1='来自首页的对话';
var LiveAutoInvite2='<P>您好！欢迎光临！<BR>很高兴为您服务，您可以点击“接受”，开始免费咨询，我们将竭诚为您服务。</P>';
var LrinviteTimeout=3;
document.write('<script language="javascript" src="http://pht.zoosnet.net/JS/LsJS.aspx?siteid=PHT24099142&float=1&lng=cn"></script>');

// baidu tongji
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F8f64bf5923a1e1a8833bb4caa87dfe1f' type='text/javascript'%3E%3C/script%3E"));


if(document.getElementById("servOnline")){
	var oServOnline = document.getElementById("servOnline");
	oServOnline.onclick = function(){
		openZoosUrl('chatwin');
	}
}
    
		
window.onresize = function(){
	if(document.getElementById("conLeft")){
		var conLeftHeight = document.getElementById("conLeft").offsetHeight;
		var conRightHeight = document.getElementById("conRight").offsetHeight;
		if(conLeftHeight > conRightHeight){
			document.getElementById("conLeft").style.height = conLeftHeight + "px";
		}
		else{
			document.getElementById("conLeft").style.height = conRightHeight + "px";
		}
	}		
  }

function setTab(name,num,n){
					for(i=1;i<=n;i++){
					var a = document.getElementById(name+i)
					var b = document.getElementById("proInfo_"+i)
					a.className = i==num? "hover":"none"
					b.style.display = i==num? "block":"none"
					}

				}

$(document).ready(function(){
		$(".imgbox").colorbox({rel:'imgbox'}); // In product's page, this is the effect of clicking product's pic.
	    $("#topRightIco").click(function(){
					$("#topLocation").slideToggle(300);
					if($("#topRightIco img").attr("src")=="http://static.zenithcrusher.com/d/file/images/head-footer/topRightIco.png"){
						$("#topRightIco img").attr("src","http://static.zenithcrusher.com/d/file/images/head-footer/topRightIco1.png")
						}
					else{
						$("#topRightIco img").attr("src","http://static.zenithcrusher.com/d/file/images/head-footer/topRightIco.png")
						}
					})
	   
	    $("#navgation").click(function(){
					$("#menu").slideToggle(500);
					if($("#nav").attr("src")=="http://static.zenithcrusher.com/d/file/images/head-footer/navIco.png"){
						 $("#nav").attr("src","http://static.zenithcrusher.com/d/file/images/head-footer/navIco1.png")
						}
					else{
						$("#nav").attr("src","http://static.zenithcrusher.com/d/file/images/head-footer/navIco.png")
						}
					})

	    //Go to Top
	    $(window).scroll(function(){  
	        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
	        if( scrollt >500 ){  
	            $("#gotop").fadeIn(400); 
	        }else{
	            $("#gotop").stop().fadeOut(400); 
	        }
	    });
	    $("#gotop").click(function(){ 
	        $("html,body").animate({scrollTop:"0px"},200);
	    });

	    // * Product List backgroud-color begin *
	    var oUrl = window.location.href
	    var proList = $("#conLeft").find("div").find("li");
	    var aNum = proList.length;
		var str = []
		for(var i = 0; i < aNum; i++){
			str.push($("#conLeft").find("div").find("a").eq(i).attr("href"))
		}
		function comp(){
		for(var j = 0; j < aNum; j++){
		  if(oUrl == str[j])
		    return j;
		  }
		}
		proList.eq(comp()).addClass("pro_active")
		proList.eq(comp()).parent().parent().addClass('lis_cur')
		proList.eq(comp()).parent().parent().prev().addClass('curLi')

		var parentProLi = $("#conLeft").children('ul').children('li');
		var parentProLiNum = parentProLi.length;
		var parentProLiStr = [];
		for(var i = 0; i < parentProLiNum-1; i++){
			parentProLiStr.push(parentProLi.eq(i).find("a").attr("href"));
		}
		function whichLi(){
			for(var k=0; k<parentProLiNum; k++){
				if(oUrl.indexOf(parentProLiStr[k]) != -1){
					return k;
				}				
			}
		}
		parentProLi.eq(whichLi()).addClass("curLi");
		parentProLi.eq(whichLi()).next("div").addClass("lis_cur");
		// * Product List backgroud-color end *

		// * Current List Menu on right-sidebar in Mining Page begin *
		var m_conRightLi = $("#m_conRight ul li");
		var m_conRightLiNum = m_conRightLi.length; 
		var m_conRightLiStr = [];
		for(var i=0; i<m_conRightLiNum; i++){
			m_conRightLiStr.push(m_conRightLi.eq(i).find("a").attr("href"));
		}
		function m_cmp(){
			for(var i=0; i<m_conRightLiNum; i++){
				if(oUrl.indexOf(m_conRightLiStr[i]) != -1){
					return i;
				}
			}
		}
		m_conRightLi.eq(m_cmp()).addClass("m_curMenu");
		// * Current List Menu on right-sidebar in Mining Page end *


		// set conLeftHeight >= conRightHeight
		if(document.getElementById("conLeft")){
			var conLeftHeight = document.getElementById("conLeft").offsetHeight;
			var conRightHeight = document.getElementById("conRight").offsetHeight;
			if(conLeftHeight > conRightHeight){
				document.getElementById("conLeft").style.height = conLeftHeight + "px";
			}
			else{
				document.getElementById("conLeft").style.height = conRightHeight + "px";
			}
		}
		

		// Page's width < 480px, show the option label.
		var optionList = $("#conLeft").children().children("li");
		var strUrl = [];
		var strText = [];
		for(var i=0; i<optionList.length-1; i++){
			var oOption = document.createElement("option");              
			var valueUrl = optionList.eq(i).find("a").attr("href");
			var valueText = optionList.eq(i).text();
			strUrl.push(valueUrl);
			strText.push(valueText);
			$("#topSelect").append(oOption);
		}
		for(var j=0; j<optionList.length-1; j++){
			$("#topSelect option").eq(j).attr("value",strUrl[j]);
			$("#topSelect option").eq(j).html(strText[j]);
		}

		// Select the language
		var oChangeLan = document.getElementById("changeLan");
		oChangeLan.innerHTML = "<select onchange='location.href=this.options[this.selectedIndex].value'><option value='http://www.zenithcrusher.com'>English</option><option value='http://ru.zenithcrusher.com'>Российская</option><option value='http://es.zenithcrusher.com'>Español</option><option value='http://ar.zenithcrusher.com'>العربية</option><option value='http://fr.zenithcrusher.com'>Français</option><option value='http://pt.zenithcrusher.com'>Português</option><option value='http://vn.zenithcrusher.com'>Tiếng Việt</option><option value='http://www.zenithmining.com' selected='selected'>中文</option></select>";

		var topLocIn = document.getElementById("topLocIn");
		var oTopRight = document.getElementById("topRight");
		topLocIn.innerHTML = oTopRight.innerHTML;
})


function checkForm(){    
			     
              if(document.getElementById("name").value == ""){
                alert("Please Write Your Name!")
                document.getElementById("name").focus();
                return false;
              }
              if(document.getElementById("email").value == ""){
                alert("Please Write Your Email!")
                document.getElementById("email").focus();
                return false;
              }
              else if(document.getElementById("email").value.indexOf("@") < 0 || document.getElementById("email").value.indexOf(".") < 0){
				alert("Please Check Your Email Format!")
                document.getElementById("email").focus();
				return false;
			  }
              if(document.getElementById("country").value == ""){
                alert("Please Write Your Country!")
                document.getElementById("country").focus();
                return false;
              }    
              if(document.getElementById("formMsg").value == ""){
                alert("Please Write Your Detailed Message!")
                document.getElementById("formMsg").focus();
                return false;
              }
              else if(document.getElementById("formMsg").value.length < 5){
              	alert("You Must Write no less than 5 Characters!")
              	document.getElementById("formMsg").focus()
              	return false;
              }
              if(!document.getElementById("construction").checked&&!document.getElementById("mining").checked){
                alert("Please Select Your Application!")
                return false;
              }
                       
            }   
