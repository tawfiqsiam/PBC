const Discord = require("discord.js");
const client1 = new Discord.Client()
const client2 = new Discord.Client()
const client3 = new Discord.Client()
const client4 = new Discord.Client()
const client5 = new Discord.Client()
const client6 = new Discord.Client()
const client7 = new Discord.Client()
var prefix1 = "1"
var prefix2 = "2"
var prefix3 = "3"
var prefix4 = "4"
var prefix5 = "5"
var prefix6 = "6"
var prefix7 = "7"


client1.on("ready", async() => {console.log(` _ ${client1.user.username} _ is Ready`)});
client2.on("ready", async() => {console.log(` _ ${client2.user.username} _ is Ready`)});
client3.on("ready", async() => {console.log(` _ ${client3.user.username} _ is Ready`)});
client4.on("ready", async() => {console.log(` _ ${client4.user.username} _ is Ready`)});
client5.on("ready", async() => {console.log(` _ ${client5.user.username} _ is Ready`)});
client6.on("ready", async() => {console.log(` _ ${client6.user.username} _ is Ready`)});
client7.on("ready", async() => {console.log(` _ ${client7.user.username} _ is Ready`)});



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



client1.on("message", message => {
    if (!message.content.startsWith(prefix1)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix1.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client2.on("message", message => {
    if (!message.content.startsWith(prefix2)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix2.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client3.on("message", message => {
    if (!message.content.startsWith(prefix3)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix3.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client4.on("message", message => {
    if (!message.content.startsWith(prefix4)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix4.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client5.on("message", message => {
    if (!message.content.startsWith(prefix5)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix5.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client6.on("message", message => {
    if (!message.content.startsWith(prefix6)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix6.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client7.on("message", message => {
    if (!message.content.startsWith(prefix7)) return;
    let command = message.content.split(" ")[0];
  command = command.slice(prefix7.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});





client1.login(process.env.BOT_TOKEN1)
client2.login(process.env.BOT_TOKEN2)
client3.login(process.env.BOT_TOKEN3)
client4.login(process.env.BOT_TOKEN4)
client5.login(process.env.BOT_TOKEN5)
client6.login(process.env.BOT_TOKEN6)
client7.login(process.env.BOT_TOKEN7)
