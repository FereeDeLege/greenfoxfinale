let data1 = {
    photo: 'images/Oip1.jpg',
    title: 'My Meadow with shadow',
    description: 'Imagine a place where you would like to live'
  };

let data2 = {
    photo: 'images/Oip2.jpg',
    title: 'Sunset but not a boulevard',
    description: 'Imagine a place where you would like to live'
  };

let data3 = {
    photo: 'images/Oip3.jpg',
    title: 'Sea among the hills',
    description: 'Imagine a place where you can find your inner peace'
  };

let data4 = {
    photo: 'images/Oip4.jpg',
    title: 'A dead end of sea',
    description: 'Imagine a place where you can find your path back to the ground'
  };

let data5 = {
    photo: 'images/Oip5.jpg',
    title: 'Fyord, hills, trees',
    description: 'Imagine a place where you can see the meeting point of water and land'
  };

let data6 = {
    photo: 'images/Oip6.jpg',
    title: 'Sunset above the river',
    description: 'Imagine a place where you can see the sunset above the river'
  };

let data7 = {
    photo: 'images/Oip7.jpg',
    title: 'A good backview',
    description: 'A good backview to remember your best memories at the end of this summer'
  };

let data8 = {
    photo: 'images/Oip8.jpg',
    title: 'Ducks in the pond and clouds',
    description: 'A beautiful place where you can wait for the arriving ducks'
  };

  let currentPhoto = 0;
  let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
  $('.stage').attr('src', imagesData[0].photo);
  
  let loadPhoto = (photoNumber) => {
      $('.stage').attr('src', imagesData[0].photo); }
  
  loadPhoto(currentPhoto);
  
  $('#right-arrow').click(() => {
      currentPhoto++;
      loadPhoto(currentPhoto);
  })
  
  /*
  $(document).ready(function(){
    $("button").click(function(){
      $("#oip1").load("images/Oip1.jpg");
    });
  });
  */

/* $('#oip1').attr('images/Oip1.jpg', data.photo); 

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
$('.stage').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('.stage').attr('src', imagesData[0].photo); }

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
})
*/