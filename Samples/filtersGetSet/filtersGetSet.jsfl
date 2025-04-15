/********************************************************************
ADOBE CONFIDENTIAL
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
********************************************************************/



//add all filters, 2 blur filters

fl.getDocumentDOM().addFilter('dropShadowFilter');
fl.getDocumentDOM().addFilter('glowFilter');
fl.getDocumentDOM().addFilter('blurFilter');
fl.getDocumentDOM().addFilter('bevelFilter');
fl.getDocumentDOM().addFilter('gradientBevelFilter');
fl.getDocumentDOM().addFilter('gradientGlowFilter');
fl.getDocumentDOM().addFilter('adjustColorFilter');
fl.getDocumentDOM().addFilter('blurFilter');

var filterArray = fl.getDocumentDOM().getFilters();

var tracestr = "";

for(i=0; i < filterArray.length; i++){
	tracestr = tracestr + "\n==============================" + "\n name: " + filterArray[i].name;
	if (filterArray[i].name != "adjustColorFilter"){
		tracestr = tracestr + "\n blurX: " + filterArray[i].blurX + "\n blurY: " + filterArray[i].blurY + "\n quality: " + filterArray[i].quality;
		if (filterArray[i].name != "blurFilter"){
			tracestr = tracestr + "\n strength: " + filterArray[i].strength + "\n knockout: " + filterArray[i].knockout;
			if (filterArray[i].name != "glowFilter"){
				tracestr = tracestr + "\n angle: " + filterArray[i].angle + "\n distance: " + filterArray[i].distance;
			}
			if (filterArray[i].name != "glowFilter" && filterArray[i].name != "dropShadowFilter"){
				tracestr = tracestr + "\n type: " + filterArray[i].type;
			} else {
				tracestr = tracestr +"\n color: " + filterArray[i].color + "\n inner: " + filterArray[i].inner;
		    }
			if (filterArray[i].name == "bevelFilter"){
				tracestr = tracestr + "\n shadowColor: " + filterArray[i].shadowColor + "\n highlightColor: " + filterArray[i].highlightColor;  
	        } 
			if (filterArray[i].name == "dropShadowFilter"){
				tracestr = tracestr + "\n hideObject: " + filterArray[i].hideObject;
			}
			if (filterArray[i].name == "gradientGlowFilter"){
				if (filterArray[i].colorArray.length > 0){
					tracestr = tracestr + "\n colorArray= [ ";
					for (j=0; j<filterArray[i].colorArray.length; j++){
						tracestr = tracestr + filterArray[i].colorArray[j];
						if (j != (filterArray[i].posArray.length - 1)){
							tracestr = tracestr + ", ";
						}
					}
					tracestr = tracestr + " ]";
					tracestr = tracestr + "\n posArray= [ ";
					for (j=0; j<filterArray[i].posArray.length; j++){
						tracestr = tracestr + filterArray[i].posArray[j];
						if (j != (filterArray[i].posArray.length - 1)){
							tracestr = tracestr + ", ";
						}
					}
					tracestr = tracestr + " ]";
				}
			}
			if (filterArray[i].name == "gradientBevelFilter"){
				if (filterArray[i].colorArray.length > 0){
					tracestr = tracestr + "\n colorArray= [ ";
					for (j=0; j<filterArray[i].colorArray.length; j++){
						tracestr = tracestr + filterArray[i].colorArray[j];
						if (j != (filterArray[i].posArray.length - 1)){
							tracestr = tracestr + ", ";
						}
					}
					tracestr = tracestr + " ]";
					tracestr = tracestr + "\n posArray= [ ";
					for (j=0; j<filterArray[i].posArray.length; j++){
						tracestr = tracestr + filterArray[i].posArray[j];
						if (j != (filterArray[i].posArray.length - 1)){
							tracestr = tracestr + ", ";
						}
					}
					tracestr = tracestr + " ]";
				}
			}
			
		}
	} else {
		tracestr = tracestr + "\n brightness: " + filterArray[i].brightness + "\n contrast : " +filterArray[i].contrast + "\n saturation: " + filterArray[i].saturation + "\n hue: " + filterArray[i].hue + "\n==============================";
    }
}
fl.trace(tracestr);

// change filters properties 
for(i=0; i < filterArray.length; i++){
	if (filterArray[i].name == "dropShadowFilter"){
		filterArray[i].blurX = 15.5;
		filterArray[i].blurY = 50.8;
		filterArray[i].quality = "medium";
		filterArray[i].strength = 150;
		filterArray[i].knockout = true;
		filterArray[i].angle = 180.5;
		filterArray[i].distance = 10.334;
		filterArray[i].color = '#FF9933';
		filterArray[i].inner = true;
		filterArray[i].hideObject = true;
	}
	if (filterArray[i].name == "blurFilter"){
		filterArray[i].blurX = 20.1;
		filterArray[i].blurY = 100.0;
		filterArray[i].quality = "high";
	}
	if (filterArray[i].name == "glowFilter"){
		filterArray[i].blurX = 15.5;
		filterArray[i].blurY = 50.8;
		filterArray[i].quality = "high";
		filterArray[i].strength = 200;
		filterArray[i].knockout = true;
		filterArray[i].color = '#33FF00';
		filterArray[i].inner = true;
	}
	if (filterArray[i].name == "bevelFilter"){
		filterArray[i].blurX = 10;
		filterArray[i].blurY = 15.5;
		filterArray[i].quality = "medium";
		filterArray[i].strength = 110;
		filterArray[i].knockout = true;
		filterArray[i].angle = 45.5;
		filterArray[i].distance = 7.3;
		filterArray[i].shadowColor = '#00FF00';
		filterArray[i].highlightColor = '#9900FF';
		filterArray[i].type = "full";
	}
	if (filterArray[i].name == "gradientGlowFilter"){
		filterArray[i].blurX = 15.5;
		filterArray[i].blurY = 50.8;
		filterArray[i].quality = "medium";
		filterArray[i].strength = 150;
		filterArray[i].knockout = true;
		filterArray[i].angle = 180.5;
		filterArray[i].distance = 10.334;
		filterArray[i].colorArray = [  '#00ff0000', '#9900FF', '#ff00003e', '#ffffff3b', '#c4ffc452' ];
		filterArray[i].posArray = [ 0, 45, 100, 130, 255];
		filterArray[i].type = "outer";
	}	
	if (filterArray[i].name == "gradientBevelFilter"){
		filterArray[i].blurX = 15.5;
		filterArray[i].blurY = 50.8;
		filterArray[i].quality = "high";
		filterArray[i].strength = 150;
		filterArray[i].knockout = true;
		filterArray[i].angle = 180.5;
		filterArray[i].distance = 10.334;
		filterArray[i].colorArray = [  '#66333371', '#9900FF', '#ffff0000', '#990066b8', '#6666FF33', '#c4ffc452' ];
		filterArray[i].posArray = [ 0, 30, 128, 60, 187, 255];
		filterArray[i].type = "full";
	}	
	if (filterArray[i].name == "adjustColorFilter"){
		filterArray[i].brightness = 30.593;
		filterArray[i].contrast = -10.5;
		filterArray[i].saturation = -20.555;
		filterArray[i].hue = -120;
	}
}
fl.getDocumentDOM().setFilters(filterArray);  
