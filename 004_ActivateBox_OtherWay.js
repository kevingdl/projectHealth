import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `ACTIVATE BOX ORIGINAL`
    .page `https://app.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t.click(page.ActivateBox)
    });

test('APP US - Activate Box Page Elements', async t => {
  await t
    //.click(page.ActivateBox)
    .expect(page.H1ActivateBox.innerText).eql('Activate Box')
    .expect(page.ActivateBoxYes.innerText).eql('I have activated or ordered a binx box before')
    .expect(page.ActivateBoxNo.innerText).eql('I have NOT activated or ordered a binx box before')
});
test('APP US - Activate Box - I have activated or ordered a binx box before > Click & Validate Login', async t => {
  await t
    //.click(page.ActivateBox)
    .click(page.ActivateBoxYes)
    .expect(page.H1Login.innerText).eql('Login')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    .expect(page.ForgotPwd.exists).ok()
});
test('APP US - Activate Box - I have NOT activated or ordered a binx box before', async t => {
  await t
    //.click(page.ActivateBox)
    .click(page.ActivateBoxNo)
    .expect(page.H1ActivateBox.innerText).eql('Activate Box')
    .expect(page.ABinfoModal.innerText).eql('Before activating, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours\nYou will be able to drop off the sample before the last shipping pickup of the day (when required)')
    .expect(page.HelpMeFindThisInfo.innerText).eql('Help me find this')
    .expect(page.BarcodeField.exists).ok()
    .expect(page.ActivateButton.innerText).eql('Activate')

});
