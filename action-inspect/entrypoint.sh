#!/bin/sh -l

ls -la

pwd

echo "ACTOR: ${GITHUB_ACTOR}"

if [ "$GITHUB_ACTOR" = "action-bot" ]
then
  echo "Not working on action-bot push"
  exit 0
fi

git status

echo date +%Y%m%d-%H%M%S >> output.txt

cat .git/config

git add output.txt

git config --global credential.helper store
echo "https://${GITHUB_BOT_TOKEN}:x-oauth-basic@github.com" > ~/.git-credentials

git config --global user.email "action-bot@localhost"
git config --global user.name "action-bot"

git status

git commit -m "ci commit"

git log --stat

git branch --set-upstream-to="origin/${GITHUB_REF}" "$GITHUB_REF"

git push
