$(document).ready(function () {
  String.prototype.convertToRGB = function () {
    if (this.length != 6) {
      throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
    return aRgb;
  };
  let initialColor = "#55b9f3".substring(1).convertToRGB();
  let shadowColor = initialColor.toString();
  let output = [initialColor[0]];
  for (let i = 1; i < initialColor.length; i++) {
    output.push(initialColor[i] + 20);
  }
  output = output.toString();
  console.log(output);

  $(document).on("input", "#color", function () {
    let shadowColorArray = `${$(this).val()}`.substring(1).convertToRGB();
    shadowColor = shadowColorArray.toString();
    console.log(shadowColor);
    $(".square").css("background", `rgba(${shadowColor})`);
    $("#slider_color").html(`rgba(${shadowColor})`);
    $(".square").css("box-shadow", `11px 22px rgba(${shadowColor}), -11px -11px 22px rgba(${shadowColor})`);
    $('.box').css("box-shadow", `0px 22px 24px rgba(${shadowColor})`);
    $("#slider_shadow").html(`11px 22px rgba(${shadowColor}), -11px -11px 22px rgba(${shadowColor})`);
  });
  $(document).on("input", "#height-width", function () {
    $("#slider_width").html($(this).val());
    $("#slider_height").html($(this).val());
    $(".square").width($(this).val()).height($(this).val());
    //console.log(`${$(this).val()}px`);
  });
  $(document).on("input", "#radius", function () {
    $(".square").css("border-radius", `${$(this).val()}px`);
    $("#slider_radius").html(`${$(this).val()}px`);
    //console.log(`${$(this).val()}px`);
  });
  $(document).on("input", "#shadow", function () {
    let alpha = $(this).val() / 20;
    $(".square").css(
      "box-shadow",
      `${$(this).val()}px ${
        $(this).val() * 2
      }px rgba(${shadowColor},${alpha}), ${$(this).val() * -1}px ${
        $(this).val() * -1
      }px ${$(this).val() * 2}px rgba(${shadowColor},${alpha})`
    );
    $("#slider_shadow").html(
      `${$(this).val()}px ${
        $(this).val() * 2
      }px rgba(${shadowColor},${alpha}), ${$(this).val() * -1}px ${
        $(this).val() * -1
      }px ${$(this).val() * 2}px rgba(${shadowColor},${alpha})`
    );
    //console.log($(this).val());

    //$("#slider_radius").html($(this).val());
    // console.log(
    //   `${$(this).val()}px  ${$(this).val()}px ${$(this).val() * 2}px #fff, ${
    //     $(this).val() * -1
    //   }px ${$(this).val() * -1}px ${$(this).val() * 2}px #62d5ff`
    // );
  });
  $(document).on("click", "#shadow-outfill", function () {
    $(".square").css(
      "background",
      `linear-gradient(145deg,rgba(${shadowColor}, 0.8),rgba(${output}, 0) 65%)`
    );
  });
});

//253px, 506px, 253px, #489dcf, -253px, -253px,506px, #62d5ff
// linear-gradient(336deg,rgba(0, 0, 255, 0.8),rgba(0, 0, 255, 0) 70.71%);


// $(document).ready(function(){
//   $('.btn-copy').click(function(e){
//     var text = $(this).parents().text().trim();
//     var copyText = document.createElement('');
//     copyText.value = text;

//   })
// })


//copy css function
function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}



