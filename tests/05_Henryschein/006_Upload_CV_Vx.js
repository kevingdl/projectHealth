import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `UPLOAD COVID VACCINATION`
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
        .click(page.CV_Vx)
    });
test('APP US - Upload - COVID Vaccination', async t => {
  await t
    .expect(page.CV_Vx.exists).ok()

});
test('APP US - Upload - COVID Vaccination - Fields', async t => {
  await t
    //.click(page.Upload)
    //.click(page.CV_Vx)
    .expect(page.CV_VxHeader.innerText).eql('Personal information')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.FirstNameLabel.innerText).eql('First name*')
    .expect(page.FirstNameField.exists).ok()
    .expect(page.LastNameLabel.innerText).eql('Last name*')
    .expect(page.LastNameField.exists).ok()
    .expect(page.DOBLabel.innerText).eql('Date of Birth*')
    .expect(page.DOBField.exists).ok()
    .expect(page.RTContinue.exists).ok()
});