$(document).ready(function() {
	console.log("The document is ready!");

// find the parent element
// append/add to insert content
// added DOM css class to image <class='img13'>
// pulled the images off Google
$( ".image-container").append(
  "<article class='home' data-price='20000'><img class='img13' src='http://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/2/f4/2f4400ca-ef38-5ae5-9bbf-860471c6b419/5115da0fb6166.preview-620.jpg' /><h4>$90,000</h4></article>");

$( ".image-container").append(
  "<article class='home' data-price='20000'><img class='img13' src='http://www.retroweb.com/universal/litb_maxim_house_mistaken_identity.jpg' /><h4>$250,000</h4></article>");

$( ".image-container").append(
  "<article class='home' data-price='20000'><img class='img13' src='https://s-media-cache-ak0.pinimg.com/236x/2d/85/89/2d85894c1defbf8a5690873cfe3fdfe0.jpg' /><h4>$75,000</h4></article>");

// call jQuerry
// add css to <class='img13'> to fit predetermined box sizes
$('.img13').css( {
  'width' : '150px',
  'height' : '150px',
  });




// <span class="dark"></span>
});

