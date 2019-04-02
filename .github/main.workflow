workflow "New workflow" {
  on = "push"
  resolves = ["Hello world"]
}

action "Hello world" {
  uses = "./action-a"
  args = "\"Hello world, I'm $MY_NAME!\""
  env = {
    MY_NAME = "Mona"
  }
}
