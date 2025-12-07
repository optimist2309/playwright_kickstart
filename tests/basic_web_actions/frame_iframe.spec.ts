import {test, expect,Locator} from '@playwright/test';


test('Frame and Iframe handling ', async({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    // Total number of frames in the page.
    const frames = page.frames();
    console.log(`Total number of frames in the page are: ${frames.length}`);

    // Handling frame by page.frame().
    const frame = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    if (frame){
      
        await frame.locator("[name='mytext1']").fill("Frame 1 handled successfully");
      // await  frame.fill("[name='mytext1']", "Testinggg");  //we can perform action directly also.

    }
    else{
        console.log("Frame not found");
    }

});
 
test.only('Frame and Iframe handling-2', async({page}) =>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.frameLocator("[src= 'frame_1.html']").locator("[name='mytext1']").fill("hello");
});

test.only('Nested Frame Handling', async({page}) =>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const f3 =  page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    if (f3){

        f3.locator("[name='mytext3']").fill("Nested frame handling");
        const chframaes = f3.childFrames();
        console.log(`Total number of child frames in frame 3 are: ${chframaes.length}`);
        const radioch = chframaes[0].getByLabel("I am a human");
        await radioch.check();
        await expect(radioch).toBeChecked();
    }
    else{
        console.log("Frame not found");
    }   

});
