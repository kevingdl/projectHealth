import { Selector } from 'testcafe';

class Page {  
    constructor () {
        this.cv19Banner = Selector('div')
            .nth(8)
            .child('a')
            .withAttribute('href','/covid');
        this.SeeKit = Selector('#seeTestsButton');
        this.RequestKit = Selector('#tests')
            .child('div')
            .child('button')
            .withAttribute('type','button');
        //SCREENING    
        this.Q1A1 = Selector('#scenario-symptoms');
        this.Q1A2 = Selector('#scenario-testedPositive');
        this.Q1A3 = Selector('#scenario-exposure');
        this.Q1A4 = Selector('#scenario-referred');
        this.Q1A5 = Selector('#scenario-environment');
        this.Q1A6 = Selector('#scenario-upcomingTravel');
        this.Q1A7 = Selector('#scenario-completedTrip');
        this.Q2A1 = Selector('#healthConditions-old');
        this.Q2A2 = Selector('#healthConditions-overweight');
        this.Q2A3 = Selector('#healthConditions-chronic');
        this.Q2A4 = Selector('#healthConditions-heartCondition');
        this.Q2A5 = Selector('#healthConditions-neurologic');
        this.Q2A6 = Selector('#healthConditions-pregnant');
        this.Q2A7 = Selector('#healthConditions-nicotine');
        this.Q2A8 = Selector('#healthConditions-immunocompromised');
        this.Q2A9 = Selector('#healthConditions-immunosuppressant');
        this.Q2A10 = Selector('#healthConditions-none');
        this.ContinueButton = Selector('#continueButton');
        //PERSONAL
        this.FirstName = Selector('#firstName');
        this.LastName = Selector('#lastName');
        this.DOB = Selector('#dob');
        this.rbF = Selector('#sexFemale');
        this.StateList = Selector('#shippingState');
        //ADDRESS
        this.Address = Selector('#address');
        this.City = Selector('#city');
        this.Zip = Selector('#zip');
        this.Mobile = Selector('#phone');
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
            .withAttribute('href','https://staging.binx.health/privacy-policy');
        this.Consent = Selector('#testingConsent');
        this.ResearchConsent = Selector('#researchConsent');
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
        this.Q3A1 = Selector('#firstTest-yes');
        this.Q4A1 = Selector('#healthcareEmployee-no');
        this.Q5A1 = Selector('#genderIdentity-man');
        this.Q6A1 = Selector('#race-no');
        this.Q7A1 = Selector('#ethnicity-not');
        this.ActivateButton = Selector('#activateButton');
        this.NoBinxUser = Selector('#notTestedButton');

        
        
        

    
        

    }
}

export default new Page();
