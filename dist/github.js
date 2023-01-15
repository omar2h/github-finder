class GitHub {
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.endpoint = "https://api.github.com";
    }
    async getProfile(username) {
        const profileResponse = await fetch(`${this.endpoint}/users/${username}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const profileData = await profileResponse.json();
        return { profileData };
    }
    async getRepos(username, reposCount, reposSort) {
        const reposResponse = await fetch(`${this.endpoint}/users/${username}/repos?per_page=${reposCount}&sort=${reposSort}&client_id=${this.client_id}&client_secret${this.client_secret}`);
        const reposData = await reposResponse.json();
        return reposData;
    }
}
export { GitHub };
//# sourceMappingURL=github.js.map