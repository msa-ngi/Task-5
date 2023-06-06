//create a funtion that will change fahrenheit to celcius


function toCelsius(Fahreinheit){
    return (5/9) * (Fahreinheit - 32);
}

toCelsius(200);   //output 93.3



// create a funtion that will produce the average of an array

function AverageNo(array){
    let average = 0;
    for(i=0; i<array.length; i++){
        currentNum = array[i];
        average += currentNum;
    }
    average = average/array.length;
    return average;
}




//create a funtion that will a number is divisible by two numbers

function divisible(x, y){
    let num = +prompt("enter test number");

    if( num%x === 0 && num%y === 0){
        document.write('divisible by', x ,'and' ,y);
    }else
    document.write('not divisible');
}
 


//create a function that will display prime numbers btn 1 and 100

function primeNo(){

    for(i=1; i<=100; i++){
        for(j=2; j<i; j++){
            if(i%j == 0)
            break;
        }
    }
}




//create a function that receives an array of diverse numbers and returns positive numbers

function getPositives(array){
    const posArray = array.filter(num => num > -1);
    return posArray;
}



//create a code that displays fuzz on multiples of 3 and buzz on multiples of 5 and fuzzbuzz on both


function fuzzbuzz(){
for(var i= 1; i < 101; i++){
    if(i % 15 == 0) console.log("FizzBuzz");
    else if(i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
}

//create a code that is hashtag generator

function makeHashtag(str){
    let wordArray = str.split('').filter(char => char !== "");
    let result ="#";


    if (wordArray.length === 0){
        return false;
    };

    result = result + wordArray.wordArray.map(word => {
        let capitalizedWord =
        word.char.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
    }).join('');

    if(result.length > 140) {
        return false;
    } else {
        return result;
    };
}
