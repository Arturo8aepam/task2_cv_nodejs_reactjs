const express = require("express");
const app = express();
var testAPIrouter = require("./routes/testAPI");
var cors = require("cors");

app.use(cors())
app.use("/testAPI", testAPIrouter);

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));