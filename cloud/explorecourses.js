var xmlreader = require('cloud/xmlreader.js')

module.exports = {

  baseURL: "http://explorecourses.stanford.edu/search",

  getCoursesForQuery: function (query) {
    var promise = new Parse.Promise();

    Parse.Cloud.httpRequest({
      url: this.baseURL,
      params: {
        view : 'xml-20140630',
        q : query
      }
    }).then(function(httpResponse) {

      xmlreader.read(httpResponse.text, function (error, result){

        if(error) return Parse.Promise.error('Parsing XML response failed with error ' + error);
        var courses = [];
        result.xml.courses.course.each( function(i, courseNode) {
          var course = {};
          course.academicYear = courseNode.year.text();
          course.subject      = courseNode.subject.text();
          course.code         = courseNode.code.text();
          course.title        = courseNode.title.text();
          course.description  = courseNode.description.text();
          course.repeatable   = JSON.parse( courseNode.repeatable.text() );
          course.grading      = courseNode.grading.text();
          course.unitsMin     = JSON.parse( courseNode.unitsMin.text() );
          course.unitsMax     = JSON.parse( courseNode.unitsMax.text() );

          var seasons = [];
          courseNode.attributes.attribute.each( function(i, seasonNode) {
            var season = seasonNode.description.text();
            seasons.push(season);
          });
          course.seasons = seasons;

          courses.push(course);
        });

        promise.resolve(courses);
      });

    }, function(httpResponse) {

      console.error('Request failed with response code ' + httpResponse.status);

    });

    return promise;
  },

};