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
  let boxShadowValueX = 11;
  let boxShadowValueY = boxShadowValueX * 2;
  let alpha = 0.55;
  let buttonClassShadowDeepfill = false;
  let buttonClassShadowOutfill = true;
  let buttonClassShadowInfill = false;
  $(document).on("click", "#shadow-outfill", function () {
    buttonClassShadowDeepfill = false;
    buttonClassShadowOutfill = true;
    buttonClassShadowInfill = false;
    $(".square").css(
      "box-shadow",
      `-${boxShadowValueX}px  -${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}),${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor})`
    );
    $("#slider_shadow").html(
      `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}),${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor})`
    );
  });
  $(document).on("click", "#shadow-deepfill", function () {
    gradientColor = differentiatedColor(shadowColorArray);

    buttonClassShadowDeepfill = true;
    buttonClassShadowOutfill = false;
    buttonClassShadowInfill = false;

    if (buttonClassShadowDeepfill) {
      $(".square").css(
        "background",
        `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
      );
      $(".square").css(
        "box-shadow",
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_color").html(
        `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
      );
      $("#slider_shadow").html(
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    } else {
      $(".square").css(
        "box-shadow",
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    }
  });
  $(document).on("click", "#shadow-infill", function () {
    gradientColor = differentiatedColor(shadowColorArray);

    buttonClassShadowDeepfill = false;
    buttonClassShadowOutfill = false;
    buttonClassShadowInfill = true;
    if (buttonClassShadowInfill) {
      $(".square").css(
        "background",

        `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
      );
      $(".square").css(
        "box-shadow",
        `inset ${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_color").html(
        `linear-gradient(90deg,rgba(${shadowColor}, 0.8),rgba(${gradientColor}, 0.5) 70.71%)`
      );
      $("#slider_shadow").html(
        `inset ${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    }
  });
  $(document).on("input", "#color", function () {
    shadowColorArray = `${$(this).val()}`.substring(1).convertToRGB();

    shadowColor = shadowColorArray.toString();
    console.log(shadowColorArray);
    $(".square").css("background", `rgba(${shadowColor})`);
    $(".square").css(
      "box-shadow",
      `${boxShadowValueX}px ${boxShadowValueX}px  rgba(${shadowColor}, 0.4), -${boxShadowValueX}px -${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor})`
    );
    $("#slider_color").html(`rgba(${shadowColor})`);
    $("#slider_shadow").html(
      `11px 11px rgba(${shadowColor}, 0.4), -11px -11px 22px rgba(${shadowColor})`
    );
  });
  $(document).on("input", "#height-width", function () {
    $("#slider_width").html(`${$(this).val()}px`);
    $("#slider_height").html(`${$(this).val()}px`);
    $(".square").width($(this).val()).height($(this).val());
    //console.log(`${$(this).val()}px`);
  });
  $(document).on("input", "#radius", function () {
    $(".square").css("border-radius", `${$(this).val()}rem`);
    $("#slider_radius").html(`${$(this).val()}rem`);
    //console.log(`${$(this).val()}px`);
  });
  $(document).on("input", "#shadow", function () {
    alpha = $(this).val() / 20;
    boxShadowValueX = $(this).val();
    boxShadowValueY = $(this).val() * 2;

    if (buttonClassShadowInfill) {
      $(".square").css(
        "box-shadow",
        `inset -${boxShadowValueX}px  -${boxShadowValueY}px rgba(${shadowColor},${alpha}),inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_shadow").html(
        `inset -${boxShadowValueX}px  -${boxShadowValueY}px rgba(${shadowColor},${alpha}),inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    } else {
      $(".square").css(
        "box-shadow",
        `${boxShadowValueX}px  ${boxShadowValueY}px rgba(${shadowColor},${alpha}),  ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_shadow").html(
        `${boxShadowValueX}px  ${boxShadowValueY}px rgba(${shadowColor},${alpha}),  ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      console.log(
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    }
  });
  $(document).on("input", "#blur", function () {
    boxShadowValueY = $(this).val() * 2;
    if (buttonClassShadowInfill) {
      $(".square").css(
        "box-shadow",
        `inset ${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}),inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_shadow").html(
        `inset ${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}),inset ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    } else {
      $(".square").css(
        "box-shadow",
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      $("#slider_shadow").html(
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
      console.log(
        `${boxShadowValueX}px  ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha}), ${boxShadowValueX}px ${boxShadowValueX}px ${boxShadowValueY}px rgba(${shadowColor},${alpha})`
      );
    }
  });
});

//copy css function to clipboard
function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("copied!");
}
