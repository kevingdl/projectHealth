import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { cdpheEnv } from '../helpers/urls';
import Colors from 'colors';

fixture ('CDPHE '+ cdpheEnv)
    .page(cdpheEnv)
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('CDPHE - Navigation Menu -  Logo - Logout', async t => {
  await t.expect(page.CDPHELogo.exists).ok()  
  
});
test('CDPHE - Navigation Menu - How It Works - Logout', async t => {
  await t.expect(page.HowItWorks.exists).ok()
});
test('CDPHE - Navigation Menu - Activate Box - Logout', async t => {
  await t.expect(page.ActivateBox.exists).ok()
});
test('CDPHE - Navigation Menu - Login - Logout', async t => {
  await t.expect(page.Login.exists).ok()
});
test('CDPHE - Navigation Menu - Cart Icon - Logout', async t => {
  await t.expect(page.Cart.exists).ok();
});
test('CDPHE - Content - Test Easy Header', async t => {
  await t.expect(page.HeaderBelowNavMenu.innerText).eql('Test easy, rest easy')
    //console.log("-----".green);
});
test('CDPHE - Content - Test Easy Paragraph', async t => {
  await t.expect(page.HeaderContent.innerText).eql('Virtually all STIs are treatable and most are easily cured. The key is to get tested and know your status. The process is easier than you think and can be done entirely from home thanks to CDPHE’s partnership with binx health.')
});
test('CDPHE - Content - Test Easy Image Exists', async t => {
    await t.expect(page.HeaderImage.exists).ok()
});
test('CDPHE - Content - Test Easy Find Your Test Button Exists', async t => {
  await t.expect(page.HeaderBelowNavMenu.nextSibling('a').innerText).eql('Order Free Test')
});
test('CDPHE - Content - How It Works Header', async t => {
  await t.expect(page.H2HowItWorks.exists).ok()
});
test('CDPHE - Content - About This Program, Receive Your Box, Get Results', async t => {
  await t.expect(page.H2HowItWorks.nextSibling().innerText).eql('About this program\n\nThis program is funded by the “Strengthening the US Response to Resistant Gonorrhea” (SURRG). Select your free test below.\n\nReceive Your Box\n\nA licensed clinician will review, and if appropriate, approve your order. We\'ll send everything you need in a discreet package to collect your samples to your home. Collect and return your specimen within 30 days.\n\nGet Results\n\nYour sample will be processed by our partner CLIA-certified and CAP-accredited laboratories. Results will be available within 2-5 days. If your results require follow-up a licensed healthcare professional will call you to discuss results and any next steps.')
});
test('CDPHE - Content - Images', async t => {
  await t
    .expect(Selector('img').withAttribute('src',/.*chn-1.jpg/).exists).ok()
    .expect(Selector('img').withAttribute('src',/.*chn-2.jpg/).exists).ok()
    .expect(Selector('img').withAttribute('src',/.*chn-3.jpg/).exists).ok()
});
test('CDPHE - Content - Our Test Header', async t => {
  await t.expect(page.CDPHEOurTest.exists).ok()    
});
test('CDPHE - Content - Our Test', async t => {
  await t.expect(page.CDPHEOurTest.nextSibling().innerText).eql('Single-site chlamydia & gonorrhea\nTests for:\nChlamydia and gonorrhea (genital)\nWho is this for?\nChlamydia and gonorrhea screening recommended for all sexually active individuals.\n\n\n\nSelect this option if you are not performing oral sex or having receptive anal sex.\n\n\nCollect and return sample within 30 days.\nOrder Free Test\nTriple-site chlamydia & gonorrhea\nTests for:\nChlamydia and gonorrhea (genital, throat, rectal)\nWho is this for?\nChlamydia and gonorrhea screening recommended for all sexually active individuals.\n\n\n\nSelect this option if you are performing oral sex or having receptive anal sex.\n\n\nCollect and return sample within 30 days.\nOrder Free Test\nBuild your own\nGenital Chlamydia and Gonorrhea\nGenital, Anal, and Oral Chlamydia and Gonorrhea\nHIV\nSyphilis\nHepatitis C\nOrder Free Test')  
});
test('CDPHE - Build your own - Genital Chlamydia and Gonorrhea', async t => {
  const expandText = page.CDPHEOurTest.nextSibling().child('div').nth(2).child('form').child('div').nth(0)
  await t
    .click(expandText.child('div'))
    .expect(expandText.innerText).eql('Genital Chlamydia and Gonorrhea\nChlamydia and gonorrhea testing is broadly recommended for sexually active people. Single-site testing (urine/urethra) is recommended for individuals who are not performing oral sex or having anal receptive sex.')  
    .click(expandText.child('div').child('a'))
});
test('CDPHE - Build your own - Genital, Anal, and Oral Chlamydia and Gonorrhea', async t => {
  const expandText = page.CDPHEOurTest.nextSibling().child('div').nth(2).child('form').child('div').nth(1)
  await t
    .click(expandText.child('div'))
    .expect(expandText.innerText).eql('Genital, Anal, and Oral Chlamydia and Gonorrhea\nChlamydia and gonorrhea testing is broadly recommended for sexually active people. Triple-site (urine/urethra, throat and rectal) testing is recommended for individuals who are performing oral sex and/or having anal receptive sex.')  
    .click(expandText.child('div').child('a'))
});
test('CDPHE - Build your own - HIV', async t => {
  const expandText = page.CDPHEOurTest.nextSibling().child('div').nth(2).child('form').child('div').nth(2)
  await t
    .click(expandText.child('div'))
    .expect(expandText.innerText).eql('HIV\n\nCDC recommends that everyone between the ages of 13 and 64 get tested for HIV at least once as part of routine health care. You should get tested more frequently if you can answer "Yes" to any of the questions below.\n\nAre you a man who has had sex with another man?\nHave you had sex with someone living with HIV?\nHave you had more than one sex partner or an anonymous sex partner?\nHave you injected drugs and/or shared needles or works?\nHave you exchanged sex for something of value (housing, drugs, money)?\nHave you ever been diagnosed with another sexually transmitted disease?\nHave you been diagnosed with or treated for hepatitis or tuberculosis (TB)?\nAre you sexually active and have never had an HIV test before?\nHave you had sex with someone who could answer "yes" to any of the above questions or someone whose sexual history you don\'t know?')  
    .click(expandText.child('div').child('a'))
});
test('CDPHE - Build your own - Syphilis', async t => {
  const expandText = page.CDPHEOurTest.nextSibling().child('div').nth(2).child('form').child('div').nth(3)
  await t
    .click(expandText.child('div'))
    .expect(expandText.innerText).eql('Syphilis\n\nCDC recommends You should get tested regularly if you are pregnant, are a man who has sex with men, living with HIV, and/or have partner(s) who have tested positive for syphilis. You may want to also get tested if you can answer "Yes" to any of the following questions. Please select “Go to a partner lab” option at checkout if you have been diagnosed with syphilis in the past.\n\nAre you a man who has had sex with another man?\nAre you pregnant or could you become pregnant?\nHas a sex partner tested positive for syphilis?\nHave you had sex with someone living with HIV?\nHave you had more than one sex partner or an anonymous sex partner?\nHave you injected drugs and/or shared needles or works?\nHave you exchanged sex for something of value (housing, drugs, money)?\nHave you ever been diagnosed with another sexually transmitted disease?\nAre you sexually active and have never had a syphilis test before?\nHave you had sex with someone who could answer "yes" to any of the above questions or someone whose sexual history you don\'t know?')  
    .click(expandText.child('div').child('a'))
});
test('CDPHE - Build your own - Hepatitis C', async t => {
  const expandText = page.CDPHEOurTest.nextSibling().child('div').nth(2).child('form').child('div').nth(4)
  await t
    .click(expandText.child('div'))
    .expect(expandText.innerText).eql('Hepatitis C\n\nCDC recommends Hepatitis C screening at least once in a lifetime for all adults aged 18 years and older. You should also get tested if you can answer "Yes" to any of the following questions below.\n\nWere you born between 1945 and 1965?\nHave you or do you currently snort or inject drugs?\nHave you ever received a tattoo at an unlicensed location?\nDid you ever receive certain blood products before 1987 or receive a blood transfusion or solid organ transplant before 1992?\nHave you ever been incarcerated?\nAre you living with HIV?')  
    .click(expandText.child('div').child('a'))
});

