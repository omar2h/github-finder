class GitHub {
  endpoint = "https://api.github.com";
  constructor(private client_id: string, private client_secret: string) {}

  async getProfile(username: string) {
    const profileResponse = await fetch(
      `${this.endpoint}/users/${username}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return { profileData };
  }
}

export { GitHub };
