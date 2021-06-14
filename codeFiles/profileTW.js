// 語言選項
var lanBox=document.getElementById("languageBox");
var lanUS=document.getElementById("lanUS");
var lanTw=document.getElementById('lanTaiwan');
var defLan=document.getElementById("defultLan");
var currentLan;

// var body=document.`getElements`ByClassName("body");
// intro 動畫用
var hi=document.getElementById("hi");
var wei=document.getElementById("Wei");
var ps=document.getElementById("ps");
var ani=document.getElementById("ani");
var problemWhole=document.getElementById("problemWhole");
var click=document.getElementById("click");
var i=0;
var counter=0;

var container=document.getElementById("container");
var MenuBTNContainer=document.getElementById("MenuBTNContainer");
var header=document.getElementById("header");

// 按鈕列
var resumeBtn=document.getElementById("ResumeBtn");
var abilityBtn=document.getElementById("AbilityBtn");
var res=document.getElementById("esume");
var abi=document.getElementById("bility");
var fontLarge=document.getElementsByClassName("fontLarge");
var RcloseBtn=document.getElementById("RcloseBtn");
var AcloseBtn=document.getElementById("AcloseBtn");
var contactInfo=document.getElementById("contactInfo");
var email=document.getElementById("email");
var res2=document.getElementById("res2");
var res2text=document.getElementById("res2text");
var respic=document.getElementById("respic");
var resShadow=document.getElementById("resShadow");

// Gallery用
var case1=document.getElementById("case1");
var case2=document.getElementById("case2");
var case3=document.getElementById("case3");
var case4=document.getElementById("case4");
var caseArray = [case1, case2, case3, case4];
var gtani=document.querySelectorAll(".gtani");
console.log(gtani);

// 正文用
var BackContainer=document.getElementById("BackContainer");
var resumeContainer=document.getElementById("resumeContainer");
var resumeHeader=document.getElementById("resumeHeader");
var resumeBody=document.getElementById('resumeBody');
var resumeContainerTXT=document.getElementById("resumeContainerTXT");
var abilityContainer=document.getElementById("abilityContainer");
var abilityContainerTXT=document.getElementById("abilityContainerTXT");
var abilityBody=document.getElementById('abilityBody');
var tabBl=[0,false,false,false,false,3];


hi.style.display="none";
wei.style.display="none";
ps.style.display="none";
ani.style.display="none";
problemWhole.style.display="none"

function start(){
    // -------Language defualt set-----------------------------------------------------
    // console.log(defLan);
    if(defLan.innerHTML=="TW"){
        // console.log("TW");
        lanUS.style.display="none";
        currentLan=lanTw;
    }else if(defLan.innerHTML=="US"){
        // console.log("US");
        lanTw.style.display="none";
        currentLan=lanUS;
    }


    lanBox.addEventListener("mouseenter",()=>{
        lanBox.style.backgroundColor="rgb(80, 80, 80)";
        lanTw.style.display="flex";
        lanUS.style.display="flex";
    });
    // console.log(currentLan);
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
    var problemSperateWords= this.childNodes;
    if(counter==1){
        click.innerHTML='<img src="arrow.png" style="width: 40px;height: 40px;"> Click Again !';
        for(i=0;i<problemSperateWords.length;i++){    
            problemSperateWords[i].style.display="inline-block";
            problemSperateWords[i].style.transform = `rotate(${Math.floor(Math.random() * (40-(-40))+(-40))}deg)`;
        }
    }else if(counter==2){
        click.innerHTML='<img src="arrow.png" style="width: 40px;height: 40px;"> One More Time !';
        for(i=0;i<problemSperateWords.length;i++){    
            problemSperateWords[i].style.transform = `rotate(${Math.floor(Math.random() * (90-(-90))+(-90))}deg)`;
        }
    }else if(counter==3){        
        // ------ 開始進入畫面 ----------------------------------------------------------------------------------------------------------
        console.log(counter);
        problemWhole.classList.toggle("shake");
        problemWhole.addEventListener("animationend", function(){
            // 噴射字體~~~~~
            problemWhole.style.cursor="auto";
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
                BackContainer.style.display="flex";
                // problemSperateWords[i].addEventListener("mouseenter", function(){
                //     this.style.transform=`translate(${Math.floor(Math.random() * (100-(-100))+(-100))}%, ${Math.floor(Math.random() * (100-(-100))+(-100))}%)`
                // });
                // problemSperateWords[i].style.transform= `translate(${Math.floor(Math.random() * (2000-(-1000))+(-1000))}%, ${Math.floor(Math.random() * (1000-(-1000))+(-1000))}%)`;
            }


            // ------ header show  ----------------------------------------------------------------------------------------------------------
            // header.style.display="flex";
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
            MenuBTNContainer.style.bottom="0%";
            click.style.display="none";
            res2.style.display="flex";
        });
            
    }
});

