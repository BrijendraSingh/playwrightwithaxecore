import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('running a11y checks on dequeuniversity', async ({ page }) => {
  await page.goto('https://dequeuniversity.com/demo/mars/');
  try{
    const results = await new AxeBuilder({page}).analyze();
    console.log(results);
  } catch(e){
    console.error(e);
  }
});
