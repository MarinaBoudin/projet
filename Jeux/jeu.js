var good_answer = function(){
  var boutton = document.getElementById("next");
  boutton.style.display = 'flex';
  var img = document.getElementById("image");
  img.src="IMG/good.gif";
}
var bad_answer = function(){
  var boutton = document.getElementById("next");
  boutton.style.display = 'flex';
  var img = document.getElementById("image");
  img.src="IMG/bad.gif";
}
var setuplistener = function(){
  var good = document.getElementById("good");
  good.addEventListener("click",good_answer);
  var bad = document.getElementById("bad");
  bad.addEventListener("click",bad_answer);
}
images=["IMG/hermani.jpg","IMG/ocellé.jpg","IMG/souche.jpg","IMG/cistude.jpg"]
reponses=[[`<p id="bad"class="answer">La cistude</p>`,`<p id="good"class="answer">La tortue d'Hermann</p>`],
  [`<p id="bad"class="answer">Lézard vert</p>`,`<p id="good"class="answer">Lézard ocellé</p>`,
  `<p id="bad"class="answer">Lézard des murailles</p>`,`<p id="bad"class="answer">Lézard des souches</p>`,
  `<p id="bad"class="answer">Lézard vivipare</p>`],[`<p id="bad" class="answer">Lézard vert</p>`,
  `<p id="bad" class="answer">Lézard ocellé</p>`,`<p id="bad" class="answer">Lézard des murailles</p>`,
  `<p id="good" class="answer">Lézard des souches</p>`,`<p id="bad" class="answer">Lézard vivipare</p>`],[
  `<p id="good" class="answer">La cistude</p>`,`<p id="bad" class="answer">La tortue d'Hermann</p>`]];
var boutton = document.getElementById("next");
boutton.style.display = 'none';
window.addEventListener("load",setuplistener);
