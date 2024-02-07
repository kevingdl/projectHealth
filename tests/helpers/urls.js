const uk = 'https://uk.stage.mybinxhealth.com/'
let orders = 'https://admin.stage.mybinxhealth.com/'
let clinician = 'https://portal.stage.mybinxhealth.com/'
const MyEnv = 'https://app.stage.mybinxhealth.com/'
//const MyEnv = 'https://app.mybinxhealth.dev/'
//const MyEnv = 'https://costplusdrugs.stage.mybinxhealth.com/'
const cdpheEnv = 'https://cdphe.stage.mybinxhealth.com/'

function ukcv19(){
    return uk;
}
function admin(){
    const isDev = MyEnv.search(".dev")
    if(isDev>0)
    { 
        orders = 'https://admin.mybinxhealth.dev/'
    }
    return orders;
}
function portal(){
    const isDev = MyEnv.search(".dev")
    if(isDev>0)
    { 
        clinician = 'https://portal.mybinxhealth.dev/'
    }
    
    return clinician;
}

export { ukcv19, admin, portal, MyEnv, cdpheEnv };