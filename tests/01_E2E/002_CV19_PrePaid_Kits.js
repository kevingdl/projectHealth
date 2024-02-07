import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';

fixture `E2E - CV19 Pre-Paid Kit`
    .page `https://app.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
 
test.only('New User - Partner: No - Positive Result', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('No Partner')
    console.log('\u2713 PASSED | Barcode Obtained')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log('\u2713 PASSED | Activate Box')
  await page.PrepaidNewUser()
    console.log('\u2713 PASSED | I have NOT activated or ordered a binx box before')
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log('\u2713 PASSED | Barcode Accepted')
  await page.PrePaid_credentials()
    console.log('\u2713 PASSED | Fill Email & Password')
  await page.PersonalUSdata()
    console.log('\u2713 PASSED | Fill Personal Information')
  await page.AddressUSdata()
    console.log('\u2713 PASSED | Fill Address')
  await page.Screening1()
  await page.Screening2()
    console.log('\u2713 PASSED | Answer Screening')
  await page.ReviewGeneric('N')
    console.log('\u2713 PASSED | Testing & Research Consent')
  await page.ActivateBarcode()
    console.log('\u2713 PASSED | Barcode Activated')
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log('\u2713 PASSED | Order Number Obtained')
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log('\u2713 PASSED | Order Activated: My Account > Dashboard')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log('\u2713 PASSED | Order Activated: My Account > Orders')
  //await page.Approve_Release(ThePrePaidOrder,'Approve')  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log('\u2713 PASSED | Lab received the order')
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log('\u2713 PASSED | Order Processing: My Account > Dashboard')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log('\u2713 PASSED | Order Processing: My Account > Orders')
  await page.MockCV19results(ThePrePaidOrder)
    console.log('\u2713 PASSED | Mock the results')
  await page.Approve_Release(ThePrePaidOrder,'Release')  
    console.log('\u2713 PASSED | Release the results')
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log('\u2713 PASSED | Order Results Ready: My Account > Dashboard')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log('\u2713 PASSED | Order Results Ready: My Account > Orders')
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
    
});

test('Existing User - Partner: No - Positive Result', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('No Partner')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  //await page.Approve_Release(ThePrePaidOrder,'Approve')
  await page.ReceiveTheOrder(ThePrePaidOrder)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
  await page.MockCV19results(ThePrePaidOrder)
  await page.Approve_Release(ThePrePaidOrder,'Release')  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
  
});
test('Existing User - Partner: Stanford - Positive Result', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('stanford - stanford')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewStanford()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  //await page.Approve_Release(ThePrePaidOrder,'Approve')
  await page.ReceiveTheOrder(ThePrePaidOrder)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
  await page.MockCV19results(ThePrePaidOrder)
  await page.Approve_Release(ThePrePaidOrder,'Release')  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
  
});
test('New User - Partner: The New School - Validation Error', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('newschool - The New School')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.PrepaidNewUser()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.PrePaid_credentials()
  await page.PersonalUSdata()
  await page.AddressUSdata()
  await page.Screening1()
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewNewSchool()
  await page.ActivateBarcode()
  await t.expect(Selector('#email-feedback').innerText).eql('Accounts and testing with binx health are available for New School students, faculty, and staff only. Questions about testing policy or support, please contact covidtesting@newschool.edu. If you are an employee, please contact benefitshelp@newschool.edu.')
});