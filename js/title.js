
// logo animation
async function typeText(text, elem, typingDelay, spaceDelay) {
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);

         // if it's a space, add &nbsp and wait a bit longer
         if (char == " ") {
            
            elem.innerHTML += "&nbsp;";
            await new Promise(r => setTimeout(r, typingDelay + spaceDelay));

        } else {


            // if last char was &nbsp; replace it with space (for word-wrap)
            let oldLength = elem.innerHTML.length;

            if (elem.innerHTML.substring(oldLength - 6) == "&nbsp;") {
                elem.innerHTML = elem.innerHTML.substring(0, oldLength - 6) + " " + text.charAt(i);
            } else {
                elem.innerText += char;
            }

            // if next char is a space, wait a bit to type it
            if (text.charAt(i + 1) == " ") {
                await new Promise(r => setTimeout(r, typingDelay + spaceDelay));
            } else {
                await new Promise(r => setTimeout(r, typingDelay));
            }

        }       
    }
 
}

const title = "TigerHacks 2023"
const subtitle = "A DC-based high school hackathon"

const titleTypingDelay = 50;
const titleSpaceDelay = 25;
const subtitleTypingDelay = 50;
const subtitleSpaceDelay = 25;

const initialDelay = 250;

const subtitleDelay = 50;
const registerDelay = 50;


// type main logo
await typeText(title, document.getElementById("title-text"), titleTypingDelay, titleSpaceDelay), 500;

await new Promise(r => setTimeout(r, subtitleDelay))
await typeText(subtitle, document.getElementById("subtitle-text"), subtitleTypingDelay, subtitleSpaceDelay)

// register button slide in
await new Promise(r => setTimeout(r, registerDelay))
document.getElementById("register-link").style.opacity = "1";
document.getElementById("register-link").style.transform = "none";

// // event handler for when the screen sizing changes
// window.addEventListener("resize", function() {
//     // if img div overlaps title container, hide img
//     console.log("img: " + document.getElementById("img").getBoundingClientRect().right);
//     console.log("title: " + document.getElementById("title-container").getBoundingClientRect().right);
//     if (document.getElementById("img").getBoundingClientRect.left < document.getElementById("title-container").getBoundingClientRect().right) {
//         console.log("this is happening");
//         document.getElementById("img").style.display = "none";
//     }

//     // console log coordinates of img div
//     console.log(document.getElementById("img").getBoundingClientRect().x);
// });