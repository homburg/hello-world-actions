const { Toolkit } = require("actions-toolkit");

// Run your GitHub Action!
Toolkit.run(async tools => {
  tools.log.info((await tools.runInWorkspace("ls", ["-la"])).stdout);
  tools.log((await tools.runInWorkspace("git", ["log", "--stat"])).stdout);
  tools.log(
    (await tools.runInWorkspace("git", ["diff", "--name-only", "HEAD^3"]))
      .stdout
  );
  tools.exit.success("We did it!");
});
