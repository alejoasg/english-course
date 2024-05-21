/* function getDataPromise( callback ){
    setTimeout(()=>{
        callback(null,{data:"import data"})
    }, 2000 );
};

getDataPromise((err, info )=>{
    if(err){
        throw err;
    }
    console.log(info);
}); */

function getDataPromise(){

    return new Promise(( resolve )=>{
        setTimeout(()=>{
            resolve({data:"import data"})
        }, 2000 );
    }).then((data)=>{
        console.log(data);
    }).catch( err =>{
        throw err;
    })
        
};

getDataPromise();

