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
  //loop through color array function
  let differentiatedColor = function (arrayColor) {
    let output = [arrayColor[0]];
    for (let i = 1; i < arrayColor.length; i++) {
      output.push(arrayColor[i] + 50);
    }
    return output.toString();
  };
  let shadowColorArray = "#55b9f3".substring(1).convertToRGB();

  let shadowColor = shadowColorArray.toString();

  let gradientColor = differentiatedColor(shadowColorArray);

  $(document).on("input", "#color", function () {
    shadowColorArray = `${$(this).val()}`.substring(1).convertToRGB();

    shadowColor = shadowColorArray.toString();
    console.log(shadowColorArray);
    $(".square").css("background", `rgba(${shadowColor})`);
    $(".square").css(
      "box-shadow",
      `11px 12px rgba(${shadowColor}, 0.4), -11px -11px 22px rgba(${shadowColor})`
    );
    $("#slider_color").html(`rgba(${shadowColor})`);
    $("#slider_shadow").html(
      `11px 12px rgba(${shadowColor}, 0.4), -11px -11px 22px rgba(${shadowColor})`
    );
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
      `${$(this).val()}px  ${
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
    console.log($(this).val());
  });
  $(document).on("click", "#shadow-outfill", function () {
    gradientColor = differentiatedColor(shadowColorArray);
    $(".square").css(
      "background",
      `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
    );
  });
  $(document).on("click", "#shadow-infill", function () {
    gradientColor = differentiatedColor(shadowColorArray);
    $(".square").css(
      "background",
      `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
    );
    //To be completed
  });
});

//253px, 506px, 253px, #489dcf, -253px, -253px,506px, #62d5ff
// linear-gradient(336deg,rgba(0, 0, 255, 0.8),rgba(0, 0, 255, 0) 70.71%);
