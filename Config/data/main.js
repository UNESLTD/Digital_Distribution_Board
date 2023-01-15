//BOOTLOADER
//INSTALLATION
var currentinstallTab = 0; // Current installTab is set to be the first installTab (0)
showinstallTab(currentinstallTab); // Display the current installTab

function showinstallTab(n) {
  // This function will display the specified installTab of the form...
  var x = document.getElementsByClassName("installTab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("startBtn").style.display = "none";

  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";    
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  if (n == 4) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("installSteps").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which installTab to display
  var x = document.getElementsByClassName("installTab");
  // Exit the function if any field in the current installTab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current installTab:
  x[currentinstallTab].style.display = "none";
  // Increase or decrease the current installTab by 1:
  currentinstallTab = currentinstallTab + n;
  // if you have reached the end of the form...
  if (currentinstallTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct installTab:
  showinstallTab(currentinstallTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("installTab");
  y = x[currentinstallTab].getElementsByTagName("input");
  // A loop that checks every input field in the current installTab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentinstallTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
// END INSTALLTION MENU
//END BOOTLOADER

//MAIN CONTENT
function menuTab(tabName,elmnt) {
  var i, tab;
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("home").click();
//END MAIN CONTENT


//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//END ACCORDION


//ACTION
function openSettingsTab(evt, settingsName) {
  var i, settingsTabContent, settingsTabLinks;
  settingsTabContent = document.getElementsByClassName("settingsTabContent");
  for (i = 0; i < settingsTabContent.length; i++) {
    settingsTabContent[i].style.display = "none";
  }
  settingsTabLinks = document.getElementsByClassName("settingsTabLinks");
  for (i = 0; i < settingsTabLinks.length; i++) {
    settingsTabLinks[i].className = settingsTabLinks[i].className.replace(" active", "");
  }
  document.getElementById(settingsName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//END ACTION


//Footer Menu
const list=document .querySelectorAll('.list');
function activeLink(){
	list .forEach((item)=>
	item .classList .remove('active'));
	this .classList .add('active');
}
list .forEach((item)=>
item .addEventListener('click',activeLink));
//END FOOTER