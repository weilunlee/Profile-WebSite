// 語言選項
var lanBox=document.getElementById("languageBox");
var lanUS=document.getElementById("lanUS");
var lanTw=document.getElementById('lanTaiwan');
var defLan=document.getElementById("defultLan");
var currentLan;

// var body=document.getElementsByClassName("body");
// intro 動畫用
var hi=document.getElementById("hi");
var wei=document.getElementById("Wei");
var ps=document.getElementById("ps");
var ani=document.getElementById("ani");
var problemWhole=document.getElementById("problemWhole");
var click=document.getElementById("click");
var i=0;
var counter=0;

var MenuBTNContainer=document.getElementById("MenuBTNContainer");
var header=document.getElementById("header");

// 按鈕列
var resumeBtn=document.getElementById("ResumeBtn");
var AbilityBtn=document.getElementById("AbilityBtn");
var ExpBtn=document.getElementById("ExpBtn");
var PortBtn=document.getElementById("PortBtn");
var res=document.getElementById("esume");
var abi=document.getElementById("bility");
var exp=document.getElementById("xperience");
var por=document.getElementById("ortfolio");
var fontLarge=document.getElementsByClassName("fontLarge");

// 正文用
// var Main=document.getElementById("MainContainer");
var resumeContainer=document.getElementById("resumeContainer");
var abilityContainer=document.getElementById("abilityContainer");
var expContainer=document.getElementById("expContainer");
var porContainer=document.getElementById("porContainer");

hi.style.display="none";
wei.style.display="none";
ps.style.display="none";
ani.style.display="none";
problemWhole.style.display="none"
var still=document.getElementById("still");

