import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import { app } from '../helpers/urls';
import Colors from 'colors';

fixture `HENRYSCHEIN HOME`
    .page `https://henryschein.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

    //.page `https://app.rabbitflower.noauth.stage.mybinxhealth.com`

test('HS - Navigation Menu - How It Works - Logout', async t => {
  await t.expect(page.HowItWorks.exists).ok()
});
test('HS - Navigation Menu - Find My Test - Logout', async t => {
  await t.expect(page.FindMyTest.exists).ok()
});
test('HS - Navigation Menu - Binx Boxes - Logout', async t => {
  await t.expect(page.BinxBoxes.exists).ok()
});
test('HS - Navigation Menu - Activate Box - Logout', async t => {
  await t.expect(page.ActivateBox.exists).ok()
});
test('HS - Navigation Menu - Upload - Logout', async t => {
  await t.expect(page.Upload.exists).ok()
});
test('HS - Navigation Menu - Rapid Test - Logout', async t => {
  await t.expect(page.RapidTest.exists).ok()
});
test('HS - Navigation Menu - Covid Vaccination - Logout', async t => {
  await t.expect(page.CovidVx.exists).ok()
});
test('HS - Navigation Menu - Login - Logout', async t => {
  await t.expect(page.Login.exists).ok()
});
test('HS - Navigation Menu - Cart Icon - Logout', async t => {
  await t.expect(page.Cart.exists).ok();
});