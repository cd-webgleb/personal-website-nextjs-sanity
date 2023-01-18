import React from 'react'
import { getMovieBySlug } from './moviesQuery'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { PortableText } from '@portabletext/react'


type Props = { params: { slug: string } }

async function Movie({ params }: Props) {
  const data = await getMovieBySlug({ slug: params.slug })

  const height = 200;
  const width = 200;
  const imageUrl = urlForImage(data.poster)?.height(height).width(width).fit('crop').url()

  console.log('data.overview: ', JSON.stringify(data, null, 2))
//console.log('imageUrl: ', imageUrl)
  return <>
    {/* <div>Movie: {data.title} Slug: {data.slug}</div> */}
    <h1 className="text-center text-[36px] font-bold pb-2">{data.title}</h1>
    <div className="grid grid-cols-2 gap-4">
        <Image 
            className="object-cover w-full h-full"
            alt={'poster'}
            width={width}
            height={height}
            // blurDataURL={(data.poster.asset as any).metadata.lqip}
            // placeholder={'blur'}
            // sizes={size}
            src={imageUrl }
        />

        <PortableText 
            value={data.overview}/>
    </div>
  </>;
}

export default Movie
