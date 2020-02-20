// Airplane class
var airplane = function(name,desc,extra,imgURI){
	this.name = name;
	this.extra = extra,
	this.desc = desc;
	this.imgURI = imgURI;
}

// Create project elements
function createAirplane(name,desc,extra,imgURI){

	var airplane = document.createElement('article'),
		airplaneName = document.createElement('h3'),
		airplaneImg = document.createElement('img'),
		airplaneDesc = document.createElement('p'),
		airplaneArrow = document.createElement('p'),
		airplaneExtra = document.createElement('p');

	

	// Set classes
	airplane.classList.add('aircraft');
	airplaneArrow.classList.add('arrow');
	airplaneArrow.classList.add('down-arrow');
	airplaneExtra.classList.add('extra');
	airplaneExtra.classList.add('hidden-text');
	
	// Set airplane name
	airplaneName.innerHTML = name;

	// Set airplane image link
	airplaneImg.src = imgURI;

	// Set airplane description
	airplaneDesc.innerHTML = desc;
	
	// Set extra text
	airplaneExtra.innerHTML = extra;

	// Set down arrow
	airplaneArrow.innerHTML = '&#8615';

	// Add all elements to the content section
	airplane.appendChild(airplaneImg);
	airplane.appendChild(airplaneName);
	airplane.appendChild(airplaneDesc);
	airplane.appendChild(airplaneArrow);
	airplane.appendChild(airplaneExtra);

	// Add project element to the page
	document.getElementById('content').appendChild(airplane);
}