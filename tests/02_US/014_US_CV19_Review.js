import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('CV19 Review Screen '+ MyEnv)
    .page(MyEnv+'covid')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    
test('APP US - CV19 - Review Screen', async t => {
      console.log(" APP US - CV19 - Payment Screen".gray)

      page.GoToPersonal_CV19() //Land in Personal Tab
      page.FillPersonal_CV19() //Land in Address Tab
      page.FillAddress_CV19() //Land in Payment Tab
      page.FillPayment_CV19() //Land in Review Tab
      
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
  
  await t.expect(page.ReviewPI.exists).ok()
        console.log(" \u2713".green + " Patient Information".gray)

  await t.expect(page.ReviewPIedit.exists).ok()
        console.log(" \u2713".green + " Your Patient Information edit link".gray)  
  
  await t.expect(page.ReviewYA.exists).ok()
        console.log(" \u2713".green + " Your address".gray)
        
  await t.expect(page.ReviewYAedit.exists).ok()
        console.log(" \u2713".green + " Your address edit link".gray)
  
  await t.expect(page.ReviewPM.innerText).eql('Payment details')
        console.log(" \u2713".green + " Payment method".gray)

  await t.expect(page.ReviewPMedit.exists).ok()
        console.log(" \u2713".green + " Payment method edit link".gray)
  
  await t.expect(page.ReviewTC.exists).ok()
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
  
  await t.expect(page.ReviewPlaceOrder.exists).ok()
        console.log(" \u2713".green + " Place Order".gray)

        page.VerifyCartSummary()
        console.log(" \u2713".green + " Cart Summary".gray)
        
});

