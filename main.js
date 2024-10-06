const btndiv=document.getElementById("box");
const btn=document.getElementById("share");
const path=btn.querySelector("path");
const popup=document.getElementById("popup");
const popup2=document.getElementById("popup2");
const first=document.getElementById("popup2").querySelector("#first");

let count=0,count1=0,flag=0,flag1=0;
function odd(){
    popup.classList.remove("hidden");
    path.setAttribute("fill","white");
    btndiv.style.backgroundColor="hsl(214, 17%, 51%)";
    count=1;
    flag=1;
}

function even(){
    popup.classList.add("hidden");
    path.setAttribute("fill","hsl(214, 17%, 51%)");
    btndiv.style.backgroundColor="white";
    count=0;
    flag=0;
}

function odd1(){
    popup2.classList.remove("hidden");
    path.setAttribute("fill","white");
    btndiv.style.backgroundColor="hsl(214, 17%, 51%)";
    count1=1;
    flag1=1;
}

function even1(){
    popup2.classList.add("hidden");
    path.setAttribute("fill","hsl(214, 17%, 51%)");
    btndiv.style.backgroundColor="white";
    count1=0;
    flag1=0;
}

let w=window.matchMedia("(min-width: 400px)");

w.addEventListener('change', (e) => {
    if (e.matches) {
        popup2.classList.add("hidden");
        path.setAttribute("fill","hsl(214, 17%, 51%)");
        btndiv.style.backgroundColor="white";
        count1=0;
        flag1=0;
    }
    else
    {
        popup.classList.add("hidden");
        path.setAttribute("fill","hsl(214, 17%, 51%)");
        btndiv.style.backgroundColor="white";
        count=0;
        flag=0;
    }
  
    
  });


btn.addEventListener("click",function(){
    if(w.matches)
    {   
        if(count===1)
            {
                even();
            }
            else
            {
                odd();
            }
    }
    else
    {
        if(count1===1)
        {
            even1();
        }
        else
        {
            odd1();
        }
    }
    
});













    

