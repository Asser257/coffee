// function countTo(){

// let from = 0;

// let to = 1780;

// let step = to > from ? 1 : -1;

// let interval = 10;

// if(from == to)
// {document.querySelector("#zero").textContent =from;

// return;

// }
// let counter = setInterval(function(){

// from += step;
// document.querySelector("#zero").textContent =from;

// if(from == to){
//     clearInterval(counter);
// }

// },interval)

// }
// countTo();
// function countToo(){

//     let from = 0;
    
//     let to = 1500;
    
//     let step = to > from ? 1 : -1;
    
//     let interval = 10;
    
//     if(from == to)
//     {document.querySelector("#zeroo").textContent =from;
    
//     return;
    
//     }
//     let counter = setInterval(function(){
    
//     from += step;
//     document.querySelector("#zeroo").textContent =from;
    
//     if(from == to){
//         clearInterval(counter);
//     }
    
//     },interval)
// }
//     countToo();

//     //  if(from == 0){
//     //     window.addEventListener("scroll",countToo);

//     // }
  
//     // if(from == to){
//     //     clearInterval(counter);
//     // }
//     function countTool(){

//         let from = 0;
        
//         let to = 1720;
        
//         let step = to > from ? 1 : -1;
        
//         let interval = 10;
        
//         if(from == to)
//         {document.querySelector("#zerooo").textContent =from;
        
//         return;
        
//         }
//         let counter = setInterval(function(){
        
//         from += step;
//         document.querySelector("#zerooo").textContent =from;
        
//         if(from == to){
//             clearInterval(counter);
//         }
        
//         },interval)
        
//         }
//         countTool();
//         function countTools(){

//             let from = 0;
            
//             let to = 180;
            
//             let step = to > from ? 1 : -1;
            
//             let interval = 10;
            
//             if(from == to)
//             {document.querySelector("#zeroooo").textContent =from;
            
//             return;
            
//             }
//             let counter = setInterval(function(){
            
//             from += step;
//             document.querySelector("#zeroooo").textContent =from;
            
//             if(from == to){
//                 clearInterval(counter);
//             }
            
//             },interval)
            
//             }
""
const navEl = document.getElementById('navbar');
window.addEventListener('scroll' , () => {
   if(scrollY > 56){
    navEl.classList.add('navbar-scrolled');
   }
   else if(scrollY < 56){
    navEl.classList.remove('navbar-scrolled');

   }
    


})





const nums =document.querySelectorAll(".nums .num");

const section =document.querySelector(".hello1");
let started = false;
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop) {
        if(!started){
            nums.forEach((num) => startCount(num));

        }
started = true;
    }
}

function startCount(el){
const goal= el.dataset.goal;
const count=setInterval(() => {
    el.textContent++;
    if(el.textContent == goal){
        clearInterval(count);
        }

},100)

}
// function reveal(){
//     var reveals =document.querySelectorAll("nums");

// for( var i =0; i < doc.length; i++){

// var windowHeight =window.innerHeight;
// var elementTop = doc[i].getBoundingClientRect().top;
// var elementVisible = 350;
// if(elementTop < windowHeight -elementVisible){
//     reveals[i].classList.add("active");
// }
// else{
//     reveals[i].classList.remove("active");

// }
// }
// }
// window.addEventListener("scroll", reveal);

            countTools();
            function openNav (){
                document.getElementById("mySidenav").style.width ="500px";
            document.getElementById("main").style.marginLeft="300px";
            }
            function closeNav(){
                document.getElementById("mySidenav").style.width="0";
                document.getElementById("main").style.marginLeft="0px";
                }
                