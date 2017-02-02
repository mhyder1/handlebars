// http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/
$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  console.log(theTemplateScript);

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  //console.log(theTemplate);

  // Define our data object
  var context={
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
