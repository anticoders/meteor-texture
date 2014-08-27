Package.describe({
  summary:  "Programatically generate background images".
  name:     "anti:texture",
  version:  "0.3.1",
  git:      "https://github.com/anticoders/meteor-texture.git",
});

Package.on_use(function (api, where) {
  
  if(api.export) {
    api.export('Texture', 'client');
  }

  api.add_files('texture.js', 'client');

});

