/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5179b8f080msh7df6cb6fd4a4f21p1d8d15jsn845de66a222a');
      headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints:(builder)=>({
    getTopCharts:builder.query({query:()=>'/charts/get-top-songs-in_world_by_genre?genre=POP'}),
    getTopChartsByGenre:builder.query({query:(genre)=>`/charts/get-top-songs-in_world_by_genre?genre=${genre}`}),
    getSongDetails:builder.query({query:({songid})=>`songs/get_details?id=${songid}`}),
    getSongRelated:builder.query({query:(songid)=>`/artist/get-top-songs?id=${songid}`}),
    getArtistDetails:builder.query({query:(artistId)=>`artist/get-details?id=${artistId}`}),
    getSongsByCountry:builder.query({query:(country)=>`/charts/get-top-songs-in_country_by_genre?country_code=${country}&genre=POP`}),
    getSongsBySearch:builder.query({query:(searchTerm)=>`/search?term=${searchTerm}`})
  })
});

export const {useGetTopChartsByGenreQuery,useGetTopChartsQuery,useGetSongDetailsQuery,useGetSongsByCountryQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetSongsBySearchQuery} =shazamCoreApi