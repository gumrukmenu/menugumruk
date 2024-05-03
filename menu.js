

// acoordion anımate
$(document).ready(function(){
  $('.btn-link').on('click', function(e){
      e.preventDefault();
      var target = $($(this).attr('data-target'));
      target.collapse('toggle'); 
      target.on('shown.bs.collapse', function () {
          var offset = target.offset().top - 180; // Hedefin pozisyonunu al ve 180 piksel aşağı kaydır
          $('html, body').animate({
              scrollTop: offset
          }, 350);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById('fullscreen-img');

    // Resmi ekranda tam boyutta göster
    function showFullscreenImage() {
        img.style.display = 'block';
        setTimeout(function() {
            img.style.display = 'none';
        }, 2000); // 5 saniye sonra resmi gizle
    }

    showFullscreenImage(); // Sayfa yüklendiğinde resmi göster
});
