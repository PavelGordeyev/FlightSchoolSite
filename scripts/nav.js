menuLinks = {
	'Home': 'index.html',
	'Aircraft': 'aircraft.html',
	'Pricing': 'pricing.html',
	'Certificates': 'certificates.html',
	'Resources': 'resources.html',
	'Local Info': 'local.html',
	'Contact Us': 'contact.html'
}

createNav(menuLinks);

// Create and add nav elements
function createNav(links){

	var nav = document.createElement('nav'),
		list = document.createElement('ul'),
		linkKeys = Object.keys(links),
		linkVals = Object.values(links);


	// Add link titles and reference for all links
	// and append to the navigation list
	for (var i = 0;i < linkKeys.length;i++){

		var menuItem = document.createElement('li'),
			linkItem = document.createElement('a');

		linkItem.innerHTML = linkKeys[i];
		linkItem.href = linkVals[i];

		menuItem.appendChild(linkItem);
		list.appendChild(menuItem);
	}

	nav.appendChild(list);

	// Add project element to the page
	document.getElementById('content-wrapper').insertBefore(nav,document.getElementById('content-wrapper').firstChild);
}
