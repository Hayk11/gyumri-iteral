'use Strict';

let counter=0;

const interval = setInterval(function(){
  console.log(`Called ${++counter} times`);
  if(counter == 7)
  {
    clearInterval(interval);
  }
},3000)
