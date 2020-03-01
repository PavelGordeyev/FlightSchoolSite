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
	pa140: new airplane('Piper Cherokee 140',"The Piper PA-28 Cherokee is a family of two-seat or four-seat light aircraft built by Piper Aircraft and designed for flight training, air taxi and personal use. The PA-28 family of aircraft comprises all-metal, unpressurized, single-engined, piston-powered airplanes with low-mounted wings and tricycle landing gear. They have a single door on the right side, which is entered by stepping on the wing.","160 HP Lycoming O-320<br/>IFR Certified<br/>Single-Axis Piper Autopilot<br/>Dual Comm/Nav<br/>4-Place Intercom<br/>Approved for Canada Operations",'images/cherokee-rs.png',150),
	pa200: new airplane('Piper Arrow',"The Piper PA-28 Cherokee is a family of two-seat or four-seat light aircraft built by Piper Aircraft and designed for flight training, air taxi and personal use. The PA-28 family of aircraft comprises all-metal, unpressurized, single-engined, piston-powered airplanes with low-mounted wings and tricycle landing gear. They have a single door on the right side, which is entered by stepping on the wing.","Complex Aircraft<br/>200 HP Lycoming IO-360<br/>JPI EDM-900 Engine Monitor<br/>Garmin GTN750 Touchscreen GPS<br/>Terrain Awareness and Alerting<br/>WAAS Equipped",'images/arrow-rs.png',180),
	c152: new airplane('Cessna 152',"The Cessna 152 is an American two-seat, fixed-tricycle-gear, general aviation airplane, used primarily for flight training and personal use. It was based on the earlier Cessna 150, including a number of minor design changes and a slightly more powerful engine running on 100LL aviation gasoline. It has as strict weight limit for the student of 170lbs.","Garmin GMA340 Audio Panel<br/>King KX165 Digital Nav/Com<br/>Appareo Transponder w/ADS-B out<br/>2 Place Intercom<br/>",'images/c152-rs.png',140),
	c172: new airplane('Cessna 172',"The Cessna 172S G1000 Skyhawk is recognized as the most popular trainer on the Soar Above fleet. With a combination of performance and affordability, pilots can earn their Private, Instrument, or Commercial rating in the Skyhawk. With a 180 HP Lycoming IO-360 fuel injected engine, pilots experience smoother and more consistent transient throttle response than a traditional carburated engine.","The Garmin G1000 is the most sophisticated avionics system available in general aviation today. With safety features like Traffic Information Service (TIS) alerting, Terrain Awareness and Alerting, Angle of Attack Indicator, Synthetic Vision and an AmSafe Airbag, pilots experience the benefits of a Technically Advanced Aircraft (TAA) that outdated aircraft can't compete with.",'images/c172-rs.png',175)
};