import "mapbox-gl/dist/mapbox-gl.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { useAccount, useSignTypedData } from "wagmi";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../components/modules/map.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FsYXhlciIsImEiOiJjbGkwN2x2NzgwN3ZkM2RwY2kyeXppeGkwIn0.-u0aVxVb8Nxyn-hvkyyZnw"; //TODO env

const domain = {
  name: "Ether Mail",
  version: "1",
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
} as const;
const types = {
  Person: [
    { name: "name", type: "string" },
    { name: "wallet", type: "address" },
  ],
  Location: [
    { name: "lat", type: "string" },
    { name: "lng", type: "string" },
    { name: "timeSpent", type: "string" },
  ],
} as const;

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const account = useAccount();
  const [lat, setLat] = useState(43.640879813830125);
  const [lng, setLng] = useState(-79.35509656466336);
  const [zoom, setZoom] = useState(15);
  const [timeSpent, setTimeSpent] = useState(0); //in seconds
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef<any | null>(null);
  const [userLatitute, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);

  const firstMessage = {
    name: "Galaxer",
    wallet: account?.address ?? "0x0000000000000000000000000000000000000000",
    lat: userLatitute.toString(),
    lng: userLongitude.toString(),
    timeSpent: "0s",
  } as const;
  const {
    data,
    error,
    isLoading,
    signTypedData: signHubLocation,
  } = useSignTypedData({
    domain,
    types,
    message: firstMessage,
    primaryType: "Location",
    onSuccess() {
      setTimeSpent(0);
      timeRef.current = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
      setIsActive(true);
    },
  });
  const finishMessage = {
    name: "Galaxer",
    wallet: account?.address ?? "0x0000000000000000000000000000000000000000",
    lat: userLatitute.toString(),
    lng: userLongitude.toString(),
    timeSpent: `${timeSpent}s`,
  } as const;
  const {
    data: finishData,
    error: finishError,
    isLoading: finishIsLoading,
    signTypedData: signFinish,
  } = useSignTypedData({
    domain,
    types,
    message: finishMessage,
    primaryType: "Location",
    onSuccess() {
      setIsActive(false);
      setTimeSpent(0);

      mapRef.current?.setPaintProperty("conchas", "fill-color", "#ffbf00");
    },
  });

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return; // initialize map only once
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/notnull/cljx109b0025z01p544i88cu2",
      center: [lng, lat],
      zoom: zoom,
    });
    mapRef.current.on("move", () => {
      setLng(+mapRef.current!.getCenter().lng.toFixed(4));
      setLat(+mapRef.current!.getCenter().lat.toFixed(4));
      setZoom(+mapRef.current!.getZoom().toFixed(2));
    });

    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );
    mapRef.current?.on("load", () => {
      mapRef.current?.addSource("conchas", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                //helipad
                [-79.3562105631956, 43.64171463410937],
                [-79.35613170598104, 43.64174650912082],
                [-79.35601732749865, 43.64179432160629],
                [-79.35597114985048, 43.641816428441544],
                [-79.35595481006727, 43.64182105545252],
                [-79.35591644709804, 43.64176707363536],
                [-79.35588234668091, 43.64172954339102],
                [-79.35584469413703, 43.64168275908099],
                [-79.35581201457063, 43.64164060175945],
                [-79.35587169030057, 43.64161489606106],
                [-79.35602087962543, 43.641560399944076],
                [-79.35606350514682, 43.64154189181766],
                [-79.3561047098175, 43.64158096452233],
                [-79.35613028513033, 43.641611811376514],
                [-79.35616296469672, 43.64164985580817],
                [-79.35618427745742, 43.641678646172885],
                [-79.35619067128563, 43.641690470782954],
                [-79.35619990681526, 43.641711035316675],
                [-79.3562105631956, 43.64171463410937],
              ],
              [
                //parking lot
                [-79.35585750655294, 43.641761021120736],
                [-79.35561542071159, 43.64186340481468],
                [-79.35541106253382, 43.641933935702355],
                [-79.35524128804768, 43.64201584243572],
                [-79.35507780150546, 43.64207044686259],
                [-79.35495204262682, 43.64212277605845],
                [-79.35479484402853, 43.64220240735599],
                [-79.35459362982273, 43.642288864073805],
                [-79.3544867347759, 43.64234119307941],
                [-79.3543232482337, 43.64240262272349],
                [-79.35416604963541, 43.642473152978134],
                [-79.35402142692499, 43.6425414079844],
                [-79.35390824393421, 43.64256870996521],
                [-79.35369130986858, 43.642634689700905],
                [-79.35358755879372, 43.642489079153194],
                [-79.353471231831, 43.64237532066722],
                [-79.35330460131681, 43.64217510520874],
                [-79.35316626655032, 43.64210229942202],
                [-79.3534617999151, 43.64201129206458],
                [-79.35364100631713, 43.64193848607935],
                [-79.35380763683132, 43.64186568000591],
                [-79.35401828295302, 43.64178377306782],
                [-79.35432953617763, 43.641665462849],
                [-79.35460306173863, 43.64154032678707],
                [-79.35488287524358, 43.64139243837787],
                [-79.35516583272049, 43.6412240726689],
                [-79.35536075898237, 43.64117401790769],
                [-79.35549594977688, 43.641356035021346],
                [-79.35566258029107, 43.641538051583545],
                [-79.35587637038472, 43.64175192033951],
                [-79.35585750655294, 43.641761021120736],
              ],
              [
                //park
                [-79.35557454907604, 43.64101930292752],
                [-79.35532931926271, 43.641114862227006],
                [-79.35508094547743, 43.64123772396018],
                [-79.3550086341222, 43.64113078876216],
                [-79.35485772346786, 43.64101020203393],
                [-79.35499605823433, 43.64096469754526],
                [-79.35516268874852, 43.64090099120326],
                [-79.3552664398234, 43.64085093617287],
                [-79.35539848664595, 43.64081225725717],
                [-79.35549909374885, 43.64090554165849],
                [-79.35559026893586, 43.641007926810296],
                [-79.35557454907604, 43.64101930292752],
              ],
              [
                //cabana area
                [-79.35509109873446, 43.64042149484922],
                [-79.35497316812531, 43.64047290725622],
                [-79.3547856158312, 43.64054282805913],
                [-79.35475435711552, 43.640560308247125],
                [-79.35468615628129, 43.64058292965939],
                [-79.35459238013425, 43.64062817245829],
                [-79.35454549206072, 43.640645652621465],
                [-79.35450712909147, 43.64057881667597],
                [-79.35445029506296, 43.64050272643211],
                [-79.35439630273588, 43.64045439879476],
                [-79.35434941466234, 43.64039990162515],
                [-79.35429400148455, 43.640350545655295],
                [-79.35424143000816, 43.640308387398946],
                [-79.35420875044176, 43.64026828561546],
                [-79.3541462330104, 43.64019013847328],
                [-79.35408655728045, 43.64012330202103],
                [-79.35405671940663, 43.64008731312568],
                [-79.35397573091599, 43.639990657143784],
                [-79.35388337561966, 43.63993513129667],
                [-79.35379954542759, 43.639871379334814],
                [-79.3537114526834, 43.639809683823444],
                [-79.35377965351762, 43.63978294908219],
                [-79.35387627136609, 43.63974798824874],
                [-79.353955839006, 43.63969246217733],
                [-79.35407234876446, 43.639641049102515],
                [-79.35413912874797, 43.639609172974026],
                [-79.35432874883081, 43.639514719834395],
                [-79.35441789049821, 43.639604043349756],
                [-79.35450874642844, 43.639721900562684],
                [-79.35462017351269, 43.63981990796366],
                [-79.35466303008354, 43.639879456686195],
                [-79.35476245732794, 43.639978704425914],
                [-79.35482417079, 43.64007298962681],
                [-79.35489788409186, 43.640141222245695],
                [-79.35494074066273, 43.640179680596724],
                [-79.35503502511862, 43.64028761196655],
                [-79.35508988152934, 43.6403595661054],
                [-79.35513445236303, 43.6403955431425],
                [-79.35509109873446, 43.64042149484922],
              ],
              [
                //inside the rebel venue
                [-79.35535500468792, 43.64078659898102],
                [-79.35523229362794, 43.640833669741205],
                [-79.35507672550816, 43.64090112159091],
                [-79.35502174022444, 43.64092101744581],
                [-79.35500162365723, 43.64093363432597],
                [-79.35489433529875, 43.64098410182017],
                [-79.35475754264172, 43.64102195241298],
                [-79.35464779331205, 43.64106928796232],
                [-79.35456680482142, 43.64109910684224],
                [-79.35452417930003, 43.64103227140115],
                [-79.35449292058435, 43.640988057145435],
                [-79.3544645035701, 43.64095104053421],
                [-79.3544446116601, 43.64093561693948],
                [-79.354400565288, 43.640872894280086],
                [-79.35435225636378, 43.640808115071316],
                [-79.35433662700592, 43.64077109834925],
                [-79.35442471975013, 43.64072174268434],
                [-79.35446166186867, 43.64071351673622],
                [-79.35454122950858, 43.64067958468844],
                [-79.3546307431035, 43.64063948315271],
                [-79.35471315244484, 43.6405973250991],
                [-79.35479840348762, 43.64056647772405],
                [-79.35489360048538, 43.64053357383988],
                [-79.35495895961817, 43.64050375467927],
                [-79.35504705236237, 43.64046570952186],
                [-79.35507973192877, 43.64045131405062],
                [-79.35512093659945, 43.64042046660062],
                [-79.35517492892654, 43.64048421797984],
                [-79.35520618764222, 43.64052534786602],
                [-79.35522323785078, 43.640552082276955],
                [-79.35528007187929, 43.640613777025955],
                [-79.3553354850571, 43.64067033049026],
                [-79.35537668972778, 43.640712488492646],
                [-79.35540084418989, 43.64075361822256],
                [-79.35544773226341, 43.6407978326508],
                [-79.35534543101208, 43.6407926914399],
                [-79.35535500468792, 43.64078659898102],
              ],
              [
                //gokarts
                [-79.35231395870231, 43.642206009530526],
                [-79.35215967504722, 43.64226183424252],
                [-79.35191624972471, 43.64237720514951],
                [-79.35182367953166, 43.642439232427286],
                [-79.35142572454582, 43.642608728223884],
                [-79.35132801156425, 43.64263602012881],
                [-79.3512662981022, 43.64255414437681],
                [-79.35116001380646, 43.6424697874247],
                [-79.35112058576127, 43.64241892508751],
                [-79.35107944345324, 43.64238046816984],
                [-79.35101258720269, 43.6423246435681],
                [-79.35099887310002, 43.64231720028396],
                [-79.35092515979814, 43.64220431036129],
                [-79.35104001540805, 43.642142282840986],
                [-79.35122858431984, 43.642049241440404],
                [-79.35135715403243, 43.641964883779345],
                [-79.35148229521936, 43.641926426571025],
                [-79.35161086493194, 43.64182470093356],
                [-79.35176172006138, 43.641782521960174],
                [-79.35190743240231, 43.64168575832116],
                [-79.3519914312812, 43.641765154139016],
                [-79.35205314474325, 43.641843309294735],
                [-79.35210457262829, 43.641925186015484],
                [-79.35215257198765, 43.641968605443346],
                [-79.35223485660372, 43.64206660917943],
                [-79.35226399907188, 43.64211995291796],
                [-79.35231395870231, 43.642206009530526],
              ],
            ],
          },
        },
      });
      mapRef.current?.addLayer({
        id: "conchas",
        type: "fill",
        source: "conchas", // reference the data source
        layout: {},
        paint: {
          "fill-color": "#0080ff",
          "fill-opacity": 0.5,
        },
      });
    });
    if (navigator) navigator?.geolocation?.watchPosition(checkUserPostion);
  }, []);

  // called every time a new user position is determined
  function checkUserPostion(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    setUserLatitude(latitude);
    setUserLongitude(longitude);
  }

  const getBtn = () => {
    if (!isActive)
      return (
        <button
          className={styles.button}
          disabled={isLoading}
          onClick={() => {
            signHubLocation();
          }}
        >
          {"Hub My Location"}
        </button>
      );
    else {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button
            className={styles.button}
            disabled={isLoading}
            onClick={() => {
              signFinish();
            }}
          >
            {"Finish"}
          </button>
          <div>
            <span>{timeSpent}</span>s
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          padding: "0 0.2rem",
          gap: "2em",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "80vh",
            width: "100%",
            position: "relative",
          }}
        >
          <div className={styles.mapOverlay}>
            <span>
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </span>
          </div>
          <div
            ref={mapContainerRef}
            style={{ width: "100%", height: "80dvh" }}
          />
        </div>
        {account?.address ? (
          getBtn()
        ) : (
          <ConnectButton chainStatus={"none"} showBalance={false} />
        )}
        {data && (
          <div>
            <div>Signature: {data}</div>
            {/* <div>Recovered address {recoveredAddress}</div> */}
          </div>
        )}
        {error && <div>Error: {error?.message}</div>}
        {finishData && (
          <div>
            <div>Signature: {finishData}</div>
            {/* <div>Recovered address {recoveredAddress}</div> */}
          </div>
        )}
        {finishError && <div>Error: {finishError?.message}</div>}
      </div>
      <Footer />
    </>
  );
}

export default Map;
