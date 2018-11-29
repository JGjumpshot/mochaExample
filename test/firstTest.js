var assert = require('chai').assert;
var first = require('../first');
var request = require('request');
var config = require('./config');

describe.skip('First', function() {
  it('first should return hello world', function() {
      assert.equal(first(), 'hello world')
  });
});

describe('get token', function() {

  var token;
  beforeEach(function(done) {
    request.post('https://idm-api.insidesales.com/v2/sessions/credentials',{
      json: {
        "username": config.username,
        "password": config.password
      }
    }, function(err, res, body) {
      if(err) {
        console.log("Error is: \n" + err);
        return
      }
      console.log("statusCode: " + res.statusCode);
      token = body.token;
      //console.log(token);
      done();
    })
  })
  it('should get a prospect', function(done) {

    var options = { method: 'GET',
      url: 'https://api.insidesales-playbooks.com/crm/v2/prospects/lead.00Q4600000AIJE4EAP',
      headers:
       {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token}
      }

      //console.log(options.headers);
    request.get(options, function(err, res, body) {
      if(err) {
        console.log(err);
      }
      console.log("\n" + JSON.parse(body).FirstName, JSON.parse(body).LastName);
      done();
    })

  })

})
