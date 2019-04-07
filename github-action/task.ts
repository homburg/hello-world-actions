import { Toolkit } from "actions-toolkit";
import { promises as fsPromises } from "fs";

const { writeFile } = fsPromises;

export default async function task(tools: Toolkit) {
  tools.log.info((await tools.runInWorkspace("ls", ["-la"])).stdout);
  tools.log(
    (await tools.runInWorkspace("git", ["diff", "--name-only", "HEAD~3"]))
      .stdout
  );
  tools.log((await tools.runInWorkspace("git", ["log", "--stat"])).stdout);

  await writeFile("output.txt", new Date().toISOString() + "\n", { flag: "a" });

  tools.log(await tools.runInWorkspace("cat", [".git/config"]));

  tools.log.info(await tools.runInWorkspace("git", ["status"]));

  await tools.runInWorkspace("git", ["add", "output.txt"]);

  tools.log.info(
    await tools.runInWorkspace("git", ["commit", "-m", `"ci commit"`])
  );

  tools.exit.success("We did it!");
}
