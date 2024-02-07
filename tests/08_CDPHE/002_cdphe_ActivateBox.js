import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { cdpheEnv } from '../helpers/urls';

fixture ('ACTIVATE BOX '+ cdpheEnv)
    .page(cdpheEnv)
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t.click(page.ActivateBox)
    });

test('PASSED\n CDPHE - Activate Box > I have activated or ordered a binx box before', async t => {
  await t.expect(page.H1ActivateBox.innerText).eql('Activate Box')
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
test('PASSED\n CDPHE - Activate Box > I have NOT activated or ordered a binx box before', async t => {
  await t.click(page.ActivateBoxNo)
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
