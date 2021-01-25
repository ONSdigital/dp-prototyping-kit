let countries = []
let regions = []
let upperTiers = []
let lowerTiers = []
let wards = []

module.exports = function () {
  try {
    countries = require("./data/area-profiles/countries.json")
    regions = require("./data/area-profiles/regions.json")
    upperTiers = require("./data/area-profiles/upper-tier.json")
    lowerTiers = require("./data/area-profiles/lower-tier.json")
    wards = require("./data/area-profiles/wards.json")
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
