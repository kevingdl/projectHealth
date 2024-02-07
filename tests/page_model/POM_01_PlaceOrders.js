import { debug } from 'console';
import { Selector, t } from 'testcafe';
import { genericPwd, NewUser, NewUserPrePaid, NewUserTTR, NewUserPCR, today } from '../helpers/newUser';
import { ukcv19, admin, portal, MyEnv } from '../helpers/urls';

class Page {  
    constructor () {
        //APP
        this.MobileNav      = Selector('#navMenuButton');
        this.OurProductsM   = Selector('span').withExactText('Our Products')
        this.cv19SB         = Selector('a').withAttribute('href','/covid');
        this.SeeKit         = Selector('#seeTestsButton');
        this.RequestKit     = Selector('button').withExactText('Request Kit');
        this.ContinueButton = Selector('#continueButton');
        this.LoginLink      = Selector('.menu > a').withAttribute('href','/login');
        
        //SCREENING
        this.Q1A1 = Selector('input').withAttribute('value','symptoms');
        this.Q1A2 = Selector('input').withAttribute('value','testedPositive');
        this.Q1A3 = Selector('input').withAttribute('value','exposure');
        this.Q1A4 = Selector('input').withAttribute('value','referred');
        this.Q1A5 = Selector('input').withAttribute('value','environment');
        this.Q1A6 = Selector('input').withAttribute('value','upcomingTravel');
        this.Q1A7 = Selector('input').withAttribute('value','completedTrip');
        this.Q2A1 = Selector('input').withAttribute('value','old');
        this.Q2A2 = Selector('input').withAttribute('value','overweight');
        this.Q2A3 = Selector('input').withAttribute('value','chronic');
        this.Q2A4 = Selector('input').withAttribute('value','heartCondition');
        this.Q2A5 = Selector('input').withAttribute('value','neurologic');
        this.Q2A6 = Selector('input').withAttribute('value','pregnant');
        this.Q2A7 = Selector('input').withAttribute('value','nicotine');
        this.Q2A8 = Selector('input').withAttribute('value','immunocompromised');
        this.Q2A9 = Selector('input').withAttribute('value','immunosuppressant');
        this.Q2A10 = Selector('input').withAttribute('value','none');
        this.Q3A1 = Selector('input').withAttribute('name','firstTest').withAttribute('value','yes');
        this.Q4A1 = Selector('input').withAttribute('name','race').withAttribute('value','native');
        this.Q5A1 = Selector('input').withAttribute('name','healthcareEmployee').withAttribute('value','yes');
        this.Q6A1 = Selector('input').withAttribute('name','ethnicity').withAttribute('value','not');
        this.Q7A1 = Selector('input').withAttribute('name','genderIdentity').withAttribute('value','no');
        
         //PERSONAL
         this.FirstName = Selector('#firstName');
         this.LastName  = Selector('#lastName');
         this.DOB       = Selector('#dob');
         this.rbF       = Selector('#sexFemale');
         this.rbM       = Selector('#sexMale');
         this.StateList = Selector('select').withAttribute('name','shippingState');
         this.rbAgree   = Selector('input').withAttribute('value','agree')
         
         //ADDRESS
         this.Address  = Selector('input').withAttribute('name','shippingStreet');
         this.City     = Selector('input').withAttribute('name','shippingCity');
         this.Zip      = Selector('input').withAttribute('name','shippingZip');
         this.Mobile   = Selector('input').withAttribute('name','phone');

         //PAYMENT
         this.CardFrame = Selector('.__PrivateStripeElement')
             .child('iframe');
         this.CardNumber = Selector('.InputContainer')
             .child('input')
             .withAttribute('name','cardnumber');
         this.CardExp = Selector('.InputContainer')
             .child('input')
             .withAttribute('name','exp-date');
         this.CVC = Selector('.InputContainer')
             .child('input')
             .withAttribute('name','cvc');
         this.CardZip = Selector('.InputContainer')
             .child('input')
             .withAttribute('name','postal');
         this.email = Selector('#email');
         this.password = Selector('#password');
         
         //REVIEW
         this.ViewAll = Selector('#consentViewAllButton');
         this.ToS = Selector('#tosLink');
         this.PrivacyPolicy = Selector('.form-label')
             .child('a')
             //.withAttribute('href','https://staging.binx.health/privacy-policy');
             .withAttribute('href','/privacy-policy');
         this.Consent = Selector('#testingConsent');
         this.ResearchConsent = Selector('#researchConsent');
         this.Hipaa = Selector('#hipaaConsent');
         this.HipaaURL = Selector('.form-label')  
            .child('a')
            .withText('HIPAA authorization')
        
         this.PlaceOrder = Selector('#placeOrderButton');
         this.OrderRef = Selector('#orderId');

         //LOGIN
        this.LoginButton = Selector('#loginButton');
        
        //PORTAL
        this.OrderNumFilter = Selector('.c-cfOWrV.c-cfOWrV-kPFkjt-small-true.c-cfOWrV-iPJLV-css');
        this.SelectOrder = Selector('.form-checkbox.mt-2');
        this.Approve = Selector('.chakra-button.css-lz1ut7');
        this.Confirm = Selector('.chakra-button.css-yn9mca');
        this.Release = Selector('.chakra-button.css-5g88jq');

        //ADMIN
        this.UserName = Selector('#username');
        this.Submit = Selector('#submit');

        //APP
        this.ActivateBox = Selector('#activateBoxNavLink');
        this.BarcodeInput = Selector('#barcode');
        this.ActivateButton = Selector('#activateButton');
        this.NoBinxUser = Selector('#notTestedButton');
        this.BinxBoxes = Selector('.menu')
             .child('a')
             .withAttribute('href','/binx-boxes');
        this.BinxBoxI = Selector('#product-CG')
            .child('button')
            .withAttribute('data-name','action');
        this.binxHPV = Selector('#product-HPV')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxII = Selector('#product-CG_HIV')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxIII = Selector('#product-CG3')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxIV = Selector('#product-STD4')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxV = Selector('#product-STD5')
            .child('button')
            .withAttribute('data-name','action');
        this.binxPrEP = Selector('#product-PREP_STI')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxVI = Selector('#product-STD9')
            .child('button')
            .withAttribute('data-name','action');
        this.BinxBoxVII = Selector('#product-DELUXE')
            .child('button')
            .withAttribute('data-name','action');
        this.Checkout = Selector('#checkoutButton');       
    }
    
