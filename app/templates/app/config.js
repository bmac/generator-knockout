require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../components",
    "jquery": "../components/jquery/jquery",
    "knockout": "../components/knockout/knockout"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}





