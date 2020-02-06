function translate(text) {
  /*
    The following RegEx expressions are used to facilitate translation:
    /(?:\b)([^aeiou\s]*qu[^aeiou\s]*|[^aeiou\s]+?)?([aeiouy]+\w*?)(?:\b)/ig
      (?:\b) = non-capturing match of word boundary, what follows is a word
      ([^aeiou\s]*qu[^aeiou\s]*|[^aeiou\s]+?)? = first capture group (c1), which may exist (trailing ?)
        [^aeiou\s]*qu[^aeiou\s]* = match of qu, which may be surrounded with non-vowel and non-space characters
        [^aeiou\s]+? = match of one or more non-vowel and non-space characters
      ([aeiouy]+\w*?) = second capture group (c2), one or more vowels which may be followed with word characters
      (?:\b) = non-capturing match of word boundary, what precedes is a word
      /ig = case-insensitive, global
    /^[aeiou]+.{0}/i
      matches single-letter words with a vowel, case-insensitive
    ^[aeiou]+/i
      matches words with a leading vowel, case-insensitive
  */
  return text.replace(/(?:\b)([^aeiou\s]*qu[^aeiou\s]*|[^aeiou\s]+?)?([aeiouy]+\w*?)(?:\b)/ig, function(m, c1, c2){
    if (/[aeiou]+/i.test(m))
      if (/^[aeiou]+.{0}/i.test(m))
        return `${m}ay`
      else
        return /^[aeiou]+/i.test(m) ? `${m}way` : `${c2}${c1}ay`;
    else
      return m;
  });
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