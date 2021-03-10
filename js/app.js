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
  let intitalColor = "#55b9f3".substring(1).convertToRGB();
  let shadowColor = intitalColor.toString();

  $(document).on("input", "#color", function () {
    let shadowColorArray = `${$(this).val()}`.substring(1).convertToRGB();
    shadowColor = shadowColorArray.toString();
    console.log(shadowColor);
    $(".square").css("background", `rgba(${shadowColor})`);
  });
  $(document).on("input", "#height-width", function () {
    $("#slider_width").html($(this).val());
    $("#slider_height").html($(this).val());
    $(".square").width($(this).val()).height($(this).val());
    //console.log(`${$(this).val()}px`);
  });
  $(document).on("input", "#radius", function () {
    $(".square").css("border-radius", `${$(this).val()}px`);
    $("#slider_radius").html($(this).val());
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
    //console.log($(this).val());

    //$("#slider_radius").html($(this).val());
    // console.log(
    //   `${$(this).val()}px  ${$(this).val()}px ${$(this).val() * 2}px #fff, ${
    //     $(this).val() * -1
    //   }px ${$(this).val() * -1}px ${$(this).val() * 2}px #62d5ff`
    // );
  });
});

//253px, 506px, 253px, #489dcf, -253px, -253px,506px, #62d5ff
