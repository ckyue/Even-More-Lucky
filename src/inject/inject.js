var btn = document.createElement("BUTTON");
  	var t = document.createTextNode("Click Me");
		btn.setAttribute('id',"clickme");
		//btn.setAttribute("OnClick", alert("d"));
		var place = document.getElementById("searchform");
    btn.appendChild(t);
    place.appendChild(btn);

    function workFlow(){
        //alert('hello world');
        var userInput = document.getElementById("lst-ib").value;
        alert(userInput);
    }

document.getElementById('clickme').addEventListener('click', workFlow);
