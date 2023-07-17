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
                [43.6407972567971, -79.35533108772961],
                [43.64086100777653, -79.35515774394264],
                [43.64094840820289, -79.35497587505138],
                [43.64101730021404, -79.35477695595158],
                [43.641083107434525, -79.35462208322387],
                [43.64110572864991, -79.35457235344893],
                [43.64101318726036, -79.35451836112183],
                [43.64095252116099, -79.35446436879474],
                [43.64092270220832, -79.35443879348192],
                [43.640887742038096, -79.35440753476622],
                [43.64083735822754, -79.35435638414056],
                [43.64078697437475, -79.35431802117131],
                [43.64075304236843, -79.35431091691775],
                [43.64071088439449, -79.35442174327336],
                [43.64070060195735, -79.3544714730483],
                [43.64064713325577, -79.35460929556746],
                [43.64057309959045, -79.35479684786156],
                [43.64052271551604, -79.35491051591859],
                [43.64055175185695, -79.35468829914991],
                [43.640401700043924, -79.35452847129739],
                [43.64029697616069, -79.35443775819189],
                [43.640163106030855, -79.3542745857359],
                [43.640061050877044, -79.35416210127039],
                [43.639888098733294, -79.35406185232526],
                [43.639778626894376, -79.35428472721217],
                [43.63970024752447, -79.35451655289714],
                [43.63988421216079, -79.35466513615508],
                [43.6400863135063, -79.3548199849721],
                [43.640292300716574, -79.35497841410857],
                [43.64043675045422, -79.35508761386139],
                [43.64060516674054, -79.355218295522],
                [43.640719819100745, -79.35532033463014],
                [43.64075803650397, -79.35534092146706],
                [43.640798844890774, -79.35534181654695],
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
