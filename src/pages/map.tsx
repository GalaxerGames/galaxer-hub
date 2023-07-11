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
  const [lat, setLat] = useState(38.77);
  const [lng, setLng] = useState(-9.16);
  const [zoom, setZoom] = useState(15);
  const [timeSpent, setTimeSpent] = useState(0); //in seconds
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef<any | null>(null);

  const firstMessage = {
    name: "Galaxer",
    wallet: account?.address ?? "0x0000000000000000000000000000000000000000",
    lat: lat.toString(), //TODO:
    lng: lng.toString(), //TODO:
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
    lat: lat.toString(), //TODO:
    lng: lng.toString(), //TODO:
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
                [-9.160292325570474, 38.77134412504944],
                [-9.159969119386751, 38.7713713104853],
                [-9.160030810193657, 38.77145495790791],
                [-9.159525213794574, 38.77157938327566],
                [-9.159401161628512, 38.77163270836336],
                [-9.159394456106023, 38.77175556503136],
                [-9.159430665927301, 38.771865874458065],
                [-9.1564457682842, 38.772381463545955],
                [-9.156330433297375, 38.77236891660177],
                [-9.156258013647792, 38.77217443868218],
                [-9.156201687253647, 38.771586819380744],
                [-9.156019297041924, 38.77104938397445],
                [-9.15419003049718, 38.77149271619496],
                [-9.153948631687546, 38.771507354476086],
                [-9.153844025536705, 38.77142161592963],
                [-9.153666999742974, 38.771340059655664],
                [-9.152949514993793, 38.77072010394033],
                [-9.151983919755262, 38.77012619899771],
                [-9.150589171077378, 38.769574113912384],
                [-9.14920515123548, 38.76924787980825],
                [-9.149301710756452, 38.768762708353286],
                [-9.15016001763515, 38.767926198144686],
                [-9.151538673063795, 38.767717069058506],
                [-9.15318554939063, 38.768505482509326],
                [-9.153280097257735, 38.76839882761875],
                [-9.15505504906423, 38.76873865882354],
                [-9.155067119005087, 38.768282761820664],
                [-9.155429217219538, 38.76820747579705],
                [-9.155914756172653, 38.769283379401976],
                [-9.158409210547596, 38.76884212471732],
                [-9.158731075633172, 38.7688923149674],
                [-9.160283116262823, 38.77127981934928],
                [-9.160292325570474, 38.77134412504944],
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
  }, []);

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