    async CV19product () {
        await t
            .click(this.OurProductsM)
            .click(this.cv19SB)
            .click(this.SeeKit)
            .click(this.RequestKit)      
    }
    async GetPayCheckout () {
      await t
          .click(Selector('button').withText('Get This Box'))
          //.click(Selector('#payWithCashButton'))
          .click(Selector('#checkoutButton'))
  }
    async Screening1 () {
        await t
            .click(this.Q1A1)
            .click(this.Q1A2)
            .click(this.Q1A3)
            .click(this.Q1A4)
            .click(this.Q1A5)
            .click(this.Q1A6)
            .click(this.Q1A7)
            .click(this.Q2A1)
            .click(this.Q2A2)
            .click(this.Q2A3)
            .click(this.Q2A4)
            .click(this.Q2A5)
            .click(this.Q2A6)
            .click(this.Q2A7)
            .click(this.Q2A8)
            .click(this.Q2A9)
            .click(this.Q2A10)
      
    }
    async Screening2 () {
        await t
            .click(this.Q3A1)
            .click(this.Q4A1)
            .click(this.Q5A1)
            .click(this.Q6A1)
            .click(this.Q7A1)
    }
    async GoToApp () {
        await t
            .navigateTo(MyEnv)
    }
    async GoToAdmin () {
        await t
            .navigateTo(admin())
    }
    async GoToPortal () {
        await t
            .navigateTo(portal())            
    }
    async GoToUK () {
        await t
            .navigateTo(ukcv19())            
    }
    async CheckOrderDashboard (DashboardOrderNumber) {
        this.MobileMenu()
        await t
            .click(Selector('#menuLink'))
            .click(Selector('#dashboardNavLink'))
        const DashboardStatus = Selector('.flex.items-center')
                                .withAttribute('data-order',DashboardOrderNumber)
                                .parent()
                                .find('.font-bold.text-binx-purple-500');
        return await DashboardStatus().innerText
    }
    async CheckOrderStatus (StatusOrderNumber) {
        this.MobileMenu()
        await t
            .click(Selector('#menuLink'))
            .click(Selector('#ordersNavLink'))
        const OrderStatus = Selector('#order-'+StatusOrderNumber+' > div > div > div.items-center')
        
        return await OrderStatus().innerText
    }
    async CheckOrderReject (DashboardOrderNumber) {
        this.MobileMenu()
        await t
            .click(Selector('#menuLink'))
            .click(Selector('#dashboardNavLink'))
        const DashboardRejectTxt = Selector('div').withAttribute('data-order',DashboardOrderNumber).nextSibling(1)

        return await DashboardRejectTxt().innerText
  }
  
