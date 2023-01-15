//Intake point is the default electrical supply installation system direct from Supply Mains
class intakePoint {
  constructor(id, name, maxVoltage, maxCurrent,loadStatus) {
    this.id = id; //GPIO NUMBER OF ESP 12-F
    this.name = name;//DEFAULT NAME OF THE GPIO PIN
    this.maxVoltage = maxVoltage;//NATIONAL GRID EAST AFRICA (240 V DEFAULT)
    this.maxCurrent = maxCurrent;//NATIONAL GRID EAST AFRICA (80 A DEFAULT)
    this.loadStatus = loadStatus;//GPIO PIN STATUS (REFRESH AFTER 5 SECONDS)
  }
  solarEnergy() {
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
  //Mains supply Circuit Breaker
  mainSwitch() { //MAIN SWITCH SUPPLY
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
  //Inductive Loads Circuit Breaker
  inductiveLoads() {
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
  //THERMAL LOADS
  thermalLoads() {
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
  socketOutlet() {
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
  light() {
    let GPIO = this.id;
    let name = this.name;
    let maxVoltage = this.maxVoltage;
    let maxCurrent = this.maxCurrent;
    let loadStatus = this.loadStatus;
    const mainSwitch = [GPIO, name, maxVoltage, maxCurrent, loadStatus];
    return mainSwitch;
  }
}
//DEFAULT SETTINGS
let mainSwitchOn = new intakePoint(0, "ACTIVE", 240, 80, 1);
let balanced = new intakePoint(100,"SOLAR POWER", 240, 80, 1);
let loadOne = new intakePoint(100, "Main Switch", 240, 80, 1);
let loadTwo = new intakePoint(101, "Inductive Loads", 240, 35, 0);
let loadThree = new intakePoint(103, "Thermal Loads", 240, 30, 0);
let loadFour = new intakePoint(104, "Socket Outlet", 240, 16, 0);
let loadFive = new intakePoint(105, "Light");
const solar = balanced.solarEnergy();
const mainSwitch = loadOne.mainSwitch();
const inductiveLoads = loadTwo.inductiveLoads();
const thermalLoads = loadThree.thermalLoads();
const socketOutlet = loadFour.socketOutlet();
const light = loadFive.light();






