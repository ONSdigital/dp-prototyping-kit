const R = require("ramda")
const censusData = require("./data/census-data")

const areaTypes = {
  W05: "Electoral wards",
  E05: "Electoral wards",
  E06: "Local authorities",
  W06: "Local authorities",
  E09: "Local authorities",
  E08: "Local authorities",
  E10: "Local authorities",
  E07: "Local authority districts",
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

const keyStats = [
  {
    title: "Resident population as of 2021",
    value: "8,173,941"
  },
  {
    title: "Population increase since 2011",
    value: "8%"
  },
  {
    title: "Total area size (Hectares)",
    value: "157,215.08"
  },
  {
    title: "Population density (People per hectare)",
    value: "52.0"
  }
]

const childStats = [
  {
    title: "Resident population as of 2021",
    value: "162,393"
  },
  {
    title: "Population increase since 2011",
    value: "2%"
  },
  {
    title: "Total area size (Hectares)",
    value: "39,234.01"
  },
  {
    title: "Population density (People per hectare)",
    value: "23.0"
  }
]

module.exports = {
  page: { map: true },
  permalink: "{{area.permalink}}",
  eleventyComputed: {
    breadcrumbs: R.path(["area", "breadcrumbs"]),
    childrenType,
    siblingsType,
    pageContent
  },
  tableSections,
  keyStats,
  childStats
}
