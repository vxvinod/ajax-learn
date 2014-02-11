(function(){
	link = document.getElementsByTagName("a")[1];
	link.onclick = function(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if((xhr.readyState ==4)&&(xhr.status== 200 || xhr.status== 304)){
				var body = document.getElementsByTagName("body")[0];
				var p = document.createElement("div");
				body.appendChild(p);
				var div = document.getElementsByTagName('div')[0];
				div.innerHTML = xhr.responseText;
				body.removeChild(link);
			}
		};
		xhr.open("GET","ajax.html",true);
		xhr.send(null);
		return false;
	};
})();