	var singleFamilyHomesArray = [

    {
      "address": "1313 Mockingbird Lane",
      "description": "Gorgeous old Victorian manor house. Needs TLC, but has immense potential.",
      "asking": "200,000.00",
      "features": [ 'Historic register', 'Garage', 'Privacy fence' ]
    },

    {
      "address": "1619 Pine Street",
      "description": "Eclectic 3-story house with charm and character.",
      "asking": "250,000.00",
      "features": [ 'Garage', 'Pool' ]
    },

    {
      "address": "11222 Dilling Street",
      "description": "Modern architecture and open design. Perfect for a growing family.",
      "asking": "375,000.00",
      "features": [ 'Circular drive', 'Split-level', 'Finished attic' ]
    }

  ];
   
   var multiFamilyHomesArray = [

    {
      "address": "21 Chester Place",
      "description": "Stately and elegant dwelling in a quiet suburban neighborhood. Owner lives on the ground floor and rents the upstairs apartment.",
      "asking": "350,000.00",
      "features": [ 'Professional landscapting', 'Fenced back yard' ]
    },

    {
      "address": "2314 Rose Avenue",
      "description": "Unassuming exterior hides recently-updated living spaces. First- and second-floor apartments have two bedrooms; basement is an efficiency with separate entrance.",
      "asking": "425,000.000",
      "features": [ 'Recently renovated', 'Upgraded electric', 'Appliances included' ]      
    }

  ];
	var commercialArray = [

    {
      "address": "348 E Main Street",
      "description": "Open office with several suites. Ideal for multiple tenants.",
      "asking": "800,000.00",
      "features": [ 'Parking lot', 'Shop area', 'High-speed internet' ]
    },

    {
      "address": "84 Beacon Street",
      "description": "Corner location, ideal for restaurant or bar, with private parking lot and outdoor seating.",
      "asking": "600,000.00",
      "features": [ 'Parking lot', 'Equpped kitchen', 'Patio', 'Security system' ]
    }

  ];


// function to display lisiting information for single-family homes

singleFamilyHomesFunction(singleFamilyHomesArray)

 function singleFamilyHomesFunction(arr) {
 	var output = "";
 	var i;
 	for(i = 0; i <arr.length; i++) {
 		output += '<p>' + "<b>Address:</b> " + arr[i].address + '<br>' + "<b>Description: </b>" + arr[i].description + '<br>' 
 		+ "<b>Asking: </b>" + arr[i].asking + '<br>' + "<b>Features: </b>" + arr[i].features + '</p><hr>';
 	}
 	document.getElementById("singleFamily").innerHTML = output;
  }

// function to display lisiting information for multi-family homes

multiFamilyHomesFunction(multiFamilyHomesArray)

 function multiFamilyHomesFunction(arr) {
 	var output = "";
 	var i;
 	for(i = 0; i <arr.length; i++) {
 		output += '<p>' + "<b>Address:</b> " + arr[i].address + '<br>' + "<b>Description: </b>" + arr[i].description + '<br>' 
 		+ "<b>Asking: </b>" + arr[i].asking + '<br>' + "<b>Features: </b>" + arr[i].features + '</p><hr>';
 	}
 	document.getElementById("multiFamily").innerHTML = output;
  }

  // function to display lisiting information for commercial listings

commercialFunction(commercialArray)

 function commercialFunction(arr) {
 	var output = "";
 	var i;
 	for(i = 0; i <arr.length; i++) {
 		output += '<p>' + "<b>Address:</b> " + arr[i].address + '<br>' + "<b>Description: </b>" + arr[i].description + '<br>' 
 		+ "<b>Asking: </b>" + arr[i].asking + '<br>' + "<b>Features: </b>" + arr[i].features + '</p><hr>';
 	}
 	document.getElementById("commercial").innerHTML = output;
  }
