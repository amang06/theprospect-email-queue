module.exports = {
    apps: [
      {
        name: 'theprospect-email-queue',
        script: './node_modules/.bin/ts-node',
        args: 'server.ts',
        watch: true,
        env_production: {
          NODE_ENV: 'production',
          PORT: 3000,
          // Add other environment variables here
        }
      }
    ]
  };
  