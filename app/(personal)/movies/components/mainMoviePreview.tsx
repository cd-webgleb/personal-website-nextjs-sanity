'use client'

import { usePreview } from 'lib/sanity.preview'
import { MoviePayload, movieQuery } from '../movieQueries/moviesQuery'
import MainMovieContent from './mainMovieContent'

function MainMoviePreview({token, slug}) {
    
  const project: MoviePayload = usePreview(token, movieQuery, {
    slug: slug,
  })

  return <MainMovieContent data={project} />
}

export default MainMoviePreview