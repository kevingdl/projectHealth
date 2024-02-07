import { Selector } from 'testcafe';
import page from './page-model';
import { app, admin, portal } from './urls';

var currentdate = new Date(); 
var datetime = (currentdate.getMonth()+1) + 
                "" + currentdate.getDate() +
                "" + currentdate.getFullYear().toString().substring(2) +
                "" + currentdate.getHours() +
                "" + currentdate.getMinutes();

fixture `Stage Env`
    //.page `https://app.stage.mybinxhealth.com`
    .page `https://app.stage.mybinxhealth.com/login`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('US CV19', async t => {
    await t
/*    
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
        .typeText(page.email,'devmail+kevin+US+'+datetime+'@ci.mybinxhealth.com')
        .typeText(page.password,'.t3st..t3st')
        .click(page.ContinueButton)
        //REVIEW
        .expect(page.ViewAll.getAttribute('href')).eql('/consent/us-covid')
        .expect(page.ToS.getAttribute('href')).eql('/tos')
        .expect(page.PrivacyPolicy.getAttribute('href')).eql('https://staging.binx.health/privacy-policy')
        .expect(page.ResearchConsent.exists).ok()
        .click(page.Consent)
        .click(page.PlaceOrder)
*/        
        .typeText(page.email,'devmail+kevin+US+92120211651@ci.mybinxhealth.com')
        .typeText(page.password,'.t3st..t3st')
        .click(page.LoginButton)
        .navigateTo('https://app.stage.mybinxhealth.com/checkout/confirmation/3PJQVK')
        .expect(page.OrderRef.textContent).eql('3PJQVK');
    
        const OrderNumElement = Selector('#orderId');
        const OrderNum = await OrderNumElement().textContent;
        //console.log(OrderNum);
        
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

        //.navigateTo(admin()+'orderStep/kitShipped/'+OrderNum)
        //.navigateTo(admin())

        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://atlas:1967@admin.stage.mybinxhealth.com/orderStep/kitShipped/'+OrderNum,
          'headers': {}
          };  
          request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
          });
          
      await t
        .navigateTo(admin()+'order/show/'+OrderNum)
        .typeText(page.UserName,'devmail+kevin-admin1@ci.mybinxhealth.com')
        .typeText(page.password,'t9xX50U')
        .click(page.Submit);
        
        const OrderTable = Selector('#show-orderData > div > table:nth-child(4) > tbody > tr:nth-child(12) > td');
        const Barcode = await OrderTable().innerText;
        console.log(Barcode);
        

        await t
        .debug()
        .navigateTo(app())
        .click(page.ActivateBox)
        .typeText(page.BarcodeInput,Barcode)
        .click(page.Q3A1)
        .click(page.Q4A1)
        .click(page.Q5A1)
        .click(page.Q6A1)
        .click(page.Q7A1)
        .click(page.ActivateButton)
        .navigateTo(admin()+'orderStep/kitReceived/'+OrderNum);



        //$.ajax({"url": "https://atlas:1967@admin.stage.mybinxhealth.com/orderStep/stageCustomPortalResults","method": "POST","timeout": 0,"headers": {"Content-Type": "application/json"},"data": JSON.stringify({"orderId":"OrderNum","results":[{"disorder":"CV19","location":"PRIMARY","result":"NEGATIVE"}]}),})
        



        //.debug();

});
