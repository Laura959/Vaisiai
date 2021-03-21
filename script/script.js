//var lastResFind=""; // paskutinis sekmingas rezultatas
//var copy_page=""; // kodu puslapiu kopija
//function TrimStr(s) {
//     s = s.replace( /^\s+/g, '');
//  return s.replace( /\s+$/g, '');
//}
//function FindOnPage(inputId) {//ieško teksto puslapyje, parametras   perduodamas ID i ivestis lauka
//  var obj = window.document.getElementById(inputId);
//  var textToFind;
//
//  if (obj) {
//    textToFind = TrimStr(obj.value);//panaikinam tarpus
//  } else {
//    alert("Rezultatas nerastas");
//    return;
//  }
//
//  if (textToFind == "") {
//    alert("Tusčias laukelis");
//    return;
//  }
//
//  if (textToFind.length < 3) {
//    alert('Įveskite pilna pavadinima!');
//    return;
//  }
//
//  if(document.body.innerHTML.indexOf(textToFind)=="-1")
//  alert("Nerodo, patikrinkite ar teisingai įvedėte!");
//
//  if(copy_page.length>0)
//        document.body.innerHTML=copy_page;
//  else copy_page=document.body.innerHTML;
//
//
//  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
//  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:yellow'>"+textToFind+"</a>");
//  lastResFind=textToFind;
//  window.location = '#'+textToFind;
// }


var TRange = null;

function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        // CODE FOR BROWSERS THAT SUPPORT window.find
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    } else if (navigator.appName.indexOf("Microsoft") != -1) {
        // EXPLORER-SPECIFIC CODE
        if (TRange != null) {
            TRange.collapse(false)
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
        if (TRange == null || strFound == 0) {
            TRange = self.document.body.createTextRange()
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
    } else if (navigator.appName == "Opera") {
        alert("Opera browsers not supported, sorry...")
        return;
    }
    if (!strFound) alert("String '" + str + "' not found!")
        return;
};

document.getElementById('search_box').onsubmit = function() {
    findString(this.search.value);
    return false;
};
