// These two lines are required to initialize Express in Cloud Code.
express = require('express');
app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body



// Example reading from the request body of an HTTP post request.
// app.post('/sms', function(req, response) {
//   var text = req.body.Body;
//   var fromPhoneNumber = req.body.From;
//   const NumMedia = req.body.NumMedia;
//   var mediaUrl;
//   if (NumMedia > 0) {
//     console.log("Message has Media!")
//     mediaUrl = req.body.MediaUrl0;
//   }
//
//   var patron;
//   var query = new Parse.Query("Patron");
//   query.equalTo("phoneNumber", fromPhoneNumber);
//   query.find({
//       success: function(results)
//       {
//           if ( results.length == 0 )
//           {
//               var PatronClass = Parse.Object.extend("Patron");
//               patron = new PatronClass();
//               patron.set("phoneNumber", fromPhoneNumber);
//               patron.save(null, {
//                   success: function (patron) {
//                       console.log("Saved new patron.");
//                   },
//                   error: function (error) {
//                       response.error(error);
//                       console.log("Couldn't save new patron. Error = " + error.message);
//                   }
//               });
//           }
//           else if ( results.length == 1)
//           {
//               patron = results[0];
//               console.log("Found existing patron.");
//           }
//           else
//           {
//               console.error("Multiple internal patrons on phone number.");
//               response.error("Multiple internal patrons on phone number.");
//           }
//
//           var MessageClass = Parse.Object.extend("Message");
//           var message = new MessageClass();
//           message.set("text", text);
//           message.set("patron", patron);
//           message.set("imageUrl", mediaUrl);
//           message.set("isReply", false);
//           message.save(null, {
//               success: function (message) {
//                   response.send("OK");
//                   console.log("Saved new message.");
//               },
//               error: function (error) {
//                   response.error(error);
//                   console.log("Save ko");
//               }
//           });
//       },
//       error: function(error) {
//           console.error("Patron Lookup query failed. Error = " + error.message);
//           response.error("Patron Lookup query failed. Error = " + error.message);
//       }
//   });
//
// });

// Attach the Express app to Cloud Code.
app.listen();
