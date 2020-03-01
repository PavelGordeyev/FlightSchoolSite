// Airplane class
var airplane = function(name,desc,extra,imgURI,price){
	this.name = name;
	this.extra = extra,
	this.desc = desc;
	this.imgURI = imgURI;
	this.price = price;
}

// All airplanes
let airplanes = {
	pa140: new airplane('Piper Cherokee 140',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/cherokee.jpg',150),
	pa200: new airplane('Piper Arrow',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/arrow.jpeg',180),
	c152: new airplane('Cessna 152',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/c152.jpeg',140),
	c172: new airplane('Cessna 172',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio metus, porttitor non tristique at",'Hello world','images/c172.jpeg',175)
};