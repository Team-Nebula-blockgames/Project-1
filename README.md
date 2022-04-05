# How to contribute

### Fork the repo
click on the fork button for this project

### Clone the developmet branch of forked repo
git clone -b development 'url of forked repo'

### Move into cloned folder
cd Project-1

### add a new remote
git remote add upstream https://github.com/Team-Nebula-blockgames/Project-1

### Install dependencies
yarn install

### Install Frontend dependencies(only needed if you want to view or work on the frontend)
cd client

yarn install

# Pull latest changes and push changes to repo(make sure your in Project-1 directory)

### Always pull before making changes
git pull upstream development

### Push to the your forked repo (don't forget to commit first)
git push origin

### make a pull request
after pushing changes to your forked repo you should see a compare and pull button in green

# Scripts(make sure your in Project-1 directory)
### To run local blockchain
yarn node

### To deploy(to localhost)
yarn deploy

### to start frontend app
cd client

yarn start
