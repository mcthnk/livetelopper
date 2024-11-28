var yyyymmddhhmiss = function() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = toDoubleDigits(date.getMonth() + 1);
    var dd = toDoubleDigits(date.getDate());
    var hh = toDoubleDigits(date.getHours());
    var mi = toDoubleDigits(date.getMinutes());
    var ss = toDoubleDigits(date.getSeconds());
    var hhutc = toDoubleDigits(date.getUTCHours());
    var miutc = toDoubleDigits(date.getUTCMinutes());
    var ssutc = toDoubleDigits(date.getUTCSeconds());
    var element = document.getElementById("clock");
    var years = document.getElementById("yearstelop");
    var dayz = document.getElementById("daystelop");
    element.innerHTML =  hh + ':' + mi;
    years.innerHTML = yyyy;
    dayz.innerHTML = mm + '/' + dd;

  //   if(ss<30){
  //     element.innerHTML =  hh + ':' + mi;
  //     document.getElementById("zone").textContent = "JST"
  //   }else{
  //     element.innerHTML =  hhutc + ':' + miutc;
  //     document.getElementById("zone").textContent = "GMT"
  //   }
  };
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(yyyymmddhhmiss, 100);