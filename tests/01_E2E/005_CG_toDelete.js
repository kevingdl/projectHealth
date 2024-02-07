import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';

fixture `E2E - STI Chlamydia and Gonorrhea`
    .page `https://app.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('New User C+ G-', async t => {
    await t
      .click(page.BinxBoxes)
      .click(page.BinxBoxI)
      .click(page.Checkout)
    await page.PersonalUSdata()
    await page.NextScreen()
    await page.AddressUSdata()
    await page.NextScreen()
    await page.PayUSdata()
    await page.User_credentials('cg')
    await page.NextScreen()
    await page.ReviewGeneric('Y')
    await page.CreateOrder()
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
    