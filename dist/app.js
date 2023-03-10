import { GitHub } from "./github.js";
import { getElement } from "./helper.js";
import { UI } from "./ui.js";
const ui = new UI();
const client_id = "a5b1755bf810e8b432ce";
const client_secret = "12ad90e106e2a19a8d3f478da1a298b1338b2375";
const github = new GitHub(client_id, client_secret);
const html = getElement("html");
const formDom = getElement(".form");
const inputDom = getElement(".input");
const themeToggler = getElement(".theme-toggler");
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
                if (data.profileData.message === "Not Found") {
                    throw new Error("no matching results. Please try again");
                }
                else {
                    ui.displayProfile(data.profileData);
                    return true;
                }
            });
            await github.getRepos(userText, 5, "created:asc").then((data) => {
                if (data.message != null)
                    throw new Error(data.message);
                ui.displayRepos(data);
            });
        }
        catch (err) {
            if (err instanceof Error)
                ui.displayAlert("error", err.message);
            else
                ui.displayAlert("error", "there was an error...");
        }
    }
});
themeToggler.addEventListener("click", () => {
    html.classList.toggle("dark");
});
//# sourceMappingURL=app.js.map