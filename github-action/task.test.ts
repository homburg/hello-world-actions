import { Toolkit } from "actions-toolkit";
import task from "./task";

describe("github-action", () => {
  let tools: Toolkit;

  beforeEach(() => {
    // Create a new Toolkit instance
    tools = new Toolkit();

    // Mock methods on it!
    tools.exit.success = jest.fn();
    tools.runInWorkspace = jest.fn().mockReturnValue({ stdout: "stdout" });
    tools.log = jest.fn();
    tools.log.info = jest.fn();
  });

  it("exits successfully", async () => {
    await task(tools);

    await expect(tools.runInWorkspace).toHaveBeenCalled();
    await expect(tools.runInWorkspace).toHaveBeenCalled();
    await expect(tools.runInWorkspace).toHaveBeenCalled();

    expect(tools.log.info).toHaveBeenCalled();
    expect(tools.log).toHaveBeenCalled();

    expect(tools.exit.success).toHaveBeenCalled();
    expect(tools.exit.success).toHaveBeenCalledWith("We did it!");
  });
});
