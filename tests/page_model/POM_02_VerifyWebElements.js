import { debug } from 'console';
import { Selector, t } from 'testcafe';
import { runInThisContext } from 'vm';
import { MyEnv } from '../helpers/urls'


class Page {  
    constructor () {

//CDPHE
        this.CDPHELogo = Selector('img').withAttribute('src',/.*cdphe-white.png/);
        this.CDPHEOurTest = Selector('h2').withExactText('Our tests');
//APP
        this.MobileNav  = Selector('#navMenuButton');
        this.cv19Banner = Selector('a').withAttribute('href','/covid');
//NAVIGATION MENU ELEMENTS    
        this.BinxLogo       = Selector('img').withAttribute('src',/.*binx-logo.png/);
        
        this.HowItWorks     = Selector('.menu > a').withAttribute('href','/#howitworks');        
        this.FindMyTest     = Selector('.menu > a').withAttribute('href','/find-my-test');   

        this.OurProducts    = Selector('span').withExactText('Our Products');
        this.SexualHealth   = Selector('a').withAttribute('href','/binx-boxes');
        this.Prep           = Selector('a').withAttribute('href','/prep');
        this.GeneralHealth  = Selector('a').withAttribute('href','/binx-boxes');
        this.Covid          = Selector('a').withAttribute('href','/covid');

        this.BinxBoxes      = Selector('.menu > a').withAttribute('href','/binx-boxes');        

        this.ActivateBox    = Selector('.menu > a').withAttribute('href','/activate-box');
        
        this.Upload         = Selector('span').withExactText('Upload');
        this.RapidTest      = Selector('.dropdown-menu > a').withAttribute('href','/rapid-test');
        this.CovidVx        = Selector('.dropdown-menu > a').withAttribute('href','/covid-vaccination');
        
        this.Login          = Selector('.menu > a').withAttribute('href','/login');
        this.Cart           = Selector('#shoppingCartButton');
//US HOME PAGE ELEMENTS
        this.cv19Banner         = Selector('a').withAttribute('href','/covid');
        
        this.HeaderBelowNavMenu = Selector('header').nextSibling().child('div').child('div').child('h1');
        this.HeaderContent       = this.HeaderBelowNavMenu.nextSibling()
        this.FindYourTestButton = Selector('a').withAttribute('href','/find-my-test');
        this.HeaderImage        = Selector('img').withAttribute('src',/.*landing-page-bg.jpg/);
    
        this.H2HowItWorks       = Selector('h2').withExactText('How it Works');
        this.H3FindYourTest     = Selector('h3').withExactText('Find Your Tests');
        this.FindYourTestText   = Selector('p').withExactText('Take our medically-guided quiz to help identify which tests are right for you and place your order.');        
        this.H3ReceiveYourBox   = Selector('h3').withExactText('Receive Your Box');
        //Update 10/10/22 this.ReceiveYourBoxText = Selector('p').withExactText('A licensed clinician will review, and if appropriate, approve your order. We’ll send everything you need to collect your samples at home.');
        this.ReceiveYourBoxText = Selector('p').withExactText('A licensed clinician will review, and if appropriate, approve your order. We’ll send everything you need to collect your samples.');
        this.H3GetResults       = Selector('h3').withExactText('Get Results');
        this.GetResultsText     = Selector('p').withExactText('Your sample will be processed by our partner CLIA-certified and CAP-accredited laboratories. Results will be available within 2-5 days. If your results require follow-up a licensed healthcare professional will call you to discuss results and any next steps.');
        
        //Update 10/10/22 this.H2Benefits = Selector('h2').withExactText('Benefits of At-home Sample Collection');
        this.H2Benefits     = Selector('h2').withExactText('Benefits of Self-Collection');
        
        this.H3ImageAnytime = Selector('img').withAttribute('alt','Person on couch with phone');
        //Update 10/10/22 this.H3Anytime      = Selector('h3').withExactText('Anytime, anywhere sample collection');
        this.H3Anytime      = Selector('h3').withExactText('Convenient and discreet sample collection');
        //Update 10/10/22 this.AnytimeText    = Selector('p').withExactText('Finally, an STD test that you can do on your time, and in your own space.');
        this.AnytimeText    = Selector('p').withExactText('Collect your sample on your own time and in your own space');
        
        
        this.H3Private      = Selector('h3').withExactText('Private');
        this.PrivateText    = Selector('p').withExactText('The process is completely private and comes in discreet packaging.');
        this.H3Medically    = Selector('h3').withExactText('Medically-guided');
        this.MedicallyText  = Selector('p').withExactText('Supportive, licensed clinicians are available as you need.');
                    
        this.H2NotSure      = Selector('h2').withExactText('Not sure which tests are right for you?');
        this.NotSureText    = Selector('p').withExactText('Take our medically-guided quiz to help identify which tests are right for you based on CDC and US Preventive Services Task Force standards.');
        
        this.FindMyTestButton = Selector('a').withAttribute('href','/find-my-test');

    //FIND MY TEST PAGE
        this.H1FindMyTest       = Selector('span').withExactText('Find my test');
        this.CliniciansImg      = this.H1FindMyTest.parent().prevSibling();
        this.FindMyTestText1    = Selector('p').withExactText('We\'re going to ask about your sex life.');
        this.FindMyTestText2    = this.FindMyTestText1.nextSibling();
        this.GetStartedButton   = Selector('#getStartedButton');
    
    //BINX BOXES
        this.H1BinxBoxes            = Selector('#app > main > div > h1');
        this.BinxBoxI_Text          = Selector('#binxBoxes > div > div')
                                        .nth(0)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
        this.BinxBoxI_TestDetails   = Selector('a').withAttribute('href','/binx-boxes/binx-box-i');
        //Updated 10/10/2022 this.BinxBoxI_Price = Selector('span').withExactText('$80');
        this.BinxBoxI_Price         = Selector('span').withExactText('$89');
        this.BinxBoxI_GetThisBox    = Selector('#binxBoxes > div > div')
                                        .nth(0)
                                        .child('button');        

        this.BinxHPVBox_Text        = Selector('#binxBoxes > div > div')
                                        .nth(1)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
        this.BinxHPVBox_TestDetails = Selector('a').withAttribute('href','/binx-boxes/hpv');
        this.BinxHPVBox_Price       = Selector('span').withExactText('$140');
        this.BinxHPVBox_GetThisBox  = Selector('#binxBoxes > div > div')
                                        .nth(1)
                                        .child('button');
        
        this.BinxBoxII_Text         = Selector('#binxBoxes > div > div')
                                        .nth(2)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
        this.BinxBoxII_TestDetails  = Selector('a').withAttribute('href','/binx-boxes/binx-box-ii');
        this.BinxBoxII_Price        = Selector('span').withExactText('$195');
        this.BinxBoxII_GetThisBox   = Selector('#binxBoxes > div > div')
                                        .nth(2)
                                        .child('button');        
        
        this.BinxBoxIII_Text        = Selector('#binxBoxes > div > div')
                                        .nth(3)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
        this.BinxBoxIII_TestDetails = Selector('a').withAttribute('href','/binx-boxes/binx-box-iii');
        this.BinxBoxIII_Price       = Selector('span').withExactText('$205');
		this.BinxBoxIII_GetThisBox  = Selector('#binxBoxes > div > div')
                                        .nth(3)
                                        .child('button');        
		
        this.BinxBoxIV_Text         = Selector('#binxBoxes > div > div')
                                        .nth(4)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
		this.BinxBoxIV_TestDetails  = Selector('a').withAttribute('href','/binx-boxes/binx-box-iv');
        this.BinxBoxIV_Price        = Selector('span').withExactText('$215')
        this.BinxBoxIV_GetThisBox   = Selector('#binxBoxes > div > div')
                                        .nth(4)
                                        .child('button');        
		
        this.BinxBoxV_Text          = Selector('#binxBoxes > div > div')
                                        .nth(5)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
		this.BinxBoxV_TestDetails   = Selector('a').withAttribute('href','/binx-boxes/binx-box-v');
		this.BinxBoxV_Price         = Selector('span').withExactText('$250');
		this.BinxBoxV_GetThisBox    = Selector('#binxBoxes > div > div')
                                        .nth(5)
                                        .child('button');        
		
        this.BinxForPrEP_Text       = Selector('#binxBoxes > div > div')
                                        .nth(6)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
		this.BinxForPrEP_TestDetails = Selector('a').withAttribute('href','/binx-boxes/binx-for-prep-sti');
		this.BinxForPrEP_Price       = Selector('span').withExactText('$285');
		this.BinxForPrEP_GetThisBox  = Selector('#binxBoxes > div > div')
                                        .nth(6)
                                        .child('button');        
		
        this.BinxBoxVI_Text         = Selector('#binxBoxes > div > div')
                                        .nth(7)
                                        .child('div')
                                        .child('div')
                                        .nth(0);
		this.BinxBoxVI_TestDetails  = Selector('a').withAttribute('href','/binx-boxes/binx-box-vi');
		this.BinxBoxVI_Price        = Selector('span').withExactText('$315');
		this.BinxBoxVI_GetThisBox   = Selector('#binxBoxes > div > div')
                                        .nth(7)
                                        .child('button');        
		
        this.BinxForPrEPStarter_Text        = Selector('#binxBoxes > div > div')
                                                .nth(8)
                                                .child('div')
                                                .child('div')
                                                .nth(0);
		this.BinxForPrEPStarter_TestDetails = Selector('a').withAttribute('href','/binx-boxes/binx-for-prep-starter');
		this.BinxForPrEPStarter_Price       = Selector('span').withExactText('$345');
		this.BinxForPrEPStarter_GetThisBox  = Selector('#binxBoxes > div > div')
                                                .nth(8)
                                                .child('button');        
		
		this.H1PayPal   = Selector('h1').withExactText('Pay over time with PayPal');
		this.PayPalLogo = this.H1PayPal.nextSibling('img');
		this.PayPalText = this.PayPalLogo.nextSibling();
		
		this.H3NoSure           = Selector('h3').withExactText('Not sure which test is for you?')
		this.NoSureText         = this.H3NoSure.nextSibling();
		this.NoSureFindMyTest   = this.H3NoSure.nextSibling('a').withAttribute('href','/find-my-test');
		this.NoSureImage        = Selector('img').withAttribute('alt','partner logo');
//ACTIVATE BOX
		this.H1ActivateBox      = Selector('.page > h1');
		this.ActivateBoxYes     = Selector('a').withAttribute('href','/login?to=/activate-box?');
		this.ActivateBoxNo      = Selector('a').withAttribute('href','/activate-box?type=prepaid');
        this.ABinfoModal        = Selector('.css-7nyokj');
        this.ActivationCodeLabel= Selector('label').withExactText('Activation Code');
        this.HelpMeFindThisInfo = Selector('div').withExactText('Help me find this');
        this.BarcodeField       = Selector('input').withAttribute('name','barcode');
        this.ActivateButton     = Selector('button').withExactText('Activate');
//LOGIN & USER CREATION
        this.H1Login    = Selector('h1').withExactText('Login');
        
        this.EmailLabel = Selector('label').withAttribute('for','email');
        this.EmailBox   = Selector('#email');
        this.EmailError = Selector('#emailFeedback');

        this.PwdLabel   = Selector('label').withAttribute('for','password');
        this.PwdBox     = Selector('#password');
        this.PwdError   = Selector('#passwordFeedback');
        
        this.ForgotPwd  = Selector('#forgotPasswordLink').withAttribute('href','/forgot-password');
        
        this.LoginButton= Selector('Button').withExactText('Login');
        
        this.PwdMeter   = Selector('#passwordMeter');
//FORGOT PASSWORD
        this.H1ForgotPwd        = Selector('.container.page > h1');
        this.SendResetButton    = Selector('#sendResetButton');
//RAPID TEST
        this.H1RapidTest = Selector('.page > h1');
        this.UploadRTYes = Selector('#uploadedBeforeButton');
        this.UploadRTNo  = Selector('#notUploadedButton');
//RAPID TEST NO
        this.RTPersonalTab = Selector('#rapidTestProgress > div > div')
            .nth(0)
            .child('div');
        this.RTTestInformationTab = Selector('#rapidTestProgress > div > div')
            .nth(1)
            .child('div');
        this.RTInformation = Selector('.page > div')
            .nth(1)
            .child('div')
            .child('div');
        this.RTCreateHeader = Selector('.page > form > div > h2')
            .nth(0);
        this.RTPersonalHeader = Selector('.page > form > div > h2')
            .nth(1);    
        this.RTIntent = Selector('.page > form > div > div')
            .nth(3)
            .child('h2');
        this.RTIntentCheckbox = Selector('#intent');
        this.RTIntentLabel = Selector('.page > form > div > div')
            .nth(3)
            .child('div')
            .child('div')
            .child('label');
        this.RTContinue = Selector('#activateButton');
//PERSONAL SCREEN
        this.P_AlreadyLink      = Selector('a').withAttribute('href','/login?to=/checkout/personal').parent();
        this.P_CheckoutH1       = Selector('.container.page > h1');
        this.P_tab              = Selector('div').withExactText('Personal');
        this.P_Highlight        = Selector('div').withExactText('Personal').parent().child('hr');
        this.P_YourInformation  = Selector('h3').withExactText('Your information');
        this.P_Who              = Selector('label').withExactText('Who is this test for?');
        this.P_Me               = Selector('label').withExactText('This test is for me');
        this.P_Me_rb            = Selector('input').withAttribute('value','me');
        this.P_Dependent        = Selector('label').withExactText('This test is for my family member or dependent');
        this.P_Dependent_rb     = Selector('input').withAttribute('vaue','dependent');
        this.P_StateLabel       = Selector('label').withExactText('State*');
        this.P_States           = Selector('select').withAttribute('name','shippingState');

        this.FirstNameLabel     = Selector('label').withAttribute('for','firstName');
        this.FirstNameField     = Selector('input').withAttribute('name','firstName');
        
        this.LastNameLabel      = Selector('label').withAttribute('for','lastName');        
        this.LastNameField      = Selector('input').withAttribute('name','lastName');

        this.DOBLabel           = Selector('label').withAttribute('for','dob');
        this.DOBField           = Selector('input').withAttribute('name','dob');
        
        this.SexLabel           = Selector('label').withExactText('Sex Assigned at Birth*');
        this.SexLabelRequired   = Selector('label').withExactText('Sex Assigned at Birth').child('span');
        
        this.rbF                = Selector('input').withAttribute('value','F');
        this.rbFLabel           = Selector('label').withAttribute('for','sexFemale');
        this.rbM                = Selector('input').withAttribute('value','M');
        this.rbMLabel           = Selector('label').withAttribute('for','sexMale');
        this.rbO                = Selector('input').withAttribute('value','O');
        this.rbOLabel           = Selector('.form-label').withAttribute('for','sexOther');
        
        this.StateLabel         = Selector('label').withExactText('State*');
        this.StateList          = Selector('select').withAttribute('name','shippingState');

        this.AgreeLabel    = Selector('#returnKitOnTime-label');
        this.rbAgree       = Selector('input').withAttribute('value','agree');
        this.rbAgreeLabel  = this.rbAgree.nextSibling();
        this.rbDisagree    = Selector('input').withAttribute('value','disagree');
        this.rbDisagreeLabel = this.rbDisagree.nextSibling();
        this.EmailDisagree = Selector('input').withAttribute('name','email').parent().parent().parent();
//ADDRESS SCREEN
        this.A_tab        = Selector('div').withExactText('Address');
        this.A_Highlight  = Selector('div').withExactText('Address').parent().child('hr');
        this.A_YourAddress= Selector('h3').withExactText('Your address');
        this.AddressLabel = Selector('label').withExactText('Address*');
        this.Address      = Selector('input').withAttribute('name','shippingStreet');
        
        this.AptLabel = Selector('label').withExactText('Apt / Unit');
        this.Apt      = Selector('input').withAttribute('name','shippingStreet2');

        this.CityLabel = Selector('label').withExactText('City*');
        this.City      = Selector('input').withAttribute('name','shippingCity');
         
        this.ZipLabel  = Selector('label').withExactText('Postal Code*');
        this.Zip       = Selector('input').withAttribute('name','shippingZip');
         
        this.MobileLabel = Selector('label').withExactText('Mobile number*');
        this.Mobile      = Selector('input').withAttribute('name','phone');
//PAYMENT SCREEN
        this.Pay_tab        = Selector('div').withExactText('Payment');
        this.Pay_Highlight  = Selector('div').withExactText('Payment').parent().child('hr');
        this.Pay_Header     = Selector('h3').withExactText('Payment method');
        this.Pay_CC         = Selector('label').withExactText('Credit Card');
        this.Pay_CardFrame  = Selector('.__PrivateStripeElement').child('iframe');
        this.Pay_CardNumber = Selector('.InputContainer').child('input').withAttribute('name','cardnumber');
        this.Pay_CardExp    = Selector('.InputContainer').child('input').withAttribute('name','exp-date');
        this.Pay_CardCVC    = Selector('.InputContainer').child('input').withAttribute('name','cvc');
        this.Pay_CardZip    = Selector('.InputContainer').child('input').withAttribute('name','postal');
        this.Pay_Clear      = Selector('button').withExactText('Clear');
        this.Pay_Error      = Selector('#cardFeedback');
        this.Pay_PageError  = Selector('div').withExactText('Please correct the validation errors below');
//REVIEW SCREEN
        this.Review_tab         = Selector('div').withExactText('Review'); 
        this.Review_Highlight   = Selector('div').withExactText('Review').parent().child('hr');
        this.ReviewPI           = Selector('h2').withExactText('Your information');
        this.ReviewPIedit       = Selector('a').withAttribute('href','/checkout/personal');
        this.ReviewYA           = Selector('div').withExactText('Address details');
        this.ReviewYAedit       = Selector('a').withAttribute('href','/checkout/address');
        this.ReviewPM           = Selector('span').withExactText('VISA').prevSibling();
        this.ReviewPMedit       = Selector('a').withAttribute('href','/checkout/payment');
        this.ReviewTC           = Selector('h2').withExactText('Consents');
        this.ReviewViewAllCV19  = Selector('a').withAttribute('href','/consent/us-covid')
        this.ReviewConsent      = Selector('label').withAttribute('for','testingConsent');
        this.ReviewConsentBox   = Selector('input').withAttribute('name','testingConsent');
        this.ReviewToS          = Selector('a').withAttribute('href','/tos');
        this.ReviewPrivacy      = Selector('a').withAttribute('href','/privacy-policy');
        this.ReviewResearch     = Selector('label').withAttribute('for','researchConsent');
        this.ReviewResearchBox  = Selector('input').withAttribute('name','researchConsent');
        this.ReviewPlaceOrder   = Selector('button').withExactText('Place Order')



//CV19 Vx
        this.CV_Vx = Selector('#covidVaccinationNavLink').withAttribute('href','/covid-vaccination');
        this.CV_VxHeader = Selector('.page > form > div > h2');
//FOOTER
        this.CompanyLabel       = Selector('h2').withExactText('Company');
        this.CompanyAboutUs     = Selector('a').withAttribute('href','https://staging.binx.health/about-us/');
        this.CompanyLeadership  = Selector('a').withAttribute('href','https://staging.binx.health/leadership/');
        this.CompanyNews        = Selector('a').withAttribute('href','https://staging.binx.health/news/');
        this.CompanyBlog        = Selector('a').withAttribute('href','https://staging.binx.health/binxblog');
        this.CompanyCareers     = Selector('a').withAttribute('href','https://staging.binx.health/careers/');
        this.CompanyContact     = Selector('a').withAttribute('href','https://staging.binx.health/about-us/#contact');
        
        this.AtHomeLabel         = Selector('h2').withExactText('At-Home');
        this.AtHomeHowItWorks    = Selector('h2').withExactText('At-Home')
                                    .parent()
                                    .child('ul')
                                    .child('li')
                                    .child('a')
                                    .withAttribute('href','/#howitworks');
        this.AtHomeFindMyTest    = Selector('a').withAttribute('href','/find-my-test');
        this.AtHomeResources     = Selector('a').withAttribute('href','https://staging.binx.health/resources');
        this.AtHomeMyBinxAccount = Selector('h2').withExactText('At-Home')
                                    .parent()
                                    .child('ul')
                                    .child('li')
                                    .child('a')
                                    .withAttribute('href','/login');
        
        this.BinxIOLabel     = Selector('h2').withExactText('binx io');
        this.BinxIOpoint     = Selector('a').withAttribute('href','https://staging.binx.health/clinical-point-of-care');
        this.BinxIOreserve   = Selector('a').withAttribute('href','https://staging.binx.health/point-of-care/reserve-my-spot/');
        this.BinxIOclinician = Selector('a').withAttribute('href','https://staging.binx.health/clinician-solutions/');
        
        this.ResourcesLabel     = Selector('h2').withExactText('Resources');
        this.ResourcesSTIinfo   = Selector('h2')
                                    .withExactText('Resources')   
                                    .parent()  
                                    .child('ul')                                
                                    .child('li')
                                    .child('a')
                                    .withAttribute('href','https://staging.binx.health/resources');
        this.ResourcesInsurance = Selector('a').withAttribute('href','https://help.mybinxhealth.com/s/topic/0TO4x000000LiE6GAK/insurance-coverage');
        this.ResourcesFAQ       = Selector('a').withAttribute('href','https://help.mybinxhealth.com');
        this.ResourcesBlog      = Selector('a').withAttribute('href','https://staging.binx.health/binxblog');
        
        this.OPSH = Selector('h2').withExactText('Our Products').nextSibling().child('li').nth(0).child('a').withAttribute('href','/binx-boxes');
        this.OPGH = Selector('h2').withExactText('Our Products').nextSibling().child('li').nth(1).child('a').withAttribute('href','/binx-boxes');
        this.OPCV = Selector('h2').withExactText('Our Products').nextSibling().child('li').nth(2).child('a').withAttribute('href','/covid');
        

        this.WeLoveToChatLabel  = Selector('h2').withExactText('We Love To Chat');
        this.CallUs             = this.WeLoveToChatLabel.nextSibling('div');
        this.IconFB             = Selector('a').withAttribute('href','https://www.facebook.com/binxhealth');
        this.IconTwitter        = Selector('a').withAttribute('href','https://twitter.com/BinxHealth');
        this.IconInstagram      = Selector('a').withAttribute('href','https://www.instagram.com/binxhealth/');
        this.IconLinkedIn       = Selector('a').withAttribute('href','https://www.linkedin.com/company/binxhealth/');
        this.CopyRp1            = Selector('p').withText('Copyright ©');
        this.CopyRp2            = this.CopyRp1.nextSibling('p');
        this.ToS                = Selector('a').withAttribute('href','/tos');
        this.Privacy            = Selector('a').withAttribute('href','/privacy-notice');
        this.Cookies            = Selector('a').withExactText('Cookies');
        //this.CLIAimage          = Selector('img').withAttribute('src',MyEnv + 'images/clia.png');
        this.CLIAimage          = Selector('img').withAttribute('src',/.*clia.png/);
        this.HIPAAimage         = Selector('img').withAttribute('src',/.*hipaa.png/);
        this.LabText            = Selector('p').withExactText('* All laboratory services for at-home sample collection provided by binx partner laboratories are CLIA-certified and HIPAA compliant');
//CV19
        this.CV19H1             = Selector('#usCovid > div > div > h1');
        this.CV19Text           = Selector('#usCovid > div > div > p');
        this.CV19SeeKitButton   = Selector('a').withExactText('See Kit');
        this.CV19Image          = Selector('img').withAttribute('alt','Couple with face masks at home');
        this.CV19Warning        = Selector('#usCovid > div')
                                    .nth(1)
                                    .child('div');
        this.CV19HowItWorksH2   = Selector('h2').withExactText('How it works');
        this.CV19Request        = Selector('h3').withText('Request Your COVID-19').parent();
        this.CV19Receive        = Selector('h3').withExactText('Receive Your Kit').parent();
        this.CV19Get            = Selector('h3').withExactText('Get Results').parent();
        this.CV19ThoughYOU      = Selector('h2').withExactText('Though YOU are providing the sample, binx is here for you!').parent();                                    
        this.CV19ThoughYOUimage = Selector('img').withAttribute('alt','Woman on mobile phone on floor');
        this.CV19About          = Selector('#usCovid > div').nth(4).child('div');
        this.CV19AboutDD        = Selector('#usCovid > div')
                                    .nth(4)
                                    .child('div')
                                    .child('div')
                                    .child('div')
                                    .child('div')
                                    .child('div');
        this.CV19AboutDDtext = Selector('#usCovid > div')
                                    .nth(4)
                                    .child('div')
                                    .child('div')
                                    .child('div')
                                    .child('div')
                                    .child('div')
                                    .nth(1);
        this.CV19Test = Selector('h2').withText('Our').parent();
        this.CV19RequestKit = Selector('#usCovid > div').nth(5).child('div').child('button');
        this.CV19Star = Selector('#usCovid > div').nth(5).child('p').nth(1);
        
        this.CV19FAQ = Selector('#usCovid > div').nth(6).child('div').child('h2');
        
        this.CV19FAQ1 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(0);
        this.CV19FAQ2 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(1);
        this.CV19FAQ3 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(2);
        this.CV19FAQ4 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(3);
        this.CV19FAQ5 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(4);
        this.CV19FAQ6 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(5);
        this.CV19FAQ7 = Selector('#usCovid > div').nth(6).child('div').child('div').child('div').child('div').nth(6);
        
        this.CV19FAQ7Link1 = Selector('#usCovid > div')
            .nth(6)
            .child('div')
            .child('div')
            .child('div')
            .child('div')
            .nth(6)
            .child('div')
            .nth(1)
            .child('div')
            .child('ul')
            .child('li')
            .nth(0)
            .child('div')
            .child('a')
            .withAttribute('href','https://www.cdc.gov/coronavirus/2019-nCoV/index.html');
        this.CV19FAQ7Link2 = Selector('#usCovid > div')
            .nth(6)
            .child('div')
            .child('div')
            .child('div')
            .child('div')
            .nth(6)
            .child('div')
            .nth(1)
            .child('div')
            .child('ul')
            .child('li')
            .nth(1)
            .child('div')
            .child('a')
            .withAttribute('href','https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses');
        this.CV19FAQ7Link3 = Selector('#usCovid > div')
            .nth(6)
            .child('div')
            .child('div')
            .child('div')
            .child('div')
            .nth(6)
            .child('div')
            .nth(1)
            .child('div')
            .child('ul')
            .child('li')
            .nth(2)
            .child('div')
            .child('a')
            .withAttribute('href','https://help.mybinxhealth.com/');
//QUESTIONNAIRE SCREEN    
        this.CV19QuestionnaireH1     = Selector('h1').withExactText('COVID-19 At-Home Test Questionnaire');
        this.CV19QuestionnaireQ1     = Selector('label').withAttribute('for','scenario');
        this.CV19QuestionnaireQ1Text = Selector('label').withAttribute('for','scenario').parent().child('div');
        this.CV19QuestionnaireQ1A1   = Selector('label').withExactText('I have symptoms of COVID-19 (fever, cough, shortness of breath, etc.\)');
        this.CV19QuestionnaireQ1A2   = Selector('label').withExactText('I tested positive for COVID-19 within the past 10 days');
        this.CV19QuestionnaireQ1A3   = Selector('label').withExactText('I have been exposed to someone diagnosed with or presumed to have had COVID-19 or was sick with COVID-19 symptoms within the past 14 days');
        this.CV19QuestionnaireQ1A4   = Selector('label').withExactText('I have been asked to get tested by my school, my employer, a health department, contact investigator, or healthcare provider');
        this.CV19QuestionnaireQ1A5   = Selector('label').withExactText('I live, work, or attend events in a group setting');
        this.CV19QuestionnaireQ1A6   = Selector('label').withExactText('I need a test for an upcoming domestic or international travel');
        this.CV19QuestionnaireQ1A7   = Selector('label').withExactText('I completed a trip in the past 5 days');

        this.CV19QuestionnaireQ1A1box = Selector('label').withExactText('I have symptoms of COVID-19 (fever, cough, shortness of breath, etc.\)').child('div').child('input');
        this.CV19QuestionnaireQ1A2box = Selector('label').withExactText('I tested positive for COVID-19 within the past 10 days');
        this.CV19QuestionnaireQ1A3box = Selector('label').withExactText('I have been exposed to someone diagnosed with or presumed to have had COVID-19 or was sick with COVID-19 symptoms within the past 14 days');
        this.CV19QuestionnaireQ1A4box = Selector('label').withExactText('I have been asked to get tested by my school, my employer, a health department, contact investigator, or healthcare provider');
        this.CV19QuestionnaireQ1A5box = Selector('label').withExactText('I live, work, or attend events in a group setting');
        this.CV19QuestionnaireQ1A6box = Selector('label').withExactText('I need a test for an upcoming domestic or international travel');
        this.CV19QuestionnaireQ1A7box = Selector('label').withExactText('I completed a trip in the past 5 days');
        
        this.CV19QuestionnaireQ2     = Selector('label').withAttribute('for','healthConditions');
        this.CV19QuestionnaireQ2Text = Selector('label').withAttribute('for','healthConditions').parent().child('div');
        this.CV19QuestionnaireQ2A1   = Selector('label').withExactText('I am 65 years of age or older');
        this.CV19QuestionnaireQ2A2   = Selector('label').withExactText('I have been told by my doctor that I am very overweight or obese');
        this.CV19QuestionnaireQ2A3   = Selector('label').withExactText('I have a chronic condition (e.g. diabetes, high blood pressure, kidney disease or on dialysis, liver disease, lung disease or asthma, etc.)');
        this.CV19QuestionnaireQ2A4   = Selector('label').withExactText('I have a heart condition (e.g. previous heart attacks, heart failure, etc.)');
        this.CV19QuestionnaireQ2A5   = Selector('label').withExactText('I have a neurologic condition that affects my ability to cough (e.g., had a stroke)');
        this.CV19QuestionnaireQ2A6   = Selector('label').withExactText('I am pregnant');
        this.CV19QuestionnaireQ2A7   = Selector('label').withExactText('I regularly use tobacco or nicotine products (e.g. cigarettes, e-cigarettes, vapes, hookah, etc.)');
        this.CV19QuestionnaireQ2A8   = Selector('label').withExactText('I have a condition that weakens my immune system or makes it harder to fight infections (e.g. AIDS, cancer, lupus, rheumatoid arthritis, solid organ or bone marrow transplant, etc.)');
        this.CV19QuestionnaireQ2A9   = Selector('label').withExactText('I am taking medication that weakens my immune system (e.g. steroids, chemotherapy, immunologics, etc.)');
        this.CV19QuestionnaireQ2A10  = Selector('label').withExactText('None of these apply to me');

        this.CV19QuestionnaireQ2A1box   = Selector('label').withExactText('I am 65 years of age or older').child('div').child('input');
        this.CV19QuestionnaireQ2A2box   = Selector('label').withExactText('I have been told by my doctor that I am very overweight or obese').child('div').child('input');
        this.CV19QuestionnaireQ2A3box   = Selector('label').withExactText('I have a chronic condition (e.g. diabetes, high blood pressure, kidney disease or on dialysis, liver disease, lung disease or asthma, etc.)').child('div').child('input');
        this.CV19QuestionnaireQ2A4box   = Selector('label').withExactText('I have a heart condition (e.g. previous heart attacks, heart failure, etc.)').child('div').child('input');
        this.CV19QuestionnaireQ2A5box   = Selector('label').withExactText('I have a neurologic condition that affects my ability to cough (e.g., had a stroke)').child('div').child('input');
        this.CV19QuestionnaireQ2A6box   = Selector('label').withExactText('I am pregnant').child('div').child('input');
        this.CV19QuestionnaireQ2A7box   = Selector('label').withExactText('I regularly use tobacco or nicotine products (e.g. cigarettes, e-cigarettes, vapes, hookah, etc.)').child('div').child('input');
        this.CV19QuestionnaireQ2A8box   = Selector('label').withExactText('I have a condition that weakens my immune system or makes it harder to fight infections (e.g. AIDS, cancer, lupus, rheumatoid arthritis, solid organ or bone marrow transplant, etc.)').child('div').child('input');
        this.CV19QuestionnaireQ2A9box   = Selector('label').withExactText('I am taking medication that weakens my immune system (e.g. steroids, chemotherapy, immunologics, etc.)').child('div').child('input');
        this.CV19QuestionnaireQ2A10box  = Selector('label').withExactText('None of these apply to me');

        this.GenericContinueButton = Selector('button').withExactText('Continue');
//ERRORS    
        this.CV19QuestionnaireTopError = Selector('.container.page > form > div').nth(0).child('div');
        this.CV19QuestionnaireQ1Error  = Selector('label').withAttribute('for','scenario').parent().child('div').nth(1);
        this.CV19QuestionnaireQ2Error  = Selector('label').withAttribute('for','healthConditions').parent().child('div').nth(1);
    
    
//CART DETAILS
        this.CartSummary    = Selector('h3').withExactText('What you pay today').parent();
        
//UK ELEMENTS
        this.UK_OrderTest   = Selector('a').withAttribute('href','/#tests');
        this.UK_CV19H1      = Selector('#ukCovid > div > div > h1');
        this.UK_CV19text    = Selector('p').withExactText('With at-home sample collection, delivered to your door');
        this.UK_CV19Img     = Selector('img').withAttribute('src','/static/img/uk-covid-hero.jpg?4a30885ff3ce92e68fa053557373562c');
        this.UK_SeeTestButton = Selector('a').withExactText('See Tests');
        
        this.UK_Warning     = Selector('h2').withExactText('Warning!');
        this.UK_Paragraph1  = Selector('h2').parent().child('p').nth(0);
        this.UK_Paragraph2  = Selector('h2').parent().child('p').nth(1);
        
        this.UK_Ready = Selector('h3').withExactText('Ready For Pickup').parent();
        this.UK_Star  = Selector('#ukCovid').child('p');

    }
    async VerifyCartSummary () {
        await t.expect(this.CartSummary.innerText).eql('What you pay today\nCOVID-19 (Novel coronavirus)\n$99\nShipping\nFree\nHave a promo code?\nTotal\n$99\nor $16.50/mo.\nwith PayPal Credit')
    }
    async VerifyAgreeSentence(){
        await t
            .expect(this.AgreeLabel.innerText).eql('I agree that I will collect my sample and return my kit within 30 days.*')
            .expect(this.rbAgree.exists).ok()
            .expect(this.rbAgreeLabel.innerText).eql('I agree')
            .expect(this.rbDisagree.exists).ok()
            .expect(this.rbDisagreeLabel.innerText).eql('I disagree')
            .click(this.rbDisagree)
            .expect(this.EmailDisagree.innerText).eql('Would you like a reminder about this program?\n\nEnter your email address and we will send you a reminder at a later time.\n\nSubmit')
            .click(this.rbAgree)
    }
    async GoToPersonal_CV19()
    {
        await t
            .click(this.CV19RequestKit)
            .click(this.CV19QuestionnaireQ1A1box)
            .click(this.CV19QuestionnaireQ2A1box)
            .click(this.GenericContinueButton)
    }
    async FillPersonal_CV19()
    {
        await t
            .click(this.P_Me_rb)
            .typeText(this.FirstNameField,'Francisco')
            .typeText(this.LastNameField,'O\'Caña')
            .typeText(this.DOBField,'02/20/1930')
            .click(this.rbM)
            .click(this.StateList)
            .click(this.StateList.find('option').withText('Massachusetts'))
            .click(this.rbAgree)
            .click(this.GenericContinueButton)     
    }
    async FillAddress_CV19()
    {
        await t
            .typeText(this.Address,'473 Pleasant St')
            .typeText(this.City,'Holyoke')
            .typeText(this.Zip,'01040')
            .typeText(this.Mobile,'+1(413)-999-9888')
            .click(this.GenericContinueButton)
    }
    async FillPayment_CV19(){
        await t 
            .switchToIframe(this.Pay_CardFrame)
            .typeText(this.Pay_CardNumber,'4242424242424242')
            .typeText(this.Pay_CardExp,'05/30')
            .typeText(this.Pay_CardCVC,'123')
            .typeText(this.Pay_CardZip,'04810')
            .switchToMainWindow()
            .typeText(this.EmailBox,"test@test.com")
            .typeText(this.PwdBox,'.t3st..t3st')
            .click(this.GenericContinueButton)
    }
}    
export default new Page();