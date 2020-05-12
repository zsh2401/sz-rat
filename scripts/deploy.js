const REPO = "https://github.com/zsh2401/sz-rat.git";
const BRANCH = "gh-pages";

const ghpages = require('gh-pages')
const path = require('path');
ghpages.publish(path.resolve(__dirname,'../dist'),{
    branch:BRANCH,
    repo: REPO
});
