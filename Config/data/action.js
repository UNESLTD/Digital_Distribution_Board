var actionWindow = document.getElementById('window');
var h1 = document.getElementById('actionH1');
var p = document.getElementById('actionP');
var btnVal = document.getElementById('btnVal');
var btnId = document.getElementById('btnId');
class action{
	constructor(gpio_pin, gpio_name){
		this.gpio_pin = gpio_pin;//gpio pin number
		this.gpio_name = gpio_name;//gpio name name		
	}
	initialize(){
		var gpio_pin = this.gpio_pin;
		var gpio_name = this.gpio_name;
		var status = document.getElementById(gpio_name).checked;
		actionWindow.style.display = "block";
		h1.innerHTML = "Alert";
		if (status == true) {
			p.innerHTML = "Are you sure you want to switch On";
			btnId.value = gpio_pin;
			btnVal.value = gpio_name;					
		}else{
			p.innerHTML = "Are you sure you want to switch Off";
			btnId.value = gpio_pin;
			btnVal.value = gpio_name;			
		}
	}
	action(){
		var alrt = document.getElementById('alert');
		var alrtH1 = document.getElementById('alertH1');
		var alrtP = document.getElementById('alertP');
		var x = this.gpio_pin;
		switch(x){
			case 0:
			//close acction window
			actionWindow.style.display = "none";
			//get button value
			var n = btnVal.value;
			var a = document.getElementById(n).checked;
			//set value
			document.getElementById(n).checked = !a;
			break;
			case 1:
			//close acction window
			actionWindow.style.display = "none";
			//get button value
			var n = btnVal.value;
			var a = document.getElementById(n).checked;
			//set value
			document.getElementById(n).checked = a;
			if (a == true) {
				switch(btnId.value){
				case '100':
				let uP = new boot();
				const openUp = uP.up();
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				document.location.href = "#"+n+"/On";
				
				break;
				case '101':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '102':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '103':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '104':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '201':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '202':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '203':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}
				break;
				case '204':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
				document.location.href = "#"+n+"/On";
				alrt.style.display = "block";
				alrt.style.backgroundColor = "lightgreen";
				alrtH1.innerHTML = "Success!";
				alrtP.innerHTML = "Load switched ON Successfully";
				}else{
				alrt.style.display = "block";
				alrt.style.backgroundColor = "red";
				alrtH1.innerHTML = "Warning!";
				alrtP.innerHTML = "Unable to turn On. Ensure Inductive Load is switched On";
				//close acction window
				actionWindow.style.display = "none";
				//get button value
				var n = btnVal.value;
				var a = document.getElementById(n).checked;
				//set value
				document.getElementById(n).checked = !a;
				}
				break;
			}
			}else{
			switch(btnId.value){
				case '101':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Mains Supply is On and try again.";
				}
				break;
				case '102':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Mains Supply is On and try again.";
				}
				break;
				case '103':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Mains Supply is On and try again.";
				}
				break;
				case '104':
				var stat = document.getElementById('main_switch').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Mains Supply is On and try again.";
				}
				break;
				case '201':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Inductive Circuit breaker is On and try again.";
				}
				break;
				case '202':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Inductive Circuit breaker is On and try again.";
				}
				break;
				case '203':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Inductive Circuit breaker is On and try again.";
				}
				break;
				case '204':
				var stat = document.getElementById('inductive_load').checked;
				if (stat == true) {
					document.location.href = "#"+n+"/Off";
					alrt.style.display = "block";
					alrt.style.backgroundColor = "lightgreen";
					alrtH1.innerHTML = "Success!";
					alrtP.innerHTML = "Load switched OFF Successfully";
				}else{
					alrt.style.display = "block";
					alrt.style.backgroundColor = "red";
					alrtH1.innerHTML = "Warning!";
					alrtP.innerHTML = "Ensure that Inductive Circuit breaker is On and try again.";
				}
				break;
			}
			}
			break;
		}
	}
}
function initialize(x, y){
	this.x;
	this.y;
	let init = new action(x, y);
	const openinInit = init.initialize();
}
function execute(x){
	this.x;
	let act = new action(x);
	const openAct = act.action();
}