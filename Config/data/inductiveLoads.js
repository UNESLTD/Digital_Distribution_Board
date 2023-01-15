class slaveOne{
	constructor(ILN, ILMV, ILMC, ILS){
		this.ILN = ILN;//Inductive Load Name
		this.ILMV = ILMV;//Inductive Load Max Volatage
		this.ILMC = ILMC;//Inductive Load Max Current
		this.ILS =ILS;//Inductive Load Status
	}
	loadOne(){
		document.getElementById('ILN1').innerHTML = this.ILN;
		document.getElementById('ILMV1').innerHTML = this.ILMV;
		document.getElementById('ILMC1').innerHTML = this.ILMC;
		document.getElementById('ILS1').innerHTML = this.ILS;
		document.getElementById('ilsh1').innerHTML = this.ILN;
		var stat = document.getElementById('inductiveBtnOne').checked;
		if (stat == true) {
			//status bar
			document.getElementById('ilsw').style.display = "block";//inductive load status window
			document.getElementById('ilos1').innerHTML = "On";
			document.getElementById('ilov1').innerHTML = this.ILMV+ "V";//Operating Voltage
			document.getElementById('iloc1').innerHTML = this.ILMC;//Operating Current
			document.getElementById('ilop1').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			document.getElementById('ilsw').style.display = "block";//inductive load status window			
			document.getElementById('ilos1').innerHTML = "Off";
			document.getElementById('ilov1').innerHTML = "0";//Operating Voltage
			document.getElementById('iloc1').innerHTML = "0";//Operating Current
			document.getElementById('ilop1').innerHTML = "0";//Operating Power
		}
	}
	loadTwo(){
		document.getElementById('ILN2').innerHTML = this.ILN;
		document.getElementById('ILMV2').innerHTML = this.ILMV;
		document.getElementById('ILMC2').innerHTML = this.ILMC;
		document.getElementById('ilsh2').innerHTML = this.ILN;
		var stat = document.getElementById('inductiveBtnTwo').checked;
		if (stat == true) {
			//status bar
			document.getElementById('ilsw2').style.display = "block";//inductive load status window
			document.getElementById('ilos2').innerHTML = "On";//Operating Status
			document.getElementById('ilov2').innerHTML = this.ILMV+ "v";//Operating Voltage
			document.getElementById('iloc2').innerHTML = this.ILMC+ "A";//Operating Current
			document.getElementById('ilop2').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('ilsw2').style.display = "block";//inductive load status window
			document.getElementById('ilos2').innerHTML = "Off";//Operating Status
			document.getElementById('ilov2').innerHTML = "0";//Operating Voltage
			document.getElementById('iloc2').innerHTML = "0";//Operating Current
			document.getElementById('ilop2').innerHTML = "0";//Operating Power
		}
	}
	loadThree(){
		document.getElementById('ILN3').innerHTML = this.ILN;
		document.getElementById('ILMV3').innerHTML = this.ILMV;
		document.getElementById('ILMC3').innerHTML = this.ILMC;
		document.getElementById('ilsh3').innerHTML = this.ILN;
		var stat = document.getElementById('inductiveBtnThree').checked;
		if (stat == true) {
			//status bar
			document.getElementById('ilsw3').style.display = "block";//inductive load status window
			document.getElementById('ilos3').innerHTML = "On";//Operating Status
			document.getElementById('ilov3').innerHTML = this.ILMV+ "v";//Operating Voltage
			document.getElementById('iloc3').innerHTML = this.ILMC+ "A";//Operating Current
			document.getElementById('ilop3').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('ilsw3').style.display = "block";//inductive load status window
			document.getElementById('ilos3').innerHTML = "Off";//Operating Status
			document.getElementById('ilov3').innerHTML = "0";//Operating Voltage
			document.getElementById('iloc3').innerHTML = "0";//Operating Current
			document.getElementById('ilop3').innerHTML = "0";//Operating Power
		}
	}
	loadFour(){
		document.getElementById('ILN4').innerHTML = this.ILN;
		document.getElementById('ILMV4').innerHTML = this.ILMV;
		document.getElementById('ILMC4').innerHTML = this.ILMC;
		document.getElementById('ilsh4').innerHTML = this.ILN;
		var stat = document.getElementById('inductiveBtnFour').checked;
		if (stat == true) {
			//status bar
			document.getElementById('ilsw4').style.display = "block";//inductive load status window
			document.getElementById('ilos4').innerHTML = "On";//Operating Status
			document.getElementById('ilov4').innerHTML = this.ILMV+ "v";//Operating Voltage
			document.getElementById('iloc4').innerHTML = this.ILMC+ "A";//Operating Current
			document.getElementById('ilop4').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('ilsw4').style.display = "block";//inductive load status window
			document.getElementById('ilos4').innerHTML = "Off";//Operating Status
			document.getElementById('ilov4').innerHTML = "0";//Operating Voltage
			document.getElementById('iloc4').innerHTML = "0";//Operating Current
			document.getElementById('ilop4').innerHTML = "0";//Operating Power
		}
	}
}


var inductiveRuntime = setInterval(inductiveBuffer, 500);
function inductiveBuffer(){
//Load One
var stat1 = document.getElementById('inductiveBtnOne').checked;
let IL1 = new slaveOne("Washing Machine", inductiveLoads[2], inductiveLoads[3]);
const loadOneStat = IL1.loadOne();
let IL2 = new slaveOne("Fridge Unit", inductiveLoads[2], inductiveLoads[3]);
const loadTwoStat = IL2.loadTwo();
let IL3 = new slaveOne("Water Pump", inductiveLoads[2], inductiveLoads[3]);
const loadThreeStat = IL3.loadThree();
let IL4 = new slaveOne("Alarm", inductiveLoads[2], inductiveLoads[3]);
const loadFourStat = IL4.loadFour();
}

