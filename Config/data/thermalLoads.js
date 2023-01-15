class slaveTwo{
	constructor(TLN, TLMV, TLMC, TLS){
		this.TLN = TLN;//thermal Load Name
		this.TLMV = TLMV;//thermal Load Max Volatage
		this.TLMC = TLMC;//thermal Load Max Current
		this.TLS =TLS;//thermal Load Status
	}
	loadOne(){
		document.getElementById('TLN1').innerHTML = this.TLN;
		document.getElementById('TLMV1').innerHTML = this.TLMV;
		document.getElementById('TLMC1').innerHTML = this.TLMC;
		document.getElementById('TLS1').innerHTML = this.TLS;
		document.getElementById('tlsh1').innerHTML = this.TLN;
		var stat = document.getElementById('thermalBtnOne').checked;
		if (stat == true) {
			//status bar
			document.getElementById('tlsw').style.display = "block";//thermal load status window
			document.getElementById('tlos1').innerHTML = "On";
			document.getElementById('tlov1').innerHTML = this.TLMV+ "V";//Operating Voltage
			document.getElementById('tloc1').innerHTML = this.TLMC;//Operating Current
			document.getElementById('tlop1').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			document.getElementById('tlsw').style.display = "block";//thermal load status window			
			document.getElementById('tlos1').innerHTML = "Off";
			document.getElementById('tlov1').innerHTML = "0";//Operating Voltage
			document.getElementById('tloc1').innerHTML = "0";//Operating Current
			document.getElementById('tlop1').innerHTML = "0";//Operating Power
		}
	}
	loadTwo(){
		document.getElementById('TLN2').innerHTML = this.TLN;
		document.getElementById('TLMV2').innerHTML = this.TLMV;
		document.getElementById('TLMC2').innerHTML = this.TLMC;
		document.getElementById('tlsh2').innerHTML = this.TLN;
		var stat = document.getElementById('thermalBtnTwo').checked;
		if (stat == true) {
			//status bar
			document.getElementById('tlsw2').style.display = "block";//thermal load status window
			document.getElementById('tlos2').innerHTML = "On";//Operating Status
			document.getElementById('tlov2').innerHTML = this.TLMV+ "v";//Operating Voltage
			document.getElementById('tloc2').innerHTML = this.TLMC+ "A";//Operating Current
			document.getElementById('tlop2').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('tlsw2').style.display = "block";//thermal load status window
			document.getElementById('tlos2').innerHTML = "Off";//Operating Status
			document.getElementById('tlov2').innerHTML = "0";//Operating Voltage
			document.getElementById('tloc2').innerHTML = "0";//Operating Current
			document.getElementById('tlop2').innerHTML = "0";//Operating Power
		}
	}
	loadThree(){
		document.getElementById('TLN3').innerHTML = this.TLN;
		document.getElementById('TLMV3').innerHTML = this.TLMV;
		document.getElementById('TLMC3').innerHTML = this.TLMC;
		document.getElementById('tlsh3').innerHTML = this.TLN;
		var stat = document.getElementById('thermalBtnThree').checked;
		if (stat == true) {
			//status bar
			document.getElementById('tlsw3').style.display = "block";//thermal load status window
			document.getElementById('tlos3').innerHTML = "On";//Operating Status
			document.getElementById('tlov3').innerHTML = this.TLMV+ "v";//Operating Voltage
			document.getElementById('tloc3').innerHTML = this.TLMC+ "A";//Operating Current
			document.getElementById('tlop3').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('tlsw3').style.display = "block";//thermal load status window
			document.getElementById('tlos3').innerHTML = "Off";//Operating Status
			document.getElementById('tlov3').innerHTML = "0";//Operating Voltage
			document.getElementById('tloc3').innerHTML = "0";//Operating Current
			document.getElementById('tlop3').innerHTML = "0";//Operating Power
		}
	}
	loadFour(){
		document.getElementById('TLN4').innerHTML = this.TLN;
		document.getElementById('TLMV4').innerHTML = this.TLMV;
		document.getElementById('TLMC4').innerHTML = this.TLMC;
		document.getElementById('tlsh4').innerHTML = this.TLN;
		var stat = document.getElementById('thermalBtnFour').checked;
		if (stat == true) {
			//status bar
			document.getElementById('tlsw4').style.display = "block";//thermal load status window
			document.getElementById('tlos4').innerHTML = "On";//Operating Status
			document.getElementById('tlov4').innerHTML = this.TLMV+ "v";//Operating Voltage
			document.getElementById('tloc4').innerHTML = this.TLMC+ "A";//Operating Current
			document.getElementById('tlop4').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('tlsw4').style.display = "block";//thermal load status window
			document.getElementById('tlos4').innerHTML = "Off";//Operating Status
			document.getElementById('tlov4').innerHTML = "0";//Operating Voltage
			document.getElementById('tloc4').innerHTML = "0";//Operating Current
			document.getElementById('tlop4').innerHTML = "0";//Operating Power
		}
	}
}
var thermalRuntime = setInterval(thermalBuffer, 500);
function thermalBuffer(){
//Load One
var stat1 = document.getElementById('thermalBtnOne').checked;
let TL1 = new slaveTwo("Cooker Unit", thermalLoads[2], thermalLoads[3]);
const TloadOneStat = TL1.loadOne();
let TL2 = new slaveTwo("Deep Fryer", thermalLoads[2], thermalLoads[3]);
const TloadTwoStat = TL2.loadTwo();
let TL3 = new slaveTwo("Micro Wave", thermalLoads[2], thermalLoads[3]);
const TloadThreeStat = TL3.loadThree();
let TL4 = new slaveTwo("Air Conditioning", thermalLoads[2], thermalLoads[3]);
const TloadFourStat = TL4.loadFour();
}