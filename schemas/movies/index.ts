import blockContent from './arrays/blockContent'
import crewMember from './objects/crewMember'
import castMember from './objects/castMember'
import movie from './documents/movie'
import person from './documents/person'
import screening from './documents/screening'
import plotSummary from './objects/plotSummary'
import plotSummaries from './objects/plotSummaries'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
