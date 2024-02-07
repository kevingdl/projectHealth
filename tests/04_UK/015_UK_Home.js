import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { app } from '../helpers/urls';
import Colors from 'colors';

fixture `UK STAGE MYBINXHEALTH.COM`
    .page `https://uk.stage.mybinxhealth.com`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`

test('APP UK - Navigation Menu - Binx Logo - Logout', async t => {
  await t.expect(page.BinxLogo.exists).ok()  
});
test('APP UK - Navigation Menu - Order Test - Logout', async t => {
  await t
    .expect(page.UK_OrderTest.exists).ok()
    .expect(page.UK_OrderTest.innerText).eql('Order Test')
});
test('APP UK - Navigation Menu - How It Works - Logout', async t => {
  await t.expect(page.HowItWorks.exists).ok()
});
test('APP UK - Navigation Menu - Activate Box - Logout', async t => {
  await t.expect(page.ActivateBox.exists).ok()
});
test('APP UK - Navigation Menu - Login - Logout', async t => {
  await t.expect(page.Login.exists).ok()
});
test('APP UK - Navigation Menu - Cart Icon - Logout', async t => {
  await t.expect(page.Cart.exists).ok();
});
test('APP UK - Navigation Menu - No Find My Test - Logout', async t => {
  await t.expect(page.FindMyTest.exists).notOk()
});
test('APP UK - Navigation Menu - No Binx Boxes - Logout', async t => {
  await t.expect(page.BinxBoxes.exists).notOk()
});
test('APP UK - Navigation Menu - No Upload - Logout', async t => {
  await t.expect(page.Upload.exists).notOk()
});
test('APP UK - Navigation Menu - No Rapid Test - Logout', async t => {
  await t.expect(page.RapidTest.exists).notOk()
});
test('APP UK - Navigation Menu - No Covid Vaccination - Logout', async t => {
  await t.expect(page.CovidVx.exists).notOk()
});
test('APP UK - No CV19 Banner', async t => {
  await t.expect(page.cv19Banner.exists).notOk()
});
test('APP UK - COVID-19 testing', async t => {
  await t.expect(page.UK_CV19H1.innerText).eql('COVID-19 testing')
});
test('APP UK - COVID-19 testing Paragraph', async t => {
  await t.expect(page.UK_CV19text.innerText).eql('With at-home sample collection, delivered to your door')
});
test('APP UK - COVID-19 testing Image Exists', async t => {
  await t.expect(page.UK_CV19Img.exists).ok()
});
test('APP UK - COVID-19 testing See Tests Button Exists', async t => {
await t.expect(page.UK_SeeTestButton.exists).ok()
});
test('APP UK - COVID-19 testing Warning!', async t => {
  await t.expect(page.UK_Warning.exists).ok()
  await t.expect(page.UK_Paragraph1.innerText).eql('If you feel that you are seriously ill, please seek immediate medical care from a healthcare professional such as your GP or call NHS 111.')
  await t.expect(page.UK_Paragraph2.innerText).eql('If you feel like you are having a medical emergency, please call 999. Signs of a serious medical condition may include severe shortness of breath or difficulty breathing, coughing up blood, chest pain, irregular heartbeat, or persistent vomiting.')
});
test('APP UK - How It Works header', async t => {
  await t.expect(page.H2HowItWorks.innerText).eql('How it works')
});
test('APP UK - Request Your COVID-19 Test Kit', async t => {
  await t.expect(page.CV19Request.innerText).eql('Request Your COVID-19 Test Kit\n\nYour kit will be shipped out by Royal Mail within 2 days of placing your order, if you place your order before 10 am Mon-Fri. If you place your order on a Saturday or Sunday it will be shipped out on Monday for next day delivery. *')
});
test('APP UK - Receive Your Kit', async t => {
  await t.expect(page.CV19Receive.innerText).eql('Receive Your Kit\n\nYou will receive your sample collection kit at your door with easy-to-follow instructions on how to collect your sample.')
});
test('APP UK - Ready For Pickup', async t => {
  await t.expect(page.UK_Ready.innerText).eql('Ready For Pickup\n\nUsing the provided, pre-paid return label, post your collected sample back into a Royal Mail priority post box before midday on the day you take your sample.')
});
test('APP UK - Get Results', async t => {
  await t.expect(page.CV19Get.innerText).eql('Get Results\n\nYour sample will be processed by our accredited partner laboratory within 24-48 hours of receipt and you will be able to access your result, take the appropriate next steps, and have access to advice. *')
});
test('APP UK - *text', async t => {
  await t.expect(page.UK_Star.innerText).eql('* However due to high volumes this cannot be guaranteed.\nTo find your closest Royal Mail priority box please visit https://www.royalmail.com/services-near-you/ or use the Royal Mail app\nPlease do not use any other Royal Mail post box, or your sample may be delayed getting to the laboratory.')
});
test('APP UK - Though YOU', async t => {
  await t.expect(page.CV19ThoughYOU.innerText).eql('Though YOU are providing the sample, binx is here for you!\nOur unique service has been designed to protect you, your data, our courier partners, and laboratory partner staff running the tests.\nWe provide access to medical support and are with you all the way through in the event you are positive for COVID-19.\nOur testing complies with all national laws regarding mandatory result reporting to public health agencies.\nFinally, you can rest assured, knowing that these tests do not take away from the NHS stockpile or government efforts and are intended to supplement the national need for testing.')
});
test('APP UK - Though YOU Image', async t => {
  await t.expect(page.CV19ThoughYOUimage.exists).ok()
});
test('APP UK - Our Tests', async t => {
  await t.expect(page.CV19Test.innerText).eql('Our tests\n\nThis test determines if an individual is actively infected with COVID-19 and can spread it to others. It uses a PCR (polymerase chain reaction) to check for genetic material (viral RNA) produced by the virus.\n\nCOVID-19 PCR\nTests for:\nSARS-CoV-2\nWho is this for?\nThe PCR test may be right if you:\nCurrently have COVID-19 symptoms\nHave recently travelled to areas with wide exposure\nHave been within two metres of a confirmed case of COVID-19\nBelieve you have been exposed to COVID-19\nNeeds Fit to Fly certificate\n£110\nGet This Box\nCOVID-19 Test to Release\nTests for:\nSARS-CoV-2\nWho is this for?\nThose returning from international travel and wishing to reduce the mandatory 10-day quarantine period by taking a 5th-day test within the government-approved Test to Release scheme. You are still required to take a coronavirus test on days 2 & 8 of your quarantine unless you are exempt.\nKits are dispatched on Day 4 of quarantine (weekdays only) by Royal Mail Tracked 24\nIf your day 5 is a Saturday-Monday then the timing of this test might not be right for you\nResults are available 24 hours after your sample has been received at the laboratory\n£110\nGet This Box\nIMPORTANT! You must use a unique email address for each COVID-19 kit you purchase')
});