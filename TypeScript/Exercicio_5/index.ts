function typeOfParameter<H>(generico: H){
    console.log(typeof generico);
    return generico;
}

typeOfParameter('parametro');
typeOfParameter(true);
typeOfParameter(10);
