describe('Android Elements', async () => {
    it('Find Elements By Accessibility ID', async () => {
        await $('~App').click();
        expect(await $('~Action Bar')).toBeExisting();
    });

    it('Find element by class name', async () => {
        const className = await $$('android.widget.TextView');

        console.log(className.getText());

        expect(className).toHaveText("API Demos")
    });

    it('Find elements using XPATH', async () => {
        // await $('(//android.widget.TextView)[3]').click();
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView(@text="Command two")');
        await expect($('//android.widget.TextView')).toHaveText('You selected: 1 , Command two');

    })
})