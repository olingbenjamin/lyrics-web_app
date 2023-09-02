import { Link } from "react-router-dom";
const DetailsHeader = ({artistId,artistData,songData}) =>{

console.log("artistData",artistId)
return(
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent mt-4 to-black sm:h-48 h-28"/>
      <div className="absolute inset-0 flex items-center">
        <img src={!artistId?songData?.images?.coverart:artistData.attributes.artwork?.url.replace('{w}', '125').replace('{h}', '125')} alt="art" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{!artistId?songData?.alias:artistData.attributes.name}</p>
          <Link to={`/artists/${artistId? artistId:songData?.artists[0].adamid}`}>
            <p className="text-base text-gray-400">
            {!artistId?songData?.subtitle:artistData.attributes.name}
            </p> 
          </Link>
          <p className="text-base text-gray-400">{songData?.genres?.primary}</p>
        </div>

      </div>
      <div className="w-full sm:h-44 h-24"/>
  </div>
);
}
export default DetailsHeader;
