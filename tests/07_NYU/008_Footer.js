import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector } from 'testcafe';
import { fixture } from 'testcafe';
import page from '../page_model/POM_02_US_VerifyWebElements.js';
import Colors from 'colors';

fixture `FOOTER`
    .page `https://app.stage.mybinxhealth.com/`
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
test('APP US - Footer - Company Label', async t => {
  await t
    .expect(page.CompanyLabel.innerText).eql('Company')
});
test('APP US - Footer - Company - About Us', async t => {
  await t
    .expect(page.CompanyAboutUs.innerText).eql('About Us')
    .expect(page.CompanyAboutUs.exists).ok()
});
test('APP US - Footer - Company - Leadership', async t => {
  await t
    .expect(page.CompanyLeadership.innerText).eql('Leadership')
    .expect(page.CompanyLeadership.exists).ok()
});
test('APP US - Footer - Company - News', async t => {
  await t
    .expect(page.CompanyNews.innerText).eql('News')
    .expect(page.CompanyNews.exists).ok()
});
test('APP US - Footer - Company - Blog', async t => {
  await t
    .expect(page.CompanyBlog.innerText).eql('Blog')
    .expect(page.CompanyBlog.exists).ok()
});
test('APP US - Footer - Company - Careers', async t => {
  await t
    .expect(page.CompanyCareers.innerText).eql('Careers')
    .expect(page.CompanyCareers.exists).ok()
});
test('APP US - Footer - Company - Contact', async t => {
  await t
    .expect(page.CompanyContact.innerText).eql('Contact')
    .expect(page.CompanyContact.exists).ok()
});
test('APP US - Footer - At Home Label', async t => {
  await t
    .expect(page.AtHomeLabel.innerText).eql('At-Home')
});
test('APP US - Footer - At Home - How It Works', async t => {
  await t
    .expect(page.AtHomeHowItWorks.innerText).eql('How It Works')
    .expect(page.AtHomeHowItWorks.exists).ok()
});
test('APP US - Footer - At Home - Find My Test', async t => {
  await t
    .expect(page.AtHomeFindMyTest.innerText).eql('Find My Test')
    .expect(page.AtHomeFindMyTest.exists).ok()
});
test('APP US - Footer - At Home - Binx Boxes', async t => {
  await t
    .expect(page.AtHomeBinxBoxes.innerText).eql('binx Boxes')
    .expect(page.AtHomeBinxBoxes.exists).ok()
});
test('APP US - Footer - At Home - Resources', async t => {
  await t
    .expect(page.AtHomeResources.innerText).eql('Resources')
    .expect(page.AtHomeResources.exists).ok()
});
test('APP US - Footer - At Home - My Binx Account', async t => {
  await t
    .expect(page.AtHomeMyBinxAccount.innerText).eql('My binx Account')
    .expect(page.AtHomeMyBinxAccount.exists).ok()
});
test('APP US - Footer - binx io Label', async t => {
  await t
    .expect(page.BinxIOLabel.innerText).eql('binx io')
});
test('APP US - Footer - binx io - Point of Care', async t => {
  await t
    .expect(page.BinxIOpoint.innerText).eql('Point-of-Care')
    .expect(page.BinxIOpoint.exists).ok()
});
test('APP US - Footer - binx io - Reserve My Spot', async t => {
  await t
    .expect(page.BinxIOreserve.innerText).eql('Reserve My Spot')
    .expect(page.BinxIOreserve.exists).ok()
});
test('APP US - Footer - binx io - Clinician Solutions', async t => {
  await t
    .expect(page.BinxIOclinician.innerText).eql('Clinician Solutions')
    .expect(page.BinxIOclinician.exists).ok()
});
test('APP US - Footer - Resources Label', async t => {
  await t
    .expect(page.ResourcesLabel.innerText).eql('Resources')
});
test('APP US - Footer - Resources - STI Info', async t => {
  await t
    .expect(page.ResourcesSTIinfo.innerText).eql('STI info')
    .expect(page.ResourcesSTIinfo.exists).ok()
});
test('APP US - Footer - Resources - Insurance', async t => {
  await t
    .expect(page.ResourcesInsurance.innerText).eql('Insurance')
    .expect(page.ResourcesInsurance.exists).ok()
});
test('APP US - Footer - Resources - FAQ', async t => {
  await t
    .expect(page.ResourcesFAQ.innerText).eql('FAQ')
    .expect(page.ResourcesFAQ.exists).ok()
});
test('APP US - Footer - Resources - Blog', async t => {
  await t
    .expect(page.ResourcesBlog.innerText).eql('Blog')
    .expect(page.ResourcesBlog.exists).ok()
});
test('APP US - Footer - We Love To Chat', async t => {
  await t
    .expect(page.WeLoveToChatLabel.innerText).eql('We Love To Chat')
});
test('APP US - Footer - Call us', async t => {
  await t
    .expect(page.CallUs.innerText).eql('Call us at 844-MYBINX-1 (844-692-4691)')
});
test('APP US - Footer - Facebook', async t => {
  await t
    .expect(page.IconFB.exists).ok()
});
test('APP US - Footer - Twitter', async t => {
  await t
    .expect(page.IconTwitter.exists).ok()
});
test('APP US - Footer - Instagram', async t => {
  await t
    .expect(page.IconInstagram.exists).ok()
});
test('APP US - Footer - Copyright P1', async t => {
  await t
    .expect(page.CopyRp1.innerText).eql('Copyright © 2022 binx health, inc. All rights reserved. For healthy humans™ and powering convenient health™ are trademarks of binx health limited.')
});
test('APP US - Footer - Copyright P2', async t => {
  await t
    .expect(page.CopyRp2.innerText).eql('Our clinicians may be independent service providers who are collaborating with binx to offer their authorization, review, and consultation services through our website.')
});
test('APP US - Footer - Terms of Services', async t => {
  await t
    .expect(page.ToS.innerText).eql('Terms of Service')
    .expect(page.ToS.exists).ok()
});
test('APP US - Footer - Privacy Notice', async t => {
  await t
    .expect(page.Privacy.innerText).eql('Privacy Notice')
    .expect(page.Privacy.exists).ok()
});
test('APP US - Footer - Cookies', async t => {
  await t
    .expect(page.Cookies.innerText).eql('Cookies')
});
test('APP US - Footer - CLIA Image', async t => {
  await t
    .expect(page.CLIAimage.exists).ok()
});
test('APP US - Footer - HIPAA Image', async t => {
  await t
    .expect(page.HIPAAimage.exists).ok()
});
test('APP US - Footer - Lab Text', async t => {
  await t
    .expect(page.LabText.innerText).eql('* All laboratory services for at-home sample collection provided by binx partner laboratories are CLIA-certified and HIPAA compliant')
});
