function encontroLeticia()
{
  var possibilidadePrecisa = 6;

  possibilidadeSair(possibilidadePrecisa);
}

function possibilidadeSair(possibilidadePrecisa)
{
  swal({
        title: "De 0 a 10, qual a possibilidade de sairmos essa semana?",
        text: "(⚆ ͜ʖ⚆)",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something" },
        function(inputValue){
          if (inputValue >= possibilidadePrecisa){
              leticiaSaiComigo();
          }
          if (inputValue <= possibilidadePrecisa){
              leticiaTalvezSaia(inputValue);
          }
      });
}

function leticiaSaiComigo()
{
    swal({
          title: "Sério? Vamos sair então? (ง♥ᗜ♥)ง",
          type: "success",
          showCancelButton: true,
          confirmButtonColor: "#26a69a",
          confirmButtonText: "Sim, é sério |⚆ ͜ʖ⚆|",
          cancelButtonText: "Não, perdi a vontade, valeus ¯\\_ツ_/¯",
          closeOnConfirm: false,
          closeOnCancel: false
        },
          function(isConfirm)
          {
            if (isConfirm)
              {
                swal({title: "UHUUUU └[ ͡°ヮ ͡°]┘",
                      text: "Foi enviado ao seu e-mail um convite formal hahaha",
                      imageUrl: "node_modules/sweetalert/example/images/nemo_feliz.jpg",
                      imageSize: "350x350"});
              }
            else
                {
                  swal({title: "AAAAAAAA | ﾟᗝ ﾟ|",
                      text: "Então tabom né | ﾟᨓ ﾟ|",
                      imageUrl: "node_modules/sweetalert/example/images/nemo_triste.jpg",
                      imageSize: "350x350"});
                }
      });
}

function leticiaTalvezSaia(possibilidade)
{
    swal({
          title: "Só " + possibilidade + "? [x⏠x]" ,
          text: "Sou insistente, vamos sair mesmo assim? (◕ᴥ◕)",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#26a69a",
          confirmButtonText: "Beleza chatão, vamos ( ͡° ͟ʖ ͡°)",
          cancelButtonText: "Não, nem to afim, valeus ¯\\_ツ_/¯",
          closeOnConfirm: false,
          closeOnCancel: false
        },
          function(isConfirm)
          {
            if (isConfirm)
              {
                swal({title: "UHUUUU └[◉ヮ◉]┘",
                      text: "Foi enviado ao seu e-mail um convite formal hahaha",
                      imageUrl: "node_modules/sweetalert/example/images/nemo_feliz.jpg",
                      imageSize: "350x350"});
              }
            else
                {
                  swal({title: "AAAAAAAA | ﾟᗝ ﾟ|",
                      text: "Então tabom né | ﾟᨓ ﾟ|",
                      imageUrl: "node_modules/sweetalert/example/images/nemo_triste.jpg",
                      imageSize: "350x350" });
                }
    });
}
