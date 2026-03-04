const getJoke = require("./joke");

let core;
async function loadCore() {
  if (!core) {
    core = await import("@actions/core");
  }
  return core;
}

async function run() {
  const joke = await getJoke();
  console.log(joke);
  const core = await loadCore();
  core.setOutput("joke", joke);
}

run();