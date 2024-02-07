import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `RAPID TEST`
    .page `https://app.stage.mybinxhealth.com/`
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
    console.log(" \u2713".green + " Header".gray)

  await t.expect(page.UploadRTYes.innerText).eql('I have uploaded a Rapid Test before')
    console.log(" \u2713".green + " I have uploaded a Rapid Test before option".gray)

  await t.expect(page.UploadRTNo.innerText).eql('I have NOT uploaded a Rapid Test before')
    console.log(" \u2713".green + " I have NOT uploaded a Rapid Test before".gray)

  await t.click(page.UploadRTYes)
    console.log(" \u2713".green + " Click - I have uploaded a Rapid Test before".gray)

  await t.expect(page.H1Login.innerText).eql('Login')
    console.log(" \u2713".green + " User lands on Login page".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email Textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " Password Label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " Password Textbox".gray)

  await t.expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    console.log(" \u2713".green + " Forgot your password? Click here text".gray)

  await t.expect(page.ForgotPwd.exists).ok()
    console.log(" \u2713".green + " Forgot your password? Click here Link".gray)
    
});
test('PASSED\nAPP US - Upload > Rapid Test > I have NOT uploaded a Rapid Test before', async t => {
  await t.click(page.UploadRTNo)
    console.log("\n APP US - Upload > Rapid Test > I have NOT uploaded a Rapid Test before".gray)  
    console.log(" \u2713".green + " Click - I have NOT uploaded a Rapid Test before".gray)

  await t.expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    console.log(" \u2713".green + " Rapid Test Header".gray)

  await t.expect(page.RTPersonalTab.innerText).eql('Personal')
    console.log(" \u2713".green + " Personal Tab".gray)

  await t.expect(page.RTTestInformationTab.innerText).eql('Test Information')
    console.log(" \u2713".green + " Test Information Title".gray)

  await t.expect(page.RTInformation.innerText).eql('Before Uploading Rapid Test, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours')
    console.log(" \u2713".green + " Informational Message".gray)

  await t.expect(page.RTCreateHeader.innerText).eql('Create your account credentials')
    console.log(" \u2713".green + " Create your account credentials section".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email address Label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email address textbox".gray)

  await t.expect(page.PwdLabel.innerText).eql('Password*')
    console.log(" \u2713".green + " Password Label".gray)

  await t.expect(page.PwdBox.exists).ok()
    console.log(" \u2713".green + " Password textbox".gray)

  await t.expect(page.PwdMeter.exists).ok()
    console.log(" \u2713".green + " Password Meter".gray)

  await t.expect(page.RTPersonalHeader.innerText).eql('Personal information')
    console.log(" \u2713".green + " Personal Information Section".gray)

  await t.expect(page.FirstNameLabel.innerText).eql('First name*')
    console.log(" \u2713".green + " First Name Label".gray)

  await t.expect(page.FirstNameField.exists).ok()
    console.log(" \u2713".green + " First Name textbox".gray)

  await t.expect(page.LastNameLabel.innerText).eql('Last name*')
    console.log(" \u2713".green + " Last Name Label".gray)

  await t.expect(page.LastNameField.exists).ok()
    console.log(" \u2713".green + " Last Name textbox".gray)

  await t.expect(page.DOBLabel.innerText).eql('Date of Birth*')
    console.log(" \u2713".green + " Date of Birth Label".gray)

  await t.expect(page.DOBField.exists).ok()
    console.log(" \u2713".green + " Date of Birth textbox".gray)

  await t.expect(page.SexLabel.innerText).eql('Sex Assigned at Birth*')
    console.log(" \u2713".green + " Sex Assigned at Birth*".gray)

  await t.expect(page.rbFLabel.innerText).eql('Female')
    console.log(" \u2713".green + " Female option".gray)

  await t.expect(page.rbF.exists).ok()
    console.log(" \u2713".green + " Female radiobutton".gray)

  await t.expect(page.rbMLabel.innerText).eql('Male')
    console.log(" \u2713".green + " Male option".gray)

  await t.expect(page.rbM.exists).ok()
    console.log(" \u2713".green + " Male radiobutton".gray)

  await t.expect(page.rbOLabel.innerText).eql('Other')
    console.log(" \u2713".green + " Other option".gray)

  await t.expect(page.rbO.exists).ok()
    console.log(" \u2713".green + " Other radiobutton".gray)

  await t.expect(page.AddressLabel.innerText).eql('Address*')
    console.log(" \u2713".green + " Address Label".gray)

  await t.expect(page.Address.exists).ok()
    console.log(" \u2713".green + " Address textbox".gray)

  await t.expect(page.AptLabel.innerText).eql('Apt / Unit')
    console.log(" \u2713".green + " Apt/Unit Label".gray)

  await t.expect(page.Apt.exists).ok()
    console.log(" \u2713".green + " Apt/Unit textbox".gray)

  await t.expect(page.CityLabel.innerText).eql('City*')
    console.log(" \u2713".green + " City Label".gray)

  await t.expect(page.City.exists).ok()
    console.log(" \u2713".green + " City textbox".gray)

  await t.expect(page.StateLabel.innerText).eql('State*')
    console.log(" \u2713".green + " State Label".gray)

  await t.expect(page.StateList.exists).ok()
    console.log(" \u2713".green + " State dropdown".gray)

  await t.expect(page.ZipLabel.innerText).eql('Postal Code*')
    console.log(" \u2713".green + " Postal Code label".gray)

  await t.expect(page.Zip.exists).ok()
    console.log(" \u2713".green + " Postal Code textbox".gray)

  await t.expect(page.MobileLabel.innerText).eql('Mobile number*')
    console.log(" \u2713".green + " Mobile Label".gray)

  await t.expect(page.Mobile.exists).ok()
    console.log(" \u2713".green + " Mobile textbox".gray)

  await t.expect(page.RTIntent.innerText).eql('Intent')
    console.log(" \u2713".green + " Intent Label".gray)

  await t.expect(page.RTIntentCheckbox.exists).ok()
    console.log(" \u2713".green + " Intent checkbox".gray)

  await t.expect(page.RTIntentLabel.innerText).eql('I\'m enrolled in a school/organizational program')
    console.log(" \u2713".green + " Intent sentence".gray)

  await t.expect(page.RTContinue.exists).ok()
    console.log(" \u2713".green + " Continue button".gray)
});