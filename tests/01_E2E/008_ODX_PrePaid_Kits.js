import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';
import Colors from 'colors';

fixture `E2E - ODX PrePaid Kit`
    .page(MyEnv)
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
 
test('New User - Diabetes\nPassed\n\n', async t => {
  console.log("New User - Diabetes\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('DIABETES')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.PrepaidNewUser()
    console.log(" \u2713".green + " I have NOT activated or ordered a binx box before".gray)

  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
  
  await page.PrePaid_credentials()
    console.log(" \u2713".green + " Fill Email & Password".gray)

  await page.PersonalUSdata()
    console.log(" \u2713".green + " Fill Personal Information".gray)

  await page.AddressUSdata()
    console.log(" \u2713".green + " Fill Address".gray)

  await t.click(Selector('input').withAttribute('value','yes'))
    console.log(" \u2713".green + " Answer Question".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockDiabetesResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
    
});

test('Existing User - Female Hormone Monitoring\nPassed\n\n', async t => {
  
  console.log("Existing User - Female Hormone Monitoring\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('FEMALEHORMONE')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockFemaleResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + "  Results Page available".gray)
});

test('Existing User - Liver Health\nPassed\n\n', async t => {
  
  console.log("Existing User - Liver Health\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('LIVER')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockLiverResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
});

test('Existing User - Thyroid Health\nPassed\n\n', async t => {
  
  console.log("Existing User - Thyroid Health\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('THYROID')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockThyroidResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
});

test('Existing User - Kidney Health\nPassed\n\n', async t => {
  
  console.log("Existing User - Kidney Health\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('KIDNEY')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockKidneyResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
});

test('Existing User - Cholesterol and Lipids\nPassed\n\n', async t => {
  
  console.log("Existing User - Cholesterol and Lipids\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('LIPIDS')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
  
  await t.click(Selector('input').withAttribute('value','yes'))
    console.log(" \u2713".green + " Answer Question".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockLipidsResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
});

test('Existing User - Male Wellness\nPassed\n\n', async t => {
  
  console.log("Existing User - Male Wellness\nExecuting...".gray)
  await page.GoToAdmin()
  const ThePartnerBarcode = await page.CreateBarcodeODX('MALEWELLNESS')
    console.log(" \u2713".green + " Update Existing Barcode".gray)

  await page.GoToApp()
  await page.MobileMenu()
  await page.LoginPrePaid()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate Box".gray)
  
  await page.ActivateTheOrder(ThePartnerBarcode)
    console.log(" \u2713".green + " Barcode Accepted".gray)
    
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)

  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode Activated".gray)

  const ThePrePaidOrder = await page.StorePrePaidOrderNum(ThePartnerBarcode)
    console.log(" \u2713".green + " Order Number Obtained".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  
  await page.ReceiveTheOrder(ThePrePaidOrder)
    console.log(" \u2713".green + " Lab received the order".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)

  await page.MockMaleResults(ThePrePaidOrder)
    console.log(" \u2713".green + " Mock the results".gray)

  await page.Approve_Release(ThePrePaidOrder,'Release')  
     console.log(" \u2713".green + " Release the results".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(ThePrePaidOrder)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)

  await t.expect(await page.CheckOrderStatus(ThePrePaidOrder)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Orders".gray)

  await page.VerifyResultPage(ThePrePaidOrder)
    console.log(" \u2713".green + " Results Page available".gray)
});
