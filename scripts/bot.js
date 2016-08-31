module.exports = function (robot) {
  robot.hear(/Hello!/, function(res){
    return res.send("Hi there!");
  })

  robot.respond(/What's your favourite food?/, function(res){
    return res.send("I'm a robot--I don't eat food!");
  })

  robot.respond(/Hi Hubot! My name is (.*)/, function(msg){
    let name;
    name = msg.match[1];
    if (name == "Hubot") {
      return msg.send("You're not Hubot--I'm a Hubot!");
    } else {
      return msg.reply("Nice to meet you, " + name + "!")
    }
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
