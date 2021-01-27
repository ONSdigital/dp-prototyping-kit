const fs = require("fs")
const dir = "src/prototypes/area-profiles/data/area-profiles"

try {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    console.log(file)
  })
} catch (err) {
  console.log(err)
}
