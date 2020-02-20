// Airplanes object
let airplanes = {
	pa160: new airplane('Piper Cherokee 160',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/cherokee.png'),
	pa150: new airplane('Piper Cherokee 150',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/cherokee.png'),
	pa140: new airplane('Piper Cherokee 140',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/cherokee.png')
};

let airplaneKeys = Object.keys(airplanes);

airplaneKeys.forEach(function(airplane){
	createAirplane(airplanes[airplane].name,airplanes[airplane].desc,airplanes[airplane].extra,airplanes[airplane].imgURI);
});