import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';

fixture `E2E - Upload > Rapid Test`
    .page `https://app.stage.mybinxhealth.com/rapid-test`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('New User - I have NOT uploaded a Rapid Test before', async t => {
    await t.click(page.UploadRTNo)
    await page.User_credentials()
    await page.PersonalUSdata()
    await t.debug()
    await page.AddressUSdata()
    
   
    
  });
    