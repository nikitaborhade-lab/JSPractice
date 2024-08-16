export default function Fibonacci(){
    let n1 = 0;
    let n2 = 1;
    let next;

    for(let i=0; i<=5; i++){
        console.log(n1);
        next = n1+n2;
        n1=n2;
        n2=next
    }
    // return next;
}

// console.log("Fibonacci", Fibonacci(10));

// 0,1,1,2,3,5,8,13,21.......