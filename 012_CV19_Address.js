import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `CV19 Address Screen`
    .page `https://app.stage.mybinxhealth.com/covid`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
        await t
            .click(page.CV19RequestKit)
            .click(page.P_Me_rb)
            .typeText(page.FirstNameField,'Francisco')
            .typeText(page.LastNameField,'O\'Caña')
            .typeText(page.DOBField,'02/20/1930')
            .click(page.rbM)
            .click(page.StateList)
            .click(page.StateList.find('option').withText('Massachusetts'))
            .click(page.GenericContinueButton)     
      });
        
test('PASSED\nAPP US - CV19 Address Screen', async t => {
    console.log(" APP US - CV19 Address Screen".gray)

  await t.expect(page.P_CheckoutH1.innerText).eql('Checkout')
    console.log(" \u2713".green + " Checkout Header".gray)

  await t
        .expect(page.P_tab.innerText).eql('Personal')
        .expect(page.A_tab.innerText).eql('Address')
        .expect(page.Pay_tab.innerText).eql('Payment')
        .expect(page.Review_tab.innerText).eql('Review')
        console.log(" \u2713".green + " Progress Bar".gray)

  await t.expect(page.A_Highlight.exists).ok();  
    console.log(" \u2713".green + " Address is hihglighted".gray)

  await t.expect(page.A_YourAddress.innerText).eql('Your address')
    console.log(" \u2713".green + " Your Address Header".gray)

  await t
        .expect(page.AddressLabel.innerText).eql('Address*')
        .expect(page.Address.exists).ok()
        console.log(" \u2713".green + " Address".gray)

  await t
        .expect(page.AptLabel.innerText).eql('Apt / Unit')
        .expect(page.Apt.exists).ok()
        console.log(" \u2713".green + " Apt / Unit".gray)

  await t
        .expect(page.CityLabel.innerText).eql('City*')
        .expect(page.City.exists).ok()
        console.log(" \u2713".green + " City".gray)
  await t
        .expect(page.StateLabel.innerText).eql('State*')
        .expect(page.StateList.exists).ok()
        console.log(" \u2713".green + " State".gray)

  await t
        .expect(page.ZipLabel.innerText).eql('Postal Code*')
        .expect(page.Zip.exists).ok()    
        console.log(" \u2713".green + " Postal Code".gray)
  await t
        .expect(page.MobileLabel.innerText).eql('Mobile number*')
        .expect(page.Mobile.exists).ok()
        console.log(" \u2713".green + " Mobile".gray)
  
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
});
