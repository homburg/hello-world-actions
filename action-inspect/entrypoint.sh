#!/bin/sh -l

ls -la

pwd

echo "ACTOR: ${GITHUB_ACTOR}"

git status

echo date +%Y%m%d-%H%M%S >> output.txt

cat .git/config

git add output.txt

git config --global push.default current
git config --global user.email "action-inspect@localhost"
git config --global user.name "action-inspect"

git status

git commit -m "ci commit"

git log --stat

git push -u origin
