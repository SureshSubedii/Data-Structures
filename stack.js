const readline = require('readline-sync');

let stack = [];
let top = -1;

const addItems = () => {
  top++;
  let ans = readline.question('Enter any value: ');

  stack.push(ans);
  console.log(`${ans} added to the stack`);
}

const deleteItem=()=>{
  if(top===-1){
    console.log('Stack underFlow. Cannot delete items')

  }
  else{
    console.log(`${stack[top]} deleted from the stack`);
    stack.pop()
    top--

  }

}

const mainFunction = () => {
  let choice;
  do {
    console.log("Press:\n 1 to enter data\n 2 to display stack\n 3 to delete items\n 4 to exit");

    choice = parseInt(readline.question('> '));
      switch (choice) {
        case 1:
          addItems();
          break;
        case 2:
          if(top===-1){
         console.log('Stack underFlow. No items to display')

            }
            else{
          console.log(stack);


            }

          break;
        case 3:deleteItem()  
    }
  } while (choice <4);
}

mainFunction();
