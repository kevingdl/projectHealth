import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { app, MyEnv } from '../helpers/urls';

fixture ('CV19 Home Page '+ MyEnv)
    .page(MyEnv+'covid')
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    })
    .beforeEach(async t => {
      await t
        .navigateTo(MyEnv+'covid')
    });

test('Passed\nAPP US - CV19 page', async t => {
  console.log(" APP US - CV19 page".gray)

  await t.expect(page.CV19H1.innerText).eql('Find out if you are currently infected with SARS-CoV-2')
    console.log(" \u2713".green + " Header".gray)

  await t.expect(page.CV19Text.innerText).eql('COVID-19 test with at-home sample collection')
    console.log(" \u2713".green + " Text".gray)

  await t.expect(page.CV19SeeKitButton.innerText).eql('See Kit')
    console.log(" \u2713".green + " See Kit Button".gray)

  await t.expect(page.CV19Image.exists).ok()
    console.log(" \u2713".green + " Image".gray)

  await t.expect(page.CV19Warning.innerText).eql('Attention!\n\nIf you feel like you are having a medical emergency, please call 9-1-1.\n\nIf you are experiencing severe trouble breathing, continuous pain or pressure in your chest, feeling confused or having difficulty waking up, blue-colored lips or face, or any other emergency signs or symptoms, please seek immediate medical care.')
    console.log(" \u2713".green + " Warning".gray)

  await t.expect(page.CV19HowItWorksH2.innerText).eql('How it works')
    console.log(" \u2713".green + " How It Works".gray)

  await t.expect(page.CV19Request.innerText).eql('Request Your COVID-19 Collection Kit\n\nTake our questionnaire to determine whether you are eligible to access testing. An independent licensed clinician will review, and if appropriate, approve your order.')
    console.log(" \u2713".green + " Request".gray)

  await t.expect(page.CV19Receive.innerText).eql('Receive Your Kit\n\nWe\'ll send everything you need to collect and return your nasal swab sample to your door. We ship overnight back to the lab.')
    console.log(" \u2713".green + " Receive".gray)

  await t.expect(page.CV19Get.innerText).eql('Get Results\n\nYour sample will be processed by CLIA-certified laboratories within 48 hours from receipt. Licensed healthcare providers will review your results and provide medically-guided recommendations as needed.')
    console.log(" \u2713".green + " Get".gray)

  await t.expect(page.CV19ThoughYOU.innerText).eql('Though YOU are providing the sample, binx is here for you!\nOur unique service has been designed to protect you, your data, our courier partners, and laboratory partner staff running the tests.\nYou can return your sample to a convenient drop-off location or our shipping provider can pick up from your home, meaning you can isolate or quarantine as may be appropriate.\nThe binx health At-home Nasal Swab COVID-19 Sample Collection Kit and our lab partners have received Emergency Use Authorization from the FDA. We only work with labs that are CLIA-certified.\nIf your result is positive for COVID-19 or there is a problem with your result, a licensed healthcare provider will contact you and schedule a telehealth consultation with a healthcare provider if needed. All patients have the option to speak to a clinician about their results.\nOur testing complies with all national and local laws regarding mandatory result reporting to public health agencies.')
    console.log(" \u2713".green + " Though YOU".gray)

  await t.expect(page.CV19ThoughYOUimage.exists).ok()
    console.log(" \u2713".green + " Though YOU Image".gray)

  await t.expect(page.CV19About.innerText).eql('About COVID-19\n\nCOVID-19 is caused by the SARS-CoV-2 virus. Infection with the virus can range from being asymptomatic to life-threatening respiratory illness. Infection has been detected globally and in all 50 states. Symptoms associated with COVID-19 include cough, shortness of breath or difficulty breathing, fever, chills, muscle pain, headache, sore throat or new loss of taste or smell.\n\nCOVID-19 can present with severe illness in individuals of any age and without any previous health problems, but the risk for severe illness from COVID-19 increases with age, with older adults at highest risk. Having underlying medical conditions may also increase one’s risk for severe illness from COVID-19.\n\nYou should consult with your healthcare provider before ordering an at-home collection kit if you have any concerning symptoms or if you have any of the risk factors for severe illness.\n\nCould I be at higher risk of severe illness?')
    console.log(" \u2713".green + " About".gray)

  await t.expect(page.CV19AboutDD.innerText).eql('Could I be at higher risk of severe illness?')
    console.log(" \u2713".green + " About Dropdown".gray)

  await t.click(page.CV19AboutDD)
    console.log(" \u2713".green + " About Click".gray)

  await t.expect(page.CV19AboutDDtext.innerText).eql('If you have any symptoms concerning for COVID-19 and any of the following conditions or risk factors, which may put you at increased risk of severe illness from COVID-19, you should consult with your healthcare provider before using this test:\nCancer\nChronic kidney disease\nCOPD (chronic obstructive pulmonary disease)\nImmunocompromised state (weakened immune system) from solid organ transplant or bone marrow transplant, immune deficiencies, HIV, use of corticosteroids, or use of other immune weakening medicines\nObesity (body mass index [BMI] of 30 or higher)\nSerious heart conditions, such as heart failure, coronary artery disease, or cardiomyopathies\nSickle cell disease\nType 2 diabetes mellitus\nAsthma (moderate-to-severe)\nCerebrovascular disease (affects blood vessels and blood supply to the brain)\nCystic fibrosis\nHypertension or high blood pressure\nNeurologic conditions, such as dementia\nLiver disease\nPregnancy\nPulmonary fibrosis (having damaged or scarred lung tissues)\nSmoking\nThalassemia (a type of blood disorder)\nType 1 diabetes mellitus')
    console.log(" \u2713".green + " About Answer".gray)

  await t.expect(page.CV19Test.innerText).eql('Our COVID-19 Test (At-home Collection)\n\nAfter a sample is collected with the binx at-home nasal swab COVID-19 sample collection kit it is sent to and tested by our partner reference laboratory. The test used by the laboratory determines if an individual is actively infected with COVID-19. The laboratory test uses PCR (polymerase chain reaction) to determine the presence of genetic material in your sample.\n\nbinx At-home Nasal Swab COVID-19 Sample Collection Kit\nTests for:\nCOVID-19 (Novel coronavirus)\nWho is this for?\nThe PCR test may be right if:\nYou have symptoms of COVID-19 (such as fever, cough, or shortness of breath)\nYou don’t have symptoms but may have been exposed to COVID-19\nYou don’t have symptoms but live or work in a place where people reside, meet, or gather in close proximity*\nYour public health department, contact investigator, or healthcare provider has identified you as someone who should get tested\n$99\nRequest Kit\n\n*Includes healthcare settings, homeless shelters, assisted living facilities, group homes, prisons, detention centers, schools, and workplaces')
    console.log(" \u2713".green + " Test".gray)

  await t.expect(page.CV19RequestKit.innerText).eql('Request Kit')
    console.log(" \u2713".green + " Request Kit".gray)

  await t.expect(page.CV19Star.innerText).eql('*Includes healthcare settings, homeless shelters, assisted living facilities, group homes, prisons, detention centers, schools, and workplaces')
    console.log(" \u2713".green + " Star".gray)

  await t.expect(page.CV19FAQ.innerText).eql('Frequently asked questions')
    console.log(" \u2713".green + " FAQ Header".gray)

  await t.click(page.CV19FAQ1)
    console.log(" \u2713".green + " FAQ Question 1 Click".gray)

  await t.expect(page.CV19FAQ1.textContent).eql('What is COVID-19?Coronavirus disease 2019, abbreviated as COVID-19, is an infectious disease caused by a novel coronavirus (SARS-CoV-2) not previously seen in humans. The virus responsible for the disease belongs within the same category of viruses (coronaviruses) that cause other mild upper-respiratory tract illnesses, like the common cold. It was first identified in December 2019 in Wuhan, China. Now, it is in almost every country in the world.')
    console.log(" \u2713".green + " FAQ Question 1 & Answer".gray)

  await t.click(page.CV19FAQ2)
    console.log(" \u2713".green + " FAQ Question 2 Click".gray)

  await t.expect(page.CV19FAQ2.textContent).eql('How can I get COVID-19 / How does the virus spread?COVID-19 is extremely contagious and spreads mainly through respiratory droplets from infected people. When an infected person coughs, sneezes, or just talks, these droplets are spread through the surrounding air and can land on others or be inhaled by others. The closer and longer you are interacting with an infected person, the more likely it is that you will become infected. Infectious droplets can also land on surfaces touched by other people who then can contract the virus by then touching their eyes, nose, or mouth.  There is no evidence that COVID-19 is spread by ticks or mosquitoes, and the risk of transmission to and from animals is low. Similarly, there is no evidence that you can contract the virus from drinking water and little risk in contracting the virus from eating food or handling its packaging.')
    console.log(" \u2713".green + " FAQ Question 2 & Answer".gray)

  await t.click(page.CV19FAQ3)
    console.log(" \u2713".green + " FAQ Question 3 Click".gray)

  await t.expect(page.CV19FAQ3.textContent).eql('What are the signs and symptoms of COVID-19?Many have only mild symptoms, and some have no symptoms at all. About 80% of people with COVID-19 are able to recover without hospital care. When symptoms do occur, they can appear 2-14 days after being exposed to the virus and may include:Fever or chillsCoughShortness of breath or difficulty breathingFatigueMuscle or body achesHeadacheNew loss of taste or smellSore throatCongestion or runny noseNausea or vomitingDiarrheaIn some cases, symptoms become severe and a person may require intensive care. If you notice any of the following signs or symptoms, seek emergency care immediately:Difficulty breathingConfusionInability to stay awakeBluish lips or facePersistent chest pressure or painThis list does not cover all possible symptoms. Please discuss any other symptoms you may have with your healthcare provider. If you call 9-1-1 for emergency assistance, notify the operator that you are seeking care for someone who has or may have COVID-19. If you decide to go to an urgent care facility, call ahead to notify them that you are arriving with someone who has or may have COVID-19.')
    console.log(" \u2713".green + " FAQ Question 3 & Answer".gray)

  await t.click(page.CV19FAQ4)
    console.log(" \u2713".green + " FAQ Question 4 Click".gray)

  await t.expect(page.CV19FAQ4.textContent).eql('What types of tests are there for COVID-19?There are two\u00a0 main categories of COVID-19 tests: viral and antibody testing. The viral test, often called a PCR (polymerase chain reaction) test, detects the presence of the virus that causes COVID-19, and determines if you have an active infection. The antibody test detects the proteins that fight off infection and may detect if you have had a previous COVID-19 infection. These tests should not be used to detect a current infection as antibodies may only appear about 1-3 weeks after infection.')
    console.log(" \u2713".green + " FAQ Question 4 & Answer".gray)

  await t.click(page.CV19FAQ5)
    console.log(" \u2713".green + " FAQ Question 5 Click".gray)

  await t.expect(page.CV19FAQ5.textContent).eql('What do my results mean?A positive viral test result means that it is likely you are currently infected with COVID-19. A negative viral test result means that it is unlikely you were infected at the time of sample collection. However, sometimes there is not enough virus present early in an infection to detect and you may still be infectious or become sick later on. It is also possible for you to be exposed and become infected with the virus after your test. As with any medical test, inaccurate results (i.e., false positives or negatives) are possible. For this reason, it is important that you continue taking preventative measures such as wearing a mask and social distancing.A positive antibody test result means you may have antibodies from an infection with the virus that causes COVID-19. However, there is a chance that a positive result means you have antibodies from an infection with a different virus from the same family of viruses (called coronaviruses). Having antibodies to the virus that causes COVID-19 may provide protection from getting infected with the virus again. But even if it does, it is unknown how much protection the antibodies provide or how long this protection lasts. A negative antibody test means you may not have ever had COVID-19 or you may have a current infection. It typically takes 1–3 weeks after infection for your body to make antibodies, so if you are early on in your infection the antibody test may be negative.  ')
    console.log(" \u2713".green + " FAQ Question 5 & Answer".gray)

  await t.click(page.CV19FAQ6)
    console.log(" \u2713".green + " FAQ Question 6 Click".gray) 

  await t.expect(page.CV19FAQ6.textContent).eql('How does a viral COVID-19 test work?Viral testing works by collecting material from specific sites and testing it for the presence of the virus. This testing can be performed with multiple different sample types including, nasopharyngeal, nasal and throat swabs, as well as saliva. Sample collection is quick, easy and painless in most cases. Samples can be self-collected or clinician-collected depending on the particular test. ')
    console.log(" \u2713".green + " FAQ Question 6 & Answer".gray)

  await t.click(page.CV19FAQ7)
    console.log(" \u2713".green + " FAQ Question 7 Click".gray)

  await t.expect(page.CV19FAQ7.textContent).eql('Where can I get more information?Centers for Disease Control and Prevention: Coronavirus (COVID-19)World Health Organization: Q&A on coronaviruses (COVID-19)binx health FAQs')
    console.log(" \u2713".green + " FAQ Question 7 & Answer".gray)

  await t.expect(page.CV19FAQ7Link1.exists).ok()
    console.log(" \u2713".green + " FAQ Question 7 Link 1".gray)

  await t.expect(page.CV19FAQ7Link2.exists).ok()
    console.log(" \u2713".green + " FAQ Question 7 Link 2".gray)

  await t.expect(page.CV19FAQ7Link3.exists).ok()
    console.log(" \u2713".green + " FAQ Question 1 Link 3".gray)
});
