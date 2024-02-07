import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `LOGIN`
    .page `https://berkeley.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t.click(page.Login)
    });
test('PASSED\nAPP US - Login & Forgot Password', async t => {
  await t.expect(page.H1Login.innerText).eql('Login')
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
