import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';

fixture `E2E - CV19 UK PCR`
    .page `https://uk.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('New User Positive Result', async t => {
  //await page.GoToUK()
  await page.UKpcr()
  await page.PersonalUKdata()
  await page.NextScreen()
  await page.AddressUKdata()
  await page.NextScreen()
  await page.PayUKdata()
  await page.UK_PCR_credentials()
  await page.NextScreen()
  await page.ReviewUKdata()
  await page.CreateOrder()
  const OrderNumber = await page.StoreOrderNum()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql('Placed')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Placed')
  await page.ShipTheOrder(OrderNumber)
  await page.GoToUK()
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
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
test('Existing User Positive Result', async t => {
  //await page.GoToUK()
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
  await t.expect(await page.CheckOrderDashboard(OrderNumber)).eql(' Shipped')
  await t.expect(await page.CheckOrderStatus(OrderNumber)).eql('Shipped')
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