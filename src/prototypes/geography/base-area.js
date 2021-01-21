const R = require("ramda")
const censusData = require("./data/census-data")

const areaTypes = {
  W05: "Electoral Wards",
  E05: "Electoral Wards",
  E06: "Local Authorities",
  W06: "Local Authorities",
  E09: "Local Authorities",
  E08: "Local Authorities",
  E10: "Local Authorities",
  E07: "Local Authority Districts",
  E12: "Regions"
}

const tableSections = R.map(
  R.prop("title"),
  R.prop("tableSections", censusData)
)

const pageContent = ({ area }) => {
  const summary = "Summary"

  if (area.children.length) {
    return [summary, `Areas within ${area.name}`, ...tableSections]
  }

  return [summary, ...tableSections]
}

const childrenType = ({ area }) => {
  if (!area.children || area.children.length < 1) {
    return null
  }

  return areaTypes[area.children[0].areaCode]
}

const siblingsType = ({ area }) => {
  if (!area.parent.children || area.parent.children.length < 1) {
    return null
  }

  return areaTypes[area.parent.children[0].areaCode]
}

module.exports = {
  page: { map: true },
  permalink: "{{area.permalink}}",
  eleventyComputed: {
    breadcrumbs: R.path(["area", "breadcrumbs"]),
    childrenType,
    siblingsType,
    pageContent
  },
  tableSections
}