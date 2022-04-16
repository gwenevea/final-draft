//document.querySelector("#darkmode").addEventListener("click", function () {
	//console.log("Going dark mode");
	//document.body.classList.add('dark-mode');
//});


//document.querySelector("#darkmode").addEventListener("click", function () {
	//console.log("Going dark mode");
	//document.body.classList.add('dark-mode');
    //document.querySelector('#darkmode').innerHTML = "Light Mode";
//});

document.querySelector("#darkmode").addEventListener("click", function () {
    if ((document.querySelector('#darkmode').innerHTML) == "Dark Mode") {
        console.log("Going dark mode");
        document.body.classList.add('dark-mode');
        document.querySelector('#darkmode').innerHTML = "Light Mode";
    }

    else {
        console.log("Going light mode");
        document.body.classList.remove('dark-mode');
        document.querySelector('#darkmode').innerHTML = "Dark Mode";
    }

});


//function darkMode() {
    //var element = document.body;
    //element.classList.toggle("dark-mode");
  //};