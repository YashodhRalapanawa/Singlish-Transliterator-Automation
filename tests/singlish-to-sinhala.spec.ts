 import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanavaa.');
  await page.getByText('මම ගෙදර යනවා.').click();
});

test('Pos_Fun_0002 - Conjunction "saha" and structure preserved correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kadeyata giyaa saha badu gaththaa.');
  await page.getByText('අපි කඩෙයට ගියා සහ බඩු ගත්තා.').click();
});

test('Pos_Fun_0003 - Question mark and interrogative form are accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa heta enavaadha?')
  await page.getByText('ඔයා හෙට එනවාද?').click();
});

test('Pos_Fun_0004 - Formal/Polite tone handled accurately.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakarala mata udhavvak karanna puLuvandha?')
  await page.getByText('කරුණාකරල මට උදව්වක් කරන්න පුළුවන්ද?').click();
});

test('Pos_Fun_0005 - English words kept as they are with Sinhala grammar.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee laptop eka slow velaa.')
  await page.getByText('මගේ laptop එක slow වෙලා.').click();
});

test('Pos_Fun_0006 - Future tense "balamu" converted correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api heta match eka balamu.')
  await page.getByText('අපි හෙට match එක බලමු.').click();
});

test('Pos_Fun_0007 - Past tense "gaththaa" converted correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee pothak kiyevvaa.')
  await page.getByText('මම ඊයේ පොතක් කියෙව්වා.').click();
});

test('Pos_Fun_0008 - Imperative command structure is correct.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ikmanata meheta enna.')
  await page.getByText('ඉක්මනට මෙහෙට එන්න.').click();
});

test('Pos_Fun_0009 - Numbers mixed with Singlish handled accurately.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata rupiyal 500k oone.')
  await page.getByText('මට රුපියල් 500ක් ඕනෙ.').click();
});

test('Pos_Fun_0010 - Continuous action "kiyamin" converted properly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('naQQgi sindhuva kiyamin innavvaa')
  await page.getByText('නංගි සින්දුව කියමින් ඉන්නව්වා').click();
});

test('Pos_Fun_0011 - Numbers mixed with Singlish handled accurately.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api dhaen inne maathara vala.')
  await page.getByText('අපි දැන් ඉන්නේ මාතර වල.').click();
});

test('Pos_Fun_0012 - "If" condition (enavanam) converted correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa enavanam mama kaeema hadhannam.')
  await page.getByText('ඔයා එනවනම් මම කෑම හදන්නම්.').click();
});

test('Pos_Fun_0013 - Negation "naehae" handled accurately.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha enne naehae.')
  await page.getByText('මම අද එන්නෙ නැහැ.').click();
});

test('Pos_Fun_0014 - Plural subject "lamayi" handled correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Lamayi sellam karanavaa.')
  await page.getByText('ළමයි සෙල්ලම් කරනවා.').click();
});

test('Pos_Fun_0015 - Time formatting and particles (ta) are correct.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('meeting eka 10.30ta thiyenne.')
  await page.getByText('meeting එක 10.30ට තියෙන්නෙ.').click();
});

test('Pos_Fun_0016 - The system correctly handles the "r" sound combined with "tha" (ර්ත).', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('lassanata narthanaya karanna.')
  await page.getByText('ලස්සනට නර්තනය කරන්න.').click();
});

test('Pos_Fun_0017 - Professional/Office context Singlish handled well.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('email eka check karala reply karanna.')
  await page.getByText('email එක check කරල reply කරන්න.').click();
});

test('Pos_Fun_0018 - Greetings and special characters handled correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suBha aluth avurudhdhak veva!')
  await page.getByText('සුභ අලුත් අවුරුද්දක් වෙව!').click();
});

test('Pos_Fun_0019 - Repeated words for emphasis handled correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari mama ennam.')
  await page.getByText('හරි හරි මම එන්නම්.').click();
});

test('Pos_Fun_0020 - Common symbols like @ preserved correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ! home inne.')
  await page.getByText('මම ! home ඉන්නේ.').click();
});


test('Pos_Fun_0021 - Local food names converted accurately.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('koththu ekak dhenna.')
  await page.getByText('කොත්තු එකක් දෙන්න.').click();
});

test('Pos_Fun_0022 - Family relation terms converted correctly.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee ayiyaa dhaen gedhara.')
  await page.getByText('මගේ අයියා දැන් ගෙදර.').click();
});

test('Pos_Fun_0023 - Shopping related inquiry handled well.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('me shirt eka kiyadha kiyala balanna')
  await page.getByText('මෙ shirt එක කියද කියල බලන්න').click();
});

test('Pos_Fun_0024 - Travel related simple sentence handled well.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api bus ekee nuvara yanava.')
  await page.getByText('අපි bus එකේ නුවර යනව.').click();
});

test('Neg_Fun_0001 - System fails to separate words if spaces are missing.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaa')
  await page.getByText('මමගෙදරයනවා').click();
});

test('Neg_Fun_002 - Random symbols might confuse the transliterator.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama #$* yanavaa')
  await page.getByText('මම#$* යනවා').click();
});

test('Neg_Fun_003 - Heavily abbreviated words are not recognized.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mm gedr ynva')
  await page.getByText('ම් ගෙද්ර් යන්වා').click();
});

test('Neg_Fun_004 - Code is non-linguistic input.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('for(i=0;i<10;i++){print(i);}')
  await page.getByText('No meaningful Sinhala translation').click();
});

test('Neg_Fun_005 - Input contains foreign scripts unrelated to source language.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('абвгд こんにちは 你好')
  await page.getByText('Incorrect output').click();
});

test('Neg_Fun_006 - Random characters with no linguistic meaning.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('123445@#$4')
  await page.getByText('Incorrect or unreadable output').click();
});

test('Neg_Fun_007 - Input is empty or whitespace-only', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('" "')
  await page.getByText('Incorrect or blank conversion').click();
});

test('Neg_Fun_008 - Input lacks semantic content.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aaaaabbbbbccccc')
  await page.getByText('Incorrect output').click();
});

test('Neg_Fun_009 - Input is random alphanumeric characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('a1b2c3 d4e5f6 g7h8i9')
  await page.getByText('Incorrect or unreadable Sinhala output').click();
});

test('Neg_Fun_010 - Input has only numbers', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('1234567890 0987654321')
  await page.getByText('Incorrect or unreadable Sinhala output').click();
});




