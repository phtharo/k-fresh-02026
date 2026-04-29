import { Page } from '@playwright/test';
import { CommonLocators } from '@locators/common-locators';

export class ProfileLocators extends CommonLocators {

  constructor(page: Page) {
    super(page);
    this.locatorInitialization();
  }

  locatorInitialization(): void {
    super.locatorInitialization();
  }
}
