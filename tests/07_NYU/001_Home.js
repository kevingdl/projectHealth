import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { app } from '../helpers/urls';
import Colors from 'colors';

fixture `US STAGE MYBINXHEALTH.COM`
    .page `https://app.stage.mybinxhealth.com`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`

test('APP US - Navigation Menu - Binx Logo - Logout', async t => {
  await t.expect(page.BinxLogo.exists).ok()  
});
test('APP US - Navigation Menu - How It Works - Logout', async t => {
  await t.expect(page.HowItWorks.exists).ok()
});
test('APP US - Navigation Menu - Find My Test - Logout', async t => {
  await t.expect(page.FindMyTest.exists).ok()
});
test('APP US - Navigation Menu - Binx Boxes - Logout', async t => {
  await t.expect(page.BinxBoxes.exists).ok()
});
test('APP US - Navigation Menu - Activate Box - Logout', async t => {
  await t.expect(page.ActivateBox.exists).ok()
});
test('APP US - Navigation Menu - Upload - Logout', async t => {
  await t.expect(page.Upload.exists).ok()
});
test('APP US - Navigation Menu - Rapid Test - Logout', async t => {
  await t.expect(page.RapidTest.exists).ok()
});
test('APP US - Navigation Menu - Covid Vaccination - Logout', async t => {
  await t.expect(page.CovidVx.exists).ok()
});
test('APP US - Navigation Menu - Login - Logout', async t => {
  await t.expect(page.Login.exists).ok()
});
test('APP US - Navigation Menu - Cart Icon - Logout', async t => {
  await t.expect(page.Cart.exists).ok();
});
test('APP US - CV19 Banner', async t => {
  await t.expect(page.cv19Banner.exists).ok()
});
test('APP US - Test Easy Header', async t => {
  await t.expect(page.H1TestEasy.innerText).eql('Test easy, rest easy','H1 mismatch')
    //console.log("-----".green);
});
test('APP US - Content - Test Easy Paragraph', async t => {
  await t.expect(page.TestEasyText.innerText).eql('Virtually all STIs are treatable and most are easily cured. The key is to get tested and get on with it. Knowing your status is easier than you think.')
});
test('APP US - Content - Test Easy Image Exists', async t => {
    await t.expect(page.TestEasyImg.exists).ok()
});
test('APP US - Content - Test Easy Find Your Test Button Exists', async t => {
  await t.expect(page.FindYourTestButton.exists).ok()
});
test('APP US - Content - How It Works Header', async t => {
  await t.expect(page.H2HowItWorks.innerText).eql('How it works')
});
test('APP US - Content - Find Your Test Header', async t => {
  await t.expect(page.H3FindYourTest.innerText).eql('Find Your Tests')
});
test('APP US - Content - Find Your Test Text', async t => {
      await t.expect(page.FindYourTestText.exists).ok()
});
test('APP US - Content - Receive Your Box Header', async t => {
  await t.expect(page.H3ReceiveYourBox.innerText).eql('Receive Your Box')
});
test('APP US - Content - Receive Your Box Text', async t => {
  await t.expect(page.ReceiveYourBoxText.exists).ok()
});
test('APP US - Content - Get Results Header', async t => {
  await t.expect(page.H3ReceiveYourBox.innerText).eql('Receive Your Box')
});
test('APP US - Content - Get Results Text', async t => {
  await t.expect(page.GetResultsText.exists).ok()
});
test('APP US - Content - Benefits', async t => {
  await t.expect(page.H2Benefits.innerText).eql('Benefits of At-home Sample Collection')
});
test('APP US - Content - Anytime', async t => {
  await t.expect(page.H3Anytime.innerText).eql('Anytime, anywhere sample collection')
});
test('APP US - Content - Anytime Text', async t => {
  await t.expect(page.AnytimeText.innerText).eql('Finally, an STD test that you can do on your time, and in your own space.')
});
test('APP US - Content - Private', async t => {
  await t.expect(page.H3Private.innerText).eql('Private')
});
test('APP US - Content - Private Text', async t => {
  await t.expect(page.PrivateText.innerText).eql('The process is completely private and comes in discreet packaging.')
});
test('APP US - Content - Medically', async t => {
  await t.expect(page.H3Medically.innerText).eql('Medically-guided')
});
test('APP US - Content - Medically Text', async t => {
  await t.expect(page.MedicallyText.innerText).eql('Supportive, licensed clinicians are available as you need.')
});
test('APP US - Content - Not Sure', async t => {
  await t.expect(page.H2NotSure.innerText).eql('Not sure which tests are right for you?')
});
test('APP US - Content - Not Sure Text', async t => {
  await t.expect(page.NotSureText.innerText).eql('Take our medically-guided quiz to help identify which tests are right for you based on CDC and US Preventive Services Task Force standards.')
});
test('APP US - Content - Find My Test Button', async t => {
  await t.expect(page.FindMyTestButton.exists).ok()
});
