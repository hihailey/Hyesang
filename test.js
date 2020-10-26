const fs = require('fs'); 
  
let renamePromise = (nameYouWant,newnew) => {

    return new Promise ((resolve, reject) => {


        fs.rename(nameYouWant, newnew, (err) => {
            if (err){

            reject (err);}

            else{
            
                resolve (newnew);
            
        }
        });

  

    })


}

renamePromise('oldname.txt','newname.txt')
    .then(result => console.log('The name is changed to ' + result))
    .catch(err => console.log(err))
