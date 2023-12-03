// This is just code to monitor clicks on the 'read more' buttons.
// At present, it just pushes output to the console. Normally the event 
// listeners would trigger something else.
const readMoreBtn = new Array;

// If we want to add more pages and buttons, incrementing this value
// will save repeating code (DRY). This saves instantiating separately 
// named variables.
const numOfButtonLgElements = 3; 


for(count = 0;count <= (numOfButtonLgElements - 1); count++){
  readMoreBtn[count] = document.getElementById(("button-lg" + (count+1)));
  readMoreBtn[count].addEventListener("click", unhideExtraContent);
}


function unhideExtraContent(){
  console.log("Aha! - You have clicked the button with div id of:" + this.id );
  let lastVal = this.id.slice(-1);
  let target = "content-p" + lastVal;
  console.log(target);
  document.getElementById(target).style.display = "inline";
}
