import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('CV19 Payment Screen '+ MyEnv)
    .page(MyEnv+'covid')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    
test('PASSED\nAPP US - CV19 - Payment Screen', async t => {
      console.log(" APP US - CV19 - Payment Screen".gray)

      page.GoToPersonal_CV19() //Land in Personal Tab
      page.FillPersonal_CV19() //Land in Address Tab
      page.FillAddress_CV19() //Land in Payment Tab

      
  await t.expect(page.P_CheckoutH1.innerText).eql('Checkout')
        console.log(" \u2713".green + " Checkout Header".gray)

  await t
        .expect(page.P_tab.innerText).eql('Personal')
        .expect(page.A_tab.innerText).eql('Address')
        .expect(page.Pay_tab.innerText).eql('Payment')
        .expect(page.Review_tab.innerText).eql('Review')
        console.log(" \u2713".green + " Progress Bar".gray)

  await t.expect(page.Pay_Highlight.exists).ok();
        console.log(" \u2713".green + " Payment is highlighted".gray)

  await t.expect(page.Pay_Header.innerText).eql('Payment method')
        console.log(" \u2713".green + " Payment method".gray)

  await t.expect(page.Pay_CC.innerText).eql('Credit Card')
        console.log(" \u2713".green + " Credit Card".gray)

  await t.switchToIframe(page.Pay_CardFrame)
        console.log(" \u2713".green + " Credit Card Frame".gray)

  await t.expect(page.Pay_CardNumber.exists).ok()
        console.log(" \u2713".green + " Credit Card Field".gray)

  await t.expect(page.Pay_CardExp.exists).ok()
        console.log(" \u2713".green + " Credit Card Expiration Date".gray)

  await t.expect(page.Pay_CardCVC.exists).ok()
        console.log(" \u2713".green + " Credit Card CVC".gray)

  //await t.expect(page.Pay_CardZip.exists).ok()
  //  console.log(" \u2713".green + " Credit Card Zip Code".gray)
  await t.switchToMainWindow()
  await t.expect(page.Pay_Clear.exists).ok()
        console.log(" \u2713".green + " Clear".gray)

  await t.expect(page.EmailLabel.innerText).eql('Email address*')
        console.log(" \u2713".green + " Email Label".gray)  

  await t.expect(page.EmailBox.exists).ok()
        console.log(" \u2713".green + " Email Field".gray)  

  await t.expect(page.PwdLabel.innerText).eql('Password*')
        console.log(" \u2713".green + " Password Label".gray)  

  await t.expect(page.PwdBox.exists).ok()
        console.log(" \u2713".green + " Password Field".gray)  

  await t.expect(page.PwdMeter.exists).ok()
        console.log(" \u2713".green + " Password Meter".gray)

  await t
        .typeText(page.EmailBox,"test@test.com")
        .typeText(page.PwdBox,'.t3st..t3st')
        .click(page.GenericContinueButton)
        .expect(page.Pay_Error.innerText).eql('Your card number is incomplete.')
        console.log(" \u2713".green + " Your card number is incomplete.".gray) 

  await t
        .switchToIframe(page.Pay_CardFrame)
        .typeText(page.Pay_CardNumber,'4242424242424242')
        .switchToMainWindow()
        .click(page.GenericContinueButton)
        .expect(page.Pay_Error.innerText).eql('Your card\'s expiration date is incomplete.')
        console.log(" \u2713".green + " Your card\'s expiration date is incomplete.".gray) 

  await t
        .switchToIframe(page.Pay_CardFrame)
        .typeText(page.Pay_CardExp,'05/30')
        .switchToMainWindow()
        .click(page.GenericContinueButton)
        .expect(page.Pay_Error.innerText).eql('Your card\'s security code is incomplete.')
        console.log(" \u2713".green + " Your card\'s security code is incomplete.".gray) 

  await t
        .switchToIframe(page.Pay_CardFrame)
        .typeText(page.Pay_CardCVC,'123')
        .switchToMainWindow()
        .click(page.GenericContinueButton)
        .expect(page.Pay_Error.innerText).eql('Your postal code is incomplete.')
        console.log(" \u2713".green + " Your postal code is incomplete.".gray) 

  await t
        .switchToIframe(page.Pay_CardFrame)
        .typeText(page.Pay_CardZip,'04810')
        .switchToMainWindow()
        .click(page.GenericContinueButton)
        .expect(page.Pay_PageError.innerText).eql('Please correct the validation errors below')
        console.log(" \u2713".green + " Please correct the validation errors below".gray)

        page.VerifyCartSummary()
        console.log(" \u2713".green + " Cart Summary".gray)

});

