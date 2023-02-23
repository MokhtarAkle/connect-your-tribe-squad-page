let elem = document.querySelector('.card-area');


  let msnry = new Masonry( elem, {
    itemSelector: '.card-container',
    columnWidth: 'card-sizer',
    percentPosition: true
  });
  
  imagesLoaded( elem ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });