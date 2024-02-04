import { expect, type Locator, type Page  } from '@playwright/test';

export class ProductListingPage  {
    readonly page: Page;
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCart = page.locator('#shopping_cart_container a');
    }

    async validateShoppingCartExists() {
        await expect(this.shoppingCart).toBeEnabled();
    }
}