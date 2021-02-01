import fetch from "node-fetch"
import R from "ramda"
import fs from "fs"

import dotenv from "dotenv"
dotenv.config()

export const partialFilename = "partial"
export const fullFilename = "full"

const PARTIAL = {
  regions: ["W92"],
  upperTiers: ["W06"],
  lowerTiers: [],
  wards: ["W05"]
}

const ALL = {
  regions: ["E12", "W92"],
  upperTiers: ["E06", "E09", "E10", "E08", "E11", "W06"],
  lowerTiers: ["E07"],
  wards: ["E05", "W05"]
}

const API = "http://statistics.data.gov.uk/sparql.json?query="

const COUNTRY_QUERY = `
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX statdef: <http://statistics.data.gov.uk/def/statistical-entity#>
    PREFIX geodef: <http://statistics.data.gov.uk/def/statistical-geography#>
    PREFIX statid: <http://statistics.data.gov.uk/id/statistical-entity/>
    PREFIX pmdfoi: <http://publishmydata.com/def/ontology/foi/>
    SELECT DISTINCT ?areacode ?areaname
    WHERE {
        VALUES ?types { statid:E92 statid:W92 }
        ?area statdef:code ?types ;
                geodef:status "live" ;
                geodef:officialname ?areaname ;
                rdfs:label ?areacode .
    }
`

const getQuery = (codes, limit = 10000) => {
  const types = R.reduce((str, code) => str + " statid:" + code, "", codes)

  return `
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX statdef: <http://statistics.data.gov.uk/def/statistical-entity#>
    PREFIX geodef: <http://statistics.data.gov.uk/def/statistical-geography#>
    PREFIX statid: <http://statistics.data.gov.uk/id/statistical-entity/>
    PREFIX pmdfoi: <http://publishmydata.com/def/ontology/foi/>
    SELECT DISTINCT ?areacode ?areaname ?parentcode ?parentname
    WHERE {
        VALUES ?types { ${types} }
        ?area statdef:code ?types ;
                geodef:status "live" ;
                geodef:officialname ?areaname ;
                rdfs:label ?areacode ;
                pmdfoi:parent ?parent .
        ?parent geodef:status "live" ;
                geodef:officialname ?parentname ;
                rdfs:label ?parentcode .
    }
    LIMIT ${limit}
`
}

const makeQuery = async (query) => {
  const URL = API + encodeURIComponent(query)

  const response = await fetch(URL)
  if (response.status >= 200 && response.status <= 299) {
    const json = await response.json()
    return await json.results.bindings
  } else {
    console.error(response.status, response.statusText)
  }
}

const fetchArea = (codes, limit) => makeQuery(getQuery(codes, limit))

const fetchData = async (codes) => ({
  countries: await makeQuery(COUNTRY_QUERY),
  regions: await fetchArea(codes.regions),
  upperTiers: await fetchArea(codes.upperTiers),
  lowerTiers: await fetchArea(codes.lowerTiers),
  wards: await fetchArea(codes.wards)
})

const writeFile = async (data, name) =>
  fs.promises.writeFile(
    `./src/prototypes/area-profiles/data/${name}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err)
        return
      }
    }
  )

const fullData = await fetchData(ALL)
const partialData = await fetchData(PARTIAL)

await writeFile(fullData, fullFilename)
await writeFile(partialData, partialFilename)
