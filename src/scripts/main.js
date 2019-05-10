// The main javascript file for feis_you_make_a_diff.

$(function () {
  //Use this as the main starting point for your application javascript.
  //Don't forget you can use preprocessor variables in your javascript for control logic and printing out variables.
  //You can do even more complex things too, check out https://github.com/jsoverson/preprocess#directive-syntax

  //create a new application object:
  let app = new SampleApp('feis_you_make_a_diff');

  //@if !IS_EMBEDDED
  app.setBreadcrumb([ //only standalone apps set their own breadcrumb
    {"name": "feis_you_make_a_diff", "link": "#"}
  ]);
  //@endif

  app.render(); //render the application

});
