function emiCal(){
  var name = document.getElementById("Name");
  document.getElementById("test").innerHTML = "Just testing";
  alert(name);
  var R = document.getElementById("Rate")/1200;
  var P = document.getElementById("Amount");
  var T = document.getElementById("Time");
  var finalRate = P*R*T;
  var finR = finalRate.toString();
  console.log(name+' '+finR);
  localStorage.setItem("NAME", document.getElementById("Name"));
  localStorage.setItem("FINAL", finR);
  document.getElementById('h1_id').innerHTML = "Hey "+localStorage.getItem("NAME");
  document.getElementById('h2_id').innerHTML = "You have to pay"+ localStorage.getItem("NAME") + "per month.";

  return false;
}