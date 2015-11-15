var btn = document.createElement("BUTTON");
  	var t = document.createTextNode("Click Me");
		btn.setAttribute('id',"clickme");
		//btn.setAttribute("OnClick", alert("d"));
		var place = document.getElementById("searchform");
    btn.appendChild(t);
    place.appendChild(btn);

    function workFlow(){
        var numOfLinks = 5;
        var counter = 0;
        var userInput = document.getElementById("lst-ib").value;
        var exit = 0;
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
            //alert(links[j].attributes['href'].value);
            //console.log(links[j].attributes['href'].value);
            //pass message to background.js
            window.open(links[j].attributes['href'].value);
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
