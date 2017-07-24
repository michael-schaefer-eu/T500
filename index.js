var five = require("johnny-five");
//var board = new five.Board({repl: false});
var board = new five.Board();


board.on("ready", function() {

  var configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

  //var motor1 = new five.Motor(configs.M1);
  //var motor2 = new five.Motor(configs.M2);
  var motor1 = new five.Motor(configs.M3);
  var motor2 = new five.Motor(configs.M4);

  this.repl.inject({
    m1: motor1,
    m2: motor2
  });

  motor1.on("start", function() {
    console.log("Start M1", Date.now());
  });

  motor2.on("start", function() {
    console.log("Start M2", Date.now());
  });

  motor1.on("stop", function() {
    console.log("Stop M1", Date.now());
  });

  motor2.on("stop", function() {
    console.log("Stop M2", Date.now());
  });

  motor1.on("forward", function() {
    console.log("Forward M1", Date.now());

    board.wait(1000, function() {
      motor1.reverse(150);
    });
  });

  motor1.on("reverse", function() {
    console.log("Reverse M1", Date.now());

    board.wait(1000, function() {
      motor1.stop();
    });
  });

  motor2.on("forward", function() {
    console.log("Forward M2", Date.now());

    board.wait(1000, function() {
      motor2.reverse(150);
    });
  });

  motor2.on("reverse", function() {
    console.log("Reverse M2", Date.now());

    board.wait(1000, function() {
      motor2.stop();
    });
  });

  motor1.forward(150);
  motor2.forward(150);

});

