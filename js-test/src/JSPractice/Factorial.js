export default function Factorial(n){
  let fact = 1;

  if(n<0){
    console.log("Factorial is not defined for negative numbers")
  }
  for(let i=1; i<=n; i++){
      fact = fact*i;
  }
  return fact;
}
console.log("Factorial", Factorial(5));

// 0! = 1
// 1! = 1
// 3! = 3x2x1 = 7
// 5! = 5×4×3×2×1 = 120