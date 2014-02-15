(function(){
	link = document.getElementsByTagName("a")[4];
	alert(link);
	link.onclick=function(){
		Library.ajax('ajax.json',{
			method: "GET",	
			complete: function(response){
				var body = document.getElementsByTagName("body")[0];
				var json = response;
				var heading = json.heading;

				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);

				var places = json.places;
				var ul = document.createElement("ul");

				for(var key in places){
					var item = places[key];
					var list = document.createElement("li");
					var itemnode = document.createTextNode(item);
					list.appendChild(itemnode);
					ul.appendChild(list);
				}
				body.appendChild(ul);
				body.appendChild(h2);
			}
		});
		return false;
	};
})();