describe('Android Elements', async () => {
    it('Find Elements By Accessibility ID', async () => {
        await $('~App').click();
        expect(await $('~Action Bar')).toBeExisting();
    });

    it('Find element by class name', async () => {
        const className = await $$('android.widget.TextView');
        expect(className).toHaveText("API Demos");
    });

    xit('Find elements using XPATH', async () => {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView[@text="Command two"]');
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    });

    it('Find element by uiautomator', async () => {
        await $('android=new UiSelector().textContains("Alert")').click();
    });
});