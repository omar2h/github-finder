import { getElement } from "./helper.js";
class UI {
    constructor() {
        this.results = getElement("#results");
    }
    displayProfile(profileData) {
        this.clearResults();
        this.results.innerHTML = `
    <article
          id="profile"
          class="card mb-8 flex flex-col items-center justify-center  sm:grid sm:grid-cols-10 sm:gap-5 sm:px-2"
        >
          <div
            class="col-1 flex w-full flex-col items-center justify-center gap-2 p-0 sm:col-span-2"
          >
            <img src="${profileData.avatar_url}" class="block w-5/6 h-5/6" alt="avatar" />
            <button
              class="flex w-3/6 items-center justify-center rounded-xl bg-blue-500 py-1 px-2 text-white sm:w-full"
            >
              <a href="${profileData.html_url}" target=_blank>View Profile</a>
            </button>
          </div>

          <div
            class="col-2 flex w-full flex-col items-center sm:col-span-8 sm:items-start"
          >
            <div
              class="badges-container left mt-6 grid grid-cols-2 gap-x-2 gap-y-2 sm:mt-0 sm:flex"
            >
              <div
                class="badge flex items-center rounded-lg border border-gray-500 bg-transparent py-1 px-2 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
              >
                Public Repos: ${profileData.public_repos}
              </div>
              <div
                class="badge flex items-center rounded-lg border border-gray-500 bg-transparent py-1 px-2 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
              >
                Public Gists: ${profileData.public_gists}
              </div>
              <div
                class="badge flex items-center rounded-lg border border-gray-500 bg-transparent py-1 px-2 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
              >
                Following: ${profileData.following}
              </div>
              <div
                class="badge flex items-center rounded-lg border border-gray-500 bg-transparent py-1 px-2 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
              >
                Followers: ${profileData.followers}
              </div>
            </div>
            <div class="table w-full text-gray-600 dark:text-gray-300">
              <table
                class="mt-2 w-full border-separate rounded-lg border border-gray-700 sm:mt-4"
              >
                <tr class="py-1 px-2">
                  <td class="border-0 border-b border-gray-700 py-1 px-2">
                    Company: ${profileData.company || ""}
                  </td>
                </tr>
                <tr class="border border-gray-700">
                  <td class="border-0 border-b border-gray-700 py-1 px-2">
                    Website/blog: ${profileData.blog}
                  </td>
                </tr>
                <tr class="border border-gray-700">
                  <td class="border-0 border-b border-gray-700 py-1 px-2">
                    Location: ${profileData.location || ""}
                  </td>
                </tr>
                <tr class="border border-gray-700">
                  <td class="border-0 border-gray-700 py-1 px-2">
                    Member since: ${profileData.created_at}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </article>
    `;
    }
    displayRepos(repos) {
        const article = document.createElement("article");
        article.classList.add("mt-8");
        this.results.appendChild(article);
        const header = document.createElement("h1");
        header.className = "text-3xl";
        header.appendChild(document.createTextNode("Latest Repos"));
        article.appendChild(header);
        if (repos.length < 1) {
            const div = document.createElement("div");
            div.className = "error";
            div.appendChild(document.createTextNode("no repos found"));
            article.appendChild(div);
        }
        else {
            repos.forEach((repo) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("mt-2");
                card.innerHTML = `<div class="flex w-full items-center justify-between sm:max-w-3xl">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
              <div
                class="badges-container flex flex-col gap-y-2 sm:flex-row sm:justify-between sm:gap-x-2"
              >
                <div
                  class="badge flex-0 px-2 w-24 sm:w-16 capitalize rounded-lg border border-gray-500 bg-transparent py-1  text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
                >
                  stars: ${repo.stargazers_count}
                </div>
                <div
                  class="badge flex-0 px-2 w-24 capitalize rounded-lg border border-gray-500 bg-transparent py-1 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
                >
                  watchers: ${repo.watchers_count}
                </div>
                <div
                  class="badge flex-0 px-2 w-24 sm:w-16 capitalize rounded-lg border border-gray-500 bg-transparent py-1 text-xs text-gray-500 dark:border-purple-200 dark:text-purple-200"
                >
                  forks: ${repo.forks_count}
                </div>
              </div>
            </div>`;
                article.appendChild(card);
            });
        }
    }
    displayAlert(className, message) {
        this.clearResults();
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        this.results.appendChild(div);
    }
    displaySpinner() {
        this.clearResults();
        const div = document.createElement("div");
        div.className = "loading";
        this.results.appendChild(div);
    }
    clearResults() {
        let lastChild = this.results.lastElementChild;
        while (lastChild) {
            this.results.removeChild(lastChild);
            lastChild = this.results.lastElementChild;
        }
    }
}
export { UI };
//# sourceMappingURL=ui.js.map