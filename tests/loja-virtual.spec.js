import { test, expect } from '@playwright/test';

//variável para armazenar a URL da loja virtual
const URL = 'https://demowebshop.tricentis.com/';

//Especificação de teste (SPEC)
test.describe('Loja virtual', () => {

    //Cenário de teste (TEST CASE)
    test('Deve exibir os produtos disponíveis', async ({page}) => {

        //Acessar a página da loja virtual
        await page.goto(URL);

        //Verificar se o produto 'laptop' está disponível
        await expect
            (page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-3 > div > div > div.product-grid.home-page-product-grid > div:nth-child(3) > div > div.picture > a > img'))
            .toBeVisible();
    });

});