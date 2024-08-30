// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    newVar = "%c" + txt;
    myStyle = `color: ${color};`
    myStyle = myStyle += `background: ${background};`
    myStyle = myStyle += `font-size: ${fontSize};`
    console.log(newVar, myStyle);
}

// Same function using ES6
const consoleStyler2 = (color, background, fontSize, txt) => {
    newVar = "%c" + txt;
    myStyle = `color: ${color};`
    myStyle = myStyle += `background: ${background};`
    myStyle = myStyle += `font-size: ${fontSize};`
    console.log(newVar, myStyle);
}

// Task 2: Build another console log message generator
var fontStyle = "color: tomato; font-size: 50px";

function celebrateStyler(reason) {
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6dg', '40px', 'Congrats!');
consoleStyler2('#1d5c63', '#ede6dg', '40px', 'Big Congrats!');
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');