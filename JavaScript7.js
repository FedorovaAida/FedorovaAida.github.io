$(document).ready(function() {
  $(".slider").slick({
    slidesToShow:4,
     slidesToScrol:1,
    dots: true,
    responsive:[
      {
        breakpoint: 560,
        settings:{
          slidesToShow:3,
     slidesToScrol:1,
        },
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow:2,
     slidesToScrol:1,
        },
      },
      ],
  });
});
