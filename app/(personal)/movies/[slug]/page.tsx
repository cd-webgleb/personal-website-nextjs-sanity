import React from 'react'
import { getMovieBySlug } from './moviesQuery'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'


type Props = { params: { slug: string } }

async function Movie({ params }: Props) {
  const data = await getMovieBySlug({ slug: params.slug })

  const height = 200;
  const width = 200;
  const imageUrl = urlForImage(data.poster as any)?.height(height).width(width).fit('crop').url()

  console.log('data: ', data, JSON.stringify(data, null, 2))

  return <>
    <div>Movie: {data.title} Slug: {data.slug}</div>
    <Image 
        className="absolute"
        alt={'poster'}
        width={width}
        height={height}
      
        blurDataURL={(data.poster.asset as any).metadata.lqip}
        placeholder={'blur'}
        // sizes={size}
        src={imageUrl ?? (data.poster.asset as any).url}
    />
  </>;
}

export default Movie
