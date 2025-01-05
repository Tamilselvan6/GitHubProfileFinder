# GitHub Profile Finder

The **GitHub Profile Finder** is a simple web application that lets users search for GitHub profiles using a username. It fetches profile data and repositories via the GitHub API and displays them in a visually appealing format.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## Demo

Try the application live here: [GitHub Profile Finder](https://tamilselvan6.github.io/GithubProfileFinder/)

## Features

- Search for any GitHub user by their username.
- Displays:
  - User profile picture and bio.
  - Number of public repositories.
  - A list of repositories with links.
- Show or hide additional repositories dynamically.
- Responsive design for all device sizes.
- Creator profile button to view the app creator's GitHub profile.

## Technologies Used

- **HTML5**: For structuring the application.
- **CSS3**: For styling and responsiveness.
- **JavaScript (ES6)**: For DOM manipulation and API integration.
- **GitHub API**: To fetch user and repository data.
- **Axios**: For making HTTP requests.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tamilselvan6/GithubProfileFinder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GithubProfileFinder
   ```
3. Open the project in a browser: Directly open `index.html` in your preferred browser.

---

## Usage
- Enter a GitHub username in the search bar and press "Enter".
- View the user’s profile details and repositories.
- Click on the "Show More..." link to display additional repositories or "Show Less..." to collapse them.
- Use the "View Creator Profile" button to access the app creator's GitHub profile.

## API Endpoints
- Get User Info: `https://api.github.com/users/{username}`
- Get User Repos: `https://api.github.com/users/{username}/repos`

---

##License
This project is licensed under the MIT License. See the LICENSE file for details.
