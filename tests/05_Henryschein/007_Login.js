import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `LOGIN`
    .page `https://henryschein.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t.click(page.Login)
    });
test('APP US - Login', async t => {
  await t
    .expect(page.H1Login.innerText).eql('Login')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    .expect(page.ForgotPwd.exists).ok()
    .expect(page.LoginButton.exists).ok()
    .expect(page.LoginButton.innerText).eql('Login')

});
test('APP US - Forgot Password', async t => {
  await t
    .click(page.ForgotPwd)
    .expect(page.H1ForgotPwd.innerText).eql('Forgot Password')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.SendResetButton.innerText).eql('Send Reset')
});
