let countries = []
let regions = []
let upperTiers = []
let lowerTiers = []
let wards = []

module.exports = function () {
  try {
    countries = require("./data/countries.json")
    regions = require("./data/regions.json")
    upperTiers = require("./data/upper-tier.json")
    lowerTiers = require("./data/lower-tier.json")
    wards = require("./data/wards.json")
  } catch (error) {}

  return {
    countries,
    regions,
    upperTiers,
    lowerTiers,
    wards
  }
}
