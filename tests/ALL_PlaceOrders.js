import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../TestCafe/page_model/POM_01_PlaceOrders';
//import { app, ukcv19, admin, portal } from './urls';
//import { genericPwd, newUser_US, newUser_prepaid } from './newUser';

fixture `Stage Env`
    .page `https://app.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
test.only('US CV19 e2e - Positive - New User', async t => {
  await page.CV19product()
  await page.Screening1()
  await page.NextScreen()
  await page.PersonalUSdata()
  await page.NextScreen()
  await page.AddressUSdata()
  await page.NextScreen()
  await page.PayUSdata()
  await page.UScredentials()
  await page.NextScreen()
  await page.ReviewGeneric('N')
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.Approve_Release(OrderNumber,'Approve')  
  await page.ShipTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.Screening2()
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  
  //ADD MOCK RESULTS AND RELEASE RESULTS ONCE THEY ARE AVAILABLE IN STAGE WITH ACCESS GENETICS LAB
  //await page.MockCV19results(OrderNumber)
  //await page.ReleaseCV19results(OrderNumber)
});

test.skip('US CV19 e2e - Positive - Existing User', async t => {
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.GoToApp()
  await page.CV19product()
  await page.Screening1()
  await page.NextScreen()
  await page.NextScreen()
  await page.NextScreen()
  await page.PayUSdata()
  await page.NextScreen()
  await page.ReviewGeneric('N')
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  //await page.Approve_Release(OrderNumber,'Approve')  
  await page.ShipTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.Screening2()
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  
  //ADD MOCK RESULTS AND RELEASE RESULTS ONCE THEY ARE AVAILABLE IN STAGE WITH ACCESS GENETICS LAB
  //await page.MockCV19results(OrderNumber)
  //await page.ReleaseCV19results(OrderNumber)
  //Query to get existing user from the ADMIN
  //https://admin.stage.mybinxhealth.com/dashboard/index?sort=patientOrderDateCreated&order=desc&queryMap.CustomerEmailAddress=devmail+kevin+US
});
 
test.skip('US Prepaid Kit No Partner e2e - Positive - New User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('No Partner')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.PrepaidNewUser()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.PrepaidCredentials()
  await page.PersonalUSdata()
  await page.AddressUSdata()
  await page.Screening1()
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

test.skip('US PrePaid Kit No Partner e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('No Partner')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
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

test.skip('UK PCR e2e - Positive - New User', async t => {
  await page.GoToUK()
  await page.UKpcr()
  await page.PersonalUKdata()
  await page.NextScreen()
  await page.AddressUKdata()
  await page.NextScreen()
  await page.PayUKdata()
  await page.UK_PCR()
  await page.NextScreen()
  await page.ReviewUKdata()
  await t.debug()
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.ShipTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToUK()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  await page.MockUKresults(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
});
test.skip('UK PCR e2e - Positive - Existing User', async t => {
  await page.GoToUK()
  await page.MobileMenu()
  await page.LoginUK_PCR()
  await page.GoToUK()
  await page.UKpcr()
  await page.NextScreen()
  await page.NextScreen()
  await page.PayUKdata()
  await page.NextScreen()
  await page.ReviewUKdata()
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.ShipTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToUK()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  await page.MockUKresults(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
});
test.skip('UK TTR e2e - Positive - New User', async t => {
  await page.GoToUK()
  await page.UKttr()
  await page.UKttr_travelerInfo()
  await page.NextScreen()
  await page.PersonalUKdata()
  await page.NextScreen()
  await page.AddressUKdata()
  await page.NextScreen()
  await page.PayUKdata()
  await page.UK_TTR()
  await page.NextScreen()
  await page.ReviewUKdata()
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.ShipTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToUK()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  await page.MockUKresults(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
});
test.skip('UK TTR e2e - Positive - Existing User', async t => {
  await page.GoToUK()
  await page.MobileMenu()
  await page.LoginUK_TTR()
  await page.GoToUK()
  await page.UKttr()
  await page.UKttr_travelerInfo()
  await page.NextScreen()
  await page.NextScreen()
  await page.NextScreen()
  await page.PayUKdata()
  await page.NextScreen()
  await page.ReviewUKdata()
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.ShipTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToUK()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  await page.MockUKresults(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
});

test.skip('US PrePaid Kit STANFORD e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('stanford - stanford')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
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

test.skip('US PrePaid Kit NEWSCHOOL - No Activation, error validation', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('newschool - The New School')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.PrepaidNewUser()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.PrepaidCredentials()
  await page.PersonalUSdata()
  await page.AddressUSdata()
  await page.Screening1()
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewNewSchool()
  await page.ActivateBarcode()
  await t.expect(Selector('#email-feedback').innerText).eql('Accounts and testing with binx health are available for New School students, faculty, and staff only. Questions about testing policy or support, please contact covidtesting@newschool.edu. If you are an employee, please contact benefitshelp@newschool.edu.')
});

test.skip('US PrePaid Kit NYFA e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('nyfa - NYFA')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewNYFA()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit BlackRock e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('blackrock - BlackRock')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewBlackRock()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit NASDAQ - No Activation, error validation', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('nasdaq - Nasdaq, Inc.')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.PrepaidNewUser()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.PrepaidCredentials()
  await page.PersonalUSdata()
  await page.AddressUSdata()
  await page.Screening1()
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewNasdaq()
  await page.ActivateBarcode()
  await t.expect(Selector('#email-feedback').innerText).eql('We are unable to validate your email with NASDAQ at this time. Please try again later.')
});

test.skip('US PrePaid Kit MILLENNIUM e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('millennium - MPG Operations LLC')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewMillennium()
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

test.skip('US PrePaid Kit SaintCatherines e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('stcatherines - Saint Catherines')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewStCatherines()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit DOW e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('dow - DOW Electronics')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewDOW()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit Rockpoint e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('rockpoint - Rockpoint Group, L.L.C.')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewRockpoint()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit NYU - No Activation, error validation', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('nyu - New York University')
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.PrepaidNewUser()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.PrepaidCredentials()
  await page.PersonalUSdata()
  await page.AddressUSdata()
  await page.Screening1()
  await page.Screening2()
  await page.ReviewNYU()
  await page.ActivateBarcode()
  await t.expect(Selector('#email-feedback').innerText).eql('We are unable to validate your identity with NYU based on the information you provided on this page. Please review the information you entered and correct any errors.')
});

test.skip('US PrePaid Kit RLT - Only Activation - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('rlt - The Road Less Traveled')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewRLT()
  await page.ActivateBarcode()
});

test.skip('US PrePaid Kit Tanglewood e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('tanglewood - Tanglewood')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewTanglewood()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit BCAP e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('bcap - BCAP')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewBCAP()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_envision e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_envision - Envision')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Envision()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_greenmtn e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_greenmtn - Green Mountain Camp')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Greenmtn()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_brownledge e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_brownledge - Brown Ledge Foundation')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Brownledge()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_socapa e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_socapa - SOCAPA Camp')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Socapa()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_sangamon e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_sangamon - Camp Sangamon')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Sangamon()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_farwell - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_farwell - Camp Farwell')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewGeneric('N')
  await page.ReviewCic_Farwell()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test.skip('US PrePaid Kit cic_vt_stateemployee e2e - Positive - Existing User', async t => {
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcode('cic_vt_stateemployee - VT State Employee Program')
  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginUsUser()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(ThePartnerBarcode)
  await page.Screening2()
  await page.ReviewCic_VT_Stateemployee()
  await page.ActivateBarcode()
  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
  await page.Approve_Release(ThePrePaidOrder,'Approve')
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

test('STI E2E BinxBoxI = C- G+ New User', async t => {
  await t
    .click(page.BinxBoxes)
    .click(page.BinxBoxI)
    .click(page.Checkout)
  await page.PersonalUSdata()
  await page.NextScreen()
  await page.AddressUSdata()
  await page.NextScreen()
  await page.PayUSdata()
  await page.UScredentials()
  await page.NextScreen()
  await page.ReviewGeneric('Y')
  await page.CreateOrder()
  await t.debug()
  const OrderNumber = await page.StoreOrderNum()
  await t
    .expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    .expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    .wait(10000)
  await page.ShipTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Box Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Box Shipped')
  const Barcode = await page.GetTheBarcode(OrderNumber)
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
  await page.ActivateTheOrder(Barcode)
  await page.ActivateBarcode()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
  await page.ReceiveTheOrder(OrderNumber)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
  await page.Mock_BinxBoxI_results(OrderNumber)
  await t.wait(10000)
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
  
});
