const Discord = require("discord.js");
const client1 = new Discord.Client()
const client2 = new Discord.Client()
const client3 = new Discord.Client()
const client4 = new Discord.Client()
const client5 = new Discord.Client()
const client6 = new Discord.Client()
const client7 = new Discord.Client()
const client8 = new Discord.Client()
const client9 = new Discord.Client()
const client10 = new Discord.Client()
var prefix1 = "1"
var prefix2 = "2"
var prefix3 = "3"
var prefix4 = "4"
var prefix5 = "5"
var prefix6 = "6"
var prefix7 = "7"
var prefix8 = "8"
var prefix9 = "9"
var prefix10 = "10"


client1.on("ready", async() => {console.log(` _ ${client1.user.username} _ is Ready`)});
client2.on("ready", async() => {console.log(` _ ${client2.user.username} _ is Ready`)});
client3.on("ready", async() => {console.log(` _ ${client3.user.username} _ is Ready`)});
client4.on("ready", async() => {console.log(` _ ${client4.user.username} _ is Ready`)});
client5.on("ready", async() => {console.log(` _ ${client5.user.username} _ is Ready`)});
client6.on("ready", async() => {console.log(` _ ${client6.user.username} _ is Ready`)});
client7.on("ready", async() => {console.log(` _ ${client7.user.username} _ is Ready`)});
client8.on("ready", async() => {console.log(` _ ${client8.user.username} _ is Ready`)});
client9.on("ready", async() => {console.log(` _ ${client9.user.username} _ is Ready`)});
client10.on("ready", async() => {console.log(` _ ${client10.user.username} _ is Ready`)});



client1.on("message", message => {
    if(message.content === `${prefix1}d`) {
        message.channel.send(`#daily`)
    }
});
client2.on("message", message => {
    if(message.content === `${prefix2}d`) {
        message.channel.send(`#daily`)
    }
});
client3.on("message", message => {
    if(message.content === `${prefix3}d`) {
        message.channel.send(`#daily`)
    }
});
client4.on("message", message => {
    if(message.content === `${prefix4}d`) {
        message.channel.send(`#daily`)
    }
});
client5.on("message", message => {
    if(message.content === `${prefix5}d`) {
        message.channel.send(`#daily`)
    }
});
client6.on("message", message => {
    if(message.content === `${prefix6}d`) {
        message.channel.send(`#daily`)
    }
});
client7.on("message", message => {
    if(message.content === `${prefix7}d`) {
        message.channel.send(`#daily`)
    }
});
client8.on("message", message => {
    if(message.content === `${prefix8}d`) {
        message.channel.send(`#daily`)
    }
});
client9.on("message", message => {
    if(message.content === `${prefix9}d`) {
        message.channel.send(`#daily`)
    }
});
client10.on("message", message => {
    if(message.content === `${prefix10}d`) {
        message.channel.send(`#daily`)
    }
});




client1.on("message", message => {
    if(message.content === `${prefix1}c`) {
        message.channel.send(`#credits`)
    }
});
client2.on("message", message => {
    if(message.content === `${prefix2}c`) {
        message.channel.send(`#credits`)
    }
});
client3.on("message", message => {
    if(message.content === `${prefix3}c`) {
        message.channel.send(`#credits`)
    }
});
client4.on("message", message => {
    if(message.content === `${prefix4}c`) {
        message.channel.send(`#credits`)
    }
});
client5.on("message", message => {
    if(message.content === `${prefix5}c`) {
        message.channel.send(`#credits`)
    }
});
client6.on("message", message => {
    if(message.content === `${prefix6}c`) {
        message.channel.send(`#credits`)
    }
});
client7.on("message", message => {
    if(message.content === `${prefix7}c`) {
        message.channel.send(`#credits`)
    }
});
client8.on("message", message => {
    if(message.content === `${prefix8}c`) {
        message.channel.send(`#credits`)
    }
});
client9.on("message", message => {
    if(message.content === `${prefix9}c`) {
        message.channel.send(`#credits`)
    }
});
client10.on("message", message => {
    if(message.content === `${prefix10}c`) {
        message.channel.send(`#credits`)
    }
});






client1.on("message", message => {
    if (!message.content.startsWith(prefix1)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix1.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client2.on("message", message => {
    if (!message.content.startsWith(prefix2)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix2.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client3.on("message", message => {
    if (!message.content.startsWith(prefix3)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix3.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client4.on("message", message => {
    if (!message.content.startsWith(prefix4)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix4.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client5.on("message", message => {
    if (!message.content.startsWith(prefix5)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix5.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client6.on("message", message => {
    if (!message.content.startsWith(prefix6)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix6.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client7.on("message", message => {
    if (!message.content.startsWith(prefix7)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix7.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client8.on("message", message => {
    if (!message.content.startsWith(prefix8)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix8.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client9.on("message", message => {
    if (!message.content.startsWith(prefix9)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix9.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});
client10.on("message", message => {
    if (!message.content.startsWith(prefix10)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix10.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.send(args.join(" ")).catch(console.err);
  }
});






client1.login(process.env.BOT_TOKEN1)
client2.login(process.env.BOT_TOKEN2)
client3.login(process.env.BOT_TOKEN3)
client4.login(process.env.BOT_TOKEN4)
client5.login(process.env.BOT_TOKEN5)
client6.login(process.env.BOT_TOKEN6)
client7.login(process.env.BOT_TOKEN7)
client8.login(process.env.BOT_TOKEN8)
client9.login(process.env.BOT_TOKEN9)
client10.login(process.env.BOT_TOKEN10)
