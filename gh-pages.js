var ghpages = require("gh-pages");

ghpages.publish(
  "dist", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/elertan/portfolio-v2.git", // Update to point to your repository
    user: {
      name: "Dennis Kievits", // update to use your name
      email: "denkievits@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
