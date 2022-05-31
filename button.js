window.onclickBtn = function() {

  var arrSound = ['saksofon_1.mp3', 'basssoon_1.mp3', 'basssoon_2.mp3', 'gitary_1.mp3', 'gitary_2.mp3', 'klavishnyh_1.mp3', 'klavishnyh_2.mp3', 'klavishnyh_3.mp3', 'klavishnyh_4.mp3', 'klavishnyh_5.mp3', 'klavishnyh_6.mp3', 'klavishnyh_7.mp3', 'klavishnyh_8.mp3', 'marimba_1.mp3', 'marimba_2.mp3', 'saksofon_1.mp3', 'saksofon_2.mp3', 'saksofon_3.mp3', 'sintezator_1.mp3', 'sintezator_01.mp3', 'sintezator_2.mp3', 'sintezator_02.mp3', 'sintezator_3.mp3', 'sintezator_03.mp3', 'sintezator_4.mp3', 'sintezator_5.mp3', 'sintezator_6.mp3', 'sintezator_7.mp3', 'sintezator_8.mp3', 'sintezator_9.mp3', 'strunnyh_1.mp3', 'strunnyh_2.mp3'];

  var randomSound = Math.floor(Math.random() * arrSound.length);
  var audio = new Audio(arrSound[randomSound]);

  audio.play();
}