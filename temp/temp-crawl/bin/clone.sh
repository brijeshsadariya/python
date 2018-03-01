#!/bin/bash

[[ $1 ]] && username=$1 || username=false
[[ $2 ]] && key=$2 || key=false
[[ $3 ]] && org=true || org=false

if [ $username = false ]; then echo "please define a username" && exit 1; fi
if [ $key = false ]; then echo "No authentication key provided. Continue as public user"; fi

if [ ! -d "Repositories" ]; then mkdir Repositories; fi

directory="Repositories/"$username; rm -rf $directory; mkdir $directory
auth=$key":x-oauth-basic"

if [ $org = true ]; 
  then link="https://api.github.com/orgs/"$username"/repos?per_page=1000000";
  else link="https://api.github.com/users/"$username"/repos?per_page=1000000";
fi

if [ $key = false ];
 then curl $link | node /usr/local/lib/node_modules/github-crawl/bin/clone.js $username
  else curl -u $auth $link | node /usr/local/lib/node_modules/github-crawl/bin/clone.js $username
fi
