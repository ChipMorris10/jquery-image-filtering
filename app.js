$(document).ready(function() {
	console.log("The document is ready!");

  // ----------- T A S K  1 -------------
  // find the parent element
  // append/add to insert content
  // added DOM css class to image <class='img13'>
  // created a new class in order to get proper sizing
  // pulled the images off Google
  $( ".image-container").append(
    "<article class='home' data-price='20000'><img class='img13' src='http://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/2/f4/2f4400ca-ef38-5ae5-9bbf-860471c6b419/5115da0fb6166.preview-620.jpg' /><h4>$90,000</h4></article>");

  $( ".image-container").append(
    "<article class='home' data-price='20000'><img class='img13' src='http://www.retroweb.com/universal/litb_maxim_house_mistaken_identity.jpg' /><h4>$250,000</h4></article>");

  $( ".image-container").append(
    "<article class='home' data-price='20000'><img class='img13' src='https://s-media-cache-ak0.pinimg.com/236x/2d/85/89/2d85894c1defbf8a5690873cfe3fdfe0.jpg' /><h4>$75,000</h4></article>");


  // ----------- T A S K  2 -------------
  // call jQuery
  // add css to <class='img13'> to fit predetermined box sizes
  $('.img13').css( {
    'width' : '150px',
    'height' : '150px',
  });

  // call jQuery
  // on click add css to <class='dark'> to change background color
  $('.dark').on('click', function() {
    $('body').css( {
      'background' : '#000 url(img/dark_wood.png) repeat'
    });
  });

  // call jQuery
  // on click add css to <class='light'> to change background color
  $('.light').on('click', function() {
    $('body').css( {
      'background' : '#000 url(img/tileable_wood_texture.png) repeat'
    });
  });

  // ----------- T A S K  3 -------------

// call jQuery
// add <class='forest' to the top row
  $( ".textures").append(
    "<span class='forest'></span>");


// call jQuery
// on click call the css function
// perform background css
  $('.forest').on('click', function() {
    $('body').css( {
      'background-color' : '#000',
      'background-image' : 'url(img/forest.jpg',
      'background-repeat' : 'repeat'
      // 'background' : '#000 url(img/forest.jpg) repeat'
    });
  });

// call jQuery
// use css to change the width of the textures box
  $( ".textures").css( {
    'width' : '150px'
  });

// call jQuery
// perform background css to the forest image
  $( "span.forest").css( {
    // 'background' : '#000 url(img/forest.jpg) repeat',
    'background-color' : '#000',
    'background-image' : 'url(img/forest.jpg)',
    'background-repeat' : 'repeat',
    'background-size' : 'contain'
  });



}); // end document(function)







