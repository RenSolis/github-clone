class Github {
    constructor(client_id, client_secret) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repos_count = 7;
        this.repos_sort = 'created: asc';
    }

    async fetchUser(user) {
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repositoriesDataRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);
        const userData = await userDataRequest.json();
        const repositoriesData = await repositoriesDataRequest.json();
        return {
            userData,
            repositoriesData
        };
    }
}

module.exports = Github;