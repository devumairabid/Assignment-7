 export{}
 function maxMin(n1:number,n2:number,n3:number) {
    let x =n1>n2 &&n1>n3 ? n1 : "" || n2>n1&& n2>n3? n2 :""||n3>n1&&n3>n2? n3 : ""
    console.log(`${x} is max number`)
    
    
    
}
maxMin(10,16,25)