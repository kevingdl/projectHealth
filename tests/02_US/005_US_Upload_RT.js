import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('RAPID TEST '+ MyEnv)
    .page(MyEnv+'find-my-test')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
        .click(page.Upload)
        .click(page.RapidTest)
    });
test('PASSED\nAPP US - Upload > Rapid Test > I have uploaded a Rapid Test before', async t => {
  await t.expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
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
  await t.click(page.UploadRTNo)
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
/*
  await t.expect(page.RTIntent.innerText).eql('Intent')
    console.log(" \u2713".green + " [37/40] Intent Label".gray)

  await t.expect(page.RTIntentCheckbox.exists).ok()
    console.log(" \u2713".green + " [38/40] Intent checkbox".gray)

  await t.expect(page.RTIntentLabel.innerText).eql('I\'m enrolled in a school/organizational program')
    console.log(" \u2713".green + " [39/40] Intent sentence".gray)
*/
  await t.expect(page.RTContinue.exists).ok()
    console.log(" \u2713".green + " [40/40] Continue button".gray)
});