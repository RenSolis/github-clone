class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-warning">Following: ${user.following}</span>
                </div>
            </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    clearMessage() {
        const message = document.querySelector('.alert');
        if (message) {
            message.remove();
        }
    }

    showRepositories(repositories) {
        console.log(repositories);
        let template = '';
        repositories.forEach(repo => {
            template += `
                <div class="card card-body mt-2 animated bounceInUp">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">${repo.language}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = UI;