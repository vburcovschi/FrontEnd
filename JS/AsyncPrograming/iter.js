const iter = (a) =>{
    if (a===0){
        console.log("Finish")
    }else{
        console.log("Function was run with argument: "+a)
        iter(a-1);
    }
}

iter(7);