const express = require("express")

const app = express()

app.use(express.static('public'))
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.redirect(`/all.html?${fullUrl}`)
})

const PORT = process.env.PORT ?? 8080
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
