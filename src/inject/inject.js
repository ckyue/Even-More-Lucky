var btn = document.createElement("BUTTON");
var t = document.createTextNode("Even More Lucky");
btn.setAttribute('id',"clickme");
btn.setAttribute('align',"center");
var place = document.getElementById("searchform");
// var place = document.getElementsByClassName("jsb");
btn.appendChild(t);
place.appendChild(btn);
// var oldLucky = document.getElementsByClassName('jsb');
// var lucky = document.getElementsByName("I'm Feeling Lucky");
// document.oldLucky.replaceChild(btn,lucky);
    // var searchControl = new google.search.SearchControl();
    // var searchControl = new GSearchControl();
    // var indicator = 10;
    // searchControl.setResultSetSize(indicator);

function workFlow(){
  var numOfLinks = 3;
  var counter = 0;
  var userInput = document.getElementById("lst-ib").value;
  var exit = 0;
        //alert(userInput);
  window.open("https://google.ca/search?q=" + userInput, "_self");
        // var domains = document.getElementsByClassName('r');
  var domains = [].slice.call(document.getElementsByClassName('r'), 0).reverse();
  for (var i = 10-numOfLinks; i < domains.length; i++) {
          // alert(domains.length);
    var links = domains[i].getElementsByTagName('A')
          // var links = [].slice.call(domains[i].getElementsByTagName('A'), 0).reverse();
          for (var j = 0; j< links.length; j++) {
          // alert(domains.length);;
            //console.log(links[j].attributes['href'].value);
            var popup = window.open(links[j].attributes['href'].value,'_blank');
            counter = counter +1;
            if(counter == numOfLinks){
              exit = 1;
              break;
            }
          }
          if(exit == 1){
            break;
            }
          }
}

document.getElementById('clickme').addEventListener('click', workFlow);
