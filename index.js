const prompt = require('prompt-sync')();

let command = '';
let entered = '';
const names = [];
let path = []


while(entered != 'QUIT'){
   command = prompt ('What would you like to do? ');
   entered = command.toUpperCase();

   if(entered == 'SCREAM'){
    console.log('We scream. Now we got that out of your system...');
    }

    if(entered == 'START'){
        let name = prompt ('Awesome! First, what is your name? ')
        names.push (name)
        console.log("Hi ",(names),'!')
        let path = prompt ('Which door will you take? Left or right?')
    }
    
    
};