    async VerifyResultPage(ONresult){
      await t
        .wait(2000)
        .navigateTo(MyEnv+'orders/'+ONresult+'/results')
        .expect(Selector('#resultsHeading').innerText).eql('Results for Peter\'P Ocaña\'s')
    }
    async PrepaidNewUser () {
        await t
            .click(this.NoBinxUser)
    }
    async ActivateTheBox () {
        await t.click(this.ActivateBox)
    }
    async MobileMenu () {
        const isMobileTrue = await this.MobileNav.visible
        if(isMobileTrue)
        {
            await t.click(this.MobileNav)
        }
    }
    async NextScreen () {
        await t
            .click(this.ContinueButton)
    }
    async PersonalUSdata () {
        await t
            //.typeText(this.FirstName,'Frank O’Caña')
            //.typeText(this.LastName,'User _-.,;:*^¨!"·$·%$%/&()[]`+')
            .typeText(this.FirstName,"Peter'P")
            .typeText(this.LastName,"Ocaña's")
            .typeText(this.DOB,'04251996')
            //.click(this.rbF)
            .click(this.rbM)
            .click(this.StateList)
            .click(this.StateList.find('option').withText('Massachusetts'))
            //Massachusetts
            //California
            //const RUthere = await Selector('#returnKitOnTime-label').exists
            if(await Selector('#returnKitOnTime-label').exists)
            {
              await t.click(this.rbAgree)
            }
            
            if(await Selector('#syphilisAcknowledgement').exists)
            {
              await t.click(Selector('#syphilisAcknowledgement'))
            }
            
    }
    async PersonalUKdata () {
        await t
            .typeText(this.FirstName,'Frank O’Caña')
            .typeText(this.LastName,'User _-.,;:*^¨!"·$·%$%/&()[]`+')
            .typeText(this.DOB,'25061999')
            .click(this.rbF)
    }
    async AddressUSdata () {
        //100 Universal City Plaza, Universal City, CA 91608, +18008648377
        //473 Pleasant St Holyoke 01040 +1(413)-999-9888
        await t
            .typeText(this.Address,'473 Pleasant St')
            .typeText(this.City,'Holyoke')
            .typeText(this.Zip,'01040')
            .typeText(this.Mobile,'+1(413)-999-9888')
            
    }
    async AddressUKdata () {
        await t
            .typeText(this.Address,'40 Sloane Court West')
            .typeText(this.City,'Chelsea')
            .typeText(this.Zip,'WC2N 5JR')
            .typeText(this.Mobile,'07000000001')
    }
    async PayUSdata () {
        await t
            .switchToIframe(this.CardFrame)
            .wait(3000)
            .typeText(this.CardNumber,'4242424242424242')
            .typeText(this.CardExp,'12/29')
            .typeText(this.CVC,'123')
            .typeText(this.CardZip,'01040')
            .switchToMainWindow()
            
    }
    async PayUKdata () {
        await t
            .switchToIframe(this.CardFrame)
            .typeText(this.CardNumber,'4000008260000000')
            .typeText(this.CardExp,'06/29')
            .typeText(this.CVC,'098')
            .typeText(this.CardZip,'WC2N 5JR')
            .switchToMainWindow()
            
    }
    async SelectPrepStarter()
    {
      await t
        .click(Selector('a').withExactText('Get started'))
        .click(Selector('button').withExactText('Get started'))
    }
    async AnswerPrepEligibility()
    {
      await t
        .click(Selector('#state'))
        .click(Selector('#state').find('option').withText('Massachusetts'))
      this.NextScreen()
      await t
        .click(Selector('input').withAttribute('name','consent'))
      this.NextScreen()
      await t
        .click(Selector('input').withAttribute('value','preferNotToSay'))
        .click(Selector('input').withAttribute('name','sex').nth(2))
        .click(Selector('input').withAttribute('name','pregnant').nth(1))
        .typeText(Selector('#dateBirth'),'08131961')
        .click(Selector('svg').withAttribute('class','css-8mmkcg'))
        .click(Selector('#react-select-2-option-0'))
        .typeText(Selector('#weight'),'100')
        .click(Selector('input').withAttribute('name','diagnosedHiv').nth(1))
        .click(Selector('input').withAttribute('name','prepDaily').nth(1))
        .click(Selector('input').withAttribute('name','exposed').nth(1))
        .click(Selector('input').withAttribute('name','medications').nth(1))
        .click(Selector('input').withAttribute('name','drugs').nth(1))
        .click(Selector('input').withAttribute('name','history').nth(1))
      this.NextScreen()
    }
    async InsuranceInfo()
    {
      await t
        .click(Selector('input').withAttribute('value','Yes'))
        .typeText(Selector('#primaryInsurance'),'BLUE CROSS BLUE SHIELD of MASSACHUSETTS')
        .pressKey('tab')
        .typeText(Selector('#subscriberId'),'XXP964269957')
        .typeText(Selector('#groupNumber'),'Test1234')
        .typeText(Selector('#subscriberFirstName'),'James')
        .typeText(Selector('#subscriberLastName'),'Johnson')
        .click(Selector('button').withExactText('Submit, and calculate estimate'))
        .wait(10000)
    }
    CallUpdateCounter()
    {
        UpdateCounter()
    }
    async User_credentials () {
        await t
            .typeText(this.email,NewUser())
            .typeText(this.password,genericPwd())
    }
    async PrePaid_credentials () {
        await t
            .typeText(this.email,NewUserPrePaid())
            .typeText(this.password,genericPwd())
    }
    async UK_PCR_credentials () {
        await t
            .typeText(this.email,NewUserPCR())
            .typeText(this.password,genericPwd())
    }
    async UK_TTR_credentials () {
        await t
            .typeText(this.email,NewUserTTR())
            .typeText(this.password,genericPwd())
    }
    async ReviewGeneric (STI) {
        
        if(STI=='N')
        {
            await t
                .expect(this.ViewAll.getAttribute('href')).eql('/consent/us-covid')
                .expect(this.ResearchConsent.exists).ok()
        }
        else
        {
            await t
                .expect(this.ViewAll.getAttribute('href')).eql('/consent/us-sti-uti')
        }
        await t
            .expect(this.ToS.getAttribute('href')).eql('/tos')
            //.expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
            .expect(this.PrivacyPolicy.getAttribute('href')).eql('/privacy-policy')
            .click(this.Consent)
            
            if(await Selector('#estimatesConsent').exists)
            {
              await t.click(Selector('#estimatesConsent'))
            }
            
    }
    async ReviewStanford () {
        await t
            .expect(this.ViewAll.getAttribute('href')).eql('/consent/stanford-covid')
            .expect(this.ToS.getAttribute('href')).eql('/tos/stanford')
            .expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
            .expect(this.ResearchConsent.exists).ok()
            .expect(this.Hipaa.exists).notOk()
            .click(this.Consent)
    }
    async ReviewNewSchool () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/newschool')
            .click(this.Hipaa)
    }
    async ReviewNYFA () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/nyfa')
            .click(this.Hipaa)
    }
    async ReviewBlackRock () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/blackrock')
            .click(this.Hipaa)
    }
    async ReviewNasdaq () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/nasdaq')
            .click(this.Hipaa)
    }
    async ReviewMillennium () {
        await t
            .expect(this.ViewAll.getAttribute('href')).eql('/consent/millennium-covid')
            .expect(this.ToS.getAttribute('href')).eql('/tos')
            .expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
            .expect(this.ResearchConsent.exists).ok()
            .expect(this.Hipaa.exists).ok()
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/millennium')
            .click(this.Hipaa)
            .click(this.Consent)
    }
    async ReviewStCatherines () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/stcatherines')
            .click(this.Hipaa)
    }
    async ReviewDOW () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/dow')
            .click(this.Hipaa)
    }
    async ReviewRockpoint () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/rockpoint')
            .click(this.Hipaa)
    }
    async ReviewNYU () {
        await t
            .expect(this.ViewAll.getAttribute('href')).eql('/consent/nyu-covid')
            .expect(this.ToS.getAttribute('href')).eql('/tos')
            .expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
            .expect(this.ResearchConsent.exists).ok()
            .click(this.Consent)
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/nyu')
            .click(this.Hipaa)
    }
    async ReviewRLT () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/rlt')
            .click(this.Hipaa)
    }
    async ReviewCic_Envision () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_envision')
            .click(this.Hipaa)
    }
    async ReviewTanglewood () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/tanglewood')
            .click(this.Hipaa)
    }
    async ReviewBCAP () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/bcap')
            .click(this.Hipaa)
    }
    async ReviewCic_Greenmtn () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_greenmtn')
            .click(this.Hipaa)
    }
    async ReviewCic_Brownledge () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_brownledge')
            .click(this.Hipaa)
    }
    async ReviewCic_Socapa () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_socapa')
            .click(this.Hipaa)
    }
    async ReviewCic_Sangamon () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_sangamon')
            .click(this.Hipaa)
    }
    async ReviewCic_Farwell () {
        await t
            .expect(this.Hipaa.exists).ok()  
            .expect(this.HipaaURL.getAttribute('href')).eql('/hipaa/cic_farwell')
            .click(this.Hipaa)
    }
    async ReviewCic_VT_Stateemployee () {
        await t
        .expect(this.ViewAll.getAttribute('href')).eql('/consent/vt-covid')
        .expect(this.ToS.getAttribute('href')).eql('/tos')
        .expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
        .expect(this.ResearchConsent.exists).ok()
        .click(this.Consent)
        .expect(this.Hipaa.exists).notOk()
    }
    async ReviewUKdata () {
        await t
            .expect(this.ToS.getAttribute('href')).eql('/tos/uk')
            //.expect(this.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
            .expect(this.PrivacyPolicy.getAttribute('href')).eql('/privacy-policy')
            .expect(this.ResearchConsent.exists).ok()
            .click(this.Consent)
    }
    async CreateOrder () {
        await t
            .click(this.PlaceOrder)
    }
    async StoreOrderNum () {
        await t
            return this.OrderRef.textContent
    }
    async StorePrePaidOrderNum (PrePaidBarcode) {
        await t
          //.navigateTo(admin())//+'searchOrder/orders?queryMap.barcode='+PrePaidBarcode)
          .wait(2000)
          .navigateTo(admin())
          .typeText(Selector('#list-orderData').child('table').child('thead').child('tr').nth(1).child('td').nth(9),PrePaidBarcode)
          
          .pressKey('enter')
          const PrepaidOrderNumElement = Selector('#list-orderData > table > tbody > tr > td:nth-child(1) > a')
          const PrepaidOrderNum = await PrepaidOrderNumElement().innerText
  
            return PrepaidOrderNum
    }
    
    async Approve_Release (OrderNum, Approve_or_Release) {
        await t
            .navigateTo(portal())
            .typeText(this.email,'devmail+kevin-cln01@ci.mybinxhealth.com')
            .typeText(this.password,'.t3st..t3st')
            .click(this.LoginButton)
            .click(Selector('#headerDashboardLink').withText('Clinician Orders'))
            .typeText(this.OrderNumFilter, OrderNum)
            .wait(2000)
            .click(this.SelectOrder)
            if(Approve_or_Release=='Approve'){
                //await t.click(this.Approve)
            }else{
                await t.click(this.Release)
                await t.click(this.Confirm)    
            } 
            //await t.click(this.Confirm)    
    }
    
    async ShipTheOrder (OrderNum) {
        await t
          .debug()
          .wait(5000)
          .navigateTo(admin()+'orderStep/kitShipped/'+OrderNum)
          .wait(5000)
          .debug()
    }
    async CancelTheOrder(OrderNum)
    {
      await t
        .navigateTo(admin()+'order/show/'+OrderNum)
        .typeText(this.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
        .typeText(this.password,'t9xX50U')
        .click(this.Submit)
        .typeText(Selector('#phiAccessReason'),'testing   ')
        .setNativeDialogHandler(() => true)
        .click(Selector('#submitButton'))
        .click('#cancelButton')



    }
    async GetTheBarcode (OrderNum) {
        await t
            .navigateTo(admin()+'order/show/'+OrderNum)
            .typeText(this.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
            .typeText(this.password,'t9xX50U')
            .click(this.Submit)
            //const isTTR = Selector('#show-orderData > div > table:nth-child(4) > tbody > tr:nth-child(2) > td')
            const isTTR = Selector('h3').withExactText('Order Info').nextSibling().child().child().nth(1).child('td')
            const checkTTR = await isTTR().innerText
            if(checkTTR == 'UK_CV19_TTR')
            {
                //const OrderTable = Selector('#show-orderData > div > table:nth-child(4) > tbody > tr:nth-child(13) > td')
                const OrderTable = Selector('h3').withExactText('Order Info').nextSibling().child().child().nth(13).child('td')
                const Barcode = await OrderTable().innerText
                return Barcode
            }else
            {
                //const OrderTable = Selector('#show-orderData > div > table:nth-child(4) > tbody > tr:nth-child(13) > td')
                const OrderTable = Selector('th').withExactText('Barcode').nextSibling()
                const Barcode = await OrderTable().innerText
                return Barcode
            } 
    }
    async ActivateTheOrder (TheBarcode) {
        await t
            .typeText(this.BarcodeInput,TheBarcode)
    }
    async ActivateBarcode (){
        await t
            .click(this.ActivateButton)
            .debug()
    }
    async ReceiveTheOrder (OrderNum) {
      console.log(admin()+'orderStep/kitReceived/'+OrderNum)
        await t
          .debug()
          .navigateTo(admin()+'orderStep/kitReceived/'+OrderNum)
            
    }
    async CreateBarcode (ThePartner) {
        await t
            .typeText(this.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
            .typeText(this.password,'t9xX50U')
            .click(this.Submit)
            .navigateTo(admin()+'kit/index?queryMap.barcode=BXSEKP&sort=barcode&order=desc')
            .click(Selector('#list-kit > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'))
            .click(Selector('.edit'))
            .click(Selector('.select2-selection__arrow'))
            .click(Selector('#select2-partner-results').find('li').withText(ThePartner))
            .click(Selector('#lab'))
            .click(Selector('#lab').find('option').withText('ACCESSGENETICS'))
            .click(Selector('#usaState'))
            .click(Selector('#usaState').find('option').withText('No USA State'))
            
        const myCounter = await Selector('#products').count; //<-- count is a test cafe property
        
        for (let i=0; i<myCounter; i++)
        {
           if(await Selector('#products').nth(i).checked)
           {
             await t.click(Selector('#products').nth(i))
           }
        }        
        
        const Barcode = await Selector('#barcode').value
        await t
            .click(Selector('#products').withAttribute('value','CV19'))
            .setNativeDialogHandler(() => true)
            .click(Selector('input').withAttribute('value','Update'))

            
            
        return Barcode
    }
    async CreateBarcodeODX (ProductCode) {
      await t
          .typeText(this.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
          .typeText(this.password,'t9xX50U')
          .click(this.Submit)
          .navigateTo(admin()+'kit/index?queryMap.barcode=BXSEKP&sort=barcode&order=desc')
          .click(Selector('#list-kit > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'))
          .click(Selector('.edit'))
          .click(Selector('.select2-selection__arrow'))
          .click(Selector('#select2-partner-results').find('li').withText('No Partner'))
          .click(Selector('#lab'))
          .click(Selector('#lab').find('option').withText('USSL'))
          .click(Selector('#usaState'))
          .click(Selector('#usaState').find('option').withText('No USA State'))
          
      const myCounter = await Selector('#products').count; //<-- count is a test cafe property
      
      for (let i=0; i<myCounter; i++)
      {
         if(await Selector('#products').nth(i).checked)
         {
           await t.click(Selector('#products').nth(i))
         }
      }        
      
      const Barcode = await Selector('#barcode').value
      await t
          .click(Selector('#products').withAttribute('value',ProductCode))
          .setNativeDialogHandler(() => true)
          .click(Selector('input').withAttribute('value','Update'))          
      return Barcode
      
    }
    async MockCV19results (OrderNum) {
        var EnvToUse = admin().substring(8)
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "CV19",
            "location": "PRIMARY",
            "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockDiabetesResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "GLUCOSE",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW"
            },
            {
            "disorder": "HBA1C",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": ""
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockFemaleResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "AMH",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "0.36-10.07"
            },
            {
            "disorder": "FSH",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "3.85-113.59"
            },
            {
            "disorder": "LH",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "",
            "referenceRange": "1.20-58.64"
            },
            {
            "disorder": "E2",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": ""
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockLiverResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "ALT",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "11-52"
            },
            {
            "disorder": "AST",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "13-39"
            },
            {
            "disorder": "ALB",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "3.50-5.70"
            },
            {
            "disorder": "TBILI",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "",
            "referenceRange": "0.3-1.0"
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockThyroidResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "TSHG",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "0.45-5.33"
            },
            {
            "disorder": "FREE_T4",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "0.59-1.22"
            },
            {
            "disorder": "FREE_T3",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH"
            },
            {
            "disorder": "TPOAB",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": ""
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockKidneyResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "BUN",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "7-25"
            },
            {
            "disorder": "CREATININE",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "0.7-1.3"
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockLipidsResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "HDL",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "40-100"
            },
            {
            "disorder": "CHOL",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "0-200"
            },
            {
            "disorder": "LDL",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "",
            "referenceRange": "0-130"
            },
            {
            "disorder": "TRIG",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "",
            "referenceRange": "0-150"
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async MockMaleResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "TESTOSTERONETOTAL",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": ""
            },
            {
            "disorder": "CORTISOL",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": ""
            },
            {
            "disorder": "DHEA_S",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "LOW",
            "referenceRange": "23-266"
            },
            {
            "disorder": "PSA",
            "location": "BLOOD_CARD",
            "result": "ABNORMAL",
            "abnormalFlag": "HIGH",
            "referenceRange": "0-4"
            }

          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    
    async MockUKresults (OrderNum) {
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@admin.stage.mybinxhealth.com/orderStep/releaseCustomResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "CV19",
            "location": "PRIMARY",
            "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    
    async Mock_BinxBoxI_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxHPVbox_results (OrderNum) {
        var EnvToUse = admin().substring(8)
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "HPV",
                "location": "GENITAL",
                "result": "NEGATIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxII_results (OrderNum) {
        var EnvToUse = admin().substring(8)
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxIII_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxIV_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "NEGATIVE"
            },
            {
                "disorder": "TRICH",
                "location": "GENITAL",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxV_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "NEGATIVE"
            },
            {
                "disorder": "TRICH",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "SYPHILIS",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxPrEP_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "CREATININE",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "SYPHILIS",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxVI_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "NEGATIVE"
            },
            {
                "disorder": "HEP_C",
                "location": "BLOOD_CARD",
                "result": "NEGATIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "NEGATIVE"
            },
            {
                "disorder": "SYPHILIS",
                "location": "BLOOD_CARD",
                "result": "NEGATIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_BinxBoxPrEPstarter_results (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
        'method': 'POST',
        'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
        'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
                "disorder": "CHLAMYDIA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "GONORRHEA",
                "location": "GENITAL",
                "result": "POSITIVE"
            },
            {
                "disorder": "CREATININE",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "HIV",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "SYPHILIS",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "HEP_B",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            },
            {
                "disorder": "HEP_C",
                "location": "BLOOD_CARD",
                "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async Mock_Reject_results (OrderNum) {
      await t
        .navigateTo(admin()+'orderStep/kitRejected/'+OrderNum)
    }
    async MockPrepStarterResults (OrderNum) {
      var EnvToUse = admin().substring(8)
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@'+EnvToUse+'orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "CHLAMYDIA",
            "location": "GENITAL",
            "result": "POSITIVE",
            },
            {
            "disorder": "GONORRHEA",
            "location": "GENITAL",
            "result": "POSITIVE",
            },
            {
            "disorder": "CREATININE",
            "location": "BLOOD_CARD",
            "result": "POSITIVE",
            },
            {
            "disorder": "HEP_B",
            "location": "BLOOD_CARD",
            "result": "POSITIVE",
            },
            {
            "disorder": "HEP_C",
            "location": "BLOOD_CARD",
            "result": "POSITIVE",
            },
            {
            "disorder": "HEP_C",
            "location": "BLOOD_CARD",
            "result": "POSITIVE",
            },
            {
            "disorder": "SYPHILIS",
            "location": "BLOOD_CARD",
            "result": "POSITIVE",
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    }
    async LoginUser () {
        await t.click(this.LoginLink)
        this.User_credentials()
        await t.click(this.LoginButton)
    }
    async LoginPrePaid () {
        await t.click(this.LoginLink)
        this.PrePaid_credentials()
        await t.click(this.LoginButton)
    }
    async LoginUK_PCR () {
        await t.click(this.LoginLink)
        this.UK_PCR_credentials()
        await t.click(this.LoginButton)
    }
    async LoginUK_TTR () {
        await t.click(this.LoginLink)
        this.UK_TTR_credentials()
        await t.click(this.LoginButton)
    }
    async UKpcr () {
        await t
            .click(this.SeeKit)
            .click(Selector('#ukcv19 .button.w-56.mx-auto.button-primary'))
    }
    async UKttr () {
        await t
            .click(this.SeeKit)
            .click(Selector('#ukcv19ttr .button.w-56.mx-auto.button-primary'))
    }
    async UKttr_travelerInfo () {
        await t
            .typeText(Selector('#idNumber'),'g-098238x')
            .click(Selector('#ethnicity'))
            .click(Selector('#ethnicity').find('option').withText('White Irish'))
            .typeText(Selector('#arrivalDate'),today())
            .click(Selector('#transportationMode'))
            .click(Selector('#transportationMode').find('option').withText('Coach'))
            .typeText(Selector('#vesselNumber'),'IMO 8814275')
            .typeText(Selector('#departureDate'),today())
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(8) > div > div > div.css-1wy0on6'))
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(8) > div > div.css-26l3qy-menu > div').find('div').withText('Mexico'))
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(9) > div > div > div.css-1wy0on6'))
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(9) > div > div.css-26l3qy-menu > div').find('div').withText('Spain'))
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(9) > div > div > div.css-1wy0on6'))
            .click(Selector('#ttrForm > div:nth-child(3) > div > div:nth-child(9) > div > div.css-26l3qy-menu > div').find('div').withText('Mexico'))
            .typeText(Selector('#street'),'40 Sloane Court West')
            .typeText(Selector('#city'),'Chelsea')
            .typeText(Selector('#zip'),'SW3 4TD')

    }
}
 
export default new Page();