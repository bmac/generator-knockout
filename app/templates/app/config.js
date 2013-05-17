require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../components",
    "jquery": "../components/jquery/jquery",
    "knockout": "../components/knockout/build/output/knockout-latest"
  }
});

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first 
// require.config({}) found in this file
require.config({
  paths: {
    "knockout": "../components/knockout/build/output/knockout-latest.debug"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}

