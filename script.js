// let menu = document.querySelector(".burgermenu");
// let menuToggle = document.querySelector(".burger");
// menuToggle.addEventListener("click", function(e){
//     e.preventDefault();
//     menu.classList.toggle("show-menu")
   
// }); 
// window.addEventListener('resize', function(){
//     if(window.innerWidth>320 && menu.classList.contains('show-menu')){
//         menu.classList.remove('show-menu')
       
//     }
// });

$('.burgermenu').hide();
$('.burgerx').hide();
$('.burger').on('click', function() {
	$('.burgerx').show();
	$('.burger').hide();
	$('.burgermenu').slideDown();
  });
  $('.burgerx').on('click', function() {
	$('.burger').show();
	$('.burgerx').hide();
	$('.burgermenu').slideUp();
  });

  $('.burmenu4').hide();
$('.bstrx').hide();
$('.bstro').on('click', function() {
	$('.bstrx').show();
	$('.bstro').hide();
	$('.burmenu4').slideDown();
  });
  $('.bstrx').on('click', function() {
	$('.bstro').show();
	$('.bstrx').hide();
	$('.burmenu4').slideUp();
  });