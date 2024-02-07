import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from './page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture.disablePageReloads `Stage Env`
    .page `https://app.stage.mybinxhealth.com`
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
//CLICK TO OTHER PAGE
test('APP US - Find My Test Click', async t => {
  await t.click(page.FindMyTestButton)
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
//CLICK TO OTHER PAGE
test('APP US - Binx Boxes Click', async t => {
  await t.click(page.BinxBoxes)
});
test('APP US - Binx Boxes CV19 Banner', async t => {
  await t.expect(page.cv19BannerBB.exists).ok()
});
test('APP US - Binx Box I - CG Text', async t => {
  await t.expect(page.BinxBoxI_Text.innerText).eql('binx box I\nTests for:\nChlamydia and Gonorrhea\nWho is this for?\nChlamydia and gonorrhea testing is broadly recommended for sexually active people')
});
test('APP US - Binx Box I - CG Test details link', async t => {
  await t.expect(page.BinxBoxI_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx Box I - CG Price', async t => {
  await t.expect(page.BinxBoxI_Price.innerText).eql('$80')
});
test('APP US - Binx Box I - CG Get This Box', async t => {
  await t.expect(page.BinxBoxI_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx HPV Box - Text', async t => {
  await t.expect(page.BinxHPVBox_Text.innerText).eql('binx HPV box\nTests for:\nHPV\nWho is this for?\nWomen over 30 should have an HPV screening once every 5 years if previous Pap tests for cervical cancer screening have been normal')
});
test('APP US - Binx HPV Box - Test details link', async t => {
  await t.expect(page.BinxHPVBox_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx HPV Box - Price', async t => {
  await t.expect(page.BinxHPVBox_Price.innerText).eql('$140')
});
test('APP US - Binx HPV Box - Get This Box', async t => {
  await t.expect(page.BinxHPVBox_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx Box II - CG and HIV Text', async t => {
  await t.expect(page.BinxBoxII_Text.innerText).eql('binx box II\nTests for:\nChlamydia, Gonorrhea, and HIV\nWho is this for?\nChlamydia and gonorrhea testing is broadly recommended for sexually active people and everyone should get tested for HIV at least once')
});
test('APP US - Binx Box II - CG and HIV Test details link', async t => {
  await t.expect(page.BinxBoxII_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx Box II - CG and HIV Price', async t => {
  await t.expect(page.BinxBoxII_Price.innerText).eql('$195')
});
test('APP US - Binx Box II - CG and HIV Get This Box', async t => {
  await t.expect(page.BinxBoxII_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx Box III - CG GAO Text', async t => {
  await t.expect(page.BinxBoxIII_Text.innerText).eql('binx box III\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea\nWho is this for?\nPeople who have anal receptive sex and/or perform oral sex')
});
test('APP US - Binx Box III - CG GAO Test details link', async t => {
  await t.expect(page.BinxBoxIII_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx Box III - CG GAO Price', async t => {
  await t.expect(page.BinxBoxIII_Price.innerText).eql('$205')
});
test('APP US - Binx Box III - CG GAO Get This Box', async t => {
  await t.expect(page.BinxBoxIII_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx Box IV - CG, HIV and Trich Text', async t => {
  await t.expect(page.BinxBoxIV_Text.innerText).eql('binx box IV\nTests for:\nChlamydia, Gonorrhea, HIV, and Trichomoniasis\nWho is this for?\nSexually active women, particularly in specific geographic regions')
});
test('APP US - Binx Box IV - CG, HIV and Trich Test details link', async t => {
  await t.expect(page.BinxBoxIV_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx Box IV - CG, HIV and Trich Price', async t => {
  await t.expect(page.BinxBoxIV_Price.innerText).eql('$215')
});
test('APP US - Binx Box IV - CG, HIV and Trich Get This Box', async t => {
  await t.expect(page.BinxBoxIV_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx Box V - CG, HIV, Shyphilis and Trich Text', async t => {
  await t.expect(page.BinxBoxV_Text.innerText).eql('binx box V\nTests for:\nChlamydia, Gonorrhea, HIV, Syphilis, and Trichomoniasis\nWho is this for?\nSexually active women who have had multiple partners in the past year')
});
test('APP US - Binx Box V - CG, HIV, Shyphilis and Trich Test details link', async t => {
  await t.expect(page.BinxBoxV_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx Box V - CG, HIV, Shyphilis and Trich Price', async t => {
  await t.expect(page.BinxBoxV_Price.innerText).eql('$250')
});
test('APP US - Binx Box V - CG, HIV, Shyphilis and Trich Get This Box', async t => {
  await t.expect(page.BinxBoxV_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Text', async t => {
  await t.expect(page.BinxForPrEP_Text.innerText).eql('binx for PrEP\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, and Creatinine\nWho is this for?\nPeople on PrEP typically need quarterly STI screening as part of that regimen')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Test details link', async t => {
  await t.expect(page.BinxForPrEP_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Price', async t => {
  await t.expect(page.BinxForPrEP_Price.innerText).eql('$285')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Get This Box', async t => {
  await t.expect(page.BinxForPrEP_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Text', async t => {
  await t.expect(page.BinxBoxVI_Text.innerText).eql('binx box VI\nTests for:\nGenital, Anal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, and Hepatitis C\nWho is this for?\nPeople who have multiple partners or men who have sex with men')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Test details link', async t => {
  await t.expect(page.BinxBoxVI_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Price', async t => {
  await t.expect(page.BinxBoxVI_Price.innerText).eql('$315')
});
test('APP US - Binx for PrEP - GAO CG, HIV, Shyphilis and Creatinine Get This Box', async t => {
  await t.expect(page.BinxBoxVI_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - Binx for PrEP starter - GAO CG, HIV, , Creatinine, Hepatitis B & Hepatitis C Text', async t => {
  await t.expect(page.BinxForPrEPStarter_Text.innerText).eql('binx for PrEP starter\nTests for:\nGenital, rectal, and Oral Chlamydia and Gonorrhea, HIV, Syphilis, Creatinine and Hepatitis B & Hepatitis C\nWho is this for?\nIndividuals wanting to establish HIV PrEP services.')
});
test('APP US - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Test details link', async t => {
  await t.expect(page.BinxForPrEPStarter_TestDetails.innerText).eql('Test details')
});
test('APP US - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Price', async t => {
  await t.expect(page.BinxForPrEPStarter_Price.innerText).eql('$345')
});
test('APP US - Binx for PrEP starter - GAO CG, HIV, Shyphilis, Creatinine, Hepatitis B & Hepatitis C Get This Box', async t => {
  await t.expect(page.BinxForPrEPStarter_GetThisBox.innerText).eql('Get This Box')
});
test('APP US - PayPal Header', async t => {
  await t.expect(page.H1PayPal.innerText).eql('Pay over time with PayPal')
});
test('APP US - PayPal Logo', async t => {
  await t.expect(page.PayPalLogo.exists).ok()
});
test('APP US - PayPal Text', async t => {
  await t.expect(page.PayPalText.innerText).eql('* Pay over 6-months on orders of $99.00 or more at checkout. Subject to the terms and conditions of PayPal, which are not within our control.')
});
test('APP US - Not sure which test is for you?', async t => {
  await t.expect(page.H3NoSure.innerText).eql('Not sure which test is for you?')
});
test('APP US - Not sure Text', async t => {
  await t.expect(page.NoSureText.innerText).eql('binx box test assortments are based on CDC guidelines as well as the US Preventive Services Task Force. All orders are reviewed by a licensed clinician.')
});
test('APP US - Not sure Button', async t => {
  await t.expect(page.NoSureFindMyTest.exists).ok()
});
test('APP US - Not sure Button Text', async t => {
  await t.expect(page.NoSureFindMyTest.innerText).eql('Find My Test')
});
test('APP US - Not sure Image', async t => {
  await t.expect(page.NoSureImage.exists).ok()
});
test('APP US - Activate Box Page Elements', async t => {
  await t
    .click(page.ActivateBox)
    .expect(page.H1ActivateBox.innerText).eql('Activate Box')
    .expect(page.ActivateBoxYes.innerText).eql('I have activated or ordered a binx box before')
    .expect(page.ActivateBoxYes.exists).ok()
    .expect(page.ActivateBoxNo.innerText).eql('I have NOT activated or ordered a binx box before')
    .expect(page.ActivateBoxNo.exists).ok()
});
test('APP US - Activate Box - I have activated or ordered a binx box before - Login', async t => {
  await t
    .click(page.ActivateBox)
    .click(page.ActivateBoxYes)
    .expect(page.H1Login.innerText).eql('Login')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    .expect(page.ForgotPwd.exists).ok()
});
test('APP US - Forgot Password', async t => {
  await t
    .click(page.ActivateBox)
    .click(page.ActivateBoxYes)
    .click(page.ForgotPwd)
    .expect(page.H1ForgotPwd.innerText).eql('Forgot Password')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.SendResetButton.innerText).eql('Send Reset')
    .expect(page.SendResetButton.exists).ok()
});
test('APP US - Activate Box - I have NOT activated or ordered a binx box before', async t => {
  await t
    .click(page.ActivateBox)
    .click(page.ActivateBoxNo)
    .expect(page.H1ActivateBox.innerText).eql('Activate Box')
    .expect(page.ABinfoModal.innerText).eql('Before activating, please confirm!\nYou will collect your sample immediately\nThe sample you collect will be yours\nYou will be able to drop off the sample before the last shipping pickup of the day (when required)')
    .expect(page.HelpMeFindThisInfo.innerText).eql('Help me find this')
    .expect(page.BarcodeField.exists).ok()
    .expect(page.ActivateButton.innerText).eql('Activate')

});
test('APP US - Upload - Rapid Test', async t => {
  await t
    .click(page.Upload)
    .click(page.RapidTest)
    .expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
    .expect(page.UploadRTYes.innerText).eql('I have uploaded a Rapid Test before')
    .expect(page.UploadRTNo.innerText).eql('I have NOT uploaded a Rapid Test before')

});
test('APP US - Upload - Rapid Test - I have uploaded a Rapid Test before', async t => {
  await t
    .click(page.Upload)
    .click(page.RapidTest)
    .click(page.UploadRTYes)
    .expect(page.H1Login.innerText).eql('Login')
    .expect(page.EmailLabel.innerText).eql('Email address*')
    .expect(page.EmailBox.exists).ok()
    .expect(page.PwdLabel.innerText).eql('Password*')
    .expect(page.PwdBox.exists).ok()
    .expect(page.ForgotPwd.innerText).eql('Forgot your password? Click here')
    .expect(page.ForgotPwd.exists).ok()
});

/*
test('APP US - Upload - Rapid Test Header', async t => {
  await t
    .expect(page.H1RapidTest.innerText).eql('Upload Rapid Test')
});

test('APP US - Login Click', async t => {
  await t
    .click(page.Login)

});     


test('APP US - Login Header', async t => {
  await t
    .expect(page.H1Login.innerText).eql('Login')
});     

test('APP US - Footer CLIA Image Home', async t => {
  await t
    .expect(page.CLIAimage.exists).ok()
});     

test('APP US - Footer CLIA Image Home', async t => {
  await t
    .navigateTo('https://app.stage.mybinxhealth.com/activate-box')
    .expect(page.CLIAimage.exists).ok()
});     
*/