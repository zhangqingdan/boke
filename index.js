/*
window.onload=function () {
	// alert(Base.getId('box'));
	Base.getId('box').css('color','red')
}

window.onload=function () {
	var base=new Base();
	base.getId('box').css('color','red').css('backgroundColor','blue')
}


window.onload=function () {
    

    // alert($().getTagName('p').elements.length)
    // $().getTagName('p').css('color','pink').html('标题').click(function(){
    //  alert('aa')
    // }).css('backgroundColor','green')

    // $().getId('box').css('color','red').css('backgroundColor','pink')
    // $().getId('box').html('pox');
    // alert($().getId('box').css('color'));
    // $().getId('box').css('color','green');
    // alert($().getId('box').css('background'));
    // alert($().getId('box').css('fontSize'));
    // alert($().getClass('para').elements.length);
    // $().getClass('para').css('color','red');
    // alert($().getClass('para').getElement(1).elements.length);

    // $().getClass('para','aaa').css('color','red');
    $().getId('box').addClass('a').addClass('b').addClass('a')
    $().getId('box').removeClass('a')
}
*/

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



window.onload=function () {

//  移动客户端下拉菜单
    $().getId('header_mobil').hover(function(){
         $().getId('header_mobil_ul').show()
     },function(){
        $().getId('header_mobil_ul').hide()
     })

 //  更多下拉菜单    
    $().getId('header_nav_ul_a').hover(function(){
         $().getId('header_nav_ul').show()
     },function(){
        $().getId('header_nav_ul').hide()
     })

//  登录下拉菜单
    $().getId('load').hover(function(){
         $().getId('logo_load_l').show()
     },function(){
        $().getId('logo_load_l').hide()
     })


   
// 手动图片轮播器 圆点  

    var count=document.getElementById('main_article_image_ul').children;
    var count2=document.getElementById('main_article_image_buttom_ul').children;
    var count3=document.getElementById('main_article_image_div05').getElementsByTagName('span');
    // display设置图片显示
    // for(var i=1;i<count.length;i++){
    //     count[i].style.display='none';  
    // }
    // 透明度设置图片显示    
    for(var i=0;i<count.length;i++){
        count[i].style.opacity=0;
        count[i].style.filter='alpha(opacity:'+0+')';
    }
    // display设置图片显示
    // count[0].style.display='block'; 
    // 透明度设置图片显示    
    count[0].style.opacity=1;
    count[0].style.filter='alpha(opacity:'+100+')';
    count2[0].style.color='orange';
    document.getElementById('main_article_image_div02').innerHTML=count3[0].innerHTML;  
    var btns = $().getClass('buttom');
    for ( var i = 0; i < btns.elements.length; i++) {
        btns.elements[i].index = i;
    }
    btns.hover(function(){
        clearInterval(banner_timer);
        if(this.style.color!='rgb(211,149,87)'){
            var num=this.index;
            // display设置图片显示
            // for(var i=0;i<count.length;i++){
            //     count[i].style.display='none';
            // }
            // count[num].style.display='block';
            // 透明度设置图片显示        
            for(var i=0;i<count.length;i++){
                count[i].style.opacity=0;
                count[i].style.filter='alpha(opacity:'+0+')';
            }
            count[num].style.opacity=1;
            count[num].style.filter='alpha(opacity:'+100+')';  
            for(var i=0;i<count2.length;i++){
                count2[i].style.color='#d39557';
            }
            count2[num].style.color='orange';
            for(var i=0;i<count3.length;i++){
                document.getElementById('main_article_image_div02').innerHTML=count3[i].innerHTML;
            }
            document.getElementById('main_article_image_div02').innerHTML=count3[num].innerHTML;    
        }
    }, function(){
        clearInterval(banner_timer);        
        var banner_index=this.index+1;
        banner_timer=setInterval(function(){
        if(banner_index>=count.length) banner_index=0;
        // display设置图片显示
        // for(var i=1;i<count.length;i++){
        //     count[i].style.display='none';
        // }
        // count[banner_index].style.display='block';
        // 透明度设置图片显示        
        for(var i=0;i<count.length;i++){
            count[i].style.opacity=0;
            count[i].style.filter='alpha(opacity:'+0+')';
        }
        count[banner_index].style.opacity=1;
        count[banner_index].style.filter='alpha(opacity:'+100+')';
        for(var i=0;i<count2.length;i++){
            count2[i].style.color='#d39557';
        }
        count2[banner_index].style.color='orange';
        document.getElementById('main_article_image_div02').innerHTML=count3[banner_index].innerHTML;        
        banner_index++;
    },1000)

    });




// 自动图片轮播器
    var banner_index=1
    var banner_timer=setInterval(function(){
        if(banner_index>=count.length) banner_index=0;
        // display设置图片显示
        // for(var i=1;i<count.length;i++){
        //     count[i].style.display='none';
        // }
        // count[banner_index].style.display='block';
        // 透明度设置图片显示        
        for(var i=0;i<count.length;i++){
            count[i].style.opacity=0;
            count[i].style.filter='alpha(opacity:'+0+')';
        }
        count[banner_index].style.opacity=1;
        count[banner_index].style.filter='alpha(opacity:'+100+')';
        for(var i=0;i<count2.length;i++){
            count2[i].style.color='#d39557';
        }
        count2[banner_index].style.color='orange';
        document.getElementById('main_article_image_div02').innerHTML=count3[banner_index].innerHTML;        
        banner_index++;
    },1000)




   
    

}



























