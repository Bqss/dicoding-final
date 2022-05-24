let aside = document.querySelector('.aside');
let univ = document.querySelector('.univ');

univ.addEventListener('mouseenter',()=>{
   aside.classList.add('show');   
});

univ.addEventListener('mouseout',()=>{
   aside.classList.remove('show');
})

// nav link scroll border
let navbar = document.querySelector("nav");
const fix = navbar.offsetTop;
window.addEventListener('scroll',()=>{
   

   if(window.pageYOffset >= fix){
      navbar.classList.add("fixed");
   }else{
      navbar.classList.remove("fixed");
   }
});

// hamburger
const links = document.querySelector('.link-wrapper');
const cb1 = document.querySelector('#cb');
cb1.addEventListener('change',function(){
   if(this.checked){
      links.classList.add('show');
    
   }else{
      links.classList.remove('show');
   }
});

// appear content scroll animation toggler
const projects = document.querySelectorAll('.wrapper .project');
const aboutme = document.querySelectorAll('.wrapper section');
const section = document.querySelectorAll('.title');
const link = document.querySelectorAll('ul.link-wrapper a');
window.onscroll=()=>{

   projects.forEach((project)=>{
      
      project.classList.remove('near');
      let indexY = project.offsetTop-600;
      if(window.scrollY >= indexY ){
         project.classList.add('near');
      }
   });

   aboutme.forEach((cn)=>{
      cn.classList.remove('near');
      let indexY = cn.offsetTop-400;
      if(window.scrollY >= indexY ){
         cn.classList.add('near');
      }
   });

   let current ="";
   section.forEach((s)=>{
      let topOfset = s.offsetTop-200;
      if(window.scrollY >= topOfset){
         current = s.getAttribute('id');
      }

      link.forEach((l)=>{
         l.classList.remove('active');
         if(l.getAttribute('name') == current){
            l.classList.add('active');
         }
      });
   });

   
};
let  obj = {strings :[,"Mahasiswa","Programmer"],typeSpeed:100,backSpeed:40,loop:true};
let typed = new Typed(".auto-type",obj);







