const fetch = require('node-fetch')
const Parser = require('json2csv').Parser
const fields = [
  {
    label: 'Country',
    value: 'name',
  }, {
    label: 'Capital',
    value: 'capital',
  }, {
    label: 'Region',
    value: 'region',
  }, {
    label: 'Population',
    value: 'population',
  },
]

module.exports = async (req, res) => {
  const resp = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await resp.json()
  const parser = new Parser({fields})
  const csv = parser.parse(data)
  res.set('Content-Type', 'text/csv')
  res.send(200, csv)
}
