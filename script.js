const API_URL = "https://api.github.com/users/";
const searchForm = document.getElementById("searchForm");
const mainContent = document.getElementById("mainContent");
const searchInput = document.getElementById("searchInput");
const createUserCard = (user) => {
  const cardHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio || "No bio available"}</p>
        <ul>
          <li><a href="${user.html_url}" target="_blank">View Profile</a></li>
          <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  mainContent.innerHTML = cardHTML;
};

const createErrorCard = (message) => {
  mainContent.innerHTML = `<div class="card"><h1>${message}</h1></div>`;
};

const addReposToCard = (repos) => {
  const reposElement = document.getElementById("repos");
  reposElement.innerHTML = '';
  const maxReposToShow = 5;
  const shortList = repos.slice(0, maxReposToShow);

  shortList.forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.className = "repo";
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });

  if (repos.length > maxReposToShow) {
    const seeMoreLink = document.createElement("a");
    seeMoreLink.className = "repo see-more";
    seeMoreLink.href = "#";
    seeMoreLink.innerText = "Show More...";
    seeMoreLink.style.color = "green";
    seeMoreLink.addEventListener("click", (event) => {
      event.preventDefault();
      reposElement.innerHTML = ''; 
      repos.forEach((repo) => {
        const fullRepoElement = document.createElement("a");
        fullRepoElement.className = "repo";
        fullRepoElement.href = repo.html_url;
        fullRepoElement.target = "_blank";
        fullRepoElement.innerText = repo.name;
        reposElement.appendChild(fullRepoElement);
      });

      const collapseLink = document.createElement("a");
      collapseLink.className = "repo collapse";
      collapseLink.href = "#";
      collapseLink.innerText = "Show Less...";
      collapseLink.style.color = "#ff4b5c";
      collapseLink.addEventListener("click", (event) => {
        event.preventDefault();
        addReposToCard(repos); 
      });

      reposElement.appendChild(collapseLink);
    });

    reposElement.appendChild(seeMoreLink);
  }
};


const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
    window.history.pushState({}, "", `?username=${username}`);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      createErrorCard("No profile found with this username");
    } else {
      createErrorCard("An error occurred. Please try again.");
    }
  }
};

const showCreatorBtn = document.getElementById("showCreatorBtn");

showCreatorBtn.addEventListener("click", () => {
  const creatorProfile = "Tamilselvan6"; 
  getUser(creatorProfile); 
});

const getRepos = async (username) => {
  try {
    const { data } = await axios(`${API_URL}${username}/repos?sort=created`);
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Unable to fetch repositories");
  }
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = searchInput.value.trim();
  if (username) {
    getUser(username);
    searchInput.value = "";
  }
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
if (username) {
  getUser(username);
}

