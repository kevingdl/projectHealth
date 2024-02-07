import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import page from './page-model';
import { app, admin, portal } from './urls';
import { genericPwd, newUser_US, newUser_prepaid } from './newUser';

fixture `Stage Env`
    .page `https://app.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
    
test('debug test', async t => {
      
        //const isTrue = Selector('#navMenuButton')
        //const isMobTrue = await isTrue.visible

        //console.log(isMobTrue)
        //await t.debug();
      
        await t
            .navigateTo('https://admin.stage.mybinxhealth.com')  
            .typeText(Selector('#username'),'devmail+kevin-admin1@ci.mybinxhealth.com')
            .typeText(Selector('#password'),'t9xX50U')
            .click(Selector('#submit'))
            .navigateTo('https://admin.stage.mybinxhealth.com/kit/index?queryMap.barcode=BXSEKP&sort=barcode&order=asc')
            .click(Selector('#list-kit > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'))
            .click(Selector('.edit'))
            .click(Selector('.select2-selection__arrow'))
            .click(Selector('#select2-partner-results').find('li').withText('stanford - stanford'))
            .click(Selector('#lab'))
            .click(Selector('#lab').find('option').withText('P23'))
            .click(Selector('#usaState'))
            .click(Selector('#usaState').find('option').withText('No USA State'))
            


            .debug()


        .navigateTo('https://portal.stage.mybinxhealth.com/')
        .typeText(Selector('#email'),'devmail+kevin-cln01@ci.mybinxhealth.com')
        .typeText(Selector('#password'),'.t3st..t3st')
        .click(Selector('#loginButton'))
        .click(Selector('#headerDashboardLink').withText('Clinician Orders'))
        .debug()
        
      });      
            

      /*
      .navigateTo('https://app.stage.mybinxhealth.com/login')
        .typeText(Selector('#email'),'devmail+kevin+US+929211372@ci.mybinxhealth.com')
        .typeText(Selector('#password'),'.t3st..t3st')
        .click(Selector('#loginButton'))
        .click(Selector('#menuLink'))
        .click(Selector('#dashboardNavLink'))
        .debug()
        


        .navigateTo('https://app.stage.mybinxhealth.com/dashboard')
/*
  const findOrder = Selector('.flex.items-center')
                    .withAttribute('data-order','99PONN')
                    .parent()
                    .find('.font-bold.text-binx-purple-500')
  
                    const findOrderP = findOrder.parent();
  const findOrderPS = Selector(findOrderP)
                    .child('.font-bold.text-binx-purple-500');

  console.log(await findOrder.innerText);
await t.debug();

      .navigateTo('https://app.stage.mybinxhealth.com/orders')
  
  const OrderStatusID = '#order-99PONN > div > div > div.items-center'
  const OrderStatus = Selector(OrderStatusID)
  console.log(await OrderStatus.innerText);

  
  await t.expect(OrderStatus.innerText).eql('Placed');
  
  await t.takeScreenshot({
    path: 'activation.png',
    fullPage: true
  });
  */

/*
test.skip('US CV19 - PrePaid Kit', async t => {
    await t  
        //CREATE THE BARCODE
        .navigateTo(admin())
        .typeText(page.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
        .typeText(page.password,'t9xX50U')
        .click(page.Submit)
        .navigateTo(admin()+'kit/index?queryMap.barcode=BXSEKP&queryMap.dateCreated=&queryMap.lab=&queryMap.partnerCode=&sort=barcode&order=asc')
        .click(Selector('#list-kit > table > tbody > tr:nth-child(1) > td:nth-child(1) > a'))
        .click(Selector('.edit'))
        .click(Selector('#partner'))
        .click(Selector('#partner').find('option').withText('No Partner'))
        .click(Selector('#lab'))
        .click(Selector('#lab').find('option').withText('P23'))
        .click(Selector('#usaState'))
        .click(Selector('#usaState').find('option').withText('No USA State'));
        
        const NumProducts = Selector('#products');
        const myCounter = await NumProducts.count; //<-- count is a test cafe property
        //console.log(myCounter);
        //console.log(isNaN(myCounter));
        
        for (let i=0; i<myCounter; i++)
        {
           let isProdChecked = Selector('#products').nth(i);
           if(await isProdChecked.checked){
             await t.click(Selector('#products').nth(i));
           }
           //console.log(await isProdChecked.checked); //<--checked is a testcafe property
        }        

        //GET THE BARCODE
        const BarcodeElem = Selector('#barcode');
        const Barcode = await BarcodeElem.value;
        //console.log(Barcode);
        
    await t
        .click(Selector('#products').nth(7))
        .click(Selector('#update'))
        
        //ACTIVATE THE ORDER
        .navigateTo(app())
        .click(page.ActivateBox)
        .click(page.NoBinxUser)
        .typeText(page.BarcodeInput,Barcode)
        
        .typeText(page.email,newUser_prepaid())
        .typeText(page.password,genericPwd())
        
        //PERSONAL
        .typeText(page.FirstName,'Frank O’Caña')
        .typeText(page.LastName,'US User _-.,;:*^¨!"·$·%$%/&()[]`+')
        .typeText(page.DOB,'04251997')
        .click(page.rbF)
        
        //ADDRESS
        .typeText(page.Address,'473 Pleasant St')
        .typeText(page.City,'Holyoke')
        .click(page.StateList)
        .click(page.StateList.find('option').withText('Massachusetts'))
        .typeText(page.Zip,'01040')
        .typeText(page.Mobile,'4139999888')
        
        //SCREENING
        .click(page.Q1A1)
        .click(page.Q2A1)
        .click(page.Q3A1)
        .click(page.Q4A1)
        .click(page.Q5A1)
        .click(page.Q6A1)
        .click(page.Q7A1)
        
        //REVIEW
        .expect(page.ViewAll.getAttribute('href')).eql('/consent/us-covid')
        .expect(page.ToS.getAttribute('href')).eql('/tos')
        .expect(page.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
        .expect(page.ResearchConsent.exists).ok()
        .click(page.Consent)
        .click(page.ActivateButton)

        //STORE ORDER NUMBER
        .navigateTo(admin()+'searchOrder/orders?queryMap.barcode='+Barcode);
        const OrderNumElement = Selector('#list-orderData > table > tbody > tr > td:nth-child(1) > a');
        const OrderNum = await OrderNumElement().innerText;
  
    await t    
        //APPROVE THER ORDER
        .navigateTo(portal())
        .typeText(page.email,'devmail+kevin-cln01@ci.mybinxhealth.com')
        .typeText(page.password,'.t3st..t3st')
        .click(page.LoginButton)
        .typeText(page.OrderNumFilter,OrderNum)
        .wait(2000)
        .click(page.SelectOrder)
        .click(page.Approve)
        .click(page.Confirm)    
    
        //RECEIVE THE ORDER
        .navigateTo(admin()+'orderStep/kitReceived/'+OrderNum);

        //MOCK THE RESULT
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@admin.stage.mybinxhealth.com/orderStep/stageCustomPortalResults',
          'headers': {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "orderId": OrderNum,
          "results": [
            {
            "disorder": "CV19",
            "location": "PRIMARY",
            "result": "POSITIVE"
            }
          ]
        })
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
    await t
        //RELEASE RESULTS
        .navigateTo(portal())
        .typeText(page.email,'devmail+kevin-cln01@ci.mybinxhealth.com')
        .typeText(page.password,'.t3st..t3st')
        .click(page.LoginButton)
        .typeText(page.OrderNumFilter,OrderNum)
        .wait(2000)
        .click(page.SelectOrder)
        .click(page.Release)
        .click(page.Confirm)    
    
});


