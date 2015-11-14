var btn = document.createElement("BUTTON");
  	var t = document.createTextNode("Click Me");
		btn.setAttribute('name',name);
		//btn.setAttribute("OnClick", alert("d"));
		var place = document.getElementById("searchform");
    btn.appendChild(t);
    place.appendChild(btn);

// var place = document.getElementById("viewport");
// var parentDiv = place.parentNode;
// parentDiv.insertBefore(btn,place);
