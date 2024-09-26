const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new EventEmitter();

myEmitter.on('userlogin',(usernames)=>{
    console.log(`userlogged in:${usernames}`);
});


myEmitter.on('fileuploaded',(filenames)=>{
    console.log(`Fileuploaded:${filenames}`);
});

function simulateUseractions(){
    const usernames=['Alice','Bob','Charlie'];
    const randomUsername=usernames[Math.floor(Math.random()*usernames.length)];

    myEmitter.emit('userlogin',randomUsername);

    const filenames=['file.txt','image.png','document.pdf'];
    const randomFile=filenames[Math.floor(Math.random()*filenames.length)];

    myEmitter.emit('fileuploaded',randomFile);
}

simulateUseractions();