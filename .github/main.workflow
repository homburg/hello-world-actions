workflow "New workflow" {
  on = "push"
  resolves = ["Inspect"]
}

action "Inspect" {
  uses = "./action-inspect"
}

action "GitHub Toolkit Action" {
  uses = "./github-action"
}
