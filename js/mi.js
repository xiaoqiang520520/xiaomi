window.onload=function(){
        let shoppingcar=document.getElementsByClassName("headrr");
        let hidbox=document.getElementsByClassName("hidbox");
        console.log(shoppingcar[0],hidbox[0]);
        shoppingcar[0].onmouseenter=function () {
            hidbox[0].style.height="100px";
            hidbox[0].style.boxShadow="0 5px 5px 5px rgba(175,175,175,0.5)";



        }
    shoppingcar[0].onmouseleave=function () {
        hidbox[0].style.height="0";
        hidbox[0].style.boxShadow="none";



    }


    //
    let navigation=document.getElementsByClassName("navigation")[0];
        let lis=navigation.getElementsByTagName("li");
        let hidden=document.getElementsByClassName("hidden");
    console.log(lis, hidden);
    for(let i=0;i<lis.length;i++){
            lis[i].onmouseenter=function () {
                hidden[i].style.height="460px";

            }
            lis[i].onmouseleave=function () {
                hidden[i].style.height="0px";
            }
        }




        let applicancer=document.getElementsByClassName("applicance-headr")[0];


    let span=applicancer.getElementsByTagName("span");

    let appliancemiddler=document.getElementsByClassName("appliance-middle-r");

        for(let i=0;i<span.length;i++){
            span[i].onmouseenter=function () {
                for(let j=0;j<span.length;j++){
                    appliancemiddler[j].style.zIndex="5";

                }
            appliancemiddler[i].style.zIndex="10";
        }

    }





//    建立选项卡函数xxk
//     function xxk(n){
//         let applicancern=document.getElementsByClassName("applicance-headr")[n];
//         let spann=applicancern.getElementsByTagName("span")[n];
//
//         let appliancemiddlern=document.getElementsByClassName("appliance-middle-r")[n];
//
//         for(let i=0;i<spann.length;i++){
//             span[i].onmouseenter=function () {
//                 for(let j=0;j<spann.length;j++){
//                     appliancemiddlern[j].style.zIndex="5";
//
//                 }
//                 appliancemiddlern[i].style.zIndex="10";
//             }
//
//         }
//
//     }
//
//         xxk(0);
//         xxk(1);

    // 结束建立选项卡函数

        let switchover=document.getElementsByClassName("switchover")[0];
        let switchoverr=document.getElementsByClassName("switchoverr")[0];
        let bannerimg=document.getElementsByClassName("banner-img");
        let lis1=bannerimg[0].getElementsByTagName("li");
        let roundframes=document.getElementsByClassName("round-frame");

        console.log(switchoverr,switchover,bannerimg,lis1,roundframes);
       let m1=setInterval(move,2000);
        let num=0;
            function move() {
                num++;
                if(num==lis1.length){
                    num=0;
                }

                for(let i=0;i<lis1.length;i++){
                    lis1[i].style.zIndex="5";
                    roundframes[i].style.background="#92897c";

                }
                lis1[num].style.zIndex="10";
                roundframes[num].style.background="#fff";
        }

//        鼠标移入时停止,鼠标离开时图片接着移动
                 for(let i=0;i<lis1.length;i++){
                lis1[i].onmouseenter=function () {
                    clearInterval(m1);

                    }
                     lis1[i].onmouseleave=function () {
                         m1=setInterval(move,2000);

                     }
                }
//       左右箭头
//     let switchover=document.getElementsByClassName("switchover");
             switchoverr.onclick=move;
            switchover.onclick=back;
    function back() {
        num--;
        if(num<0){
            num=lis1.length-1;
        }

        for(let i=0;i<lis1.length;i++){
            lis1[i].style.zIndex="5";
        }
        lis1[num].style.zIndex="10";

    }
    for(let i=0;i<roundframes.length;i++){


            roundframes[i].onclick=function () {

            for(let j=0;j<lis1.length;j++){
                lis1[j].style.zIndex="5";
                roundframes[j].style.background="";
            }
            lis1[i].style.zIndex="10";
            roundframes[i].style.background="#fff";


        }


    }

    let rolls=document.querySelectorAll(".roll");
    let concircles=document.querySelectorAll(".concircle");
    let turnl=document.querySelector(".turn-l");
    let turnr=document.querySelector(".turn-r");
    let flag=true;
    console.log(rolls,concircles,turnl,turnr);
    // let t5=setInterval(mover5 ,1000);
    let now5=next5=0
    function mover5() {
        next5++;

        if(next5==rolls.length){
            next5=0;
        }

        rolls[next5].style.left="296px";
        animate(rolls[now5],{left:"-296"});
        animate(rolls[next5],{left:"0"},function () {
            flag=true;

        });
        concircles[now5].classList.remove("con1");
        concircles[next5].classList.add("con1");

        now5=next5;


    }
    turnr.onclick=function () {
        if(flag=false){
            return;
        }
        if(next5==rolls.length-1){
            return;
        }
        flag=false;
        mover5();
    };

    turnl.onclick=function () {
        if(flag=false){
            return;
        }
        if(next5==0){
            return;

        }
        flag=false;
        moverl5();
    };
    function moverl5() {
        next5--;
        if(next5<0){
            next5=rolls.length-1;
        }
        rolls[next5].style.left="-296px";
        animate(rolls[now5],{left:"296"});
        animate(rolls[next5],{left:"0"},function () {
            flag=true;

        });
        concircles[now5].classList.remove("con1");
        concircles[next5].classList.add("con1");

        now5=next5;

    }

    concircles.forEach(function (v,i) {
        v.onclick=function () {
            if(now5==i){
                return;
            }else if(now5<i){
                rolls[i].style.left="296px";
                animate(rolls[now5],{left:"-296"});
                animate(rolls[i],{left:"0"});
                concircles[now5].classList.remove("con1");
                concircles[i].classList.add("con1");
            }else{
                rolls[i].style.left="-296px";
                animate(rolls[now5],{left:"296"});
                animate(rolls[i],{left:"0"});
                concircles[now5].classList.remove("con1");
                concircles[i].classList.add("con1");
            }
            now5=next5=i;

        }

    })
}