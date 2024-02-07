import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `ACTIVATE BOX`
    .page `https://berkeley.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t.click(page.ActivateBox)
    });

test('PASSED\nAPP BERKELEY - Activate Box > I have activated or ordered a binx box before', async t => {
  await t.expect(page.H1ActivateBox.innerText).eql('Activate Box')
    console.log(" APP - US - Activate Box > I have activated or ordered a binx box before".gray)
    console.log(" \u2713".green + " Header".gray)

  await t.expect(page.ActivateBoxYes.innerText).eql('I have activated or ordered a binx box before')
    console.log(" \u2713".green +  " I have activated or ordered a binx box before".gray)

  await t.expect(page.ActivateBoxNo.innerText).eql('I have NOT activated or ordered a binx box before')
    console.log(" \u2713".green + " I have NOT activated or ordered a binx box before".gray)

  await t.click(page.ActivateBoxYes)
    console.log(" \u2713".green + " Click - I have activated or ordered a binx box before".gray)

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
test('PASSED\n APP BERKELEY - Activate Box > I have NOT activated or ordered a binx box before', async t => {
  await t.click(page.ActivateBoxNo)
    console.log("\n APP BERKELEY - Activate Box > I have NOT activated or ordered a binx box before".gray)
    console.log(" \u2713".green + " Click -  I have NOT activated or ordered a binx box before".gray)

  await t.expect(page.H1ActivateBox.innerText).eql('Activate Box')
    console.log(" \u2713".green + " Activate Box Header".gray)

  await t.expect(page.ABinfoModal.innerText).eql('Before activating, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours\nYou will be able to drop off the sample before the last shipping pickup of the day (when required)')
    console.log(" \u2713".green + " Warning Message Displayed".gray)

  await t.expect(page.HelpMeFindThisInfo.innerText).eql('Help me find this')
    console.log(" \u2713".green + " Help me find this text".gray)

  await t.expect(page.BarcodeField.exists).ok()
    console.log(" \u2713".green + " Barcode textbox".gray)

  await t.expect(page.ActivateButton.innerText).eql('Activate')
    console.log(" \u2713".green + " Activate Button".gray)

});
