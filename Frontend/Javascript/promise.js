var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve, reject) => {
        
        settimeout( () => {
            if(userLoggedIn){
                resolve('user logged in');
            } else {
                reject();
            }
        }, 1000);
    });
    return promise;
    
}

setTimeout( () =>{
    userLoggedIn = true;
},500);


checkUserLoggedIn.then( (successMsg) => {console.log(successMsg);}).catch(() => {console.log('usser not logged in')});