import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('CV19 Address Screen '+ MyEnv)
    .page(MyEnv+'covid')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
        
test('PASSED\nAPP US - CV19 Address Screen', async t => {
    console.log(" APP US - CV19 Address Screen".gray)
    
    page.GoToPersonal_CV19() //Land in Personal Tab
    page.FillPersonal_CV19() //Land in Address Tab
  
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
  
        page.VerifyCartSummary()
        console.log(" \u2713".green + " Cart Summary".gray)
  
    await t.expect(page.GenericContinueButton.exists).ok()
        console.log(" \u2713".green + " Continue Button".gray)
});
