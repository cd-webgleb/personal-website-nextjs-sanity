import { createClient, groq } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {Block, Image} from 'sanity';

export const movieQuery = groq`
  *[_type == "movie" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    poster{
      asset->
    },
    overview
  }
`

export interface MoviePayload {
    // client?: string
    // description?: Block[]
    // duration?: {
    //   start?: string
    //   end?: string
    // }
    // overview?: Block[]
    // site?: string
    //tags?: string[]
    slug: string
    poster?: Image,
    title?: string,
    overview: Block[]
}

const sanityClient = (token?: string) => {
return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getMovieBySlug({
    slug,
    token,
  }: {
    slug: string
    token?: string
  }): Promise<MoviePayload | undefined> {
    return await sanityClient(token)?.fetch(movieQuery, { slug })
  }

