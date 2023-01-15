class slaveThree{
	constructor(SON, SOMV, SOMC, SOS){
		this.SON = SON;//socketOutlet Load Name
		this.SOMV = SOMV;//socketOutlet Load Max Volatage
		this.SOMC = SOMC;//socketOutlet Load Max Current
		this.SOS =SOS;//socketOutlet Load Status
	}
	loadOne(){
		document.getElementById('SON1').innerHTML = this.SON;
		document.getElementById('SOMV1').innerHTML = this.SOMV;
		document.getElementById('SOMC1').innerHTML = this.SOMC;
		document.getElementById('SOS1').innerHTML = this.SOS;
		document.getElementById('sosh1').innerHTML = this.SON;
		var stat = document.getElementById('socketOutletBtnOne').checked;
		if (stat == true) {
			//status bar
			document.getElementById('sosw').style.display = "block";//socketOutlet load status window
			document.getElementById('soos1').innerHTML = "On";
			document.getElementById('soov1').innerHTML = this.SOMV+ "V";//Operating Voltage
			document.getElementById('sooc1').innerHTML = this.SOMC;//Operating Current
			document.getElementById('soop1').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			document.getElementById('sosw').style.display = "block";//socketOutlet load status window			
			document.getElementById('soos1').innerHTML = "Off";
			document.getElementById('soov1').innerHTML = "0";//Operating Voltage
			document.getElementById('sooc1').innerHTML = "0";//Operating Current
			document.getElementById('soop1').innerHTML = "0";//Operating Power
		}
	}
	loadTwo(){
		document.getElementById('SON2').innerHTML = this.SON;
		document.getElementById('SOMV2').innerHTML = this.SOMV;
		document.getElementById('SOMC2').innerHTML = this.SOMC;
		document.getElementById('sosh2').innerHTML = this.SON;
		var stat = document.getElementById('socketOutletBtnTwo').checked;
		if (stat == true) {
			//status bar
			document.getElementById('sosw2').style.display = "block";//socketOutlet load status window
			document.getElementById('soos2').innerHTML = "On";//Operating Status
			document.getElementById('soov2').innerHTML = this.SOMV+ "v";//Operating Voltage
			document.getElementById('sooc2').innerHTML = this.SOMC+ "A";//Operating Current
			document.getElementById('soop2').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('sosw2').style.display = "block";//socketOutlet load status window
			document.getElementById('soos2').innerHTML = "Off";//Operating Status
			document.getElementById('soov2').innerHTML = "0";//Operating Voltage
			document.getElementById('sooc2').innerHTML = "0";//Operating Current
			document.getElementById('soop2').innerHTML = "0";//Operating Power
		}
	}
	loadThree(){
		document.getElementById('SON3').innerHTML = this.SON;
		document.getElementById('SOMV3').innerHTML = this.SOMV;
		document.getElementById('SOMC3').innerHTML = this.SOMC;
		document.getElementById('sosh3').innerHTML = this.SON;
		var stat = document.getElementById('socketOutletBtnThree').checked;
		if (stat == true) {
			//status bar
			document.getElementById('sosw3').style.display = "block";//socketOutlet load status window
			document.getElementById('soos3').innerHTML = "On";//Operating Status
			document.getElementById('soov3').innerHTML = this.SOMV+ "v";//Operating Voltage
			document.getElementById('sooc3').innerHTML = this.SOMC+ "A";//Operating Current
			document.getElementById('soop3').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('sosw3').style.display = "block";//socketOutlet load status window
			document.getElementById('soos3').innerHTML = "Off";//Operating Status
			document.getElementById('soov3').innerHTML = "0";//Operating Voltage
			document.getElementById('sooc3').innerHTML = "0";//Operating Current
			document.getElementById('soop3').innerHTML = "0";//Operating Power
		}
	}
	loadFour(){
		document.getElementById('SON4').innerHTML = this.SON;
		document.getElementById('SOMV4').innerHTML = this.SOMV;
		document.getElementById('SOMC4').innerHTML = this.SOMC;
		document.getElementById('sosh4').innerHTML = this.SON;
		var stat = document.getElementById('socketOutletBtnFour').checked;
		if (stat == true) {
			//status bar
			document.getElementById('sosw4').style.display = "block";//socketOutlet load status window
			document.getElementById('soos4').innerHTML = "On";//Operating Status
			document.getElementById('soov4').innerHTML = this.SOMV+ "v";//Operating Voltage
			document.getElementById('sooc4').innerHTML = this.SOMC+ "A";//Operating Current
			document.getElementById('soop4').innerHTML = "0";//Operating Power
		} else if (stat == false) {
			//status bar
			document.getElementById('sosw4').style.display = "block";//socketOutlet load status window
			document.getElementById('soos4').innerHTML = "Off";//Operating Status
			document.getElementById('soov4').innerHTML = "0";//Operating Voltage
			document.getElementById('sooc4').innerHTML = "0";//Operating Current
			document.getElementById('soop4').innerHTML = "0";//Operating Power
		}
	}
}


var socketOutletRuntime = setInterval(socketOutletBuffer, 500);
function socketOutletBuffer(){
//Load One
var stat1 = document.getElementById('socketOutletBtnOne').checked;
let SO1 = new slaveThree("Television Set", socketOutlet[2], socketOutlet[3]);
const loadOneStat = SO1.loadOne();
let SO2 = new slaveThree("Home Theater", socketOutlet[2], socketOutlet[3]);
const loadTwoStat = SO2.loadTwo();
let SO3 = new slaveThree("Decoder / Cable", socketOutlet[2], socketOutlet[3]);
const loadThreeStat = SO3.loadThree();
let SO4 = new slaveThree("Charger Units", socketOutlet[2], socketOutlet[3]);
const loadFourStat = SO4.loadFour();
}