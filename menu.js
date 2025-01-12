

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

// document.addEventListener("DOMContentLoaded", function() {
//     var img = document.getElementById('fullscreen-img');

//     // Resmi ekranda tam boyutta göster
//     function showFullscreenImage() {
//         img.style.display = 'block';
//         setTimeout(function() {
//             img.style.display = 'none';
//         }, 6000); // 5 saniye sonra resmi gizle
//     }

//     showFullscreenImage(); // Sayfa yüklendiğinde resmi göster
// });
// function menuKontrol() {
//     var suAn = new Date();
//     var saat = suAn.getHours();

//     var headingKahvalti = document.getElementById("headingKahvalti");

//     if (saat >= 7 && saat < 12) {
//         headingKahvalti.style.display = "block"; // Menüyü göster
//     } else {
//         headingKahvalti.style.display = "none"; // Menüyü gizle
//     }  }

//   // Belirli aralıklarla kontrol etmek için
//   setInterval(menuKontrol, 10000); // Her 10 saniyede bir kontrol etmek için