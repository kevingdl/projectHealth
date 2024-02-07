import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { readFile, writeFile } from 'fs'
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';
import Colors from 'colors';


fixture `E2E - ODX`
    .page `https://app.stage.mybinxhealth.com/binx-boxes/diabetes-monitoring`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('Passed\nNew User - Diabetes', async t => {
  console.log(" New User - Diabetes".gray)
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Diabetes selected > Pay with Cash > Checkout".gray)
  await page.PersonalUSdata()
    console.log(" \u2713".green + " Fill Personal Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.AddressUSdata()
    console.log(" \u2713".green + " Fill Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.User_credentials()
    console.log(" \u2713".green + " Fill Email & Password".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  /*
    await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  await page.Approve_Release(OrderNumber,'Approve')
    console.log(" \u2713".green + " Order Approved".gray)
  */
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await t.click(Selector('input').withAttribute('value','yes'))
    console.log(" \u2713".green + " Answer the rest of the screening".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockDiabetesResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release') 
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order" + "\n".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});

test('Passed\nExisting User - Female Hormone Monitoring', async t => {
  console.log(" Existing User - Female Hormone Monitoring".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/female-hormone-monitoring')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Female Hormone selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)  
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockFemaleResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});

test('Passed\nExisting User - Liver Health', async t => {
  console.log(" Existing User - Liver Health".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/liver-health')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Liver Health selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockLiverResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});

test('Passed\nExisting User - Thyroid Health', async t => {
  console.log(" Existing User - Thyroid Health".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/thyroid-health')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Thyroid Health selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockThyroidResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});
test('Passed\nExisting User - Kidney Health', async t => {
  console.log(" Existing User - Kidney Health".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/kidney-health')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Kidney selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockKidneyResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});
test('Passed\nExisting User - Cholesterol and Lipids', async t => {
  console.log(" Existing User - Cholesterol and Lipids".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/cholesterol-and-lipids')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Cholesterol and Lipids selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockLipidsResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});
test('Passed\nExisting User - Male Wellness', async t => {
  console.log(" Existing User - Male Wellness".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await t.navigateTo('https://app.stage.mybinxhealth.com/binx-boxes/male-wellness')
  await page.GetPayCheckout()
    console.log(" \u2713".green + " Male Wellness selected > Pay with Cash > Checkout".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('Y')
    console.log(" \u2713".green + " Testing & Research Consent".gray)
  await page.CreateOrder()
    console.log(" \u2713".green + " Order Placed".gray)
  const OrderNumber = await page.StoreOrderNum()
    console.log(" \u2713".green + " Order Number Stored".gray)
/*  
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
    console.log(" \u2713".green + " Order Placed: My Account > Orders".gray)
  //await page.Approve_Release(OrderNumber,'Approve".gray)  
*/
  await page.ShipTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Shipped".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
    console.log(" \u2713".green + " Order Shipped: My Account > Orders".gray)
  const Barcode = await page.GetTheBarcode(OrderNumber)
    console.log(" \u2713".green + " Barcode created".gray)
  
  await page.GoToApp()
  await page.MobileMenu()
  await page.ActivateTheBox()
    console.log(" \u2713".green + " Activate the box".gray)
  await page.ActivateTheOrder(Barcode)
    console.log(" \u2713".green + " Type the Barcode".gray)
  await page.ActivateBarcode()
    console.log(" \u2713".green + " Barcode activated".gray)
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Activated')
    console.log(" \u2713".green + " Order Activated: My Account > Orders".gray)
  await page.ReceiveTheOrder(OrderNumber)
    console.log(" \u2713".green + " Order Received".gray)
  
  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Processing')
    console.log(" \u2713".green + " Order Processing: My Account > Orders".gray)
  await page.MockMaleResults(OrderNumber)
    console.log(" \u2713".green + " Mock Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available" + "\n".gray)
  
});