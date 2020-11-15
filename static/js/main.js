// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


    //what we do text toggle
    $(".design").click(function() {
        $(".shown-design").fadeToggle();
        $(".hidden-design").fadeinToggle();
      });
  
      $(".development").click(function() {
          $(".shown-development").fadeToggle();
          $(".hidden-development").fadeinToggle();
      });
  
      $(".management").click(function() {
          $(".shown-management").fadeToggle();
          $(".hidden-management").fadeinToggle();
      }); 


    //portfolio text toggle 
    $('.card').hover(function(){
        $('.toggle-text',this).slideToggle('slow');
     }, function(){
        $('.toggle-text',this).fadeToggle('slow');
    });