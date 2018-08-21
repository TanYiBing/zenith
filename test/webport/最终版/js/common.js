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
	$('.titlebar-select').change(function(){ 
	
	var p=$(this).children('option:selected').val(); 
	window.location.href=p; 
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
		