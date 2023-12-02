/**
* Напишите проверку, которая позволит определить, является слово палиндромом или нет.
 Если является, то выведите в консоль фразу «Слово <слово> является палиндромом».
 Если нет — «Слово <слово> не является палиндромом».

* */


const myOriginalString = " А роза упала на лапу Азора";
let stringWithoutSpaces = myOriginalString.replace(/\s/g, "");
let i = 0;
let j = stringWithoutSpaces.length-1;
while (i!=j){
    if(stringWithoutSpaces[i].toUpperCase() != stringWithoutSpaces[j].toUpperCase()){
        console.log("The string is not palindrom");
        break;
    }
    i +=1;
    j -=1;
    if(i===j || i<j){
        console.log("The string is palindrom");
        break;
    }
}