//the first div
const elementBall = document.getElementById("ball");
elementBall.style.cssText = `  border-radius: 50%;
height: 100px;
width: 100px;
background-image: radial-gradient(green, blue, yellow);
border: dashed black 3px;`;
//second div
const personalInfo = document.getElementById("info");
personalInfo.innerHTML = `<ul>
<li>Dani Matis</li>
<li>31 years old</li>
<li>student</li>
<li>neve yaakov</li>
</ul>`;
//third div
const carMercedes = {
  title: " Mercedes",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};
const sportsCarElement = document.getElementById("car");
sportsCarElement.innerHTML = `<div class="card">
<div class="card-header">  
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
  <li class="list-group-item"></li>
</ul>
</div>`;
sportsCarElement.children["0"].children["0"].innerHTML = carMercedes.title;
const carDetails = sportsCarElement.children["0"].children["1"];
carDetails.children["0"].innerHTML = "Price " + carMercedes.price;
carDetails.children["1"].innerHTML = "Owners " + carMercedes.hand;
carDetails.children["2"].innerHTML = "Kilometers " + carMercedes.km;
carDetails.children["3"].innerHTML = "Year  " + carMercedes.year;
// sportsCarElement.children["0"].
//fourth div
const bootstrapElement = document.getElementById("red");
bootstrapElement.className = "bg-danger";
bootstrapElement.style.cssText = "height: 50px; width: 50px";
