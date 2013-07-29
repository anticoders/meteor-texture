Package.describe({
  summary: "Programatically generate background images"
});

Package.on_use(function (api, where) {
  api.add_files('texture.js', 'client');
});

