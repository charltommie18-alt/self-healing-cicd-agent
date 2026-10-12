const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// INTENTIONAL FLAW: Unused variable and missing semicolon
const debugMode = true 
const message = "Hello from the Self-Healing GitLab Agent!"

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
