/*
query {
  user(login: "kayteh") {
    repositories(last: 10, isFork: false, privacy: PUBLIC) {
      nodes {
        name
        url
        shortDescriptionHTML
        languages(first: 2) {
          nodes {
            name
          }
        }
      }
    }
  }
}

*/