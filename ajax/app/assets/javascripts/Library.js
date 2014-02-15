var Library ={}

Library.createXHR = function(url,options){
	var xhr = false;
	alert("Library");

	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}

	if(xhr){
		options = options || {};
		options.method = options.method || "GET" ;
		xhr.onreadystatechange = function(){
			if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){
				var contentType = xhr.getResponseHeader('ContentType');
				if(options.complete){
					if(contentType == "application/json"){
						options.complete.call(xhr,JSON.parse(xhr.responseText));	
					}else if(contentType == "text/xml" || contentType == "application/xml"){
						options.complete.call(xhr,xhr.responseXML);
					}else {
						options.complete.call(xhr,xhr.responseText);
					}
					
				}
			}
		};
		xhr.open(options.method,url,true);
		return xhr;
	}else {
		return false;
	}
};

Library.ajax = function (url,options){
	var xhr = Library.createXHR(url,options);

	if(xhr){
		xhr.send(null);
	} 
};