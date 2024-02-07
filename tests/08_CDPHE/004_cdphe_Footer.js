import { ChildProcess } from 'child_process';
import { debug } from 'console';
import { Selector, fixture } from 'testcafe';
import page from '../page_model/POM_02_VerifyWebElements.js';
import Colors from 'colors';
import { cdpheEnv } from '../helpers/urls';

fixture ('FOOTER '+ cdpheEnv)
    .page(cdpheEnv)
    .disablePageReloads
    .disablePageCaching
    .httpAuth({
      username: 'atlas',
      password: '1967'
    });
test('CDPHE - Footer - At Home Label', async t => {
  await t
    .expect(page.AtHomeLabel.innerText).eql('At-Home')
});
test('CDPHE - Footer - At Home - My Binx Account', async t => {
  await t
    .expect(page.AtHomeMyBinxAccount.innerText).eql('My binx Account')
    .expect(page.AtHomeMyBinxAccount.exists).ok()
});
test('CDPHE - Footer - We Love To Chat', async t => {
  await t
    .expect(page.WeLoveToChatLabel.innerText).eql('We Love To Chat')
});
test('CDPHE - Footer - Call us', async t => {
  await t
    .expect(page.CallUs.innerText).eql('Call us at 844-MYBINX-1 (844-692-4691)')
});
test('CDPHE - Footer - Facebook', async t => {
  await t
    .expect(page.IconFB.exists).ok()
});
test('CDPHE - Footer - Twitter', async t => {
  await t
    .expect(page.IconTwitter.exists).ok()
});
test('CDPHE - Footer - Instagram', async t => {
  await t
    .expect(page.IconInstagram.exists).ok()
});
test('CDPHE - Footer - Copyright P1', async t => {
  await t
    .expect(page.CopyRp1.innerText).eql('Copyright © 2023 binx health, inc. All rights reserved. For healthy humans™ and powering convenient health™ are trademarks of binx health limited.')
});
test('CDPHE - Footer - Copyright P2', async t => {
  await t
    .expect(page.CopyRp2.innerText).eql('Our clinicians may be independent service providers who are collaborating with binx to offer their authorization, review, and consultation services through our website.')
});
test('CDPHE - Footer - Terms of Services', async t => {
  await t
    .expect(page.ToS.innerText).eql('Terms of Service')
    .expect(page.ToS.exists).ok()
});
test('CDPHE - Footer - Privacy Notice', async t => {
  await t
    .expect(page.Privacy.innerText).eql('Privacy Notice')
    .expect(page.Privacy.exists).ok()
});
test('CDPHE - Footer - Cookies', async t => {
  await t
    .expect(page.Cookies.innerText).eql('Cookies')
});
test('CDPHE - Footer - CLIA Image', async t => {
  await t
    .expect(page.CLIAimage.exists).ok()
});
test('CDPHE - Footer - HIPAA Image', async t => {
  await t
    .expect(page.HIPAAimage.exists).ok()
});
test('CDPHE - Footer - Lab Text', async t => {
  await t
    .expect(page.LabText.innerText).eql('* All laboratory services for at-home sample collection provided by binx partner laboratories are CLIA-certified and HIPAA compliant')
});
