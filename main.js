const express = require("express")

const app = express()

app.use(express.static('public'))
app.use((req, res) => {
    var fullUrl = 'https://' + req.get('host') + req.originalUrl;
    res.redirect(`/all.html?${fullUrl}`)
})

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
