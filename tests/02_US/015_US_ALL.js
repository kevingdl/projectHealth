import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { app } from '../helpers/urls';
import Colors from 'colors';

fixture `US STAGE MYBINXHEALTH.COM`
    .page `https://app.stage.mybinxhealth.com`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`

test('APP US - Navigation Menu - Binx Logo - Logout', async t => {
  await t.expect(page.BinxLogo.exists).ok()  
  
});
test('APP US - Navigation Menu - How It Works - Logout', async t => {
  await t.expect(page.HowItWorks.exists).ok()
});
test('APP US - Navigation Menu - Find My Test - Logout', async t => {
  await t.expect(page.FindMyTest.exists).ok()
});
test('APP US - Navigation Menu - Binx Boxes - Logout', async t => {
  await t.expect(page.BinxBoxes.exists).ok()
});
test('APP US - Navigation Menu - Activate Box - Logout', async t => {
  await t.expect(page.ActivateBox.exists).ok()
});
test('APP US - Navigation Menu - Upload - Logout', async t => {
  await t.expect(page.Upload.exists).ok()
});
test('APP US - Navigation Menu - Rapid Test - Logout', async t => {
  await t.expect(page.RapidTest.exists).ok()
});
test('APP US - Navigation Menu - Covid Vaccination - Logout', async t => {
  await t.expect(page.CovidVx.exists).ok()
});
test('APP US - Navigation Menu - Login - Logout', async t => {
  await t.expect(page.Login.exists).ok()
});
test('APP US - Navigation Menu - Cart Icon - Logout', async t => {
  await t.expect(page.Cart.exists).ok();
});
test('APP US - CV19 Banner', async t => {
  await t.expect(page.cv19Banner.exists).ok()
});
test('APP US - Test Easy Header', async t => {
  await t.expect(page.H1TestEasy.innerText).eql('Test easy, rest easy','H1 mismatch')
    //console.log("-----".green);
});
test('APP US - Content - Test Easy Paragraph', async t => {
  await t.expect(page.TestEasyText.innerText).eql('Virtually all STIs are treatable and most are easily cured. The key is to get tested and get on with it. Knowing your status is easier than you think.')
});
test('APP US - Content - Test Easy Image Exists', async t => {
    await t.expect(page.TestEasyImg.exists).ok()
});
test('APP US - Content - Test Easy Find Your Test Button Exists', async t => {
  await t.expect(page.FindYourTestButton.exists).ok()
});
test('APP US - Content - How It Works Header', async t => {
  await t.expect(page.H2HowItWorks.innerText).eql('How it works')
});
test('APP US - Content - Find Your Test Header', async t => {
  await t.expect(page.H3FindYourTest.innerText).eql('Find Your Tests')
});
test('APP US - Content - Find Your Test Text', async t => {
      await t.expect(page.FindYourTestText.exists).ok()
});
test('APP US - Content - Receive Your Box Header', async t => {
  await t.expect(page.H3ReceiveYourBox.innerText).eql('Receive Your Box')
});
test('APP US - Content - Receive Your Box Text', async t => {
  await t.expect(page.ReceiveYourBoxText.exists).ok()
});
test('APP US - Content - Get Results Header', async t => {
  await t.expect(page.H3ReceiveYourBox.innerText).eql('Receive Your Box')
});
test('APP US - Content - Get Results Text', async t => {
  await t.expect(page.GetResultsText.exists).ok()
});
test('APP US - Content - Benefits', async t => {
  await t.expect(page.H2Benefits.innerText).eql('Benefits of At-home Sample Collection')
});
test('APP US - Content - Anytime', async t => {
  await t.expect(page.H3Anytime.innerText).eql('Anytime, anywhere sample collection')
});
test('APP US - Content - Anytime Text', async t => {
  await t.expect(page.AnytimeText.innerText).eql('Finally, an STD test that you can do on your time, and in your own space.')
});
test('APP US - Content - Private', async t => {
  await t.expect(page.H3Private.innerText).eql('Private')
});
test('APP US - Content - Private Text', async t => {
  await t.expect(page.PrivateText.innerText).eql('The process is completely private and comes in discreet packaging.')
});
test('APP US - Content - Medically', async t => {
  await t.expect(page.H3Medically.innerText).eql('Medically-guided')
});
test('APP US - Content - Medically Text', async t => {
  await t.expect(page.MedicallyText.innerText).eql('Supportive, licensed clinicians are available as you need.')
});
test('APP US - Content - Not Sure', async t => {
  await t.expect(page.H2NotSure.innerText).eql('Not sure which tests are right for you?')
});
test('APP US - Content - Not Sure Text', async t => {
  await t.expect(page.NotSureText.innerText).eql('Take our medically-guided quiz to help identify which tests are right for you based on CDC and US Preventive Services Task Force standards.')
});
test('APP US - Content - Find My Test Button', async t => {
  await t.expect(page.FindMyTestButton.exists).ok()
});

//*****************************************+
test('APP US - Find My Test Clinician Image', async t => {
  await t.click(page.FindMyTestButton)
  const ClnImg = await page.CliniciansImg.getAttribute('src')
  let ClnCompare = ClnImg.substring(ClnImg.length-22,ClnImg.length)
  await t.expect(ClnCompare).eql('/images/clinicians.svg')
});
test('APP US - Find My Test Header', async t => {
  await t
    .click(page.FindMyTestButton)  
    .expect(page.H1FindMyTest.innerText).eql('Find my test')
});
test('APP US - Find My Test Text 1', async t => {
  await t
    .click(page.FindMyTestButton)
    .expect(page.FindMyTestText1.exists).ok()
});
test('APP US - Find My Test Text 2', async t => {
  await t
    .click(page.FindMyTestButton)  
    .expect(page.FindMyTestText2.innerText).eql('We know that can be a sensitive subject, but we promise we won\'t share your answers with anyone. We need this information so we can suggest the right test for you.')
});
test('APP US - Get Started Button', async t => {
  await t
    .click(page.FindMyTestButton)
    .expect(page.GetStartedButton.exists).ok()
});
//*****************************************+
test('PASSED\nAPP - US - Activate Box > I have activated or ordered a binx box before', async t => {
  await t
    .click(page.ActivateBox)
    .expect(page.H1ActivateBox.innerText).eql('Activate Box')
    console.log(" APP - US - Activate Box > I have activated or ordered a binx box before".gray)
    console.log(" \u2713".green + " [ 1/11] Header".gray)

  await t.expect(page.ActivateBoxYes.innerText).eql('I have activated or ordered a binx box before')
    console.log(" \u2713".green +  " [ 2/11] I have activated or ordered a binx box before".gray)

  await t.expect(page.ActivateBoxNo.innerText).eql('I have NOT activated or ordered a binx box before')
    console.log(" \u2713".green + " [ 3/11] I have NOT activated or ordered a binx box before".gray)

  await t.click(page.ActivateBoxYes)
    console.log(" \u2713".green + " [ 4/11] Click - I have activated or ordered a binx box before".gray)

  await t.expect(page.H1Login.innerText).eql('Login')
    console.log(" \u2713".green + " [ 5/11] User lands on Login page".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " [ 6/11] Email Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " [ 7/11] Email Textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " [ 8/11] Password Label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " [ 9/11] Password Textbox".gray)

  await t.expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    console.log(" \u2713".green + " [10/11] Forgot your password? Click here text".gray)

  await t.expect(page.ForgotPwd.exists).ok()
    console.log(" \u2713".green + " [11/11] Forgot your password? Click here Link".gray)
});
test('PASSED\nAPP US - Activate Box > I have NOT activated or ordered a binx box before', async t => {
  await t
    .click(page.ActivateBox)
    .click(page.ActivateBoxNo)
    console.log("\n APP US - Activate Box > I have NOT activated or ordered a binx box before".gray)
    console.log(" \u2713".green + " [1/6] Click -  I have NOT activated or ordered a binx box before".gray)

  await t.expect(page.H1ActivateBox.innerText).eql('Activate Box')
    console.log(" \u2713".green + " [2/6] Activate Box Header".gray)

  await t.expect(page.ABinfoModal.innerText).eql('Before activating, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours\nYou will be able to drop off the sample before the last shipping pickup of the day (when required)')
    console.log(" \u2713".green + " [3/6] Warning Message Displayed".gray)

  await t.expect(page.HelpMeFindThisInfo.innerText).eql('Help me find this')
    console.log(" \u2713".green + " [4/6] Help me find this text".gray)

  await t.expect(page.BarcodeField.exists).ok()
    console.log(" \u2713".green + " [5/6] Barcode textbox".gray)

  await t.expect(page.ActivateButton.innerText).eql('Activate')
    console.log(" \u2713".green + " [6/6] Activate Button".gray)

});

//*****************************************+
test('PASSED\nAPP US - Upload > Rapid Test > I have uploaded a Rapid Test before', async t => {
  await t
    .click(page.Upload)
    .click(page.RapidTest)
    .expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    console.log(" APP US - Upload > Rapid Test > I have uploaded a Rapid Test before".gray)
    console.log(" \u2713".green + " [ 1/11] Header".gray)

  await t.expect(page.UploadRTYes.innerText).eql('I have uploaded a Rapid Test before')
    console.log(" \u2713".green + " [ 2/11] I have uploaded a Rapid Test before option".gray)

  await t.expect(page.UploadRTNo.innerText).eql('I have NOT uploaded a Rapid Test before')
    console.log(" \u2713".green + " [ 3/11] I have NOT uploaded a Rapid Test before".gray)

  await t.click(page.UploadRTYes)
    console.log(" \u2713".green + " [ 4/11] Click - I have uploaded a Rapid Test before".gray)

  await t.expect(page.H1Login.innerText).eql('Login')
    console.log(" \u2713".green + " [ 5/11] User lands on Login page".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " [ 6/11] Email Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " [ 7/11] Email Textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " [ 8/11] Password Label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " [ 9/11] Password Textbox".gray)

  await t.expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    console.log(" \u2713".green + " [10/11] Forgot your password? Click here text".gray)

  await t.expect(page.ForgotPwd.exists).ok()
    console.log(" \u2713".green + " [11/11] Forgot your password? Click here Link".gray)
    
});
test('PASSED\nAPP US - Upload > Rapid Test > I have NOT uploaded a Rapid Test before', async t => {
  await t
    .click(page.Upload)
    .click(page.RapidTest)
    .click(page.UploadRTNo)
    console.log("\n APP US - Upload > Rapid Test > I have NOT uploaded a Rapid Test before".gray)  
    console.log(" \u2713".green + " [ 1/40] Click - I have NOT uploaded a Rapid Test before".gray)

  await t.expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    console.log(" \u2713".green + " [ 2/40] Rapid Test Header".gray)

  await t.expect(page.RTPersonalTab.innerText).eql('Personal')
    console.log(" \u2713".green + " [ 3/40] Personal Tab".gray)

  await t.expect(page.RTTestInformationTab.innerText).eql('Test Information')
    console.log(" \u2713".green + " [ 4/40] Test Information Title".gray)

  await t.expect(page.RTInformation.innerText).eql('Before Uploading Rapid Test, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours')
    console.log(" \u2713".green + " [ 4/40] Informational Message".gray)

  await t.expect(page.RTCreateHeader.innerText).eql('Create your account credentials')
    console.log(" \u2713".green + " [ 5/40] Create your account credentials section".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " [ 6/40] Email address Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " [ 7/40] Email address textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " [ 8/40] Password Label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " [ 9/40] Password textbox".gray)

  await t.expect(page.PwdMeter.exists).ok()
    console.log(" \u2713".green + " [10/40] Password Meter".gray)

  await t.expect(page.RTPersonalHeader.innerText).eql('Personal information')
    console.log(" \u2713".green + " [11/40] Personal Information Section".gray)

  await t.expect(page.FirstNameLabel.innerText).eql('First name*')
    console.log(" \u2713".green + " [12/40] First Name Label".gray)

  await t.expect(page.FirstNameField.exists).ok()
    console.log(" \u2713".green + " [13/40] First Name textbox".gray)

  await t.expect(page.LastNameLabel.innerText).eql('Last name*')
    console.log(" \u2713".green + " [14/40] Last Name Label".gray)

  await t.expect(page.LastNameField.exists).ok()
    console.log(" \u2713".green + " [15/40] Last Name textbox".gray)

  await t.expect(page.DOBLabel.innerText).eql('Date of Birth*')
    console.log(" \u2713".green + " [16/40] Date of Birth Label".gray)

  await t.expect(page.DOBField.exists).ok()
    console.log(" \u2713".green + " [17/40] Date of Birth textbox".gray)

  await t.expect(page.SexLabel.innerText).eql('Sex Assigned at Birth*')
    console.log(" \u2713".green + " [18/40] Sex Assigned at Birth*".gray)

  await t.expect(page.rbFLabel.innerText).eql('Female')
    console.log(" \u2713".green + " [19/40] Female option".gray)

  await t.expect(page.rbF.exists).ok()
    console.log(" \u2713".green + " [20/40] Female radiobutton".gray)

  await t.expect(page.rbMLabel.innerText).eql('Male')
    console.log(" \u2713".green + " [21/40] Male option".gray)

  await t.expect(page.rbM.exists).ok()
    console.log(" \u2713".green + " [22/40] Male radiobutton".gray)

  await t.expect(page.rbOLabel.innerText).eql('Other')
    console.log(" \u2713".green + " [23/40] Other option".gray)

  await t.expect(page.rbO.exists).ok()
    console.log(" \u2713".green + " [24/40] Other radiobutton".gray)

  await t.expect(page.AddressLabel.innerText).eql('Address*')
    console.log(" \u2713".green + " [25/40] Address Label".gray)

  await t.expect(page.Address.exists).ok()
    console.log(" \u2713".green + " [26/40] Address textbox".gray)

  await t.expect(page.AptLabel.innerText).eql('Apt / Unit')
    console.log(" \u2713".green + " [27/40] Apt/Unit Label".gray)

  await t.expect(page.Apt.exists).ok()
    console.log(" \u2713".green + " [28/40] Apt/Unit textbox".gray)

  await t.expect(page.CityLabel.innerText).eql('City*')
    console.log(" \u2713".green + " [29/40] City Label".gray)

  await t.expect(page.City.exists).ok()
    console.log(" \u2713".green + " [30/40] City textbox".gray)

  await t.expect(page.StateLabel.innerText).eql('State*')
    console.log(" \u2713".green + " [31/40] State Label".gray)

  await t.expect(page.StateList.exists).ok()
    console.log(" \u2713".green + " [32/40] State dropdown".gray)

  await t.expect(page.ZipLabel.innerText).eql('Postal Code*')
    console.log(" \u2713".green + " [33/40] Postal Code label".gray)

  await t.expect(page.Zip.exists).ok()
    console.log(" \u2713".green + " [34/40] Postal Code textbox".gray)

  await t.expect(page.MobileLabel.innerText).eql('Mobile number*')
    console.log(" \u2713".green + " [35/40] Mobile Label".gray)

  await t.expect(page.Mobile.exists).ok()
    console.log(" \u2713".green + " [36/40] Mobile textbox".gray)

  await t.expect(page.RTIntent.innerText).eql('Intent')
    console.log(" \u2713".green + " [37/40] Intent Label".gray)

  await t.expect(page.RTIntentCheckbox.exists).ok()
    console.log(" \u2713".green + " [38/40] Intent checkbox".gray)

  await t.expect(page.RTIntentLabel.innerText).eql('I\'m enrolled in a school/organizational program')
    console.log(" \u2713".green + " [39/40] Intent sentence".gray)

  await t.expect(page.RTContinue.exists).ok()
    console.log(" \u2713".green + " [40/40] Continue button".gray)
});
//*****************************************+
test('PASSED\nAPP US - Upload > COVID Vaccination', async t => {
  await t
    .click(page.Upload)
    .click(page.CV_Vx).expect(page.CV_Vx.exists).ok()
    console.log(" APP US - Upload > COVID Vaccination".gray)
    console.log(" \u2713".green + " COVID Vaccination link".gray)

  await t.expect(page.CV_VxHeader.innerText).eql('Personal information')
    console.log(" \u2713".green + " [ 1/11] Personal Information section".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " [ 2/11] Email address label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " [ 3/11] Email address textbox".gray)

  await t.expect(page.FirstNameLabel.innerText).eql('First name*')
    console.log(" \u2713".green + " [ 4/11] First Name label".gray)

  await t.expect(page.FirstNameField.exists).ok()
    console.log(" \u2713".green + " [ 5/11] First Name textbox".gray)

  await t.expect(page.LastNameLabel.innerText).eql('Last name*')
    console.log(" \u2713".green + " [ 6/11] Last Name label".gray)

  await t.expect(page.LastNameField.exists).ok()
    console.log(" \u2713".green + " [ 7/11] Last Name textbox".gray)

  await t.expect(page.DOBLabel.innerText).eql('Date of Birth*')
    console.log(" \u2713".green + " [ 8/11] Date of Birth label".gray)

  await t.expect(page.DOBField.exists).ok()
    console.log(" \u2713".green + " [ 9/11] Date of Birth textbox".gray)

  await t.expect(page.RTContinue.exists).ok()
    console.log(" \u2713".green + " [10/11] Continue button exists".gray)
});

//*****************************************+
test('PASSED\nAPP US - Login & Forgot Password', async t => {
  await t
    .click(page.Login)
    .expect(page.H1Login.innerText).eql('Login')
    console.log("APP US - Login & Forgot Password".gray)
    console.log(" \u2713".green + " Login Header".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email address label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email address textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " Password label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " Password textbox".gray)

  await t.expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    console.log(" \u2713".green + " Forgot your passoword text".gray)

  await t.expect(page.ForgotPwd.exists).ok()
    console.log(" \u2713".green + " Forgot your passworkd link".gray)

  await t.expect(page.LoginButton.exists).ok()
    console.log(" \u2713".green + " Login button".gray)

  await t.expect(page.LoginButton.innerText).eql('Login')
    console.log(" \u2713".green + " Login text".gray)

  await t.click(page.ForgotPwd)
    console.log(" \u2713".green + " Click - Forgot Password link".gray)

  await t.expect(page.H1ForgotPwd.innerText).eql('Forgot Password')
    console.log(" \u2713".green + " Forgot Password Header".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email textbox".gray)

  await t.expect(page.SendResetButton.innerText).eql('Send Reset')
    console.log(" \u2713".green + " Sent Reset button".gray)

});

//*****************************************+
test('APP US - Footer - Company Label', async t => {
  await t
    .expect(page.CompanyLabel.innerText).eql('Company')
});
test('APP US - Footer - Company - About Us', async t => {
  await t
    .expect(page.CompanyAboutUs.innerText).eql('About Us')
    .expect(page.CompanyAboutUs.exists).ok()
});
test('APP US - Footer - Company - Leadership', async t => {
  await t
    .expect(page.CompanyLeadership.innerText).eql('Leadership')
    .expect(page.CompanyLeadership.exists).ok()
});
test('APP US - Footer - Company - News', async t => {
  await t
    .expect(page.CompanyNews.innerText).eql('News')
    .expect(page.CompanyNews.exists).ok()
});
test('APP US - Footer - Company - Blog', async t => {
  await t
    .expect(page.CompanyBlog.innerText).eql('Blog')
    .expect(page.CompanyBlog.exists).ok()
});
test('APP US - Footer - Company - Careers', async t => {
  await t
    .expect(page.CompanyCareers.innerText).eql('Careers')
    .expect(page.CompanyCareers.exists).ok()
});
test('APP US - Footer - Company - Contact', async t => {
  await t
    .expect(page.CompanyContact.innerText).eql('Contact')
    .expect(page.CompanyContact.exists).ok()
});
test('APP US - Footer - At Home Label', async t => {
  await t
    .expect(page.AtHomeLabel.innerText).eql('At-Home')
});
test('APP US - Footer - At Home - How It Works', async t => {
  await t
    .expect(page.AtHomeHowItWorks.innerText).eql('How It Works')
    .expect(page.AtHomeHowItWorks.exists).ok()
});
test('APP US - Footer - At Home - Find My Test', async t => {
  await t
    .expect(page.AtHomeFindMyTest.innerText).eql('Find My Test')
    .expect(page.AtHomeFindMyTest.exists).ok()
});
test('APP US - Footer - At Home - Binx Boxes', async t => {
  await t
    .expect(page.AtHomeBinxBoxes.innerText).eql('binx Boxes')
    .expect(page.AtHomeBinxBoxes.exists).ok()
});
test('APP US - Footer - At Home - Resources', async t => {
  await t
    .expect(page.AtHomeResources.innerText).eql('Resources')
    .expect(page.AtHomeResources.exists).ok()
});
test('APP US - Footer - At Home - My Binx Account', async t => {
  await t
    .expect(page.AtHomeMyBinxAccount.innerText).eql('My binx Account')
    .expect(page.AtHomeMyBinxAccount.exists).ok()
});
test('APP US - Footer - binx io Label', async t => {
  await t
    .expect(page.BinxIOLabel.innerText).eql('binx io')
});
test('APP US - Footer - binx io - Point of Care', async t => {
  await t
    .expect(page.BinxIOpoint.innerText).eql('Point-of-Care')
    .expect(page.BinxIOpoint.exists).ok()
});
test('APP US - Footer - binx io - Reserve My Spot', async t => {
  await t
    .expect(page.BinxIOreserve.innerText).eql('Reserve My Spot')
    .expect(page.BinxIOreserve.exists).ok()
});
test('APP US - Footer - binx io - Clinician Solutions', async t => {
  await t
    .expect(page.BinxIOclinician.innerText).eql('Clinician Solutions')
    .expect(page.BinxIOclinician.exists).ok()
});
test('APP US - Footer - Resources Label', async t => {
  await t
    .expect(page.ResourcesLabel.innerText).eql('Resources')
});
test('APP US - Footer - Resources - STI Info', async t => {
  await t
    .expect(page.ResourcesSTIinfo.innerText).eql('STI info')
    .expect(page.ResourcesSTIinfo.exists).ok()
});
test('APP US - Footer - Resources - Insurance', async t => {
  await t
    .expect(page.ResourcesInsurance.innerText).eql('Insurance')
    .expect(page.ResourcesInsurance.exists).ok()
});
test('APP US - Footer - Resources - FAQ', async t => {
  await t
    .expect(page.ResourcesFAQ.innerText).eql('FAQ')
    .expect(page.ResourcesFAQ.exists).ok()
});
test('APP US - Footer - Resources - Blog', async t => {
  await t
    .expect(page.ResourcesBlog.innerText).eql('Blog')
    .expect(page.ResourcesBlog.exists).ok()
});
test('APP US - Footer - We Love To Chat', async t => {
  await t
    .expect(page.WeLoveToChatLabel.innerText).eql('We Love To Chat')
});
test('APP US - Footer - Call us', async t => {
  await t
    .expect(page.CallUs.innerText).eql('Call us at 844-MYBINX-1 (844-692-4691)')
});
test('APP US - Footer - Facebook', async t => {
  await t
    .expect(page.IconFB.exists).ok()
});
test('APP US - Footer - Twitter', async t => {
  await t
    .expect(page.IconTwitter.exists).ok()
});
test('APP US - Footer - Instagram', async t => {
  await t
    .expect(page.IconInstagram.exists).ok()
});
test('APP US - Footer - Copyright P1', async t => {
  await t
    .expect(page.CopyRp1.innerText).eql('Copyright © 2022 binx health, inc. All rights reserved. For healthy humans™ and powering convenient health™ are trademarks of binx health limited.')
});
test('APP US - Footer - Copyright P2', async t => {
  await t
    .expect(page.CopyRp2.innerText).eql('Our clinicians may be independent service providers who are collaborating with binx to offer their authorization, review, and consultation services through our website.')
});
test('APP US - Footer - Terms of Services', async t => {
  await t
    .expect(page.ToS.innerText).eql('Terms of Service')
    .expect(page.ToS.exists).ok()
});
test('APP US - Footer - Privacy Notice', async t => {
  await t
    .expect(page.Privacy.innerText).eql('Privacy Notice')
    .expect(page.Privacy.exists).ok()
});
test('APP US - Footer - Cookies', async t => {
  await t
    .expect(page.Cookies.innerText).eql('Cookies')
});
test('APP US - Footer - CLIA Image', async t => {
  await t
    .expect(page.CLIAimage.exists).ok()
});
test('APP US - Footer - HIPAA Image', async t => {
  await t
    .expect(page.HIPAAimage.exists).ok()
});
test('APP US - Footer - Lab Text', async t => {
  await t
    .expect(page.LabText.innerText).eql('* All laboratory services for at-home sample collection provided by binx partner laboratories are CLIA-certified and HIPAA compliant')
});

//*****************************************+
test('Passed\nAPP US - CV19 page', async t => {
  console.log(" APP US - CV19 page".gray)

  await t
    .navigateTo('https://app.stage.mybinxhealth.com/covid')
    .expect(page.CV19H1.innerText).eql('Find out if you are currently infected with SARS-CoV-2')
    console.log(" \u2713".green + " Header".gray)

  await t.expect(page.CV19Text.innerText).eql('COVID-19 test with at-home sample collection')
    console.log(" \u2713".green + " Text".gray)

  await t.expect(page.CV19SeeKitButton.innerText).eql('See Kit')
    console.log(" \u2713".green + " See Kit Button".gray)

  await t.expect(page.CV19Image.exists).ok()
    console.log(" \u2713".green + " Image".gray)

  await t.expect(page.CV19Warning.innerText).eql('Attention!\n\nIf you feel like you are having a medical emergency, please call 9-1-1.\n\nIf you are experiencing severe trouble breathing, continuous pain or pressure in your chest, feeling confused or having difficulty waking up, blue-colored lips or face, or any other emergency signs or symptoms, please seek immediate medical care.')
    console.log(" \u2713".green + " Warning".gray)

  await t.expect(page.CV19HowItWorksH2.innerText).eql('How it works')
    console.log(" \u2713".green + " How It Works".gray)

  await t.expect(page.CV19Request.innerText).eql('Request Your COVID-19 Collection Kit\n\nTake our questionnaire to determine whether you are eligible to access testing. An independent licensed clinician will review, and if appropriate, approve your order.')
    console.log(" \u2713".green + " Request".gray)

  await t.expect(page.CV19Receive.innerText).eql('Receive Your Kit\n\nWe\'ll send everything you need to collect and return your nasal swab sample to your door. We ship overnight back to the lab.')
    console.log(" \u2713".green + " Receive".gray)

  await t.expect(page.CV19Get.innerText).eql('Get Results\n\nYour sample will be processed by CLIA-certified laboratories within 48 hours from receipt. Licensed healthcare providers will review your results and provide medically-guided recommendations as needed.')
    console.log(" \u2713".green + " Get".gray)

  await t.expect(page.CV19ThoughYOU.innerText).eql('Though YOU are providing the sample, binx is here for you!\nOur unique service has been designed to protect you, your data, our courier partners, and laboratory partner staff running the tests.\nYou can return your sample to a convenient drop-off location or our shipping provider can pick up from your home, meaning you can isolate or quarantine as may be appropriate.\nThe binx health At-home Nasal Swab COVID-19 Sample Collection Kit and our lab partners have received Emergency Use Authorization from the FDA. We only work with labs that are CLIA-certified.\nIf your result is positive for COVID-19 or there is a problem with your result, a licensed healthcare provider will contact you and schedule a telehealth consultation with a healthcare provider if needed. All patients have the option to speak to a clinician about their results.\nOur testing complies with all national and local laws regarding mandatory result reporting to public health agencies.')
    console.log(" \u2713".green + " Though YOU".gray)

  await t.expect(page.CV19ThoughYOUimage.exists).ok()
    console.log(" \u2713".green + " Though YOU Image".gray)

  await t.expect(page.CV19About.innerText).eql('About COVID-19\n\nCOVID-19 is caused by the SARS-CoV-2 virus. Infection with the virus can range from being asymptomatic to life-threatening respiratory illness. Infection has been detected globally and in all 50 states. Symptoms associated with COVID-19 include cough, shortness of breath or difficulty breathing, fever, chills, muscle pain, headache, sore throat or new loss of taste or smell.\n\nCOVID-19 can present with severe illness in individuals of any age and without any previous health problems, but the risk for severe illness from COVID-19 increases with age, with older adults at highest risk. Having underlying medical conditions may also increase one’s risk for severe illness from COVID-19.\n\nYou should consult with your healthcare provider before ordering an at-home collection kit if you have any concerning symptoms or if you have any of the risk factors for severe illness.\n\nCould I be at higher risk of severe illness?')
    console.log(" \u2713".green + " About".gray)

  await t.expect(page.CV19AboutDD.innerText).eql('Could I be at higher risk of severe illness?')
    console.log(" \u2713".green + " About Dropdown".gray)

  await t.click(page.CV19AboutDD)
    console.log(" \u2713".green + " About Click".gray)

  await t.expect(page.CV19AboutDDtext.innerText).eql('If you have any symptoms concerning for COVID-19 and any of the following conditions or risk factors, which may put you at increased risk of severe illness from COVID-19, you should consult with your healthcare provider before using this test:\nCancer\nChronic kidney disease\nCOPD (chronic obstructive pulmonary disease)\nImmunocompromised state (weakened immune system) from solid organ transplant or bone marrow transplant, immune deficiencies, HIV, use of corticosteroids, or use of other immune weakening medicines\nObesity (body mass index [BMI] of 30 or higher)\nSerious heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies\nSickle cell disease\nType 2 diabetes mellitus\nAsthma (moderate-to-severe)\nCerebrovascular disease (affects blood vessels and blood supply to the brain)\nCystic fibrosis\nHypertension or high blood pressure\nNeurologic conditions, such as dementia\nLiver disease\nPregnancy\nPulmonary fibrosis (having damaged or scarred lung tissues)\nSmoking\nThalassemia (a type of blood disorder)\nType 1 diabetes mellitus')
    console.log(" \u2713".green + " About Answer".gray)

  await t.expect(page.CV19Test.innerText).eql('Our COVID-19 Test (At-home Collection)\n\nAfter a sample is collected with the binx at-home nasal swab COVID-19 sample collection kit it is sent to and tested by our partner reference laboratory. The test used by the laboratory determines if an individual is actively infected with COVID-19. The laboratory test uses PCR (polymerase chain reaction) to determine the presence of genetic material in your sample.\n\nbinx At-home Nasal Swab COVID-19 Sample Collection Kit\nTests for:\nCOVID-19 (Novel coronavirus)\nWho is this for?\nThe PCR test may be right if:\nYou have symptoms of COVID-19 (such as fever, cough, or shortness of breath)\nYou don’t have symptoms but may have been exposed to COVID-19\nYou don’t have symptoms but live or work in a place where people reside, meet, or gather in close proximity*\nYour public health department, contact investigator, or healthcare provider has identified you as someone who should get tested\n$99\nRequest Kit\n\n*Includes healthcare settings, homeless shelters, assisted living facilities, group homes, prisons, detention centers, schools, and workplaces')
    console.log(" \u2713".green + " Test".gray)

  await t.expect(page.CV19RequestKit.innerText).eql('Request Kit')
    console.log(" \u2713".green + " Request Kit".gray)

  await t.expect(page.CV19Star.innerText).eql('*Includes healthcare settings, homeless shelters, assisted living facilities, group homes, prisons, detention centers, schools, and workplaces')
    console.log(" \u2713".green + " Star".gray)

  await t.expect(page.CV19FAQ.innerText).eql('Frequently asked questions')
    console.log(" \u2713".green + " FAQ Header".gray)

  await t.click(page.CV19FAQ1)
    console.log(" \u2713".green + " FAQ Question 1 Click".gray)

  await t.expect(page.CV19FAQ1.textContent).eql('What is COVID-19?Coronavirus disease 2019, abbreviated as COVID-19, is an infectious disease caused by a novel coronavirus (SARS-CoV-2) not previously seen in humans. The virus responsible for the disease belongs within the same category of viruses (coronaviruses) that cause other mild upper-respiratory tract illnesses, like the common cold. It was first identified in December 2019 in Wuhan, China. Now, it is in almost every country in the world.')
    console.log(" \u2713".green + " FAQ Question 1 & Answer".gray)

  await t.click(page.CV19FAQ2)
    console.log(" \u2713".green + " FAQ Question 2 Click".gray)

  await t.expect(page.CV19FAQ2.textContent).eql('How can I get COVID-19 / How does the virus spread?COVID-19 is extremely contagious and spreads mainly through respiratory droplets from infected people. When an infected person coughs, sneezes, or just talks, these droplets are spread through the surrounding air and can land on others or be inhaled by others. The closer and longer you are interacting with an infected person, the more likely it is that you will become infected. Infectious droplets can also land on surfaces touched by other people who then can contract the virus by then touching their eyes, nose, or mouth.  There is no evidence that COVID-19 is spread by ticks or mosquitoes, and the risk of transmission to and from animals is low. Similarly, there is no evidence that you can contract the virus from drinking water and little risk in contracting the virus from eating food or handling its packaging.')
    console.log(" \u2713".green + " FAQ Question 2 & Answer".gray)

  await t.click(page.CV19FAQ3)
    console.log(" \u2713".green + " FAQ Question 3 Click".gray)

  await t.expect(page.CV19FAQ3.textContent).eql('What are the signs and symptoms of COVID-19?Many have only mild symptoms, and some have no symptoms at all. About 80% of people with COVID-19 are able to recover without hospital care. When symptoms do occur, they can appear 2-14 days after being exposed to the virus and may include:Fever or chillsCoughShortness of breath or difficulty breathingFatigueMuscle or body achesHeadacheNew loss of taste or smellSore throatCongestion or runny noseNausea or vomitingDiarrheaIn some cases, symptoms become severe and a person may require intensive care. If you notice any of the following signs or symptoms, seek emergency care immediately:Difficulty breathingConfusionInability to stay awakeBluish lips or facePersistent chest pressure or painThis list does not cover all possible symptoms. Please discuss any other symptoms you may have with your healthcare provider. If you call 9-1-1 for emergency assistance, notify the operator that you are seeking care for someone who has or may have COVID-19. If you decide to go to an urgent care facility, call ahead to notify them that you are arriving with someone who has or may have COVID-19.')
    console.log(" \u2713".green + " FAQ Question 3 & Answer".gray)

  await t.click(page.CV19FAQ4)
    console.log(" \u2713".green + " FAQ Question 4 Click".gray)

  await t.expect(page.CV19FAQ4.textContent).eql('What types of tests are there for COVID-19?There are two  main categories of COVID-19 tests: viral and antibody testing. The viral test, often called a PCR (polymerase chain reaction) test, detects the presence of the virus that causes COVID-19, and determines if you have an active infection. The antibody test detects the proteins that fight off infection and may detect if you have had a previous COVID-19 infection. These tests should not be used to detect a current infection as antibodies may only appear about 1-3 weeks after infection.  ')
    console.log(" \u2713".green + " FAQ Question 4 & Answer".gray)

  await t.click(page.CV19FAQ5)
    console.log(" \u2713".green + " FAQ Question 5 Click".gray)

  await t.expect(page.CV19FAQ5.textContent).eql('What do my results mean?A positive viral test result means that it is likely you are currently infected with COVID-19. A negative viral test result means that it is unlikely you were infected at the time of sample collection. However, sometimes there is not enough virus present early in an infection to detect and you may still be infectious or become sick later on. It is also possible for you to be exposed and become infected with the virus after your test. As with any medical test, inaccurate results (i.e., false positives or negatives) are possible. For this reason, it is important that you continue taking preventative measures such as wearing a mask and social distancing.A positive antibody test result means you may have antibodies from an infection with the virus that causes COVID-19. However, there is a chance that a positive result means you have antibodies from an infection with a different virus from the same family of viruses (called coronaviruses). Having antibodies to the virus that causes COVID-19 may provide protection from getting infected with the virus again. But even if it does, it is unknown how much protection the antibodies provide or how long this protection lasts. A negative antibody test means you may not have ever had COVID-19 or you may have a current infection. It typically takes 1–3 weeks after infection for your body to make antibodies, so if you are early on in your infection the antibody test may be negative.  ')
    console.log(" \u2713".green + " FAQ Question 5 & Answer".gray)

  await t.click(page.CV19FAQ6)
    console.log(" \u2713".green + " FAQ Question 6 Click".gray) 

  await t.expect(page.CV19FAQ6.textContent).eql('How does a viral COVID-19 test work?Viral testing works by collecting material from specific sites and testing it for the presence of the virus. This testing can be performed with multiple different sample types including, nasopharyngeal, nasal and throat swabs, as well as saliva. Sample collection is quick, easy and painless in most cases. Samples can be self-collected or clinician-collected depending on the particular test. ')
    console.log(" \u2713".green + " FAQ Question 6 & Answer".gray)

  await t.click(page.CV19FAQ7)
    console.log(" \u2713".green + " FAQ Question 7 Click".gray)

  await t.expect(page.CV19FAQ7.textContent).eql('Where can I get more information?Centers for Disease Control and Prevention: Coronavirus (COVID-19)World Health Organization: Q&A on coronaviruses (COVID-19)binx health FAQs')
    console.log(" \u2713".green + " FAQ Question 7 & Answer".gray)

  await t.expect(page.CV19FAQ7Link1.exists).ok()
    console.log(" \u2713".green + " FAQ Question 7 Link 1".gray)

  await t.expect(page.CV19FAQ7Link2.exists).ok()
    console.log(" \u2713".green + " FAQ Question 7 Link 2".gray)

  await t.expect(page.CV19FAQ7Link3.exists).ok()
    console.log(" \u2713".green + " FAQ Question 1 Link 3".gray)
});

//*****************************************+
test('PASSED\nAPP US - CV19 - Quesionnaire', async t => {
  await t
      .navigateTo('https://app.stage.mybinxhealth.com/covid')
      .click(page.CV19RequestKit)
  console.log(" APP US - CV19 - Quesionnaire".gray)
  
  await t.expect(page.CV19QuestionnaireH1.innerText).eql('COVID-19 At-Home Test Questionnaire')
    console.log(" \u2713".green + " Questionnaire Header".gray)

  await t.expect(page.CV19QuestionnaireQ1.innerText).eql('Choose the scenario(s) that best describes you today*')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1".gray)

  await t.expect(page.CV19QuestionnaireQ1Text.innerText).eql('Select all that apply')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Text".gray)

  await t.expect(page.CV19QuestionnaireQ1A1.innerText).eql('I have symptoms of COVID-19 (fever, cough, shortness of breath, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 1".gray)

  await t.expect(page.CV19QuestionnaireQ1A2.innerText).eql('I tested positive for COVID-19 within the past 10 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 2".gray)

  await t.expect(page.CV19QuestionnaireQ1A3.innerText).eql('I have been exposed to someone diagnosed with or presumed to have had COVID-19 or was sick with COVID-19 symptoms within the past 14 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 3".gray)

  await t.expect(page.CV19QuestionnaireQ1A4.innerText).eql('I have been asked to get tested by my school, my employer, a health department, contact investigator, or healthcare provider')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 4".gray)

  await t.expect(page.CV19QuestionnaireQ1A5.innerText).eql('I live, work, or attend events in a group setting')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 5".gray)

  await t.expect(page.CV19QuestionnaireQ1A6.innerText).eql('I need a test for an upcoming domestic or international travel')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 6".gray)

  await t.expect(page.CV19QuestionnaireQ1A7.innerText).eql('I completed a trip in the past 5 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 7".gray)

  await t.expect(page.CV19QuestionnaireQ2.innerText).eql('Do any of the following statements apply to you?*')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2".gray)

  await t.expect(page.CV19QuestionnaireQ2Text.innerText).eql('Select all that apply')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Text".gray)

  await t.expect(page.CV19QuestionnaireQ2A1.innerText).eql('I am 65 years of age or older')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 1".gray)

  await t.expect(page.CV19QuestionnaireQ2A2.innerText).eql('I have been told by my doctor that I am very overweight or obese')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 2".gray)

  await t.expect(page.CV19QuestionnaireQ2A3.innerText).eql('I have a chronic condition (e.g. diabetes, high blood pressure, kidney disease or on dialysis, liver disease, lung disease or asthma, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 3".gray)

  await t.expect(page.CV19QuestionnaireQ2A4.innerText).eql('I have a heart condition (e.g. previous heart attacks, heart failure, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 4".gray)

  await t.expect(page.CV19QuestionnaireQ2A5.innerText).eql('I have a neurologic condition that affects my ability to cough (e.g., had a stroke)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 5".gray)

  await t.expect(page.CV19QuestionnaireQ2A6.innerText).eql('I am pregnant')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 6".gray)

  await t.expect(page.CV19QuestionnaireQ2A7.innerText).eql('I regularly use tobacco or nicotine products (e.g. cigarettes, e-cigarettes, vapes, hookah, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 7".gray)

  await t.expect(page.CV19QuestionnaireQ2A8.innerText).eql('I have a condition that weakens my immune system or makes it harder to fight infections (e.g. AIDS, cancer, lupus, rheumatoid arthritis, solid organ or bone marrow transplant, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 8".gray)

  await t.expect(page.CV19QuestionnaireQ2A9.innerText).eql('I am taking medication that weakens my immune system (e.g. steroids, chemotherapy, immunologics, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 9".gray)

  await t.expect(page.CV19QuestionnaireQ2A10.innerText).eql('None of these apply to me')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 10".gray)

  await t.expect(page.GenericContinueButton.innerText).eql('Continue')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Continue".gray)

  await t.click(page.GenericContinueButton)
    console.log(" \u2713".green + " CV19 - Quesionnaire - Continue Click".gray)

  await t.expect(page.CV19QuestionnaireTopError.innerText).eql('Error\nPlease correct the validation error(s) below.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Error".gray)

  await t.expect(page.CV19QuestionnaireQ1Error.innerText).eql('A valid response is required.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Error".gray)

  await t.expect(page.CV19QuestionnaireQ2Error.innerText).eql('A valid response is required.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Error".gray)
});
//*****************************************+
test.only('PASSED\nAPP US - CV19 - Personal', async t => {
  console.log(" APP US - CV19 - Personal".gray)
  
  await t
      .navigateTo('https://app.stage.mybinxhealth.com/covid')
      .click(page.CV19RequestKit)
      .click(page.CV19QuestionnaireQ1A1box)
      .click(page.CV19QuestionnaireQ2A1box)
      .click(page.GenericContinueButton)
      .expect(page.P_AlreadyLink.innerText).eql('Already have a binx account? Click here to login')
    console.log(" \u2713".green + " Already have a binx account? Click here to login".gray)

  await t.expect(page.P_AlreadyLink.exists).ok()
    console.log(" \u2713".green + " Already have a binx account? Click here to login - Link".gray)

  await t.expect(page.P_CheckoutH1.innerText).eql('Checkout')
    console.log(" \u2713".green + " Checkout Header".gray)

  await t
  .expect(page.P_tab.innerText).eql('Personal')
  .expect(page.A_tab.innerText).eql('Address')
  .expect(page.Pay_tab.innerText).eql('Payment')
  .expect(page.Review_tab.innerText).eql('Review')
    console.log(" \u2713".green + " Progress Bar".gray)

  await t.expect(page.P_Highlight.exists).ok();
    console.log(" \u2713".green + " Is highlighted".gray)

  await t.expect(page.P_YourInformation.innerText).eql('Your information')
    console.log(" \u2713".green + " Your Information Header".gray)
  
  await t.expect(page.P_Who.innerText).eql('Who is this test for?')
    console.log(" \u2713".green + " Who is this test for?".gray)

  await t.expect(page.P_Me.innerText).eql('This test is for me')
    console.log(" \u2713".green + " This test is for me".gray)

  await t.expect(page.P_Dependent.innerText).eql('This test is for my family member or dependent')
    console.log(" \u2713".green + " This test is for my family member or dependent".gray)

  await t
    .expect(page.FirstNameLabel.innerText).eql('First name*')
    .expect(page.FirstNameField.exists).ok()
    console.log(" \u2713".green + " First Name".gray)

  await t
    .expect(page.LastNameLabel.innerText).eql('Last name*')
    .expect(page.LastNameField.exists).ok()
    console.log(" \u2713".green + " Last Name".gray)
  
  await t
  .expect(page.DOBLabel.innerText).eql('Date of Birth*')
  .expect(page.DOBField.exists).ok()
  console.log(" \u2713".green + " Date of Birth".gray)

  await t.expect(page.SexLabel.innerText).eql('Sex Assigned at Birth*')
    console.log(" \u2713".green + " Sex Assigned at Birth".gray)
  
  await t
    .expect(page.rbFLabel.innerText).eql('Female')
    .expect(page.rbF.exists).ok()
    console.log(" \u2713".green + " Female".gray)

  await t
    .expect(page.rbMLabel.innerText).eql('Male')
    .expect(page.rbM.exists).ok()
    console.log(" \u2713".green + " Male".gray)

  await t
    .expect(page.rbOLabel.innerText).eql('Other')
    .expect(page.rbO.exists).ok()
    console.log(" \u2713".green + " Other".gray)

  await t.expect(page.P_StateLabel.innerText).eql('State*')
    console.log(" \u2713".green + " State".gray)

  await t.expect(page.P_States.innerText).eql('Choose a state\nAlabama\nAlaska\nArizona\nArkansas\nCalifornia\nColorado\nConnecticut\nDelaware\nDistrict Of Columbia\nFlorida\nGeorgia\nHawaii\nIdaho\nIllinois\nIndiana\nIowa\nKansas\nKentucky\nLouisiana\nMaine\nMaryland\nMassachusetts\nMichigan\nMinnesota\nMississippi\nMissouri\nMontana\nNebraska\nNevada\nNew Hampshire\nNew Jersey\nNew Mexico\nNew York\nNorth Carolina\nNorth Dakota\nOhio\nOklahoma\nOregon\nPennsylvania\nPuerto Rico\nRhode Island\nSouth Carolina\nSouth Dakota\nTennessee\nTexas\nUtah\nVermont\nVirginia\nWashington\nWest Virginia\nWisconsin\nWyoming')
    console.log(" \u2713".green + " List of States".gray)

  page.VerifyCartHeader()
    console.log(" \u2713".green + " Cart Header".gray)
  
  page.VerifyCartProduct_CV19()
    console.log(" \u2713".green + " Cart Product".gray)

  page.VerifyCartSubtotal_CV19()
    console.log(" \u2713".green + " Cart Subtotal".gray)

  page.VerifyCartShipping()
    console.log(" \u2713".green + " Cart Shipping".gray)

  page.VerifyCartPromo()
    console.log(" \u2713".green + " Cart Promo Code".gray)

  page.VerifyCartTotal_CV19()  
    console.log(" \u2713".green + " Cart Total".gray)

  page.VerifyCartPayPal()
    console.log(" \u2713".green + " Cart or $16.50/mo with PayPal Credit".gray)

  await t.expect(page.GenericContinueButton.innerText).eql('Continue')
    console.log(" \u2713".green + " Continue Button".gray)

  await t
    .click(page.P_Me_rb)
    .typeText(page.FirstNameField,'Francisco')
    .typeText(page.LastNameField,'O\'Caña')
    .typeText(page.DOBField,'20/03/1930')
    .click(page.rbM)
    .click(page.StateList)
    .click(page.StateList.find('option').withText('Massachusetts'))
    .click(page.GenericContinueButton)
    .expect(Selector('#dob-feedback').innerText).eql('Please enter your date of birth in the MM/dd/yyyy format')
    console.log(" \u2713".green + " Date Error Message".gray)

});
//*****************************************+
test.only('PASSED\nAPP US - CV19 Address Screen', async t => {
  console.log(" APP US - CV19 Address Screen".gray)

await t
    .navigateTo('https://app.stage.mybinxhealth.com/covid')    
    .click(page.CV19RequestKit)
    .click(page.P_Me_rb)
    .typeText(page.FirstNameField,'Francisco')
    .typeText(page.LastNameField,'O\'Caña')
    .typeText(page.DOBField,'02/20/1930')
    .click(page.rbM)
    .click(page.StateList)
    .click(page.StateList.find('option').withText('Massachusetts'))
    .click(page.GenericContinueButton)     
    .expect(page.P_CheckoutH1.innerText).eql('Checkout')
  console.log(" \u2713".green + " Checkout Header".gray)

await t
      .expect(page.P_tab.innerText).eql('Personal')
      .expect(page.A_tab.innerText).eql('Address')
      .expect(page.Pay_tab.innerText).eql('Payment')
      .expect(page.Review_tab.innerText).eql('Review')
      console.log(" \u2713".green + " Progress Bar".gray)

await t.expect(page.A_Highlight.exists).ok();  
  console.log(" \u2713".green + " Address is hihglighted".gray)

await t.expect(page.A_YourAddress.innerText).eql('Your address')
  console.log(" \u2713".green + " Your Address Header".gray)

await t
      .expect(page.AddressLabel.innerText).eql('Address*')
      .expect(page.Address.exists).ok()
      console.log(" \u2713".green + " Address".gray)

await t
      .expect(page.AptLabel.innerText).eql('Apt / Unit')
      .expect(page.Apt.exists).ok()
      console.log(" \u2713".green + " Apt / Unit".gray)

await t
      .expect(page.CityLabel.innerText).eql('City*')
      .expect(page.City.exists).ok()
      console.log(" \u2713".green + " City".gray)
await t
      .expect(page.StateLabel.innerText).eql('State*')
      .expect(page.StateList.exists).ok()
      console.log(" \u2713".green + " State".gray)

await t
      .expect(page.ZipLabel.innerText).eql('Postal Code*')
      .expect(page.Zip.exists).ok()    
      console.log(" \u2713".green + " Postal Code".gray)
await t
      .expect(page.MobileLabel.innerText).eql('Mobile number*')
      .expect(page.Mobile.exists).ok()
      console.log(" \u2713".green + " Mobile".gray)

page.VerifyCartHeader()
  console.log(" \u2713".green + " Cart Header".gray)
  
page.VerifyCartProduct_CV19()
  console.log(" \u2713".green + " Cart Product".gray)

page.VerifyCartSubtotal_CV19()
  console.log(" \u2713".green + " Cart Subtotal".gray)

page.VerifyCartShipping()
  console.log(" \u2713".green + " Cart Shipping".gray)

page.VerifyCartPromo()
  console.log(" \u2713".green + " Cart Promo Code".gray)

page.VerifyCartTotal_CV19()  
  console.log(" \u2713".green + " Cart Total".gray)

page.VerifyCartPayPal()
  console.log(" \u2713".green + " Cart or $16.50/mo with PayPal Credit".gray)

await t.expect(page.GenericContinueButton.innerText).eql('Continue')
  console.log(" \u2713".green + " Continue Button".gray)
});

//*****************************************+
test.only('PASSED\nAPP US - CV19 - Payment Screen', async t => {
  console.log(" APP US - CV19 - Payment Screen".gray)
  
await t
    .click(page.cv19Banner)    
    .click(page.CV19RequestKit)
    .click(page.P_Me_rb)
    .click(page.GenericContinueButton)     
    .typeText(page.Address,'473 Pleasant St')
    .typeText(page.City,'Holyoke')
    .typeText(page.Zip,'01040')
    .typeText(page.Mobile,'+1(413)-999-9888')
    .click(page.GenericContinueButton)  
console.log(" \u2713".green + " Checkout Header".gray)

await t
    .expect(page.P_tab.innerText).eql('Personal')
    .expect(page.A_tab.innerText).eql('Address')
    .expect(page.Pay_tab.innerText).eql('Payment')
    .expect(page.Review_tab.innerText).eql('Review')
    console.log(" \u2713".green + " Progress Bar".gray)

await t.expect(page.Pay_Highlight.exists).ok();
    console.log(" \u2713".green + " Payment is highlighted".gray)

await t.expect(page.Pay_Header.innerText).eql('Payment method')
    console.log(" \u2713".green + " Payment method".gray)

await t.expect(page.Pay_CC.innerText).eql('Credit Card')
    console.log(" \u2713".green + " Credit Card".gray)

await t.switchToIframe(page.Pay_CardFrame)
    console.log(" \u2713".green + " Credit Card Frame".gray)

await t.expect(page.Pay_CardNumber.exists).ok()
    console.log(" \u2713".green + " Credit Card Field".gray)

await t.expect(page.Pay_CardExp.exists).ok()
    console.log(" \u2713".green + " Credit Card Expiration Date".gray)

await t.expect(page.Pay_CardCVC.exists).ok()
    console.log(" \u2713".green + " Credit Card CVC".gray)

//await t.expect(page.Pay_CardZip.exists).ok()
//  console.log(" \u2713".green + " Credit Card Zip Code".gray)
await t.switchToMainWindow()
await t.expect(page.Pay_Clear.exists).ok()
    console.log(" \u2713".green + " Clear".gray)

await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email Label".gray)  

await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email Field".gray)  

await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " Password Label".gray)  

await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " Password Field".gray)  

await t.expect(page.PwdMeter.exists).ok()
    console.log(" \u2713".green + " Password Meter".gray)

await t
  .typeText(page.EmailBox,'abc@123.com')  
  .typeText(page.PwdBox,'.test')

await t
    .click(page.GenericContinueButton)
    .expect(page.Pay_Error.innerText).eql('Your card number is incomplete.')
    console.log(" \u2713".green + " Your card number is incomplete.".gray) 

await t
    .switchToIframe(page.Pay_CardFrame)
    .typeText(page.Pay_CardNumber,'4242424242424242')
    .switchToMainWindow()
    .click(page.GenericContinueButton)
    .expect(page.Pay_Error.innerText).eql('Your card\'s expiration date is incomplete.')
    console.log(" \u2713".green + " Your card\'s expiration date is incomplete.".gray) 

await t
    .switchToIframe(page.Pay_CardFrame)
    .typeText(page.Pay_CardExp,'05/30')
    .switchToMainWindow()
    .click(page.GenericContinueButton)
    .expect(page.Pay_Error.innerText).eql('Your card\'s security code is incomplete.')
    console.log(" \u2713".green + " Your card\'s security code is incomplete.".gray) 

await t
    .switchToIframe(page.Pay_CardFrame)
    .typeText(page.Pay_CardCVC,'123')
    .switchToMainWindow()
    .click(page.GenericContinueButton)
    .expect(page.Pay_Error.innerText).eql('Your postal code is incomplete.')
    console.log(" \u2713".green + " Your postal code is incomplete.".gray) 

await t
    .switchToIframe(page.Pay_CardFrame)
    .typeText(page.Pay_CardZip,'04810')
    .switchToMainWindow()
    .click(page.GenericContinueButton)
    .expect(page.Pay_PageError.innerText).eql('Please correct the validation errors below')
    console.log(" \u2713".green + " Please correct the validation errors below".gray)
/*
await t.expect(page.PwdError.innerText).eql('Please choose a stronger password.')
    console.log(" \u2713".green + " Please choose a stronger password.".gray)


await t
    .typeText(page.PwdBox,'.t3st..t3st')
    .click(page.GenericContinueButton)
    .expect(page.EmailError.innerText).eql('Oops! This is a required field.')
    console.log(" \u2713".green + " Email - Oops! This is a required field.".gray) 
*/
await page.VerifyCartHeader()
    console.log(" \u2713".green + " Cart Header".gray)

await page.VerifyCartProduct_CV19()
    console.log(" \u2713".green + " Cart Product".gray)

await page.VerifyCartSubtotal_CV19()
    console.log(" \u2713".green + " Cart Subtotal".gray)
    
await page.VerifyCartShipping()
    console.log(" \u2713".green + " Cart Shipping".gray)

//await page.VerifyCartPromo()
//  console.log(" \u2713".green + " Cart Promo".gray)
await page.VerifyCartTotal_CV19()
    console.log(" \u2713".green + " Cart Total".gray)

//await page.VerifyCartPayPal()
//  console.log(" \u2713".green + " Cart PayPal".gray)
});


//*****************************************+
//*****************************************+
//*****************************************+



//*****************************************+
