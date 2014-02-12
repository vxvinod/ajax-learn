(function(){
	var link = document.getElementsByTagName("a")[3];
	link.onclick = function(){
		console.log("clicked");
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			//console.log(xhr.readyState);
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){
				console.log("onreadystatechange");
				var body = document.getElementsByTagName("body")[0];
				var json=JSON.parse(xhr.responseText);
				var heading = json.heading;
				console.log(heading);
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);
			}

			var items = json.places;

			var list = document.createElement("ul");

			for(var key in items){
				var item = items[key];
				var li = document.createElement("li");
				var ltext = document.createTextNode(item)
				li.appendChild(ltext);
				list.appendChild(li);
			}
			body.appendChild(h2);
			body.appendChild(list);
			body.removeChild(link);
		
		};
		xhr.open("GET","ajax.json",true);
		console.log("open send");
		xhr.send(null);
		return false
	};

})();                                  