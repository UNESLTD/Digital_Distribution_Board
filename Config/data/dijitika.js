class dijitika{
	constructor(){

	}
	outputONE(){
		//Inductive Loads
	    document.getElementById('inductiveBtnOne').checked = false;
	    document.getElementById('inductiveBtnTwo').checked = false;
	    document.getElementById('inductiveBtnThree').checked = false;
	    document.getElementById('inductiveBtnFour').checked = false;
	}
	config(){
		//intake Point
		document.getElementById('inductive_load').checked = false;
	    document.getElementById('thermal_load').checked = false;
	    document.getElementById('appliance').checked = false;
	    document.getElementById('lighting').checked = false;
	    //Inductive Loads
	    document.getElementById('inductiveBtnOne').checked = false;
	    document.getElementById('inductiveBtnTwo').checked = false;
	    document.getElementById('inductiveBtnThree').checked = false;
	    document.getElementById('inductiveBtnFour').checked = false;
	    //Thermal Loads
	    document.getElementById('thermalBtnOne').checked = false;
	    document.getElementById('thermalBtnTwo').checked = false;
	    document.getElementById('thermalBtnThree').checked = false;
	    document.getElementById('thermalBtnFour').checked = false;
	    //Appliances
	    document.getElementById('socketOutletBtnOne').checked = false;
	    document.getElementById('socketOutletBtnTwo').checked = false;
	    document.getElementById('socketOutletBtnThree').checked = false;
	    document.getElementById('socketOutletBtnFour').checked = false;
	    /*//Lighting(400)
	    document.getElementById('inductive_load').checked = false;
	    document.getElementById('thermal_load').checked = false;
	    document.getElementById('appliance').checked = false;
	    document.getElementById('lighting').checked = false;
	    //Lighting(500)
	    document.getElementById('inductive_load').checked = false;
	    document.getElementById('thermal_load').checked = false;
	    document.getElementById('appliance').checked = false;
	    document.getElementById('lighting').checked = false;
	    //Lighting(600)
	    document.getElementById('inductive_load').checked = false;
	    document.getElementById('thermal_load').checked = false;
	    document.getElementById('appliance').checked = false;
	    document.getElementById('lighting').checked = false;
	    ///Lighting(700)
	    document.getElementById('inductive_load').checked = false;
	    document.getElementById('thermal_load').checked = false;
	    document.getElementById('appliance').checked = false;
	    document.getElementById('lighting').checked = false;*/
	}
}
var DIJITIKA = setInterval(dijitikaBuffer, 500);
function dijitikaBuffer(){
var mainSwitch0 = document.getElementById('main_switch').checked;
var	outputOne = document.getElementById('inductive_load').checked;
if (mainSwitch0 == false) {
  let a = new dijitika();
  const openA = a.config();
}
if (outputOne == false) {
	let b = new dijitika();
	const openB = b.outputONE();
}
}