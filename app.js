const express = require("express");
const app = express();
const PORT = 4000;

app.get('/', (req, res) =>{
    res.send("Nodejs_FileSystem");
});

app.listen(PORT, () => {
    console.log("Server is listening", PORT)
}); 