test.skip('US CV19 - E2E', async t => {
  await t  
      .click(page.cv19Banner)
      .click(page.SeeKit)
      .click(page.RequestKit)
      
      //SCREENING
      .click(page.Q1A1)
      .click(page.Q1A2)
      .click(page.Q1A3)
      .click(page.Q1A4)
      .click(page.Q1A5)
      .click(page.Q1A6)
      .click(page.Q1A7)
      .click(page.Q2A1)
      .click(page.Q2A2)
      .click(page.Q2A3)
      .click(page.Q2A4)
      .click(page.Q2A5)
      .click(page.Q2A6)
      .click(page.Q2A7)
      .click(page.Q2A8)
      .click(page.Q2A9)
      .click(page.Q2A10)
      .click(page.ContinueButton)
      
      //PERSONAL
      .typeText(page.FirstName,'Frank O’Caña')
      .typeText(page.LastName,'US User _-.,;:*^¨!"·$·%$%/&()[]`+')
      .typeText(page.DOB,'04251997')
      .click(page.rbF)
      .click(page.StateList)
      .click(page.StateList.find('option').withText('Massachusetts'))
      .click(page.ContinueButton)
      
      //ADDRESS
      .typeText(page.Address,'473 Pleasant St')
      .typeText(page.City,'Holyoke')
      .typeText(page.Zip,'01040')
      .typeText(page.Mobile,'4139999888')
      .click(page.ContinueButton)
      
      //PAYMENT
      .switchToIframe(page.CardFrame)
      .typeText(page.CardNumber,'4242424242424242')
      .typeText(page.CardExp,'12/29')
      .typeText(page.CVC,'123')
      .typeText(page.CardZip,'01040')
      .switchToMainWindow()
      .typeText(page.email,newUser_US())
      .typeText(page.password,genericPwd())
      .click(page.ContinueButton)
      
      //REVIEW
      .expect(page.ViewAll.getAttribute('href')).eql('/consent/us-covid')
      .expect(page.ToS.getAttribute('href')).eql('/tos')
      .expect(page.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
      .expect(page.ResearchConsent.exists).ok()
      .click(page.Consent)
      .click(page.PlaceOrder);
      
      //STORE ORDER NUMBER
      const OrderNumElement = Selector('#orderId');
      const OrderNum = await OrderNumElement().textContent;
     
      //APPROVE THE ORDER
      await t
      .navigateTo(portal())
      .typeText(page.email,'devmail+kevin-cln01@ci.mybinxhealth.com')
      .typeText(page.password,'.t3st..t3st')
      .click(page.LoginButton)
      .typeText(page.OrderNumFilter,OrderNum)
      .wait(2000)
      .click(page.SelectOrder)
      .click(page.Approve)
      .click(page.Confirm)

      //SHIP THE ORDER
      .navigateTo(admin()+'orderStep/kitShipped/'+OrderNum)
    
      //GET THE BARCODE
      .navigateTo(admin()+'order/show/'+OrderNum)
      .typeText(page.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
      .typeText(page.password,'t9xX50U')
      .click(page.Submit);
      
      const OrderTable = Selector('#show-orderData > div > table:nth-child(4) > tbody > tr:nth-child(12) > td');
      const Barcode = await OrderTable().innerText;

      //ACTIVATE THE ORDER
      await t
      .navigateTo(app())
      .click(page.ActivateBox)
      .typeText(page.BarcodeInput,Barcode)
      .click(page.Q3A1)
      .click(page.Q4A1)
      .click(page.Q5A1)
      .click(page.Q6A1)
      .click(page.Q7A1)
      .click(page.ActivateButton)
      
      //RECEIVE THE ORDER
      .navigateTo(admin()+'orderStep/kitReceived/'+OrderNum);

      //ADD MOCK RESULTS AND RELEASE RESULTS ONCE THEY ARE AVAILABLE IN STAGE WITH ACCESS GENETICS LAB
});
*/