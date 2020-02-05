// function translate(text) {
//   return text.replace(/(?:\b)([^aeiou\s]*qu[^aeiou\s]*|[^aeiou\s]+?)?([aeiouy]+\w*?)(?:\b)/ig, function(m, c1, c2){
//     return /^[aeiou]+/i.test(m) ? `${m}way` : `${c2}${c1}ay`;
//   });
// }

//array for vowels
//regex for starting vowels
let startingVowel = /[aeiuo]{1}?/i;

function translate(text) {
  if ((/[aeiuo]{1}?/i.test(text)) && (text.length ===1)) {
    return text + "ay";
  }
  return text;
}

function singleVowel(letter) {
  //test if letter is a vowel
  //let valid = /[aeiuo]{1}/i.test(letter);

  if (/[aeiuo]{1}/i.test(letter)) {
    return letter + "ay";
  }
}





$(document).ready(function(){

  $("#form").submit(function(e){
    $("#result").empty();
    let text = $("#text").val();
    let span = document.createElement("span")
    span.innerText = `Translation: ${translate(text)}`;
    $("#result").append(span);
    e.preventDefault();
  });

  $('#text').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    if(keycode == '13') 
      $("#form").submit();
  });

});