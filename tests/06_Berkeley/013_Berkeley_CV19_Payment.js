import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';

fixture `CV19 Payment Screen`
    .page `https://berkeley.stage.mybinxhealth.com/checkout/personal?products=CV19`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
          .click(page.cv19Banner)    
          .click(page.CV19RequestKit)
          .click(page.P_Me_rb)
          .click(page.GenericContinueButton)     
          .typeText(page.Address,'473 Pleasant St')
          .typeText(page.City,'Holyoke')
          .typeText(page.Zip,'01040')
          .typeText(page.Mobile,'+1(413)-999-9888')
          .click(page.GenericContinueButton)
    });
  
test('PASSED\nAPP US - CV19 - Payment Screen', async t => {
      console.log(" APP US - CV19 - Payment Screen".gray)
      
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

  await t.expect(page.EmailLabel.innerText).eql('Email address')
        console.log(" \u2713".green + " Email Label".gray)  

  await t.expect(page.EmailBox.exists).ok()
        console.log(" \u2713".green + " Email Field".gray)  

  await t.expect(page.PwdLabel.innerText).eql('Password')
        console.log(" \u2713".green + " Password Label".gray)  

  await t.expect(page.PwdBox.exists).ok()
        console.log(" \u2713".green + " Password Field".gray)  

  await t.expect(page.PwdMeter.exists).ok()
        console.log(" \u2713".green + " Password Meter".gray)

  await t
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

  await t.expect(page.PwdError.innerText).eql('Please choose a stronger password.')
        console.log(" \u2713".green + " Please choose a stronger password.".gray)

  await t
        .typeText(page.PwdBox,'.t3st..t3st')
        .click(page.GenericContinueButton)
        .expect(page.EmailError.innerText).eql('Oops! This is a required field.')
        console.log(" \u2713".green + " Email - Oops! This is a required field.".gray) 

  await page.VerifyCartHeader()
        console.log(" \u2713".green + " Cart Header".gray)

  await page.VerifyCartProduct_CV19()
        console.log(" \u2713".green + " Cart Product".gray)

  await page.VerifyCartSubtotal_CV19()
        console.log(" \u2713".green + " Cart Subtotal".gray)
        
  await page.VerifyCartShipping()
        console.log(" \u2713".green + " Cart Shipping".gray)

  //await page.VerifyCartPromo()
  //  console.log(" \u2713".green + " Cart Promo".gray)
  await page.VerifyCartTotal_CV19()
        console.log(" \u2713".green + " Cart Total".gray)

  //await page.VerifyCartPayPal()
  //  console.log(" \u2713".green + " Cart PayPal".gray)
});

