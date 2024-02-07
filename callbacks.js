// function cube(n){
//     return n*n*n;
// }



// function square(n){
//     return n*n;
// }

// function sumofsq(a,b){
//     const val1=square(a);
//     const val2=square(b);
//     return val1+val2;
// }
// function sumofcube(a,b){
//     const val1=cube(a);
//     const val2=cube(b);
//     return val1+val2;
// }

// console.log(sumofsq(5,10));

// console.log(sumofcube(5,10));
// in above we are repeating the same code again and again 
//here we use CALLBACKS

// function sumofSomething(a,b,callback){
//     const val1=callback(a);
//     const val2=callback(b);
//     return val1+val2;
// }
// // console.log(sumofSomething(5,10,square));
// // console.log(sumofSomething(5,10,cube));
 
// OR WE CAN DIRECTLY WITE THE Function IN ARGUMENT
// console.log(sumofSomething(5,10,function(n){return n*n*n;}))

//  console.log(sumofSomething(5,10,(n)=>2*n+10));//declaring the function and returning the value in the function call


// //ANOTHER WAY OF DECLARING THE FUNCTION
// let square=(n)=>n*n;//square is a function 
// let store=(val)=>square(val)*square(val);//calback

// function as another function is a parameter of sotore function
// console.log(store(5));

function getCheese(callback){
    setTimeout(()=>{
        const cheese="🧀";
        console.log(`here is a chesse ${cheese}`);
        callback(cheese);
    },2000);
  
}
function makeDough(cheese,callback){
    setTimeout(()=>{
        const dough="🌾";
        console.log(`here is the cheese and dough ${cheese} ${dough}`);
        callback(cheese,dough);
    },1000);
}
function pizzaReady(cheeseDough,callback){
    setTimeout(()=>{
        const pizza ="🍕";
         console.log(`the pizza is ready  ${cheeseDough.cheese} ${cheeseDough.dough} ${pizza}`);
        callback(pizza);
    },2000)
    
}


getCheese((cheese)=>{
    
    makeDough(cheese,(dough)=>{
        const cheeseDough = { cheese, dough };
        console.log(typeof(cheeseDough));
     pizzaReady(cheeseDough,(pizza)=>{
        console.log(`got the pizza ${cheeseDough.cheese} ${cheeseDough.dough} ${pizza}`)
     })
    });
});
