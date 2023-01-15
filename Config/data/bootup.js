//BOOTUP
class boot{
  constructor() {
  }
  up(){
    var i = 0;
    var txt = document.getElementById('loaderTXT');
      if (i == 0) {
        i = 1;
        document.getElementById("loadWindow").style.display = "block";
        document.getElementById("loader").style.display = "block";
        var x = 1;
        var id = setInterval(frame, 50);
        function frame() {
          if (x >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            x++;
            if (x == 2) {
              txt.innerHTML = "Umeme Networks PLC";
            }
            if (x == 10) {
              txt.innerHTML = "Itake Point Loading...";
            }
            if (x == 20) {
              txt.innerHTML = "Inductive Loads Loading...";
            }
            if (x == 30) {
              txt.innerHTML = "Thermal Loads Loading...";
            }
            if (x == 40) {
              txt.innerHTML = "Other Appliences Loading...";
            }
            if (x == 50) {
              txt.innerHTML = "Lights Loading...";
            }
            if (x == 60) {
              txt.innerHTML = "Security Loading...";
            }
            if (x == 70) {
              txt.innerHTML = "Luxury Effects Loading...";
            }
            if (x == 80) {
              txt.innerHTML = "Turning On Main Supply";
            }
            if (x == 90) {
              //document.getElementById("main_switch").click();
              txt.innerHTML = "Loading...";
            }
            if (x == 100) {
              document.getElementById("loadWindow").style.display = "none";
              document.getElementById("loader").style.display = "none";
            }
          }
        }
      }
  }
}