const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Custom server routes
  server.get("/custom-route", (req, res) => {
    // Custom route logic
    res.send("Hello from custom route!")
  })

  // Next.js default request handler
  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
