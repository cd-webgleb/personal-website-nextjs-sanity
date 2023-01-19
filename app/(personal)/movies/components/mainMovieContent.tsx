import React from 'react'
import { urlForImage } from 'lib/sanity.image'
// import { CustomPortableText } from 'components/shared/CustomPortableText'
import { getMovieBySlug, MoviePayload } from '../movieQueries/moviesQuery'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'


type Props = { data: MoviePayload}

function MainMovieContent({data}: Props) {
  
    const height = 200;
    const width = 200;
    const imageUrl = urlForImage(data.poster)?.height(height).width(width).fit('crop').url()
  
    //console.log('data.overview: ', JSON.stringify(data, null, 2))
  //console.log('imageUrl: ', imageUrl)
  return (
    <>
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
    </>
  );
}

export default MainMovieContent