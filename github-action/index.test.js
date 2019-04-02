const { Toolkit } = require("actions-toolkit");

describe("github-action", () => {
  let action, tools;

  // Mock Toolkit.run to define `action` so we can call it
  Toolkit.run = jest.fn(actionFn => {
    action = actionFn;
  });
  // Load up our entrypoint file
  require(".");

  beforeEach(() => {
    // Create a new Toolkit instance
    tools = new Toolkit();
    // Mock methods on it!
    tools.exit.success = jest.fn();
    tools.runInWorkspace = jest.fn();
    tools.log = jest.fn();
  });

  it("exits successfully", async () => {
    action(tools);
    for (var i = 0; i < 2; i++) {
      await expect(tools.runInWorkspace).toHaveBeenCalled();
      expect(tools.log).toHaveBeenCalled();
    }
    expect(tools.exit.success).toHaveBeenCalled();
    expect(tools.exit.success).toHaveBeenCalledWith("We did it!");
  });
});
