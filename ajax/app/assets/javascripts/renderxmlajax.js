(function(){
	var link = document.getElementsByTagName("a")[2];
	link.onclick = function(){
		console.log("clicked");
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			console.log(xhr.readyState);
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){
				console.log("onreadystatechange");
				var body = document.getElementsByTagName("body")[0];
				var heading = xhr.responseXML.getElementsByTagName("heading")[0].firstChild.nodeValue;
				console.log(heading);
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);
			}

			var items = xhr.responseXML.getElementsByTagName("items")[0];
			items = items.getElementsByTagName("item");

			var list = document.createElement("ul");

			for(var i=0;i<items.length;i++){
				console.log(items[i]);
				var item = items[i].firstChild.nodeValue;
				var li = document.createElement("li");
				var ltext = document.createTextNode(item)
				li.appendChild(ltext);
				list.appendChild(li);
			}
			body.appendChild(h2);
			body.appendChild(list);
			body.removeChild(link);

		};
		xhr.open("GET","ajax.xml",true);
		console.log("open send");
		xhr.send(null);
		return false
	};

})();                                  