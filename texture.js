/*
  Texture.js snippet - programatically generate background images.
  Hubert Orlik-Grzesik <hubert@orlikarnia.com>
  July 2013
*/

Texture = function(div, options, drawer) {

  if(!drawer) return;

  var $div = $(div);

  if(options && options.name && options.name.match(/^\w+$/)) {
    if($div.data('__texture_' + options.name + '_was_set__')) return;
    $div.data('__texture_' + options.name + '_was_set__', true);
  }

  var imageW = (options ? options.width : 512) || 512;
  var imageH = (options ? options.height : 512) || 512;

  var canvas = document.createElement('canvas');
  canvas.width = imageW;
  canvas.height = imageH;

  var ctx = canvas.getContext('2d');

  var result = null;

  if(drawer.init) result = drawer.init(ctx, imageW, imageH);
  if(drawer.pixel) {
    for(var i = 0; i < imageW; i++) {
      for(var j = 0; j < imageH; j++) {
        drawer.pixel(ctx, result, i, j, imageW, imageH);
      }
    }
  }
  if(drawer.post) drawer.post(ctx, result, imageW, imageH);

  $div.css({
    'background-image': 'url(' + canvas.toDataURL("image/png") + '),' + $(div).css('background-image'),
  });

  delete canvas;
};



