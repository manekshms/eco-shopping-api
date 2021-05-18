const app = require('./src/app');

const port = process.env.PORT || 3000;
const { log } = console;
app.listen(port, () => {
  log(`Server listening on port ${port}`);
});
