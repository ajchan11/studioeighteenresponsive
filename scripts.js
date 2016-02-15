console.log('boom')

function adjustTopBlack(){
  var padding = parseInt($('.supermanContainer').css('padding-top').split('').slice(0,3).join(''));
  var supHeight = parseInt($('.supermanContainer img').css('height').split('').slice(0,3).join(''));
  var splitHeight = (padding + supHeight*0.59) + "px";
  console.log(splitHeight);
  console.log(padding);
  console.log(supHeight);
  $('.splitBlock').height(splitHeight);
}

adjustTopBlack();
setInterval(function(){
  adjustTopBlack();
}, 30)
