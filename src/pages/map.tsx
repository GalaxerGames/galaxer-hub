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
                [-9.160108748701258, 38.77175500653879],
                [-9.156370187288598, 38.77243700384257],
                [-9.156008089062645, 38.77105264541929],
                [-9.153958881361838, 38.7715064335177],
                [-9.149270380036956, 38.7692060953158],
                [-9.151550257678489, 38.7676878314473],
                [-9.158796192502676, 38.76888295595547],
                [-9.160108748701258, 38.77175500653879],
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
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
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