function start(){
    // -------Language defualt set-----------------------------------------------------
    console.log(defLan);
    if(defLan.innerHTML=="TW"){
        console.log("TW");
        lanUS.style.display="none";
        currentLan=lanTw;
    }else if(defLan.innerHTML=="US"){
        console.log("US");
        lanTw.style.display="none";
        currentLan=lanUS;
    }


    lanBox.addEventListener("mouseenter",()=>{
        lanBox.style.backgroundColor="rgb(80, 80, 80)";
        lanTw.style.display="flex";
        lanUS.style.display="flex";
    });
    console.log(currentLan);
    lanBox.addEventListener("mouseleave", ()=>{
        lanBox.style.backgroundColor="rgb(233, 233, 233)";
        lanTw.style.display="none";
        lanUS.style.display="none";
        currentLan.style.display="flex";        
    });
    
    
    // -------文字動畫-------------------------------------------------------------
    setTimeout(function(){
        window.scrollTo(0,0);
        hi.style.display="block";
        setTimeout(function(){
            show(wei,"block")
            setTimeout(function(){
                show(ps,"block")
                setTimeout(function(){
                    show(ani,"flex");
                    show(problemWhole, "inline-block");
                    setTimeout(function(){
                        show(click, "flex")
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);

    function show(div, dis){
        div.style.display=dis;
    }
}


problemWhole.addEventListener("click", function(){
    counter+=1;
    console.log(counter);

    // var M=Math.floor(Math.random() * (10 - 2 ) + 2); //The maximum is inclusive and the minimum is inclusive
    // console.log(M);
    var problemSperateWords= this.childNodes;
    // console.log(problemSperateWords);
    if(counter==1){
        console.log("rot");
        click.innerHTML='<img src="arrow.png" style="width: 40px;height: 40px;"> Click Again !';
        for(i=0;i<problemSperateWords.length;i++){    
            problemSperateWords[i].style.display="inline-block";
            // problemSperateWords[i].style.transform = "rotate(7deg)";
            problemSperateWords[i].style.transform = `rotate(${Math.floor(Math.random() * (40-(-40))+(-40))}deg)`;
        }
    }else if(counter==2){
        click.innerHTML='<img src="arrow.png" style="width: 40px;height: 40px;"> One More Time !';
        console.log("rot");
        for(i=0;i<problemSperateWords.length;i++){    
            problemSperateWords[i].style.transform = `rotate(${Math.floor(Math.random() * (90-(-90))+(-90))}deg)`;
        }
    }else if(counter==3){        
        console.log(counter);

        // ------ 開始進入畫面 ----------------------------------------------------------------------------------------------------------
        problemWhole.classList.toggle("shake");
        problemWhole.addEventListener("animationend", function(){
            // 噴射字體~~~~~
            
            for(i=0;i<problemSperateWords.length;i++){    
                // problemSperateWords[i].classList.toggle("droppingEffect");
                problemSperateWords[i].classList.toggle("splash");
                problemSperateWords[i].style.postion="relative";
                //設子span block 讓其轉動 
                problemSperateWords[i].childNodes[0].style.display="inline-block";
                problemSperateWords[i].childNodes[0].style.transform=`rotate(${Math.floor(Math.random() * (180-(-180))+(-180))}deg)`;
                problemSperateWords[i].style.transform = `translate(${Math.floor(Math.random() * (2000-(-1000))+(-1000))}%, ${Math.floor(Math.random() * (1000-(-1000))+(-1000))}%)`;
                problemSperateWords[i].addEventListener("mouseenter", function(){
                    this.classList.add("droppingEffect");
                });
                // problemSperateWords[i].addEventListener("mouseenter", function(){
                //     this.style.transform=`translate(${Math.floor(Math.random() * (100-(-100))+(-100))}%, ${Math.floor(Math.random() * (100-(-100))+(-100))}%)`
                // });
                // problemSperateWords[i].style.transform= `translate(${Math.floor(Math.random() * (2000-(-1000))+(-1000))}%, ${Math.floor(Math.random() * (1000-(-1000))+(-1000))}%)`;
            }




            // ------ header show  ----------------------------------------------------------------------------------------------------------
            click.style.display="none";
            still.style.display="block";
            header.style.left="0%";
            hi.style.display="none";
            ps.style.display="none";
            wei.style.display="none";
            ani.style.display="none";
            // problemWhole.remove();
            for(i=0;i<problemSperateWords.length;i++){    
                problemSperateWords[i].style.color="rgba(0,0,0,256)";
            }
            // ------ 拉出選單  ----------------------------------------------------------------------------------------------------------
            MenuBTNContainer.style.left="0%";
        });
            
    }

});

//===============================================================================================
//===============================================================================================
//===============================================================================================
// MenuBTNContainer.style.left="0%";       /////隱藏這裡跟body
//===============================================================================================
//===============================================================================================
//===============================================================================================



// ------ 正文用!!!  ----------------------------------------------------------------------------------------------------------
resumeBtn.addEventListener("click", function(){
    // resumeContainer.style.display="block";
    frameChange(resumeContainer);
    resumeContainer.addEventListener("transitionstart", function(){
        for(i=0; i<fontLarge.length; i++){
            fontLarge[i].style.color="white";
        }
    });
});
// resumeContainer.addEventListener("transitionend", function(){
//     // resumeContainer.style.borderBottom="none";
//     // resumeContainer.style.height="200%";
// });


resumeBtn.addEventListener("mouseenter", function(){                    //REs顯現
    res.style.transition="none";      
    res.style.opacity="100";
    res.style.color="black";            
});
resumeBtn.addEventListener("mouseleave", function(){                    //Res消失
    res.style.transition="all 3s";      
    res.style.color="white";            
    // res.style.opacity="0";
});




AbilityBtn.addEventListener("click", function(){
    frameChange(abilityContainer);
    resumeContainer.addEventListener("transitionstart", function(){
        for(i=0; i<fontLarge.length; i++){
            fontLarge[i].style.color="black";
        }
    });
});
AbilityBtn.addEventListener("mouseenter", function(){                   //abi出
    abi.style.transition="none";
    abi.style.opacity="100";
    abi.style.color="black";
});
AbilityBtn.addEventListener("mouseleave", function(){                   //abi消失
    abi.style.transition="all 3s";      
    // abi.style.opacity="0";
    abi.style.color="white";
});




ExpBtn.addEventListener("click", function(){
    frameChange(expContainer);
    resumeContainer.addEventListener("transitionstart", function(){
        for(i=0; i<fontLarge.length; i++){
            fontLarge[i].style.color="black";
        }
    });
});
ExpBtn.addEventListener("mouseenter", function(){
    exp.style.transition="none";
    exp.style.color="black";
    exp.style.opacity="100";
});

ExpBtn.addEventListener("mouseleave", function(){
    exp.style.transition="all 3s";
    exp.style.color="white";
    // exp.style.opacity="0";
});



PortBtn.addEventListener("click", function(){
    frameChange(porContainer);
    resumeContainer.addEventListener("transitionstart", function(){
        for(i=0; i<fontLarge.length; i++){
            fontLarge[i].style.color="black";
        }
    });
});
PortBtn.addEventListener("mouseenter", function(){
    por.style.transition="none";    
    por.style.color="black";
    por.style.opacity="100";
});
PortBtn.addEventListener("mouseleave", function(){
    por.style.transition="all 1s"
    por.style.color="white";
    // por.style.opacity="0";
});
header.addEventListener("click",function(){
    frameChange(0);
    resumeContainer.addEventListener("transitionstart", function(){
        for(i=0; i<fontLarge.length; i++){
            fontLarge[i].style.color="black";
        }
    });
});


function frameChange(frame){
    resumeContainer.style.transform="rotate(90deg)";
    abilityContainer.style.transform="rotate(90deg)";
    expContainer.style.transform="rotate(90deg)";
    porContainer.style.transform="rotate(90deg)";      
    if(frame!=0){
        frame.style.transform="rotate(0deg)";
    }
}