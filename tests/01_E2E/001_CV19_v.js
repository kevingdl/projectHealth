import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { readFile, writeFile } from 'fs'
import { Selector } from 'testcafe';
import page from '../page_model/POM_01_PlaceOrders';


fixture.disablePageReloads `E2E - CV19 - VALIDATION`
    .page `https://app.stage.mybinxhealth.com`
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });

test('Passed\nCV19 New User flow', async t => {
  console.log(" CV19 New User Flow".gray)

  await t.click(page.cv19Banner)
    console.log(" \u2713".green + "CV19 Banner".gray)
  await t.click(page.SeeKit)
    console.log('\u2713 PASSED | See Kit')
  await t.click(page.RequestKit)
    console.log('\u2713 PASSED | Request Kit')   
  await t.click(page.Q1A1)
    console.log('\u2713 PASSED | Answer Question 1')
  await t.click(page.Q2A1)
    console.log('\u2713 PASSED | Answer Question 2')
  await t.click(page.ContinueButton)
    console.log('\u2713 PASSED | Continue to Checkout')
  await page.PersonalUSdata()
    console.log('\u2713 PASSED | Fill Personal Tab')
  await t.click(page.ContinueButton)
    console.log('\u2713 PASSED | Continue to Address Tab')
  await page.AddressUSdata()
    console.log('\u2713 PASSED | Fill Address Tab')
  await t.click(page.ContinueButton)
    console.log('\u2713 PASSED | Continue to Payment Tab')
  await page.PayUSdata()
    console.log('\u2713 PASSED | Fill Payment Tab')
});
