const app = require("express");
const PORT = 4000;

app.length("", (req, res) =>{
    res.send("Nodejs_FileSystem");
});

app.listen(PORT, () => {
    console.log("Server is listening", PORT)
}); 