FROM node:10.15.3-alpine

# Labels for GitHub to read your action
LABEL "com.github.actions.name"="github-action"
LABEL "com.github.actions.description"="A description of your action"
# Here are all of the available icons: https://feathericons.com/
LABEL "com.github.actions.icon"="activity"
# And all of the available colors: https://developer.github.com/actions/creating-github-actions/creating-a-docker-container/#label
LABEL "com.github.actions.color"="purple"

RUN apk add --no-cache git

WORKDIR /action

# Copy the package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy the rest of your action's code
COPY . .

# Build
RUN yarn build

# Run `node /index.js`
ENTRYPOINT ["node", "/action/build/index.js"]
