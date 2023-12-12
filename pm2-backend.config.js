module.exports = {
  apps: [
    {
      name: `backend`,
      script: `./src/backend/index.ts`,
      interpreter: `node`,
      interpreterArgs: `--import tsx`,
    },
  ],
}
