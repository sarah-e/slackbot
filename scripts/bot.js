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

  robot.respond(/What's your favourite (.*)/, function(msg){
    let fav;
    fav = msg.match[1];
    console.log(fav);
    switch (fav) {
      case "food":
        return msg.reply("I'm a robot--I don't eat food!")
        break;
      case "band":
        return msg.reply("It's a gotta be Daft Punk!")
        break;
      case "programming language":
        return msg.reply("Javascript, of course!")
        break;
      default:
        return msg.reply("I don't have a favourite " + fav + ". What's yours?");

    }
  })

  robot.respond(/is it a (weekend|holiday)\s?\?/i), function(msg){
    let today = new Date();

    msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
  });

  robot.hear(/I did it/i, function(msg){
    msg.send("Congratulations! Good job!");
  });

  robot.respond(/convert \$(.*) to btc/i, function(res){
    let usd = res.match[1];
    res.reply("That is about " + usd*0.0024 + " in BTC");
  });
}
