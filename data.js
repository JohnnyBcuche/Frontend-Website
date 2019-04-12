document.addEventListener("DOMContentLoaded", function() {
	loadJSON();
});

function loadJSON() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == XMLHttpRequest.DONE) {
			if(xmlhttp.status == 200) {
				loadData(JSON.parse(xmlhttp.responseText));
			} else if(xmlhttp.status ==400) {
				alert('There was an error 400');
			} else {
				alert('Something else other than 200 was returned');
			}
		}
	};
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
}

function loadData(data) {
	for(let i = 0; i < data.length; i++) {

		var mySlideDiv = document.createElement("div");
		mySlideDiv.setAttribute('class', 'slide');

		var img = document.createElement("img");
		img.setAttribute('class', 'img');
		img.src = "img/" + data[i].src;

		var text = document.createElement("div");
		text.setAttribute('class', 'text');
		text.innerHTML = data[i].text;

		var info = document.createElement("div");
		info.setAttribute('class', 'info');

		var one = document.createElement("div");
		one.setAttribute('class', 'one');
		one.innerHTML = 'work showcase';

		var two = document.createElement("div");
		two.setAttribute('class', 'two');
		two.innerHTML = 'more info';

		var opacity = document.createElement("div");
		opacity.setAttribute('class', 'img-bcg');

		if(data[i].lock == 1) {
			text.style.display = "block";
			opacity.style.display = "block"
		} else {
			text.style.display = "none";
			opacity.style.display = "none"
		}

		document.getElementById("slides").appendChild(mySlideDiv);

		mySlideDiv.appendChild(img);
		mySlideDiv.appendChild(text);
		mySlideDiv.appendChild(info);
		mySlideDiv.appendChild(opacity);

		info.appendChild(one);
		info.appendChild(two);
	}
}