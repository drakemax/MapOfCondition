
(function() {
window.onload = function() {

// Creating a MapOptions object with the required properties
var options = {
zoom: 19,
center: new google.maps.LatLng(-41.309021,174.814817),
mapTypeId: 'hybrid'
};

// Creating variables for geoJSON file
var MauJson = 'Mau1.geojson'

// Creating the map
var xmap = new google.maps.Map(document.getElementById('xmap'), options);

/*icon.addListener('mouseover', function() {
    infowindow.open(map, this);
});

// assuming you also want to hide the infowindow when user mouses-out
icon.addListener('mouseout', function() {
    infowindow.close();
});    */
 
// NOTE: Load geoJSON file
 //map.data.loadGeoJson('file://C:/Users/drake/Downloads/00Condition/Mau1.geojson');-THIS WORKS IN FIREFOX -NOT IE 11 or Chrome

 xmap.data.loadGeoJson(MauJson);//THIS WORKS IN  IE 11 or Chrome
 // NOTE: Setting x
 var x = 'COND1';

 
 	// Attaching click events to the buttons
	// Year 1
	document.getElementById('Yr1').onclick = function(feature) {
	//xmap.setOptions({
	//mapTypeId: google.maps.MapTypeId.TERRAIN,
	//});
		xmap.data.forEach(function(feature) {
        xmap.data.remove(feature);
    });
	x = 'COND1' ;
	 xmap.data.loadGeoJson(MauJson);
	Big  = (parseFloat(feature.getProperty(x)));
 }
	// Year 5
	document.getElementById('Yr5').onclick = function(feature) {
	//xmap.setOptions({
	//mapTypeId: google.maps.MapTypeId.SATELLITE,
	//});
	xmap.data.forEach(function(feature) {
        xmap.data.remove(feature);
    });
	x = 'COND5' ;
	 xmap.data.loadGeoJson(MauJson);
	Big  = (parseFloat(feature.getProperty(x)));
	}	
	// Year 10
	document.getElementById('Yr10').onclick = function(feature) {

     xmap.data.forEach(function(feature) {
        xmap.data.remove(feature);
    });
	x = 'COND10' ;
	 xmap.data.loadGeoJson(MauJson);
	Big  = (parseFloat(feature.getProperty(x)));
 }
// Year 20
	document.getElementById('Yr20').onclick = function(feature) {
     xmap.data.forEach(function(feature) {
        xmap.data.remove(feature);
    });
	x = 'COND20' ;
	 xmap.data.loadGeoJson(MauJson);
	Big  = (parseFloat(feature.getProperty(x)));
 }
 // Year 30
	document.getElementById('Yr30').onclick = function(feature) {
     xmap.data.forEach(function(feature) {
        xmap.data.remove(feature);
    });
	x = 'COND30' ;
	 xmap.data.loadGeoJson(MauJson);
	Big  = (parseFloat(feature.getProperty(x)));
 }
 
  xmap.data.setStyle(function (feature) {
         		 var cond = (feature.getProperty('Name (uk)'))

	 		var Big  = (parseFloat(feature.getProperty(x)))
			var SizeOfIcon = Big * 3
		 
		  var InColour = "#008000"
		   var OutColour = "#008000"
		var op =.9
		

	if (Big == 1){
		InColour = "#0000FF";
		OutColour = "#00FFFF";}
		if (Big ==2){
		InColour = "#00FF00";
		OutColour = "#008000";}
		if (Big == 3){
		InColour = "#FFFF00";
		OutColour = "#FFA500";
		}
		if (Big == 4){
		InColour = "#FFA500";
		OutColour = "#FFFF00";
		}
		if (Big == 5){
		InColour = "#FF0000";
		OutColour = "#000000";
		}
	//	};
	
	 
  //};
	   
	//!!! MAY HAVE to USE MARKERS -THEN ICONS - TO GET LABELS/TEXT
		//THIS DIDN'T work- Trying to put labels next to Objects to identify them
		// labelContent: "Colour Steel",
		//	labelAnchor: google.maps.Point(22, 0),
			//labelClass: "labels", // the CSS class for the label
			//labelStyle: {opacity: 0.75}
			
			
			
			/* icon: {
              path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: SizeOfIcon,
			  //scale: cond * 2,
            fillColor: InColour,
			  rotation:-45,
              fillOpacity: op,
			  strokeColor:OutColour,
			  strokeWeight: 4
            }*/
			
			var Diamond = {
			   path: 'M -2,0 0,-2 2,0 0,2 z',
				scale: SizeOfIcon,
				 // scale: cond * 2,
					 fillColor: InColour,
					 fillOpacity: op,
				   strokeColor:OutColour,
				  strokeWeight: 1
						}
			var Square = {
			   path: 'M -2,0 0,-2 2,0 0,2 z',
				scale: SizeOfIcon,
				 // scale: cond * 2,
					rotation:-45,
					 fillColor: InColour,
					 fillOpacity: op,
				   strokeColor:OutColour,
				  strokeWeight: 1
						}
			var Triangle = {
			   path: 'm 0,-3 l-3,3 l3,3 z',
			  // path: 'm15 .5 L7.5 20 L22.5 20  z',
				scale: SizeOfIcon,
				 // scale: cond * 2,
					 fillColor: InColour,
				 rotation:90,
					 fillOpacity: op,
				   strokeColor:OutColour,
				  strokeWeight: 1
						}
		 

		 switch(cond){
		  case "Colour Steel":
          		   return ({
          icon:  Triangle
                     });
		  break;  
        
		case "Wall":
          		   return ({
            icon: Square
                      });
		  break;
		case "Paint Wa":
          		   return ({
             icon: Square
                      });
		  break;
		  
		  
		  case "Door":
          		    return ({
          icon:  Diamond 
                     });
		  break;  
		  
			  
		  case "Paint Dr":
          		    return ({
          icon:  Diamond 
                     });
		  break;  
		  
		  case "Window":
          		   return ({
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: SizeOfIcon * 1.7,
			  //scale: cond * 2,
               fillColor: InColour,
			  rotation:135,
              fillOpacity: op,
			   strokeColor:OutColour,
			  strokeWeight: 1
            }
          });
		  break;
		default:
          		   return ({
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: SizeOfIcon * 1.7,
			  //scale: cond * 2,
              fillColor: InColour,
			   rotation:45,
              fillOpacity: op,
			   strokeColor:OutColour,
			  strokeWeight: 1
            }
          });
		  break;
		};
		});
};
})();
