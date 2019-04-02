const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  tools.log(await tools.runInWorspace("ls", ["-la"]));
  const result await tools.runInWorkspace("git", ["log", "--stat"]);
  tools.log(result);
  tools.exit.success('We did it!')
})
