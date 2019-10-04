const people = require('../people.json');

var appRouter = function (app) {
    app.get("/", function (req, res) {
         res.status(200).send({ message: 'Welcome to our restful API' });
    });
     app.get("/getItems", function (req, res) {
         var data = people.profiles
         res.status(200).send(data);
     });
     app.get("/getItems/:num", function (req, res) {
          var num =req.params.num;
          var data = people.profiles[num]
          res.status(200).send(data);
     });
}
module.exports = appRouter;