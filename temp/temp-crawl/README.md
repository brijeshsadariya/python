#GitHub Repository Crawl#
<img src="https://raw.githubusercontent.com/louisbuchbinder/github-crawl/master/images/crawl.png" width="500">

##Use this repo to clone all the repositories of a given user or organization##


###Easy To Use###
```
# Install the module globally
sudo npm install -g github-crawl

# Run the Clone Script with a specified username (ex. louisbuchbinder)
github-crawl louisbuchbinder

# To access private repositories you must generate an access token from github (instructions below...) and use it as follows

github-crawl <username> <access_token> 

# To clone repositories from an organization use the -orgs flag
github-crawl <username> <access_token> -orgs 

```

###Instructions to Generate an Access Token###

***Navigate to your GitHub Settings***

<img src="https://raw.githubusercontent.com/louisbuchbinder/github-crawl/master/images/settings.png">

***Click the Personal Access Tokens Option***

<img src="https://raw.githubusercontent.com/louisbuchbinder/github-crawl/master/images/personal-access-tokens.png">

***Click the Generate New Token Option***

<img src="https://raw.githubusercontent.com/louisbuchbinder/github-crawl/master/images/generate-new-token.png">

***Follow the Instructions and Past the Token into the Terminal***

