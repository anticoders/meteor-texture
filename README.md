

## Texture.js


This simple snipped is intended for ease image generation when designing a web page.


### Installation

For Meteor.js projects, simply use

    mrt add texture

For other applications, download `texture.js` file from this repo and add it to your project.
Notice that this script currently depend on jQuery.


### Usage

    Texure(element, options, drawer);

- `element` - DOM element that will receive generated image as `background-image` property.
Notice that background images can stack, so you can use this to add random noise to 
existing image or gradient, or just stack several generated images.

- `options` - object with optional settings:

    - `name` - name of the texture, used to ensure that the same image isn't added twice
    (so that you can safely use this in `render` method)
    - `width` - width of the generated image (512 by default)
    - `height` - height of the generated image (512 by default)

- `drawer` - object used for drawing texture. Has 3 optional methods:

    - `init(ctx, w, h)` - if present, runs on the beginning and can be used to generate data
    to be used in later functions
    - `pixel(ctx, data, x, y, w, h)` - if present, runs once for each image pixel
    - `post(ctx, data, w, h)` - if present, runs after the pixels are drawn

    - arguments:
        - `ctx` - 2d canvas context to be drawn on
        - `data` - results of `init` function
        - `x`, `y` - current pixel coordinates
        - `w`, `h` - image dimensions


### Example




    Template.sidebar.rendered = function() {

      Texture(this.find('.sidebar'), {name: 'mesh', width: 200, height: 200}, {
        pixel: function(ctx, data, x, y) {
          if(x % 4 === 0 || y % 4 === 0) {
            ctx.fillStyle = "rgba(0,0,0," + (0.125 + 0.125 * Math.random())+ ")";
            ctx.fillRect( x, y, 1, 1 );
          }
        }
      });

    }





