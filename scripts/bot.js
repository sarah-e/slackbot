module.exports = function (robot) {
  robot.hear(/Hello!/, function(res){
    return res.send("Hi there!");
  })
  robot.respond(/What's your favourite food?/, function(res){
    return res.send("I'm a robot--I don't eat food!");
  })
}
