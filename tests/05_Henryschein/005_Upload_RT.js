import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `RAPID TEST`
    .page `https://henryschein.stage.mybinxhealth.com/`
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
test('APP US - Upload - Rapid Test', async t => {
  await t
    //.click(page.Upload)
    //.click(page.RapidTest)
    .expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    .expect(page.UploadRTYes.innerText).eql('I have uploaded a Rapid Test before')
    .expect(page.UploadRTNo.innerText).eql('I have NOT uploaded a Rapid Test before')

});
test('APP US - Upload - Rapid Test - I have uploaded a Rapid Test before', async t => {
  await t
    //.click(page.Upload)
    //.click(page.RapidTest)
    .click(page.UploadRTYes)
    .expect(page.H1Login.innerText).eql('Login')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    .expect(page.ForgotPwd.exists).ok()
});
test('APP US - Upload - Rapid Test - I have NOT uploaded a Rapid Test before', async t => {
  await t
    //.click(page.Upload)
    //.click(page.RapidTest)
    .click(page.UploadRTNo)
    .expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    .expect(page.RTPersonalTab.innerText).eql('Personal')
    .expect(page.RTTestInformationTab.innerText).eql('Test Information')
    .expect(page.RTInformation.innerText).eql('Before Uploading Rapid Test, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours')
    .expect(page.RTCreateHeader.innerText).eql('Create your account credentials')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.RTPwdMeter.exists).ok()
    .expect(page.RTPersonalHeader.innerText).eql('Personal information')
    .expect(page.FirstNameLabel.innerText).eql('First name*')
    .expect(page.FirstNameField.exists).ok()
    .expect(page.LastNameLabel.innerText).eql('Last name*')
    .expect(page.LastNameField.exists).ok()
    .expect(page.DOBLabel.innerText).eql('Date of Birth*')
    .expect(page.DOBField.exists).ok()
    .expect(page.SexLabel.innerText).eql('Sex Assigned at Birth*')
    .expect(page.rbFLabel.innerText).eql('Female')
    .expect(page.rbF.exists).ok()
    .expect(page.rbMLabel.innerText).eql('Male')
    .expect(page.rbM.exists).ok()
    .expect(page.rbOLabel.innerText).eql('Other')
    .expect(page.rbO.exists).ok()
    .expect(page.AddressLabel.innerText).eql('Address*')
    .expect(page.Address.exists).ok()
    .expect(page.AptLabel.innerText).eql('Apt / Unit')
    .expect(page.Apt.exists).ok()
    .expect(page.CityLabel.innerText).eql('City*')
    .expect(page.City.exists).ok()
    .expect(page.StateLabel.innerText).eql('State*')
    .expect(page.StateList.exists).ok()
    .expect(page.ZipLabel.innerText).eql('Postal Code*')
    .expect(page.Zip.exists).ok()
    .expect(page.MobileLabel.innerText).eql('Mobile number*')
    .expect(page.Mobile.exists).ok()
    .expect(page.RTIntent.innerText).eql('Intent')
    .expect(page.RTIntentCheckbox.exists).ok()
    .expect(page.RTIntentLabel.innerText).eql('I\'m enrolled in a school/organizational program')
    .expect(page.RTContinue.exists).ok()
});