import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `CV19 Personal Screen`
    .page `https://berkeley.stage.mybinxhealth.com/covid`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
        .navigateTo('https://berkeley.stage.mybinxhealth.com/covid')
        .click(page.CV19RequestKit)
        .click(page.CV19QuestionnaireQ1A1box)
        .click(page.CV19QuestionnaireQ2A1box)
        .click(page.GenericContinueButton)
    });
test('PASSED\nAPP US - CV19 - Personal', async t => {
    console.log(" APP US - CV19 - Personal".gray)
    
    await t.expect(page.P_AlreadyLink.innerText).eql('Already have a binx account? Click here to login')
      console.log(" \u2713".green + " Already have a binx account? Click here to login".gray)

    await t.expect(page.P_AlreadyLink.exists).ok()
      console.log(" \u2713".green + " Already have a binx account? Click here to login - Link".gray)

    await t.expect(page.P_CheckoutH1.innerText).eql('Checkout')
      console.log(" \u2713".green + " Checkout Header".gray)

    await t
    .expect(page.P_tab.innerText).eql('Personal')
    .expect(page.A_tab.innerText).eql('Address')
    .expect(page.Pay_tab.innerText).eql('Payment')
    .expect(page.Review_tab.innerText).eql('Review')
      console.log(" \u2713".green + " Progress Bar".gray)

    await t.expect(page.P_Highlight.exists).ok();
      console.log(" \u2713".green + " Is highlighted".gray)

    await t.expect(page.P_YourInformation.innerText).eql('Your information')
      console.log(" \u2713".green + " Your Information Header".gray)
    
    await t.expect(page.P_Who.innerText).eql('Who is this test for?')
      console.log(" \u2713".green + " Who is this test for?".gray)

    await t.expect(page.P_Me.innerText).eql('This test is for me')
      console.log(" \u2713".green + " This test is for me".gray)

    await t.expect(page.P_Dependent.innerText).eql('This test is for my family member or dependent')
      console.log(" \u2713".green + " This test is for my family member or dependent".gray)

    await t
      .expect(page.FirstNameLabel.innerText).eql('First name*')
      .expect(page.FirstNameField.exists).ok()
      console.log(" \u2713".green + " First Name".gray)

    await t
      .expect(page.LastNameLabel.innerText).eql('Last name*')
      .expect(page.LastNameField.exists).ok()
      console.log(" \u2713".green + " Last Name".gray)
    
    await t
    .expect(page.DOBLabel.innerText).eql('Date of Birth*')
    .expect(page.DOBField.exists).ok()
    console.log(" \u2713".green + " Date of Birth".gray)

    await t.expect(page.SexLabel.innerText).eql('Sex Assigned at Birth*')
      console.log(" \u2713".green + " Sex Assigned at Birth".gray)
    
    await t
      .expect(page.rbFLabel.innerText).eql('Female')
      .expect(page.rbF.exists).ok()
      console.log(" \u2713".green + " Female".gray)

    await t
      .expect(page.rbMLabel.innerText).eql('Male')
      .expect(page.rbM.exists).ok()
      console.log(" \u2713".green + " Male".gray)
  
    await t
      .expect(page.rbOLabel.innerText).eql('Other')
      .expect(page.rbO.exists).ok()
      console.log(" \u2713".green + " Other".gray)

    await t.expect(page.P_StateLabel.innerText).eql('State*')
      console.log(" \u2713".green + " State".gray)

    await t.expect(page.P_States.innerText).eql('Choose a state\nAlabama\nAlaska\nArizona\nArkansas\nCalifornia\nColorado\nConnecticut\nDelaware\nDistrict Of Columbia\nFlorida\nGeorgia\nHawaii\nIdaho\nIllinois\nIndiana\nIowa\nKansas\nKentucky\nLouisiana\nMaine\nMaryland\nMassachusetts\nMichigan\nMinnesota\nMississippi\nMissouri\nMontana\nNebraska\nNevada\nNew Hampshire\nNew Jersey\nNew Mexico\nNew York\nNorth Carolina\nNorth Dakota\nOhio\nOklahoma\nOregon\nPennsylvania\nPuerto Rico\nRhode Island\nSouth Carolina\nSouth Dakota\nTennessee\nTexas\nUtah\nVermont\nVirginia\nWashington\nWest Virginia\nWisconsin\nWyoming')
      console.log(" \u2713".green + " List of States".gray)

    page.VerifyCartHeader()
      console.log(" \u2713".green + " Cart Header".gray)
    
    page.VerifyCartProduct_CV19()
      console.log(" \u2713".green + " Cart Product".gray)

    page.VerifyCartSubtotal_CV19()
      console.log(" \u2713".green + " Cart Subtotal".gray)

    page.VerifyCartShipping()
      console.log(" \u2713".green + " Cart Shipping".gray)

    page.VerifyCartPromo()
      console.log(" \u2713".green + " Cart Promo Code".gray)

    page.VerifyCartTotal_CV19()  
      console.log(" \u2713".green + " Cart Total".gray)

    page.VerifyCartPayPal()
      console.log(" \u2713".green + " Cart or $16.50/mo with PayPal Credit".gray)

    await t.expect(page.GenericContinueButton.innerText).eql('Continue')
      console.log(" \u2713".green + " Continue Button".gray)

    await t
      .click(page.P_Me_rb)
      .typeText(page.FirstNameField,'Francisco')
      .typeText(page.LastNameField,'O\'Caña')
      .typeText(page.DOBField,'20/03/1930')
      .click(page.rbM)
      .click(page.StateList)
      .click(page.StateList.find('option').withText('Massachusetts'))
      .click(page.GenericContinueButton)
      .expect(Selector('#dob-feedback').innerText).eql('Please enter your date of birth in the MM/dd/yyyy format')
      console.log(" \u2713".green + " Date Error Message".gray)
  
});