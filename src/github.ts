class GitHub {
  endpoint = "https://api.github.com";
  constructor(private client_id: string, private client_secret: string) {}

  async getProfile(username: string) {
    const profileResponse = await fetch(
      `${this.endpoint}/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return { profileData };
  }

  async getRepos(username: string, reposCount: number, reposSort: string) {
    const reposResponse = await fetch(
      `${this.endpoint}/users/${username}/repos?per_page=${reposCount}&sort=${reposSort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposData = await reposResponse.json();
    return reposData;
  }
}

export { GitHub };
