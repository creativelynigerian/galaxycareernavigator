function generateCV(){

alert("Generating CV");

}

function generateResume(){

alert("Generating Resume");

}

function searchJobs(){

window.open(
"https://www.jobberman.com",
"_blank"
);

}

function openTelegramBot(){

window.open(
"https://t.me/YourBotName",
"_blank"
);

}

async function askAI(){

const prompt =
document.getElementById("prompt").value;

const response =
document.getElementById("response");

response.innerHTML =
"Generating response...";

}
