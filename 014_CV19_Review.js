import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `CV19 Review Screen`
    .page `https://app.stage.mybinxhealth.com/checkout/personal?products=CV19`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
          .click(page.CV19RequestKit)
          .click(page.GenericContinueButton)
    });
test('APP US - CV19 - Review Screen', async t => {
      console.log(" APP US - CV19 - Payment Screen".gray)
      
  await t.expect(page.P_CheckoutH1.innerText).eql('Checkout')
        console.log(" \u2713".green + " Review tab Header".gray) 

  await t
        .expect(page.P_tab.innerText).eql('Personal')
        .expect(page.A_tab.innerText).eql('Address')
        .expect(page.Pay_tab.innerText).eql('Payment')
        .expect(page.Review_tab.innerText).eql('Review')
        console.log(" \u2713".green + " Progress Bar".gray) 

  await t.expect(page.Review_Highlight.exists).ok();
        console.log(" \u2713".green + " Review is highlighted".gray) 
  
  await t.expect(page.ReviewPI.innerText).eql('Patient information')
        console.log(" \u2713".green + " Patient Information".gray)

  await t.expect(page.ReviewPIedit.exists).ok()
        console.log(" \u2713".green + " Your Patient Information edit link".gray)  
  
  await t.expect(page.ReviewYA.innerText).eql('Your address')
        console.log(" \u2713".green + " Your address".gray)
        
  await t.expect(page.ReviewYAedit.exists).ok()
        console.log(" \u2713".green + " Your address edit link".gray)
  
  await t.expect(page.ReviewPM.innerText).eql('Payment method')
        console.log(" \u2713".green + " Payment method".gray)

  await t.expect(page.ReviewPMedit.exists).ok()
        console.log(" \u2713".green + " Payment method edit link".gray)
  
  await t.expect(page.ReviewTC.innerText).eql('Testing & Research Consent')
        console.log(" \u2713".green + " Testing & Research Consent".gray)

  await t.expect(page.ReviewViewAllCV19.exists).ok()
        console.log(" \u2713".green + " View All".gray)      

  await t.expect(page.ReviewConsentBox.exists).ok()
        console.log(" \u2713".green + " Testing & Research Consent checkbox".gray)

  await t.expect(page.ReviewToS.exists).ok()
        console.log(" \u2713".green + " terms link".gray)

  await t.expect(page.ReviewPrivacy.exists).ok()
        console.log(" \u2713".green + " privacy policy link".gray)

  await t.expect(page.ReviewResearch.exists).ok()
        console.log(" \u2713".green + " Research Consent checkbox link".gray)

  await t.expect(page.ReviewResearchBox.exists).ok()
        console.log(" \u2713".green + " Research Consent checkbox".gray)

  await page.VerifyCartHeader()
        console.log(" \u2713".green + " Cart Header".gray)

  await page.VerifyCartProduct_CV19()
        console.log(" \u2713".green + " Cart Product".gray)
        
  await page.VerifyCartSubtotal_CV19()
        console.log(" \u2713".green + " Cart Subtotal".gray)

  await page.VerifyCartShipping()
        console.log(" \u2713".green + " Cart Shipping".gray)

  await page.VerifyCartPromo()
        console.log(" \u2713".green + " Cart Promo".gray)

  await page.VerifyCartTotal_CV19()
        console.log(" \u2713".green + " Cart Total".gray)

  await page.VerifyCartPayPal()
        console.log(" \u2713".green + " Cart PayPal".gray)

  await t.expect(page.ReviewPlaceOrder.exists).ok()
        console.log(" \u2713".green + " Place Order".gray)
        
});

