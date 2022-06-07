const PREFIX = '\x1b';

const username = "Bob";

const RESET = PREFIX + "[0m";
const FG_BLACK = PREFIX + "[30m";
const FG_RED = PREFIX + "[31m";
const FG_GREEN = PREFIX + "[32m";
const FG_YELLOW = PREFIX + "[33m";
const FG_BLUE = PREFIX + "[34m";
const FG_MAGENTA = PREFIX + "[35m";
const FG_CYAN = PREFIX + "[36m";
const FG_WHITE = PREFIX + "[37m";

// Backgrounds
const BG_BLACK = PREFIX + "[40m";
const BG_RED = PREFIX + "[41m";
const BG_GREEN = PREFIX + "[42m";
const BG_YELLOW = PREFIX + "[43m";
const BG_BLUE = PREFIX + "[44m";
const BG_MAGENTA = PREFIX + "[45m";
const BG_CYAN = PREFIX + "[46m";
const BG_WHITE = PREFIX + "[47m";

// console.log("Hello world");

// the console, unlike in the browser, points to the terminal that the app is running in
// rather than the console in the browser
// - we also refer to the output destination of an app as stdout (standard out)

function PrintStdOut(arg) {
    console.log(`${BG_RED}Hello${RESET} ${FG_BLUE}world!${RESET} ` +`${BG_WHITE}${FG_GREEN}arg`);
}

PrintStdOut('WTM');

// $ node hello-world.js
// Hello world! arg