//const searchButton = document.getElementById('search-button');
//const searchInput = document.getElementById('search-input');
//searchButton.addEventListener('click', () => {
//  const inputValue = searchInput.value;
//  alert(inputValue);
//});


var lastResFind=""; // paskutinis sekmingas rezultatas
var copy_page=""; // kodu puslapiu kopija
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ieško teksto puslapyje, parametras   perduodamas ID i ivestis lauka
  var obj = window.document.getElementById(inputId);
  var textToFind;

  if (obj) {
    textToFind = TrimStr(obj.value);//panaikinam tarpus
  } else {
    alert("Nieko nesurado");
    return;
  }
  if (textToFind == "") {
    alert("Tuscias laukelis");
    return;
  }

  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Nieko nerado, patikrinkite ar taisingai ivedete!");

  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;


  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>");
  lastResFind=textToFind;
  window.location = '#'+textToFind;
 }
