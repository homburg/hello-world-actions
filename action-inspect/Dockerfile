FROM alpine:3.9.2

LABEL "com.github.actions.name"="Inspect"
LABEL "com.github.actions.description"="Dump some workspace and environment info"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

# LABEL "repository"="http://github.com/octocat/hello-world"
# LABEL "homepage"="http://github.com/actions"
# LABEL "maintainer"="Octocat <octocat@github.com>"

RUN apk add --no-cache git tree

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
