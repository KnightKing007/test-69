const Commando = require('discord.js-commando')
const axios = require('axios') 
const Discord = require('discord.js');
const { utc } = require('moment');
module.exports = {
    name: 'stats',
    description: 'random?',
    async run (client, message, args,) {        
 
           



        axios.get("https://danbot.host/nodeStatus")
        .then(res => {
          let data = res.data.nodestatus;
          console.log("Raw data is ", data);
          let reply = `**__Nodes:__**\n`;
        
          for (let node in data)
          {
            let elem = data[node];
            let nodeNum = node.length === 5 ? node.charAt(node.length - 1) : node.slice(node.length - 2);
            let text = `Node ${nodeNum}: `;
            let [status, vmStatus] = [elem.status, elem.is_vm_online];
            let [statusEmoji, statusText] = "";
            
            if (status && vmStatus) {
              statusEmoji = ":green_circle:";
              statusText = "Online";
            }
            else if (!status && !vmStatus) { 
              statusEmoji = ":red_circle:"; 
              statusText = "**System** Offline";
            }
            else if (!status || !vmStatus) { 
              statusEmoji = ":yellow_circle:"; 
              statusText = "Wings offline";
            }
            
        
            text += `${statusEmoji} ${statusText}\n`;
            reply += text;
          }
         console.log("Reply is", reply);

        //  sus = new Discord.MessageEmbed() 
        //  .setTitle("Node Status")
        //  .addFields({name: "Node Status", value: reply},)
        //  .setColor(`#4E7DFF`)
        //  .setTimestamp()
        //  .setFooter(client.user.tag, client.user.displayAvatarURL());

        //  message.channel.send(sus).then
         
         
        })
        .catch(err => console.log(err));
    }
}        

