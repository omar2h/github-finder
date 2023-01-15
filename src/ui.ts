import { getElement } from "./helper.js";
type User = {
  login: string;
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  location: string | null;
  created_at: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
};

class UI {
  private results: HTMLElement;
  constructor() {
    this.results = getElement("#results");
  }

  displayProfile(profileData: User) {
    this.clearResults();
    this.results.innerHTML = `
    <article
          id="profile"
          class="flex flex-col items-center justify-center rounded-md border border-transparent bg-white p-4 py-4 shadow-sm transition duration-500 hover:shadow-md dark:border-gray-700 dark:bg-zinc-900 sm:grid sm:grid-cols-10 sm:gap-5 sm:px-2"
        >
          <div
            class="col-1 flex w-full flex-col items-center justify-center gap-2 p-0 sm:col-span-2"
          >
            <img src="${profileData.avatar_url}" class="block" alt="avatar" />
            <button
              class="flex w-3/6 items-center justify-center rounded-xl bg-blue-500 py-1 px-2 text-white sm:w-full"
            >
              <a href="https://github.com/${
                profileData.login
              }" target=_blank>View Profile</a>
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

  displayAlert(className: string, message: string) {
    this.clearResults();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    this.results.appendChild(div);
  }

  displaySpinner() {
    this.clearResults();
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-center");
    div.innerHTML = `<svg
            aria-hidden="true"
            class="h-1/3 w-1/3 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>`;
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
