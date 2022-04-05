let soma1: string[];
soma1 = ["10", "12", "15", "20", "22"];
function sum(a: any, b: any){
    return a + b;
}

for (let i = 0; i < soma1.length; i++) {    

    console.log(`O valor ${soma1[i]} somado com 1 = ${sum(soma1[i], 1)}`);
}
export {}