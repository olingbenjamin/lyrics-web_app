import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { useGetArtistDetailsQuery} from "../redux/services/shazamCore";


const ArtistDetails = () => {
    const {id:artistId}= useParams()
    const {activeSong,isPlaying}= useSelector((state)=>state.player)
    const {data:artistData,isFetching:isFetchingArtistDetails,error}= useGetArtistDetailsQuery(artistId);
    console.log(artistData?.data[0])
    
    return(
        <div className="flex flex-col">
            <DetailsHeader artistId={artistData?.data[0].id} artistData={artistData?.data[0]}/>
            
            <RelatedSongs
                data={artistData?.data}
                isplaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    )
}
export default ArtistDetails;