container.addEventListener("scroll", ()=>{
    res2.className="res2tog";
    respic.className="res2pic";
    res2text.style.display="none";
    resShadow.className="res2Shadow"
    header.style.left="-30%";
});
header.addEventListener("mouseenter",  ()=>{
    header.style.left="0%";
});
header.addEventListener("mouseleave",  ()=>{
    header.style.left="-30%";
});
respic.addEventListener("mouseleave",  ()=>{
    res2.className="res2tog";
    respic.className="res2pic";
    res2text.style.display="none";
    resShadow.className="res2Shadow"
});
respic.addEventListener("mouseenter",  ()=>{
    res2.className="res2";
    respic.className="respic";
    res2text.style.display="block";
    resShadow.className="resShadow"
});
respic.addEventListener("mouseleave",  ()=>{
    res2.className="res2tog";
    respic.className="res2pic";
    res2text.style.display="none";
    resShadow.className="res2Shadow"
});


// ------ Gallery用!!!  ----------------------------------------------------------------------------------------------------------
caseArray.forEach(element => {
    element.classList.t
    element.addEventListener("mouseenter", function(){
        this.children[0].children[0].style.display="flex";
        this.children[0].children[1].classList.toggle("hover");
    });
    element.addEventListener("mouseleave", function(){
        this.children[0].children[0].style.display="none";
        this.children[0].children[1].classList.toggle("hover");
    });
});

var emailbl=false;
email.addEventListener("click", function(){
    if(emailbl==false){
        contactInfo.style.display="flex";
    }else if(emailbl!=false){
        contactInfo.style.display="none";
    }
    emailbl = !emailbl;
});


// ------ 正文用!!!  ----------------------------------------------------------------------------------------------------------
resumeBtn.addEventListener("click", function(){
    // resumeContainer.innerHTML=resumeContainerTXT.innerHTML;
    tabBl[0]=1;
    containerShow(resumeContainer, resumeBody, resumeContainerTXT); 
});
RcloseBtn.addEventListener("click", function(){
    tabBl[0]=1;
    // resumeContainer.innerHTML=resumeContainerTXT.innerHTML;
    containerShow(resumeContainer, resumeBody, resumeContainerTXT);
});

abilityBtn.addEventListener("click", function(){
    // resumeContainer.innerHTML=resumeContainerTXT.innerHTML;
    tabBl[0]=2;
    containerShow(abilityContainer,abilityBody,abilityContainerTXT);
});
AcloseBtn.addEventListener("click", function(){
    // resumeContainer.innerHTML=resumeContainerTXT.innerHTML;
    tabBl[0]=2;
    containerShow(abilityContainer,abilityBody,abilityContainerTXT);
});
function containerShow(tab, tabBody, tabTXT){
    var whichTab=tabBl[0];
    // console.log(tabBody);

    var shift=10;
    // console.log(tabBl)
    for(var i =1; i<=3; i++){
        if(tabBl[i]==true){
            shift=shift+(Math.floor((Math.random() * (3-(-3))+(-3))*2));
            tabBl[5]++;
        }
        if(tabBl[1]!=true&&tabBl[2]!=true&&tabBl[3]!=true){
            tabBl[5]=3;
        }
    }
    shift+='%';
    console.log(shift);
    console.log(tabBl);
    if(tabBl[whichTab]==true){
        tab.style.height="0vw";    
        tab.style.width="0vw";
        tab.style.top="105%"; 
        tab.style.left= whichTab+7+"0%"; 
        tabBl[whichTab]=false;
        tabBody.innerHTML=""; 
        tabBl[5]--;
    }else if(tabBl[whichTab]==false){
        tab.style.width="80vw";
        tab.style.height="80vh";
        tab.style.zIndex= tabBl[5]+"00";
        tab.style.left=shift;
        tab.style.top=shift; 
        tabBody.innerHTML+=tabTXT.innerHTML; 
        tabBl[whichTab]=true;
    }
    
}
// ------ 點擊到最上面  ----------------------------------------------------------------------------------------------------------
resumeContainer.addEventListener("click", function(){
    tabBl[5]++;
    this.style.zIndex=tabBl[5]+"00";
});
abilityContainer.addEventListener("click", function(){
    tabBl[5]++;
    this.style.zIndex=tabBl[5]+"00";
});



// ------ header 隨滑鼠移動!!  ----------------------------------------------------------------------------------------------------------
resumeHeader.addEventListener('mousedown', function(e){
    resumeContainer.style.transition="none";
    dragStart(e, resumeContainer);
});
abilityHeader.addEventListener('mousedown', function(e){
    abilityContainer.style.transition="none";
    dragStart(e, abilityContainer);
});
function dragStart(e, Ct) {
    console.log(e);
    e.preventDefault();
    tabBl[4]=Ct;
    //記錄點擊相對被點擊物件的座標
    startX = e.clientX - tabBl[4].offsetLeft;
    startY = e.clientY - tabBl[4].offsetTop;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
}
function move(e) {
    //計算出拖曳物件最左上角座標
    x = e.clientX - startX;
    y = e.clientY - startY;
    tabBl[4].style.left = x + 'px';
    tabBl[4].style.top = y + 'px';
}

function stop() {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', stop)
    tabBl[4].style.transition="all 0.3s";
}



header.addEventListener("click",function(){
    container.scrollTo(0,0);
});
gtani.forEach(element => {
    console.log(element)
    element.addEventListener("click", ()=>{
        container.scrollTo(0, (window.innerHeight*0.85));
    });
});

