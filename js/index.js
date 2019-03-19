window.onload=function(){
  //建立购物车下面的隐藏出现部分
  let headrr=document.querySelector(".headrr");
  console.log(headrr);

  let hidbox=document.querySelector(".hidbox");

  headrr.onmouseenter=function(){
      animate(hidbox,{height:100,})
      hidbox.style.boxShadow="0 5px 5px 5px rgba(175,175,175,0.5)";

  }

  headrr.onmouseleave=function(){
    animate(hidbox,{height:0})
    hidbox.style.boxShadow="none";
}
  

  //结束建立购物车下面的隐藏出现部分

//建立搜索框所在的变化
  let sou=document.querySelector(".search .sou")
  let sousuobot1=document.querySelector(".sousuo-bot1");
  let iconsousuo=document.querySelector(".icon-sousuo");
  let search=document.querySelector(".search");

  console.log(sou,sousuobot1,iconsousuo,search);
  let flag1=true;
  sou.onfocus=function(){
    sousuobot1.style.height="300px";
    sousuobot1.style.border=" 1px solid #ff6700";
    sou.style.border=" 1px solid #ff6700";
    sou.style.borderBottom="none";
    iconsousuo.style.border=" 1px solid #ff6700";
    iconsousuo.style.borderLeft="none";
    flag1=false;
    
  }
  
  sou.onblur=function(){
    sousuobot1.style.height="0px";
    sousuobot1.style.border="none";
    sou.style.border="1px solid #e0e0e0";
    iconsousuo.style.border="none";
    iconsousuo.style.border="1px solid #e0e0e0";
    iconsousuo.style.borderLeft="none";
    flag1=true;
  
  }

  iconsousuo.onmouseenter=function(){
    sou.style.border=" 1px solid #ff6700";
    iconsousuo.style.border="1px solid #ff6700";
  }
  iconsousuo.onmouseleave=function(){
   
    
    if(flag1){
       sou.style.border="1px solid #e0e0e0";
    iconsousuo.style.border="1px solid #e0e0e0";
    iconsousuo.style.borderLeft="none";
    }
   
  }
  search.onmouseenter=function(){
    if(flag1){
      sou.style.border="1px solid #333";
      iconsousuo.style.border="1px solid #333";
      iconsousuo.style.borderLeft="none";
    }
   
  }
  search.onmouseleave=function(){
    
    if(flag1){
      sou.style.border="1px solid #e0e0e0";
      iconsousuo.style.border="1px solid #e0e0e0";
      iconsousuo.style.borderLeft="none";
    }

    }
    
  
  
//结束建立搜索框所在的变化







    // 建立小米图标右边所在的选项卡
    let rectangleml=document.querySelector(".rectanglem-l");
    console.log(rectangleml);

  let rectanglemxxk= document.querySelector(".rectanglem-xxk"); 

  console.log(rectanglemxxk);

    let rectanglemllis=document.querySelectorAll(".rectanglem-l li");

    console.log(rectanglemllis);

    let rectanglemxxklis=document.querySelectorAll(".rectanglem-xxk li"); 

    console.log(rectanglemxxklis);
    
    rectanglemllis.forEach(function(v,i){
        v.onmouseenter=function(){
            animate(rectanglemxxklis[i]  ,{height:229},0)
        }

        v.onmouseleave=function(){
            animate(rectanglemxxklis[i]  ,{height:0},0)
        }
    })

  rectangleml.onmouseenter=function(){
    animate(rectanglemxxk,{height:229},500)
    rectangleml.borderTop="1px solid #e0e0e0;"
  }

  rectangleml.onmouseleave=function(){
    animate(rectanglemxxk,{height:0},500);
    rectangleml.borderTop="none;"
  }
  
    
    






    // 结束建立小米图标右边所在的选项卡


// 建立轮播部分
let bannerimg=document.querySelector(".banner-img");

console.log(bannerimg);

let bannerimglis=document.querySelectorAll(".banner-img li");

console.log(bannerimglis);

let switchoverr=document.querySelector(".switchoverr");

console.log(switchoverr);

let switchover=document.querySelector(".switchover")

console.log(switchover);

let roundframes=document.querySelectorAll(".round-frame")

console.log(roundframes);


switchoverr.onclick=function(){
  run();
}

switchover.onclick=function(){
  index--;
  if(index<0){
    index=4;
  }

  bannerimglis.forEach(function(v,i){
    v.classList.remove("active1");
  })

  bannerimglis[index].classList.add("active1")
  roundframes.forEach(function(m,n)
  {
    m.classList.remove("hot1");
  })
  roundframes[index].classList.add("hot1");
}


let index=0

function run(){
  index+=1;
  if(index>4){
    index=0;
  }
  
  bannerimglis.forEach(function(v,i){
    v.classList.remove("active1");
  })

  bannerimglis[index].classList.add("active1")

  roundframes.forEach(function(m,n)
  {
    m.classList.remove("hot1");
  })
  roundframes[index].classList.add("hot1");


}


let t=setInterval(run,1000);
bannerimg.onmouseenter=function(){
  clearInterval(t);
}

bannerimg.onmouseleave=function(){
  t=setInterval(run,2000);
}

// roundframes.forEach(function(v,i){
//   v.onclick=function(){
//     bannerimglis.forEach(function(v,i){
//       v.classList.remove("active1");
       
//     })
//     bannerimglis[i].classList.add("active1")
//   }
//   index=i;
 
// })



// 结束建立轮播部分





}