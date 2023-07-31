let menubar=document.querySelector(".community-section .left .nav-part1 ul")

let btns=document.querySelectorAll(".community-section .left .nav-part1 ul li")
btns.forEach(function(elem){
    elem.addEventListener("click",()=>{
      
        const current=document.querySelector("ul li.active");
        if(current){
            current.classList.remove("active")
        }
       elem.classList.add("active")
    })
    
})