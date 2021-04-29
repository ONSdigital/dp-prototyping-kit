const geoCodes = {
  E01: {
    outputArea: "Super output area lower layer",
    OA: "LSOA",
    "Statistical Building Block": "Statistical Building Block"
  },
  E02: {
    outputArea: "Super output area middle layer",
    OA: "MSOA",
    "Statistical Building Block": "Statistical Building Block"
  },
  E04: {
    outputArea: "Civil parish",
    OA: "PAR",
    "Statistical Building Block": "Administrative"
  },
  E05: {
    outputArea: "Electoral ward or division",
    OA: "WD",
    "Statistical Building Block": "Administrative/Electoral"
  },
  E06: {
    outputArea: "Unitary authority",
    OA: "UA",
    "Statistical Building Block": "Administrative"
  },
  E07: {
    outputArea: "Non metropolitan district",
    OA: "NMD",
    "Statistical Building Block": "Administrative"
  },
  E08: {
    outputArea: "Metropolitan district",
    OA: "MD",
    "Statistical Building Block": "Administrative"
  },
  E09: {
    outputArea: "London borough",
    OA: "LONB",
    "Statistical Building Block": "Administrative"
  },
  E10: {
    outputArea: "County",
    OA: "CTY",
    "Statistical Building Block": "Administrative"
  },
  E11: {
    outputArea: "Metropolitan county",
    OA: "MCTY",
    "Statistical Building Block": "Administrative"
  },
  E12: {
    outputArea: "Region",
    OA: "RGN",
    "Statistical Building Block": "Administrative"
  },
  E13: {
    outputArea: "Inner and outer london",
    OA: "IOL",
    "Statistical Building Block": "Statistical Building Block"
  },
  E14: {
    outputArea: "Westminster parliamentary constituency",
    OA: "WPC",
    "Statistical Building Block": "Electoral"
  },
  E15: {
    outputArea: "European electoral region",
    OA: "EER",
    "Statistical Building Block": "Electoral"
  },
  E16: {
    outputArea: "Primary care trust",
    OA: "PCT",
    "Statistical Building Block": "Health"
  },
  E17: {
    outputArea: "Care trust",
    OA: "CT",
    "Statistical Building Block": "Health"
  },
  E18: {
    outputArea: "Strategic health authority",
    OA: "SHA",
    "Statistical Building Block": "Health"
  },
  E19: {
    outputArea: "Pan strategic health authority",
    OA: "PSHA",
    "Statistical Building Block": "Health"
  },
  E20: {
    outputArea: "Cancer registry",
    OA: "CANREG",
    "Statistical Building Block": "Health"
  },
  E21: {
    outputArea: "Cancer network",
    OA: "CANNET",
    "Statistical Building Block": "Health"
  },
  E22: {
    outputArea: "Community safety partnership",
    OA: "CSP",
    "Statistical Building Block": "Other"
  },
  E23: {
    outputArea: "Police force area",
    OA: "PFA",
    "Statistical Building Block": "Other"
  },
  E24: {
    outputArea: "Local learning and skills council area",
    OA: "LLSC",
    "Statistical Building Block": "Other"
  },
  E25: {
    outputArea: "Primary urban area",
    OA: "PUA",
    "Statistical Building Block": "Other"
  },
  E26: {
    outputArea: "National park",
    OA: "NPARK",
    "Statistical Building Block": "Other"
  },
  E27: {
    outputArea: "New deal for community",
    OA: "NDC",
    "Statistical Building Block": "Other"
  },
  E28: {
    outputArea: "Registration district",
    OA: "REGD",
    "Statistical Building Block": "Other"
  },
  E29: {
    outputArea: "Registration sub district",
    OA: "REGSD",
    "Statistical Building Block": "Other"
  },
  E30: {
    outputArea: "Travel to work area",
    OA: "TTWA",
    "Statistical Building Block": "Other"
  },
  E31: {
    outputArea: "Fire and rescue authority",
    OA: "FRA",
    "Statistical Building Block": "Other"
  },
  E32: {
    outputArea: "London assembly constituency",
    OA: "LAC",
    "Statistical Building Block": "Electoral"
  },
  E33: {
    outputArea: "Workplace zone",
    OA: "WZ",
    "Statistical Building Block": "Census"
  },
  E34: {
    outputArea: "Built up area",
    OA: "BUA",
    "Statistical Building Block": "Census"
  },
  E35: {
    outputArea: "Built up area sub division",
    OA: "BUASD",
    "Statistical Building Block": "Census"
  },
  E36: {
    outputArea: "Census merged ward",
    OA: "CMWD",
    "Statistical Building Block": "Census"
  },
  E37: {
    outputArea: "Local enterprise partnership",
    OA: "LEP",
    "Statistical Building Block": "Other"
  },
  E38: {
    outputArea: "Clinical commissioning group",
    OA: "CCG",
    "Statistical Building Block": "Health"
  },
  E39: {
    outputArea: "Nhs england region local office",
    OA: "NHSRLO",
    "Statistical Building Block": "Health"
  },
  E40: {
    outputArea: "Nhs england region",
    OA: "NHSER",
    "Statistical Building Block": "Health"
  },
  E41: {
    outputArea: "Census merged local authority district",
    OA: "CMLAD",
    "Statistical Building Block": "Census"
  },
  E42: {
    outputArea: "Census merged county",
    OA: "CMCTY",
    "Statistical Building Block": "Census"
  },
  E43: {
    outputArea: "Non civil parished area",
    OA: "NCP",
    "Statistical Building Block": "Census"
  },
  E45: {
    outputArea: "Public health england centre",
    OA: "PHEC",
    "Statistical Building Block": "Health"
  },
  E46: {
    outputArea: "Public health england region",
    OA: "PHEREG",
    "Statistical Building Block": "Health"
  },
  E47: {
    outputArea: "Combined authority",
    OA: "CAUTH",
    "Statistical Building Block": "Administrative"
  },
  E48: {
    outputArea: "Local resilience forum",
    OA: "LRF",
    "Statistical Building Block": "Other"
  },
  E49: {
    outputArea: "Enterprise zone",
    OA: "EZ",
    "Statistical Building Block": "Other"
  },
  E50: {
    outputArea: "Waste authority",
    OA: "WA",
    "Statistical Building Block": "Other"
  },
  E51: {
    outputArea: "Development corporation",
    OA: "DC",
    "Statistical Building Block": "Other"
  },
  E52: {
    outputArea: "Lep overlapping part",
    OA: "LEPOP",
    "Statistical Building Block": "Other"
  },
  E53: {
    outputArea: "Lep non overlapping part",
    OA: "LEPNOP",
    "Statistical Building Block": "Other"
  },
  E54: {
    outputArea: "Sustainability and transformation partnership",
    OA: "STP",
    "Statistical Building Block": "Health"
  },
  E55: {
    outputArea: "Strategic clinical network",
    OA: "SCN",
    "Statistical Building Block": "Health"
  },
  E56: {
    outputArea: "Cancer alliance",
    OA: "CAL",
    "Statistical Building Block": "Health"
  },
  E57: {
    outputArea: "National cancer vanguard",
    OA: "NCV",
    "Statistical Building Block": "Health"
  },
  E58: {
    outputArea: "County electoral division",
    OA: "CED",
    "Statistical Building Block": "Electoral"
  },
  E59: {
    outputArea: "Integrated care system",
    OA: "ICS",
    "Statistical Building Block": "Health"
  },
  E60: {
    outputArea: "Local planning authority",
    OA: "LPA",
    "Statistical Building Block": "Administrative"
  },
  E61: {
    outputArea: "Greater london authority",
    OA: "GLA",
    "Statistical Building Block": "Administrative"
  },
  E92: {
    outputArea: "Country",
    OA: "CTRY",
    "Statistical Building Block": "Administrative"
  },
  J01: {
    outputArea: "Major towns and city",
    OA: "TCITY",
    "Statistical Building Block": "Experimental"
  },
  J02: {
    outputArea: "1961 census parish",
    OA: "PAR",
    "Statistical Building Block": "Census"
  },
  J03: {
    outputArea: "1961 census ward",
    OA: "WD",
    "Statistical Building Block": "Census"
  },
  J04: {
    outputArea: "1961 census district",
    OA: "LAD",
    "Statistical Building Block": "Census"
  },
  J05: {
    outputArea: "1961 census county",
    OA: "CTY",
    "Statistical Building Block": "Census"
  },
  K01: {
    outputArea: "Travel to work area",
    OA: "TTWA",
    "Statistical Building Block": "Other"
  },
  K02: {
    outputArea: "United kingdom",
    OA: "UK",
    "Statistical Building Block": "Administrative"
  },
  K03: {
    outputArea: "Great britain",
    OA: "GB",
    "Statistical Building Block": "Administrative"
  },
  K04: {
    outputArea: "England and wales",
    OA: "E&W",
    "Statistical Building Block": "Administrative"
  },
  K05: {
    outputArea: "Built up area",
    OA: "BUA",
    "Statistical Building Block": "Census"
  },
  K06: {
    outputArea: "Built up area sub division",
    OA: "BUASD",
    "Statistical Building Block": "Census"
  },
  L00: {
    outputArea: "Strategic health authority",
    OA: "SHA",
    "Statistical Building Block": "Health"
  },
  L93: {
    outputArea: "British crown dependency",
    OA: "BCD",
    "Statistical Building Block": "Administrative"
  },
  M00: {
    outputArea: "Strategic health authority",
    OA: "SHA",
    "Statistical Building Block": "Health"
  },
  M01: {
    outputArea: "Primary healthcare directorate",
    OA: "PHD",
    "Statistical Building Block": "Health"
  },
  M83: {
    outputArea: "British crown dependency",
    OA: "BCD",
    "Statistical Building Block": "Administrative"
  },
  W00: {
    outputArea: "Output area",
    OA: "OA",
    "Statistical Building Block": "Statistical Building Block"
  },
  W01: {
    outputArea: "Super output area lower layer",
    OA: "LSOA",
    "Statistical Building Block": "Statistical Building Block"
  },
  W02: {
    outputArea: "Super output area middle layer",
    OA: "MSOA",
    "Statistical Building Block": "Statistical Building Block"
  },
  W03: {
    outputArea: "Super output area upper layer",
    OA: "USOA",
    "Statistical Building Block": "Statistical Building Block"
  },
  W04: {
    outputArea: "Community",
    OA: "COM",
    "Statistical Building Block": "Administrative"
  },
  W05: {
    outputArea: "Electoral ward",
    OA: "WD",
    "Statistical Building Block": "Administrative/Electoral"
  },
  W06: {
    outputArea: "Unitary authority",
    OA: "UA",
    "Statistical Building Block": "Administrative"
  },
  W07: {
    outputArea: "Westminster parliamentary constituency",
    OA: "WPC",
    "Statistical Building Block": "Electoral"
  },
  W08: {
    outputArea: "European electoral regions",
    OA: "EER",
    "Statistical Building Block": "Electoral"
  },
  W09: {
    outputArea: "National assembly for wales constituency",
    OA: "NAWC",
    "Statistical Building Block": "Electoral"
  },
  W10: {
    outputArea: "National assembly for wales electoral region",
    OA: "NAWER",
    "Statistical Building Block": "Electoral"
  },
  W11: {
    outputArea: "Local health board",
    OA: "LHB",
    "Statistical Building Block": "Health"
  },
  W12: {
    outputArea: "Cancer registry",
    OA: "CANREG",
    "Statistical Building Block": "Health"
  },
  W13: {
    outputArea: "Cancer network",
    OA: "CANNET",
    "Statistical Building Block": "Health"
  },
  W14: {
    outputArea: "Community safety partnership",
    OA: "CSP",
    "Statistical Building Block": "Other"
  },
  W15: {
    outputArea: "Police force area",
    OA: "PFA",
    "Statistical Building Block": "Other"
  },
  W16: {
    outputArea:
      "Department for children education lifelong learning and skills wg",
    OA: "DCELLS",
    "Statistical Building Block": "Other"
  },
  W18: {
    outputArea: "National park",
    OA: "NPARK",
    "Statistical Building Block": "Other"
  },
  W19: {
    outputArea: "National assembly economic region",
    OA: "NAER",
    "Statistical Building Block": "Other"
  },
  W20: {
    outputArea: "Registration district",
    OA: "REGD",
    "Statistical Building Block": "Other"
  },
  W21: {
    outputArea: "Registration sub district",
    OA: "REGSD",
    "Statistical Building Block": "Other"
  },
  W22: {
    outputArea: "Travel to work area",
    OA: "TTWA",
    "Statistical Building Block": "Other"
  },
  W23: {
    outputArea: "Spatial plan area",
    OA: "SPA",
    "Statistical Building Block": "Other"
  },
  W24: {
    outputArea: "Spatial plan sub area",
    OA: "SPSA",
    "Statistical Building Block": "Other"
  },
  W25: {
    outputArea: "Fire and rescue authority",
    OA: "FRA",
    "Statistical Building Block": "Other"
  },
  W26: {
    outputArea: "Strategic regeneration area",
    OA: "SRA",
    "Statistical Building Block": "Other"
  },
  W27: {
    outputArea: "Strategic regeneration sub area",
    OA: "SRASub",
    "Statistical Building Block": "Other"
  },
  W28: {
    outputArea: "Transport consortia area",
    OA: "TCA",
    "Statistical Building Block": "Other"
  },
  W29: {
    outputArea: "Agricultural region",
    OA: "AgricReg",
    "Statistical Building Block": "Other"
  },
  W30: {
    outputArea: "Agricultural small area",
    OA: "AgricSmall",
    "Statistical Building Block": "Other"
  },
  W31: {
    outputArea: "Non national park area",
    OA: "NonNPARK",
    "Statistical Building Block": "Other"
  },
  W32: {
    outputArea: "Non strategic regeneration area",
    OA: "NonSRA",
    "Statistical Building Block": "Other"
  },
  W33: {
    outputArea: "Communities first area",
    OA: "CFA",
    "Statistical Building Block": "Other"
  },
  W34: {
    outputArea: "Non communities first area",
    OA: "NonCFA",
    "Statistical Building Block": "Other"
  },
  W35: {
    outputArea: "Workplace zone",
    OA: "WZ",
    "Statistical Building Block": "Census"
  },
  W36: {
    outputArea: "Footprint regions for public service collaboration",
    OA: "PSCReg",
    "Statistical Building Block": "Administrative"
  },
  W37: {
    outputArea: "Built up area",
    OA: "BUA",
    "Statistical Building Block": "Census"
  },
  W38: {
    outputArea: "Built up area sub division",
    OA: "BUASD",
    "Statistical Building Block": "Census"
  },
  W39: {
    outputArea: "Census merged ward",
    OA: "CMWD",
    "Statistical Building Block": "Census"
  },
  W40: {
    outputArea: "Census merged local authority district",
    OA: "CMLAD",
    "Statistical Building Block": "Census"
  },
  W41: {
    outputArea: "Local resilience forum",
    OA: "LRF",
    "Statistical Building Block": "Other"
  },
  W42: {
    outputArea: "City region",
    OA: "CREG",
    "Statistical Building Block": "Other"
  },
  W43: {
    outputArea: "Local planning authority",
    OA: "LPA",
    "Statistical Building Block": "Administrative"
  },
  W92: {
    outputArea: "Country",
    OA: "CTRY",
    "Statistical Building Block": "Administrative"
  }
}

export default geoCodes
