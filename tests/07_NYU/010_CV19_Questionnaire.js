import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `CV19 Questionnaire Screen`
    .page `https://app.stage.mybinxhealth.com/covid`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
        .navigateTo('https://app.stage.mybinxhealth.com/covid')
        .click(page.CV19RequestKit)
    });

test('PASSED\nAPP US - CV19 - Quesionnaire', async t => {
  console.log(" APP US - CV19 - Quesionnaire".gray)
  
  await t.expect(page.CV19QuestionnaireH1.innerText).eql('COVID-19 At-Home Test Questionnaire')
    console.log(" \u2713".green + " Questionnaire Header".gray)

  await t.expect(page.CV19QuestionnaireQ1.innerText).eql('Choose the scenario(s) that best describes you today*')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1".gray)

  await t.expect(page.CV19QuestionnaireQ1Text.innerText).eql('Select all that apply')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Text".gray)

  await t.expect(page.CV19QuestionnaireQ1A1.innerText).eql('I have symptoms of COVID-19 (fever, cough, shortness of breath, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 1".gray)

  await t.expect(page.CV19QuestionnaireQ1A2.innerText).eql('I tested positive for COVID-19 within the past 10 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 2".gray)

  await t.expect(page.CV19QuestionnaireQ1A3.innerText).eql('I have been exposed to someone diagnosed with or presumed to have had COVID-19 or was sick with COVID-19 symptoms within the past 14 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 3".gray)

  await t.expect(page.CV19QuestionnaireQ1A4.innerText).eql('I have been asked to get tested by my school, my employer, a health department, contact investigator, or healthcare provider')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 4".gray)

  await t.expect(page.CV19QuestionnaireQ1A5.innerText).eql('I live, work, or attend events in a group setting')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 5".gray)

  await t.expect(page.CV19QuestionnaireQ1A6.innerText).eql('I need a test for an upcoming domestic or international travel')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 6".gray)

  await t.expect(page.CV19QuestionnaireQ1A7.innerText).eql('I completed a trip in the past 5 days')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Answer 7".gray)

  await t.expect(page.CV19QuestionnaireQ2.innerText).eql('Do any of the following statements apply to you?*')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2".gray)

  await t.expect(page.CV19QuestionnaireQ2Text.innerText).eql('Select all that apply')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Text".gray)

  await t.expect(page.CV19QuestionnaireQ2A1.innerText).eql('I am 65 years of age or older')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 1".gray)

  await t.expect(page.CV19QuestionnaireQ2A2.innerText).eql('I have been told by my doctor that I am very overweight or obese')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 2".gray)

  await t.expect(page.CV19QuestionnaireQ2A3.innerText).eql('I have a chronic condition (e.g. diabetes, high blood pressure, kidney disease or on dialysis, liver disease, lung disease or asthma, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 3".gray)

  await t.expect(page.CV19QuestionnaireQ2A4.innerText).eql('I have a heart condition (e.g. previous heart attacks, heart failure, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 4".gray)

  await t.expect(page.CV19QuestionnaireQ2A5.innerText).eql('I have a neurologic condition that affects my ability to cough (e.g., had a stroke)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 5".gray)

  await t.expect(page.CV19QuestionnaireQ2A6.innerText).eql('I am pregnant')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 6".gray)

  await t.expect(page.CV19QuestionnaireQ2A7.innerText).eql('I regularly use tobacco or nicotine products (e.g. cigarettes, e-cigarettes, vapes, hookah, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 7".gray)

  await t.expect(page.CV19QuestionnaireQ2A8.innerText).eql('I have a condition that weakens my immune system or makes it harder to fight infections (e.g. AIDS, cancer, lupus, rheumatoid arthritis, solid organ or bone marrow transplant, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 8".gray)

  await t.expect(page.CV19QuestionnaireQ2A9.innerText).eql('I am taking medication that weakens my immune system (e.g. steroids, chemotherapy, immunologics, etc.)')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 9".gray)

  await t.expect(page.CV19QuestionnaireQ2A10.innerText).eql('None of these apply to me')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Answer 10".gray)

  await t.expect(page.GenericContinueButton.innerText).eql('Continue')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Continue".gray)

  await t.click(page.GenericContinueButton)
    console.log(" \u2713".green + " CV19 - Quesionnaire - Continue Click".gray)

  await t.expect(page.CV19QuestionnaireTopError.innerText).eql('Error\nPlease correct the validation error(s) below.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Error".gray)

  await t.expect(page.CV19QuestionnaireQ1Error.innerText).eql('A valid response is required.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 1 - Error".gray)

  await t.expect(page.CV19QuestionnaireQ2Error.innerText).eql('A valid response is required.')
    console.log(" \u2713".green + " CV19 - Quesionnaire - Question 2 - Error".gray)
});