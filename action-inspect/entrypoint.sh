#!/bin/sh -l

ls -la

pwd

git status

echo date +%Y%m%d-%H%M%S >> output.txt

git add output.txt

git config --global user.email "action-inspect@localhost"
git config --global user.name "action-inspect"

git status

git commit -m "ci commit"
