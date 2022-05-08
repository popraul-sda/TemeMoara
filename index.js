//Exercitiu 1

valoare = (numar) =>{
    if(isNaN(numar) == true) {console.log("Nu e numar."); return;}
    if(numar % 2 == 0) {console.log(numar - 2); return;}
    console.log(numar*2);
}

valoare(3);
valoare(4);
valoare("abc");
//Exercitiu 2

const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = new Array();

isPrime = numar2 =>{
    const aux = Math.sqrt(numar2);
    for(let i = 2; i <= aux; i++)
        if(numar2 % i === 0) return false;
    return true;
}

savePrimes = arr =>{
    if((arr instanceof Array) != true) {console.log("Variabila nu este de tip array."); return;}
    for(let i = 0; i < arr.length; i++)
    {
        if(isPrime(arr[i]) == true) arr2.push(arr[i]);
    }

    console.log(arr2);
}

savePrimes(arr);


//Exercitiu 3

const arr3 = [1, '1', 'salut', 2, 6, true, 'true'];
const arr4 = new Array();

function saveStrings(arr){
    if((arr instanceof Array) != true) {console.log("Variabila nu este de tip array."); return;}
    for(let i = 0; i < arr.length; i++)
        if((typeof arr[i]) == "string") arr4.push(arr[i]);
    console.log(arr4);
}

saveStrings(arr3);

//Exercitiu 4

function addDigits(numar){

    let count = 0;
if(isNaN(numar) == false){
        for(let i = 0; i < numar.length; i++){
            if(Number(numar[i]) % 2 == 0) continue;
            count = count + Number(numar[i]);
        }

    console.log(count);
    return;
}
console.log("Valoarea nu e numar.");
}

addDigits("1532");

//Exercitiu 5

const culoarePrimara = "rosu";

switch(culoarePrimara){
    case "rosu":
        console.log("Culoarea este rosu.");
        break;
    case "albastru":
        console.log("Culoarea este albastru.");
        break;
    case "galben":
        console.log("Culoarea este galben.");
        break;
    case "rosu":
        console.log("Culoarea este rosu.");
        break;
    default :
        console.log("Nu este culoare primara.");
}