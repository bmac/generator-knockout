// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery", "knockout"], function($, ko) {
  var viewModel = {
    status: ko.observable('active')
  };
  ko.applyBindings(viewModel, $('html')[0]);
});
