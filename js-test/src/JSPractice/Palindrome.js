export default function Palindrome(){
let str = "madam";
let newStr = '';
for(let i =str.length-1; i>=0; i--){
    newStr += str[i]; 
}
if(str===newStr){
    console.log("String is Palindrome")
}
else{
     console.log("String is not Palindrome")
}
}