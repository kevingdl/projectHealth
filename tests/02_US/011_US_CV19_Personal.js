import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('CV19 Personal Screen '+ MyEnv)
    .page(MyEnv+'covid')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    
test('PASSED\nAPP US - CV19 - Personal', async t => {
    console.log(" APP US - CV19 - Personal".gray)

    page.GoToPersonal_CV19() //Land in Personal Tab
    
    await t.expect(page.P_AlreadyLink.innerText).eql('Already have a binx account? Click here to login.')
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

    page.VerifyCartSummary()
      console.log(" \u2713".green + " Cart Summary".gray)

    page.VerifyAgreeSentence()
      console.log(" \u2713".green + " Agree Sentence Validation".gray)

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
      console.log(" \u2713".green + " Date Error Message 1".gray)
    await t  
      .click(page.DOBField)
      .pressKey('ctrl+a delete')
      .typeText(page.DOBField,'11/11/1111')
      .click(page.GenericContinueButton)
      .expect(Selector('#dob-feedback').innerText).eql('Patient must be under 110 years of age')
      console.log(" \u2713".green + " Date Error Message 2".gray)
  
});