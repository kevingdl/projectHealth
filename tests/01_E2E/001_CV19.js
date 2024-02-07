import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { readFile, writeFile } from 'fs'
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';
import Colors from 'colors';
import { waitForDebugger } from 'inspector';
import { app, MyEnv } from '../helpers/urls';

fixture ('E2E - CV19 '+ MyEnv)
    .page(MyEnv)
    //.page `https://app.stage.mybinxhealth.com/?partner=hccom`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('Passed\nNew User - CV19 Order Placed (+)', async t => {
  console.log(" New User - CV19 Order Placed (+)".gray)

  await page.CV19product()
    console.log(" \u2713".green + " Select CV19 product".gray)
  await page.Screening1()
    console.log(" \u2713".green + " Answer Screening".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Checkout".gray)
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
  await page.ReviewGeneric('N')
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
  await page.Screening2()
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
  await page.MockCV19results(OrderNumber)
    console.log(" \u2713".green + " Negative Result".gray)
  await page.Approve_Release(OrderNumber,'Release') 
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray + "\n")
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available".gray + "\n")
 
  
    
});

test('Passed\nExisting User - CV19 Order Placed (-)', async t => {
  console.log(" Existing User - CV19 Order Placed (-)".gray)
  await page.MobileMenu()
  await page.LoginUser()
    console.log(" \u2713".green + " Login".gray)
  await page.GoToApp()
  await page.CV19product()
    console.log(" \u2713".green + " Select CV19 product".gray)
  await page.Screening1()
    console.log(" \u2713".green + " Answer Screening".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Personal Tab".gray)
  await t.wait(3000)
  await t.click(page.rbAgree)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Address Tab".gray)  
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Payment Tab".gray)
  await page.PayUSdata()
    console.log(" \u2713".green + " Fill Payment".gray)
  await page.NextScreen()
    console.log(" \u2713".green + " Continue to Review Tab".gray)
  await page.ReviewGeneric('N')
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
  await page.Screening2()
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
  await page.MockCV19results(OrderNumber)
    console.log(" \u2713".green + " Positive Result".gray)
  await page.Approve_Release(OrderNumber,'Release')  
    console.log(" \u2713".green + " Release Result".gray)

  await page.GoToApp()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Dashboard".gray)
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Results Ready')
    console.log(" \u2713".green + " Order Results Ready: My Account > Order".gray)
  await page.VerifyResultPage(OrderNumber)
    console.log(" \u2713".green + " Results Page available".gray + "\n")
  
});
