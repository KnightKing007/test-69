module.exports = {
	name: "eval", 
	description: "kek",
	async run(client, message, args){
		const owners = [   
			"603614402964357131",
      "824986284480397373"
		]
		if(!owners.includes(message.author.id)) {
      message.channel.send('you cannot use this command!!');
      return;
    }
		
    try {
      const code = args.join(" ");
      if(!code) return message.channel.send('Tell me what to evaluate!');
  
      let evaled;
  
      console.log("Process.env is : " + process.env.token);

      evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      console.log(evaled.includes(process.env.token));
      if (evaled.includes(process.env.token)) evaled = "Sorry heker, go hell and die lmao";;
      console.log(`result after auth : ${evaled}`);
      message.channel.send(clean(evaled), {code: "x1" });

    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
	}
}


function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}