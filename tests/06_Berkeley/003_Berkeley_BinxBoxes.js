import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `BINX BOXES`
    .page `https://berkeley.stage.mybinxhealth.com`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`

//CLICK TO OTHER PAGE
test('APP BERKELEY - Binx Boxes Click', async t => {
  await t.click(page.BinxBoxes)
});
test('APP BERKELEY - Binx Boxes CV19 Banner', async t => {
  await t.expect(page.cv19Banner.exists).ok()
});
test('APP BERKELEY - Binx Box I - CG Text', async t => {
  await t.expect(page.BinxBoxI_Text.innerText).eql('binx box I\nTests for:\nChlamydia and Gonorrhea\nWho is this for?\nChlamydia and gonorrhea testing is broadly recommended for sexually active people')
});
test('APP BERKELEY - Binx Box I - CG Test details link', async t => {
  await t.expect(page.BinxBoxI_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx Box I - CG Price', async t => {
  await t.expect(page.BinxBoxI_Price.innerText).eql('$80')
});
test('APP BERKELEY - Binx Box I - CG Get This Box', async t => {
  await t.expect(page.BinxBoxI_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx HPV Box - Text', async t => {
  await t.expect(page.BinxHPVBox_Text.innerText).eql('binx HPV box\nTests for:\nHPV\nWho is this for?\nWomen over 30 should have an HPV screening once every 5 years if previous Pap tests for cervical cancer screening have been normal')
});
test('APP BERKELEY - Binx HPV Box - Test details link', async t => {
  await t.expect(page.BinxHPVBox_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx HPV Box - Price', async t => {
  await t.expect(page.BinxHPVBox_Price.innerText).eql('$140')
});
test('APP BERKELEY - Binx HPV Box - Get This Box', async t => {
  await t.expect(page.BinxHPVBox_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx Box II - CG and HIV Text', async t => {
  await t.expect(page.BinxBoxII_Text.innerText).eql('binx box II\nTests for:\nChlamydia, Gonorrhea, and HIV\nWho is this for?\nChlamydia and gonorrhea testing is broadly recommended for sexually active people and everyone should get tested for HIV at least once')
});
test('APP BERKELEY - Binx Box II - CG and HIV Test details link', async t => {
  await t.expect(page.BinxBoxII_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx Box II - CG and HIV Price', async t => {
  await t.expect(page.BinxBoxII_Price.innerText).eql('$195')
});
test('APP BERKELEY - Binx Box II - CG and HIV Get This Box', async t => {
  await t.expect(page.BinxBoxII_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx Box III - CG GAO Text', async t => {
  await t.expect(page.BinxBoxIII_Text.innerText).eql('binx box III\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea\nWho is this for?\nPeople who have anal receptive sex and/or perform oral sex')
});
test('APP BERKELEY - Binx Box III - CG GAO Test details link', async t => {
  await t.expect(page.BinxBoxIII_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx Box III - CG GAO Price', async t => {
  await t.expect(page.BinxBoxIII_Price.innerText).eql('$205')
});
test('APP BERKELEY - Binx Box III - CG GAO Get This Box', async t => {
  await t.expect(page.BinxBoxIII_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx Box IV - CG, HIV and Trich Text', async t => {
  await t.expect(page.BinxBoxIV_Text.innerText).eql('binx box IV\nTests for:\nChlamydia, Gonorrhea, HIV, and Trichomoniasis\nWho is this for?\nSexually active women, particularly in specific geographic regions')
});
test('APP BERKELEY - Binx Box IV - CG, HIV and Trich Test details link', async t => {
  await t.expect(page.BinxBoxIV_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx Box IV - CG, HIV and Trich Price', async t => {
  await t.expect(page.BinxBoxIV_Price.innerText).eql('$215')
});
test('APP BERKELEY - Binx Box IV - CG, HIV and Trich Get This Box', async t => {
  await t.expect(page.BinxBoxIV_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx Box V - CG, HIV, Shyphilis and Trich Text', async t => {
  await t.expect(page.BinxBoxV_Text.innerText).eql('binx box V\nTests for:\nChlamydia, Gonorrhea, HIV, Syphilis, and Trichomoniasis\nWho is this for?\nSexually active women who have had multiple partners in the past year')
});
test('APP BERKELEY - Binx Box V - CG, HIV, Shyphilis and Trich Test details link', async t => {
  await t.expect(page.BinxBoxV_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx Box V - CG, HIV, Shyphilis and Trich Price', async t => {
  await t.expect(page.BinxBoxV_Price.innerText).eql('$250')
});
test('APP BERKELEY - Binx Box V - CG, HIV, Shyphilis and Trich Get This Box', async t => {
  await t.expect(page.BinxBoxV_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Text', async t => {
  await t.expect(page.BinxForPrEP_Text.innerText).eql('binx for PrEP\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, and Creatinine\nWho is this for?\nPeople on PrEP typically need quarterly STI screening as part of that regimen')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Test details link', async t => {
  await t.expect(page.BinxForPrEP_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Price', async t => {
  await t.expect(page.BinxForPrEP_Price.innerText).eql('$285')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Get This Box', async t => {
  await t.expect(page.BinxForPrEP_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Text', async t => {
  await t.expect(page.BinxBoxVI_Text.innerText).eql('binx box VI\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, and Hepatitis C\nWho is this for?\nPeople who have multiple partners or men who have sex with men')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Test details link', async t => {
  await t.expect(page.BinxBoxVI_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Price', async t => {
  await t.expect(page.BinxBoxVI_Price.innerText).eql('$315')
});
test('APP BERKELEY - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Get This Box', async t => {
  await t.expect(page.BinxBoxVI_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - Binx for PrEP starter - GAO CG, HIV, , Creatinine, Hepatitis B & Hepatitis C Text', async t => {
  await t.expect(page.BinxForPrEPStarter_Text.innerText).eql('binx for PrEP starter\nTests for:\nGenital, rectal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, Creatinine and Hepatitis B & Hepatitis C\nWho is this for?\nIndividuals wanting to establish HIV PrEP services.')
});
test('APP BERKELEY - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Test details link', async t => {
  await t.expect(page.BinxForPrEPStarter_TestDetails.innerText).eql('Test details')
});
test('APP BERKELEY - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Price', async t => {
  await t.expect(page.BinxForPrEPStarter_Price.innerText).eql('$345')
});
test('APP BERKELEY - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Get This Box', async t => {
  await t.expect(page.BinxForPrEPStarter_GetThisBox.innerText).eql('Get This Box')
});
test('APP BERKELEY - PayPal Header', async t => {
  await t.expect(page.H1PayPal.innerText).eql('Pay over time with PayPal')
});
test('APP BERKELEY - PayPal Logo', async t => {
  await t.expect(page.PayPalLogo.exists).ok()
});
test('APP BERKELEY - PayPal Text', async t => {
  await t.expect(page.PayPalText.innerText).eql('* Pay over 6-months on orders of $99.00 or more at checkout. Subject to the terms and conditions of PayPal, which are not within our control.')
});
test('APP BERKELEY - Not sure which test is for you?', async t => {
  await t.expect(page.H3NoSure.innerText).eql('Not sure which test is for you?')
});
test('APP BERKELEY - Not sure Text', async t => {
  await t.expect(page.NoSureText.innerText).eql('binx box test assortments are based on CDC guidelines as well as the US Preventive Services Task Force. All orders are reviewed by a licensed clinician.')
});
test('APP BERKELEY - Not sure Button', async t => {
  await t.expect(page.NoSureFindMyTest.exists).ok()
});
test('APP BERKELEY - Not sure Button Text', async t => {
  await t.expect(page.NoSureFindMyTest.innerText).eql('Find My Test')
});
test('APP BERKELEY - Not sure Image', async t => {
  await t.expect(page.NoSureImage.exists).ok()
});