module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                // Path to your virtual environment
        env: { },                   // Environment variables
        path: "app",              // Change to the tools directory
        message: [
          "python -m tools.run_webui",    // Updated to run your script
        ],
        on: [{
          event: "/http:\\/\\/\\S+/",  // Regex to detect the running web UI
          done: true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
