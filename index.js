
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const fetch = require ('node-fetch');
const client = new Client();

const randomresponse = [
  "Halo",
  "Hi",
  "Apa Kabar",
  "Error",
  "Kamu Manusia?",
  "F*ck You",
  "Halo Juga",
  "Halo Ilham"
];
const huruf = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const dogpict = [

  "https://imgur.com/owJKr7y",
  "https://imgur.com/rpQdRoY",
  "https://imgur.com/Bt6zrhq",
  "https://imgur.com/sNm8hRR",
  "https://imgur.com/zMs8Sx6",
  "https://imgur.com/bWioilW",
  "https://imgur.com/q6UTI0W",
  "https://imgur.com/e9aTxh7",
  "https://imgur.com/01E5Vxg",
  "https://imgur.com/y48DeBZ",
  "https://imgur.com/FBc1qrm",
  "https://imgur.com/6BCFIfW",
  "https://imgur.com/0Q8E82b",
  "https://imgur.com/oMm6Zba",
  "https://imgur.com/aA4kvJE",

];

function DeleteAnjay() {

  message.channel.bulkDelete(1);
}
function GetQuote() {
  return fetch ("https://zenquotes.io/api/random")
  
  
    

}

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('-help',{type : 'WATCHING'});
});

client.on('message', message => {
   if(message.content === '-invite')
   {
      message.reply('https://discord.com/api/oauth2/authorize?client_id=928950857033211944&permissions=532844902480&scope=bot');
   }
   else if(message.content === 'kontol')
   {
      message.channel.bulkDelete(1);
     message.reply('Jangan Tomxic');
   }
   else if(message.content === 'Kontol')
   {
      message.channel.bulkDelete(1);
     message.reply('Jangan Tomxic');
   }
   else if(message.content === 'KONTOL')
   {
    message.channel.bulkDelete(1);
     message.reply('Jangan Tomxic');
   }
   else if(message.content === 'memek')
   {
     message.reply('Jangan Tomxic');
     message.channel.bulkDelete(1);
   }
   else if(message.content === 'Memek')
   {
     message.reply('Jangan Tomxic');
    message.channel.bulkDelete(1);
   }
   else if(message.content === 'MEMEK')
   {
     message.reply('Jangan Tomxic');
     message.channel.bulkDelete(1);
   }
   else if(message.content === 'p')
   {
     const randomresponses = randomresponse[Math.floor(Math.random() * randomresponse.length)]
     message.reply(randomresponses)
     
   }
   else if(message.content === '-test')
   {
     message.channel.send('halo');
   }
   else if(message.content === 'F')
   {
     message.react ('😭');
   }
   else if(message.content === 'f')
   {
     message.react ('😭');
   }
   else if(message.content === '-report')
   {
     client.channels.get('report-player').message.reply('Laporan Mu Sedang Di Proses')
   }
   else if(message.content === 'P')
   {
      const randomresponses = randomresponse[Math.floor(Math.random() * randomresponse.length)]
      message.reply(randomresponses)
   }
   else if(message.content === '-help')
   {
     message.channel.send('Sayuz Bot Command')
     message.channel.send('My Prefix = -')
     message.channel.send('number')
     message.channel.send('alphabet')
     message.channel.send('dog')
     message.channel.send('invite')

   }
   else if(message.content === '-number')
   {
     const numberrand = Math.floor(Math.random() * 101);
     message.channel.send(numberrand);
     
   }
   else if(message.content === '-dog')
   {
     const pict = dogpict[Math.floor(Math.random() * dogpict.length)];
     message.channel.send(pict);
   }
   else if(message.content === '-alphabet')
   {
     
     const rands = huruf[Math.floor(Math.random() * huruf.length)];
     message.reply(rands);

   }
   else if(message.content === 'halo')
   {
     const randomresponses = randomresponse[Math.floor(Math.random() * randomresponse.length)]
     message.reply(randomresponses);
   }
   else if(message.content === 'Halo')
   {
     const randomresponses = randomresponse[Math.floor(Math.random() * randomresponse.length)]
     message.reply(randomresponses);
   }
   else if(message.content === '-quotes')
   {
     const { file } = fetch('https://zenquotes.io/api/random')
     message.reply(file)
   }

})
client.login(token);
