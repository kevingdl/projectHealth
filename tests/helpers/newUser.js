let currentdate = new Date(); 
let datetime = (currentdate.getMonth()+1) + 
                    "" + currentdate.getDate() +
                    "" + currentdate.getFullYear().toString().substring(2) +
                    "" + currentdate.getHours() +
                    "" + currentdate.getMinutes() +
                    "" + currentdate.getSeconds();    
/*

let ReadCounter = '';
let fs = require('fs');
fs.readFile('counter.txt','utf8',function(err, data){ReadCounter = data}); 
                        

function UpdateCounter(){
    
    let NewCounter ='';
    NewCounter = ReadCounter;
    parseInt(NewCounter);
    //console.log(NewCounter);
    NewCounter++;
    //console.log(NewCounter);
    fs.writeFile('counter.txt', NewCounter.toString(), function (err) {
        if (err) return console.log(err);
    });
}
*/
function genericPwd() {
    return '.t3st..t3st';
}
function NewUser() {
    return 'kevin.perez+cv'+datetime+'@mybinxhealth.com';
    //return 'kevin.perez'+ReadCounter+'@mybinxhealth.com';
}
function NewUserPrePaid() {
    return 'kevin.perez+kit'+datetime+'@mybinxhealth.com';
}
function NewUserTTR() {
    return 'kevin.perez+ttr'+datetime+'@mybinxhealth.com';
}
function NewUserPCR() {
    return 'kevin.perez+pcr'+datetime+'@mybinxhealth.com';
}
function today(){
    return ('0'+(new Date().getDate())).slice(-2)+('0'+(new Date().getMonth()+1)).slice(-2)+new Date().getFullYear()
}

export { genericPwd, NewUser, NewUserPrePaid, NewUserTTR, NewUserPCR, today };