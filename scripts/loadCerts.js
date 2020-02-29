// Create certificate elements
function createCert(name,desc){

	var certificate = document.createElement('article'),
		row = document.createElement('div'),
		labelDiv = document.createElement('div'),
		textDiv = document.createElement('div'),
		text = document.createElement('p');

	// Set classes
	certificate.classList.add('container');
	row.classList.add('row');
	labelDiv.classList.add('col');
	labelDiv.classList.add('cert-label');
	textDiv.classList.add('col-6');
	textDiv.classList.add('overflow-auto');
	textDiv.classList.add('cert-text');
	
	// Set text
	labelDiv.innerHTML = name;
	text.innerHTML = desc;

	// Append all elements
	textDiv.appendChild(text);
	row.appendChild(labelDiv);
	row.appendChild(textDiv);
	certificate.appendChild(row);

	// Add project element to the page
	document.getElementById('content').appendChild(certificate);
}

// Load certs
let certKeys = Object.keys(certs);

certKeys.forEach(function(cert){
	createCert(certs[cert].name,certs[cert].desc);
});