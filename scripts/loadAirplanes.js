// Airplanes object
let airplanes = {
	pa140: new airplane('Piper Cherokee 140',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/cherokee.jpg'),
	pa200: new airplane('Piper Arrow',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/arrow.jpeg'),
	c152: new airplane('Cessna 152',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/c152.jpeg'),
	c172: new airplane('Cessna 172',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/c172.jpeg')

};

let airplaneKeys = Object.keys(airplanes);

airplaneKeys.forEach(function(airplane){
	createAirplane(airplanes[airplane].name,airplanes[airplane].desc,airplanes[airplane].extra,airplanes[airplane].imgURI);
});