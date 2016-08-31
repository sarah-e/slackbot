module.exports = function (robot) {
  robot.hear(/Hello!/, function(res){
    return res.send("Hi there!");
  })

  robot.respond(/What's your favourite food?/, function(res){
    return res.send("I'm a robot--I don't eat food!");
  })

  robot.respond(/add (.*) and (.*)/i, function(msg){
    let a;
    let b;
    a = parseInt(msg.match[1]);
    b = parseInt(msg.match[2]);
    c = a + b

    return msg.reply(a + " plus " + b + " = " + c);
  })
}
