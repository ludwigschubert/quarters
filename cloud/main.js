// if you need a server:
// require('cloud/app.js');

// Data Consistency


// Jobs

var explorecourses = require('cloud/explorecourses.js')

Parse.Cloud.job("importCourses", function(request, status) {

  explorecourses.getCoursesForQuery("CS103").then( function (courses) {
    console.log("Got " + courses.length + " courses from API.");
    var promises = [];
    courses.forEach(function(course) {
      var promise = new Parse.Promise();

      console.log("Importing Course '" + course.title + "'.");
      courseQuery = new Parse.Query("Course");
      courseQuery.equalTo("subject", course.subject);
      courseQuery.equalTo("code", course.subject);
      courseQuery.first().then(function (courseObject) {
        if (!courseObject) {
          console.log("Creating new course '" + course.title + "'.");
          courseObject = new Parse.Object("Course");
        }
        courseObject.set("subject", course.subject);
        courseObject.set("code", course.code);
        courseObject.set("title", course.title);
        courseObject.set("description", course.description);
        courseObject.set("repeatable", course.repeatable);
        courseObject.set("grading", course.grading);
        courseObject.set("minUnits", course.unitsMin);
        courseObject.set("maxUnits", course.unitsMax);
        courseObject.save().then(function(){
          promise.resolve();
        });
      }, function () {
        promise.reject();
      });

      promises.push(promise);
    });
    return Parse.Promise.when(promises);
  }).then(function () {
    status.success("Imported all Courses in query result.")
  });

});
