import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `UPLOAD COVID VACCINATION`
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
        .click(page.CV_Vx)
    });
test('PASSED\nAPP US - Upload > COVID Vaccination', async t => {
  await t.expect(page.CV_Vx.exists).ok()
    console.log(" APP US - Upload > COVID Vaccination".gray)
    console.log(" \u2713".green + " COVID Vaccination link".gray)

  await t.expect(page.CV_VxHeader.innerText).eql('Personal information')
    console.log(" \u2713".green + " Personal Information section".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
    console.log(" \u2713".green + " Email address label".gray)

  await t.expect(page.EmailBox.exists).ok()
    console.log(" \u2713".green + " Email address textbox".gray)

  await t.expect(page.FirstNameLabel.innerText).eql('First name*')
    console.log(" \u2713".green + " First Name label".gray)

  await t.expect(page.FirstNameField.exists).ok()
    console.log(" \u2713".green + " First Name textbox".gray)

  await t.expect(page.LastNameLabel.innerText).eql('Last name*')
    console.log(" \u2713".green + " Last Name label".gray)

  await t.expect(page.LastNameField.exists).ok()
    console.log(" \u2713".green + " Last Name textbox".gray)

  await t.expect(page.DOBLabel.innerText).eql('Date of Birth*')
    console.log(" \u2713".green + " Date of Birth label".gray)

  await t.expect(page.DOBField.exists).ok()
    console.log(" \u2713".green + " Date of Birth textbox".gray)

  await t.expect(page.RTContinue.exists).ok()
    console.log(" \u2713".green + " Continue button exists".gray)
});