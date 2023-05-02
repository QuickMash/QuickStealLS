let fakeAd = document.createElement("div");
fakeAd.className =
"textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
	
fakeAd.style.height = "1px"
	
document.body.appendChild(fakeAd)
	
let x_width = fakeAd.offsetHeight;
let msg = document.getElementById("msg")
	
	
	if(x_width){
	console.log("No AdBlocker Detected")
	}else{
	alert("Please Disable your adblocker");
	}
