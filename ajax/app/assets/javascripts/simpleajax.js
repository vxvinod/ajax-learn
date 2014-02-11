(function(){

	var linke = document.getElementsByTagName("a")[0];
	console.log(linke);
	linke.onclick = function(){
		//XHR object
		xhr = new XMLHttpRequest();
		//handle 'onreadystatechange' event
		//xhr readystatechange  property values
		// 0 - Uninitialized - request not started/not opened
		// 1 - Loading - request has been opened
		// 2 - Loaded - request has been sent to server
		// 3 - interactive - server is in process of sending response
		// 4 - compelete - request is completed
		xhr.onreadystatechange = function(){
			if((xhr.readyState == 4) && (xhr.status ==200 || xhr.status== 304)){
				console.log("inside");
				xhr.responseText;
				var body = document.getElementsByTagName("body")[0];
				var p = document.createElement("p");
				var pText= document.createTextNode(xhr.responseText);
				p.appendChild(pText);
				body.appendChild(p);
			}
		};
		//open the request
		xhr.open("GET",'ajax.txt',true)

		//send the request
		xhr.send(null);
		return false
	};
})();

