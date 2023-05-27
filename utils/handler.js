import {} from "next-connect"
import { expressWrapper } from "next-connect"

function onError(err, req, res, next) {
  console.error(err)
  res.status(500).end(err.toString())
}

const handler = expressWrapper({
  onError: onError,
  onNoMatch: (req, res) => {
    res.status(404).send("Page is not found")
  },
})

export default handler
