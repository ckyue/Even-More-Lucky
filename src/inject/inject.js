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
        if(window.onload){
          alert("finished loading");
        }
        // var domains = document.getElementsByClassName('r');
        var domains = [].slice.call(document.getElementsByClassName('r'), 0).reverse();
        for (var i = 10-numOfLinks; i < domains.length; i++) {
          // alert(domains.length);
          var links = domains[i].getElementsByTagName('A')
          // var links = [].slice.call(domains[i].getElementsByTagName('A'), 0).reverse();
          for (var j = 0; j< links.length; j++) {
          // alert(domains.length);;
            //alert(links[j].attributes['href'].value);
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
