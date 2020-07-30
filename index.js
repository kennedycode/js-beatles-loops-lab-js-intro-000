function theBeatlesPlay(musicians, instruments) {
  var musiciansAndInstruments = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansAndInstruments
}

Function johnLennonFacts(facts)  {
  const jLFacts = []
  let i=0
  while (i<facts.length) {
    jLFacts.push('${facts[i]}!!!')
    i++
  }
  return jLFacts
}
