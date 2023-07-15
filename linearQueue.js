const readline=require("readline-sync");
var queue=[];

const addItems=()=>{
    if(queue.length===5){
        console.log("Queue full \n")
    }
  else{

      let ans=readline.question('Enter any data');
      queue.push(ans);
      console.log(`${ans} added on the queue `)
  }



}

const deleteItems=()=>{
    if(queue.length===0){
        console.log("Queue Empty \n")
    }
    else{
        
        console.log(`${queue[0]} deleted \n`)
        queue.shift()
    }

}

const mainFunction=()=>{
    do{
        console.log("Press:\n 1 to add data \n 2 to delete data \n 3 to display queue \n 4 to exit ");
        var choice =parseInt(readline.question('>'));

        switch(choice){
            case 1:
                addItems();
                break;
            case 2:
                deleteItems();
                break;
            case 3:
                if(queue.length){
                console.log(queue)
                }
                else{
                    console.log('Queue is empty \n')
                }

        }
    }
    while(choice<4)

}
mainFunction()