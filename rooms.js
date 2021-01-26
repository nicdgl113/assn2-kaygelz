/// author:kaylee gelz
/// date:jan 19
/// assn:1
"use strict";
var roomRate = prompt("What's your room's daily rate?");
var GST = roomRate * 0.05;
var PST = roomRate * 0.08;
// variables calculated
let ele = document.getElementById("main")
ele.innerHTML = "Your room rate is $" + roomRate + ", GST is $" + GST + ", PST is $" + PST;