 var counter=1;
      setInterval(function(){
         document.getElementById('radio'+ counter).checked=true;
         counter++;
         if(counter>6)
         {
            counter=1;
         }
      },3000);

var c=1;
      setInterval(function(){
         document.getElementById('t-radio'+ c).checked=true;
         c++;
         if(c>3)
         {
            c=1;
         }
      },5000);    
      
      
/*For Convocation_slider*/
      var counting=1;
      setInterval(function(){
         document.getElementById('radio_'+ counting).checked=true;
         counting++;
         if(counting>3)
         {
            counting=1;
         }
      },2500);
/*----------------------------*/

/*------------PreLoader----------------*/
setTimeout(function(){
         var loading_page = document.querySelector('.loading_page');
         loading_page.style.opacity = 0;
         setTimeout(function(){
           loading_page.style.display = 'none';
         },500); // Delay time (in milliseconds) before hiding the preloader after fading out
       },2200); // Duration of the preloader page (in milliseconds)
     

/*------------------------------------------*/

function toggleActive(element) {
   var buttons = document.getElementsByClassName("convcn-btn");

   // Remove active class from all buttons
   for (var i = 0; i < buttons.length; i++) {
       buttons[i].classList.remove("actv");
   }

   // Add active class to the clicked button
   element.classList.add("actv");
}



