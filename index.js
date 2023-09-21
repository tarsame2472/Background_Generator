const plain=document.getElementById("plain");
const gradient=document.getElementById("gradient");
const box=document.getElementById("boxone");
const box2=document.getElementById("boxtwo");


plain.addEventListener("click",function(e){
    if(e.target.tagName === "A")
    {
        plain.style.borderBottom="5px solid black";
        plain.style.borderRadius="10%";
        gradient.style.borderBottom="none";
        box2.style.display="none";
        box.style.display="flex";
    }
},false);

gradient.addEventListener("click",function(e){
    if(e.target.tagName === "A")
    {
        plain.style.borderBottom="none";
        gradient.style.borderBottom="5px solid black"
        gradient.style.borderRadius="10%";
        box.style.display="none";
        box2.style.display="flex";
    }
},false);

                                                                        //    PLAIN COLOR

const bodybg=document.getElementById("body");
const p=document.getElementById("code");
function plainColor()
{
     const randomNumber=Math.floor(Math.random()*16777215);
     const randomCode="#"+randomNumber.toString(16);
     bodybg.style.background=randomCode;
     p.textContent=randomCode;
}

                                                                          // COLOR GRADIENT

const text=document.getElementById("text");
const colorone=document.getElementById("colorone");
const colortwo=document.getElementById("colortwo");
const colorthree=document.getElementById("colorthree")
var data=document.getElementById("answerarea");
var h3=document.getElementById("h3");

h3.textContent="Code :- "+`linear-gradient(${text.value}, ${colorone.value}, ${colortwo.value}, ${colorthree.value})`;

function setcolor(){
    bodybg.style.background=`linear-gradient(${text.value}, ${colorone.value}, ${colortwo.value}, ${colorthree.value})`;

    h3.textContent="Code :- "+`linear-gradient(${text.value}, ${colorone.value}, ${colortwo.value}, ${colorthree.value})`;
}

text.addEventListener("input",setcolor)
colorone.addEventListener("input",setcolor)
colortwo.addEventListener("input",setcolor)
colorthree.addEventListener("input",setcolor)