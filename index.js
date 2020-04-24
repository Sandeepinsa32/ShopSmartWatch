
var imgLogo=document.getElementById('fitbit-image-logo');
var img=document.getElementById('fitbit-image');
var imgScreen=document.getElementById('fitbit-screenImg');
var fitScreen=document.getElementById('fitbit-screen');

var skinPink=document.getElementById('skin-pink');
var skinBrown=document.getElementById('skin-brown');
var skinBlack=document.getElementById('skin-black');
var skinOrange=document.getElementById('skin-orange');

var timeBtn=document.getElementById('time-btn');
var heartBtn=document.getElementById('heart-btn');
var glocBtn=document.getElementById('gloc-btn');
var andoBtn=document.getElementById('ando-btn');
var buyBtn=document.getElementById('buy-btn');


// console.log(skinPink);
// console.log(skinBrown);
// console.log(skinBlack);
// console.log(skinOrange);
// console.log(img);


skinPink.addEventListener('click', function(){
	//alert('pink');
	img.src="png/fit_band_pink.png"
	imgLogo.src="png/fit_band_pink.png"
});

skinBrown.addEventListener('click', function(){
		//alert('Brown');
		img.src="png/fit_band_brown.png"
		imgLogo.src="png/fit_band_brown.png"
});

skinBlack.addEventListener('click', function(){
		//alert('black');
		img.src="png/fit_band_black.png"
		imgLogo.src="png/fit_band_black.png"
});

skinOrange.addEventListener('click', function(){
		//alert('Orange');
		img.src="png/fit_band_orange.png"
		imgLogo.src="png/fit_band_orange.png"
});

timeBtn.addEventListener('click', function(){
		//alert(timeBtn);
		imgScreen.src="";
		document.getElementById('heartRate').style.display = 'none';
		document.getElementById('timetext').style.display = 'block';
		document.getElementById('fitbit-screenImg').style.animation= '';
		time();


});

heartBtn.addEventListener('click', function(){
					//var displayStyle=window.getComputedStyle(fitScreen).backgroundImage;
					imgScreen.src="heart.svg";
					document.getElementById('timetext').style.display = 'none';
					document.getElementById('heartRate').style.display = 'block';
					document.getElementById('fitbit-screenImg').style.animation= 'heart 0.5s linear infinite';

					//document.getElementById('fitbit-screen').innerHTML = time_str;
});

glocBtn.addEventListener('click', function(){
			//alert("gloc");
			// var displayStyle=imgScreen.src
			// console.log(displayStyle);
			//	document.getElementById('fitbit-screen').innerHTML = ;
			document.getElementById('timetext').style.display = 'none';
			document.getElementById('heartRate').style.display = 'none';
			document.getElementById('fitbit-screenImg').style.animation= '';
			imgScreen.src="gloc.svg";

});

andoBtn.addEventListener('click', function(){
		//alert("andoBtn");
		document.getElementById('timetext').style.display = 'none';
		document.getElementById('heartRate').style.display = 'none';
		document.getElementById('fitbit-screenImg').style.animation= '';
		imgScreen.src="ando.svg";
});

buyBtn.addEventListener('click', function(){
		confirm('Want to Buy');
});


function time(){
var now     = new Date,
hours   = now.getHours(),
ampm    = hours<12 ? ' AM' : ' PM',
minutes = now.getMinutes(),
seconds = now.getSeconds(),
time_str   = (hours>12) ? [(hours-12), //otherwise: what's the use of AM/PM?
(minutes < 10 ? "0" + minutes : minutes),
(seconds < 10 ? "0" + seconds : seconds)]
.join(":") + ampm
//else part of if condition;
: [(hours),										 //otherwise: what's the use of AM/PM?
(minutes < 10 ? "0" + minutes : minutes),
(seconds < 10 ? "0" + seconds : seconds)]
.join(":") + ampm ;

document.getElementById('timetext').innerHTML = time_str;
setTimeout(time,1000);
return time_str;
}


// function time() {
//   var d = new Date();
//   var h = d.getHours()
//   var m = d.getMinutes();
//   var s = d.getSeconds();
//   var total= h+":"+m+":"+s ;
//   document.getElementById("heart").innerHTML = total;
// setTimeout(time,1000);
// return total
// }
//  time()
//  function time(){
//  var now     = new Date,
//      hours   = now.getHours(),
//      ampm    = hours<12 ? ' AM' : ' PM',
//      minutes = now.getMinutes(),
//      seconds = now.getSeconds(),
//      time_str   = (hours>12) ? [(hours-12), //otherwise: what's the use of AM/PM?
// 			                (minutes < 10 ? "0" + minutes : minutes),
// 			                (seconds < 10 ? "0" + seconds : seconds)]
// 			                 .join(":") + ampm
// 			             							//else part of if condition;
//                   : [(hours),										 //otherwise: what's the use of AM/PM?
// 	                (minutes < 10 ? "0" + minutes : minutes),
// 	                (seconds < 10 ? "0" + seconds : seconds)]
// 	                .join(":") + ampm ;

//  document.getElementById('heart').innerHTML = time_str;
//  setTimeout(time,1000);
//   return time_str;
// }