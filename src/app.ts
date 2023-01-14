import { GitHub } from "./github.js";
const client_id = "a5b1755bf810e8b432ce";
const client_secret = "e7176eab072f4cdad3c276bb33d8c644d9fddd95";
const github = new GitHub(client_id, client_secret);
const formDom = getElement(".form") as HTMLFormElement;
const inputDom = getElement(".input") as HTMLInputElement;

formDom.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userText = inputDom.value;
  await github.getProfile(userText).then((data) => {
    if (data.profileData.message === "Not Found") console.log("no");
    else console.log(data.profileData);
  });
});

function getElement(query: string): HTMLElement {
  const elem: HTMLElement | null = document.querySelector(query);
  if (elem) return elem;
  else throw Error("Element doesnt exist");
}
