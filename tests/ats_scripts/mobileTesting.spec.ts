import {test, expect} from "@playwright/test"

test("DropDown", async ({page}, testInfo) =>{
    await page.goto("http://localhost:4200/")
    if(testInfo.project.name == "MobileTesting"){
        await page.locator(`[data-name="menu-2"]`).click()
    }
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    if(testInfo.project.name == "MobileTesting"){
        await page.locator(`[data-name="menu-2"]`).click()
    }
    const radioButton1 = page.locator('nb-card').filter({hasText: "Using the Grid"})
    await radioButton1.getByRole("radio", {name: "Option 1"}).check({force: true})
    await radioButton1.getByRole("radio", {name: "Option 1"}).isChecked()
    //await expect(radioButton1).toHaveScreenshot()
})