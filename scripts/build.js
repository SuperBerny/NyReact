const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client", shell: "true" };
reqiure("child_process").spawn("npm", args, opts);