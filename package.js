Package.describe({
  summary: "Programatically generate background images"
});

Package.on_use(function (api, where) {
  
  if(api.export) {
    api.export('Texture', 'client');
  }

  api.add_files('texture.js', 'client');

});

