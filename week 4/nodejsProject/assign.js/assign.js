const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
// const chalk =require('chalk')

program
  .name('counter')
  .description('CLI to do Performe Some tasks like read file about the developer etc soon it will scale')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });
 // About the developer
  program.command('who_am_i')
  .description('Show information about the developer')
  .action(() => {
    
    console.log(`This CLI was developed by Saurabh Yadav a passionate developer who loves building tools for fun and utility.`);
    console.log("Some more info about Developer:")
    console.log("Language :: Java, Python, C basics ,Javascript \nVersion Control : git ,git bash \nThechnology ::MERN")
  });

// Command to answer "why"
program.command('why')
  .description('Answer the question: why?')
  .action(() => {
    console.log('Just for the fun of it! ');
  });

  //command to 

program.parse();




