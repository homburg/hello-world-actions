#!/bin/sh -l

ls -la

pwd

git status

echo date +%Y%m%d-%H%M%S >> output.txt

git add output.txt

git status
