import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { app, MyEnv } from '../helpers/urls';
import Colors from 'colors';

fixture ('US '+ MyEnv)
    .page(MyEnv)
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
/*test('APP US - Navigation Menu - Binx Boxes - Logout', async t => {
  await t.expect(page.BinxBoxes.exists).ok()
});
*/
test('APP US - Navigation Menu - Our Products - Logout', async t => {
  await t
    .expect(page.OurProducts.exists).ok()
    .click(page.OurProducts)
    .expect(page.SexualHealth.exists).ok()
    //.expect(page.Prep.exists).ok()
    .expect(page.GeneralHealth.exists).ok()
    .expect(page.Covid.exists).ok()

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
  await t.expect(page.HeaderBelowNavMenu.innerText).eql('Test easy, rest easy','H1 mismatch')
    //console.log("-----".green);
});
test('APP US - Content - Test Easy Paragraph', async t => {
  //Updated 10/10/2022 ('Virtually all STIs are treatable and most are easily cured. The key is to get tested and get on with it. Knowing your status is easier than you think.'); //Selector('#home > div > div > p')
  await t.expect(page.HeaderContent.innerText).eql('Getting tested is an important part of your overall health. Find out which self-collection kit is right for you!')
});
test('APP US - Content - Test Easy Image Exists', async t => {
    await t.expect(page.HeaderImage.exists).ok()
});
test('APP US - Content - Test Easy Find Your Test Button Exists', async t => {
  await t.expect(page.FindYourTestButton.exists).ok()
});
test('APP US - Content - How It Works Header', async t => {
  await t.expect(page.H2HowItWorks.innerText).eql('How it Works')
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
  await t.expect(page.H2Benefits.exists).ok()
});
test('APP US - Content - Convenient Image', async t => {
  await t
    .expect(page.H3ImageAnytime.exists).ok()
});
test('APP US - Content - Convenient Title', async t => {
  await t.expect(page.H3Anytime.exists).ok()
});
test('APP US - Content - Convenient Text', async t => {
  await t.expect(page.AnytimeText.exists).ok()
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