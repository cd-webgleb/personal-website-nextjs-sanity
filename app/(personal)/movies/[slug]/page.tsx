import React from 'react'
import { previewData } from 'next/headers'
import MainMovieContent from '../components/mainMovieContent';
import { PreviewSuspense } from 'components/preview/PreviewSuspense';
import { PreviewWrapper } from 'components/preview/PreviewWrapper';
import { getMovieBySlug } from '../movieQueries/moviesQuery';
import MainMoviePreview from '../components/mainMoviePreview';

type Props = { params: { slug: string } }

export default async function Movie({ params }: Props) {
  const token = previewData().token || null;
  const data = await getMovieBySlug({ slug: params.slug })

  return <>
            {token ? (
              <PreviewSuspense
                fallback={
                  <PreviewWrapper>
                    <MainMovieContent data={data} />
                  </PreviewWrapper>
                }>
                <MainMoviePreview token={token} slug={params.slug} />
              </PreviewSuspense>
            ) : (
              <MainMovieContent data={data} />
            )}
  </>;
}

