import { GitHub } from "./github.js";
import { getElement } from "./helper.js";
import { UI } from "./ui.js";
const ui = new UI();
const client_id = "a5b1755bf810e8b432ce";
const client_secret = "e7176eab072f4cdad3c276bb33d8c644d9fddd95";
const github = new GitHub(client_id, client_secret);
const formDom = getElement(".form");
const inputDom = getElement(".input");
const results = getElement("#results");
formDom.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userText = inputDom.value;
    if (userText.length < 1) {
        ui.displayAlert("error", "please enter valid search term");
    }
    else {
        ui.displaySpinner();
        try {
            await github.getProfile(userText).then((data) => {
                if (data.profileData.message === "Not Found")
                    ui.displayAlert("error", "no matching results. Please try again");
                else {
                    ui.displayProfile(data.profileData);
                }
            });
        }
        catch {
            ui.displayAlert("error", "there was an error...");
        }
    }
});
//# sourceMappingURL=app.js.map