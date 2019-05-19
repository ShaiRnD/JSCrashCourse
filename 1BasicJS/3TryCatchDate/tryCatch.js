// example of try catch finally and error throwing
let divideByZeroException = {
    errorCode: 0,
    errorMessage: "cantDivideByZero"
}

const divByZeroExp = 0;
const otherExp = 1;
try {
    const x = 1;
    const y = 0;
    const z = 0;
    if (y === 0){
        throw divideByZeroException;
    }else{
        z = x / y;
    }
}catch (err){
    // handle   
    if (err === divideByZeroException){ 
        console.log(err.errorCode + ": " + err.errorMessage);
    }else{
        console.log ("a general error occurred, deal with it")
    } 
}finally {
    console.log('finished');
}

