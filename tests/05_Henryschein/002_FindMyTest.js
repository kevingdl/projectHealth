import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `HENRYSCHEIN FIND MY TEST`
    .page `https://henryschein.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
    /*
    .beforeEach(async t => {
      await t.click(page.FindMyTestButton)
    });
    */
    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`


test('HS - Click on Find My Test', async t => {
    await t.click(page.FindMyTest)
});
    
test('APP US - Find My Test Clinician Image', async t => {
  await t.expect(page.CliniciansImg.exists).ok()
});
test('APP US - Find My Test Header', async t => {
  await t.expect(page.H1FindMyTest.innerText).eql('Find my test')
});
test('APP US - Find My Test Text 1', async t => {
  await t.expect(page.FindMyTestText1.innerText).eql('We\'re going to ask about your sex life.')
});
test('APP US - Find My Test Text 2', async t => {
  await t.expect(page.FindMyTestText2.innerText).eql('We know that can be a sensitive subject, but we promise we won\'t share your answers with anyone. We need this information so we can suggest the right test for you.')
});
test('APP US - Get Started Button', async t => {
  await t.expect(page.GetStartedButton.exists).ok()
});