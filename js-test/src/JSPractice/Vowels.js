export default function Vowels(){
    let str = "Nikita Borhade"
    let vowels = ["i","o","u","e","a"]
    let hasVowels = false;

    for(let i = 0; i< str.length; i++){
        if(vowels.includes(str[i])){
            hasVowels = true;
            break;
        }
    }
    if(hasVowels){
        console.log("string has vowels");
    }else{
        console.log("String does not have vowels")
    }
}