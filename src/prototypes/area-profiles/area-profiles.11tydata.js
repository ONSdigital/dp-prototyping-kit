let countries = []
let regions = []
let upperTiers = []
let lowerTiers = []
let wards = []

module.exports = function () {
  try {
    countries = require("./data/areas/countries.json")
    regions = require("./data/areas/regions.json")
    upperTiers = require("./data/areas/upper-tier.json")
    lowerTiers = require("./data/areas/lower-tier.json")
    wards = require("./data/areas/wards.json")
  } catch (err) {
    console.log(err)
  }

  return {
    countries,
    regions,
    upperTiers,
    lowerTiers,
    wards
  }
}
