var btn = document.createElement("BUTTON");
  	var t = document.createTextNode("Click Me");
		btn.setAttribute('id',"clickme");
		//btn.setAttribute("OnClick", alert("d"));
		var place = document.getElementById("searchform");
    btn.appendChild(t);
    place.appendChild(btn);
 var numOfLinks = 5;
var counter = 0;
    function workFlow(){
        var userInput = document.getElementById("lst-ib").value;
        //alert(userInput);
        window.open("https://google.ca/search?q=" + userInput, "_self");
        // var readyStateCheckInterval = setInterval(function() {
        //   if (document.readyState === "complete") {
        //       clearInterval(readyStateCheckInterval);
        //         //alert("done");
        //
        //               }
        //             }, 10);

        var domains = document.getElementsByClassName('r');
        for (var i = 0; i < domains.length; i++) {
          var links = domains[i].getElementsByTagName('A');
          for (var j = 0; j< links.length; j++) {
            console.log(links.length);
            alert(links[j].attributes['href'].value);
            counter = counter +1;
            if(counter == numOfLinks){
              break;
              alert("shut up");
            }
          }
        }
                  }

document.getElementById('clickme').addEventListener('click', workFlow);
