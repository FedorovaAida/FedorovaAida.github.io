$(document).ready(function()
{
  $(".images").slick({slidesToShow:4, slidesToScrol:1,dots: true, responsive:[
      {
        breakpoint: 800,
        settings:
        {
          slidesToShow:3,slidesToScrol:1,
        },
      },
      {
        breakpoint: 480,settings:
        {
          slidesToShow:2,slidesToScrol:1,
        },
      },
      ],
  });
});
