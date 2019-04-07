workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Toolkit Action"]
}

action "Hello world" {
  uses = "./action-a"
  args = "\"Hello world, I'm $MY_NAME!\""
  env = {
    MY_NAME = "Mona"
  }
}

action "GitHub Toolkit Action" {
  uses = "./github-action"
}
