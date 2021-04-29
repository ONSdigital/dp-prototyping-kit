const population = require("./tables/population.json")
const households = require("./tables/households.json")
const housing = require("./tables/housing.json")
const economic = require("./tables/economic.json")
const education = require("./tables/education.json")
const health = require("./tables/health.json")

const tableSections = [
  { title: "Population", data: population },
  { title: "Households", data: households },
  { title: "Housing", data: housing },
  { title: "Economic activity", data: economic },
  { title: "Education", data: education },
  { title: "Health", data: health }
]

module.exports = {
  tableSections
}
