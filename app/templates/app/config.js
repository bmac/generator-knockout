require.config({
  // make bower_components more sensible
  // expose jquery 
  paths: {
    "bower_components": "../bower_components",
    "jquery": "../bower_components/jquery/jquery",
    "knockout": "../bower_components/knockout.js/knockout"
  }
});

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first 
// require.config({}) found in this file
require.config({
  paths: {
    "knockout": "../bower_components/knockout.js/knockout-2.3.0.debug"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}

