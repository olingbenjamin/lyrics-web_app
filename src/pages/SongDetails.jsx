import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
    const {songid}= useParams()
    const dispatch= useDispatch()
    const {activeSong,isPlaying}= useSelector((state)=>state.player)
    const {data:songData,isFetching:isFetchingSongDetails}= useGetSongDetailsQuery({songid})
    const {data,isFetching:isFetchingRelatedSongs,error}= useGetSongRelatedQuery(songData?.artists[0].adamid)
    console.log(data)
    if(isFetchingSongDetails||isFetchingRelatedSongs) return <Loader title="Searching song details"/>
    if(error) return <Error/>    
    
    function handlePlayClick(song,i){
  dispatch(setActiveSong({song,data,i}))
  dispatch(playPause(true))
}
function handlePauseClick(){
  dispatch(playPause(false))
}
    
    return(
        <div className="flex flex-col">
            <DetailsHeader songData={songData}/>
            <div className="mb-10">
                <h2 className="text-white text-3xl text-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type==='LYRICS'?
                    songData?.sections[1].text.map((line,i)=>(
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )):<p className="text-gray-400 text-base my-1">Sorry,no lyrics found!</p>    
                }
                </div>
            </div>
            <RelatedSongs
                data={data}
                isplaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={handlePlayClick}
                handlePauseClick={handlePauseClick}
            />
        </div>
    )
}
export default SongDetails;
