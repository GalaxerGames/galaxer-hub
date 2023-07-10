import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../components/modules/map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FsYXhlciIsImEiOiJjbGkwN2x2NzgwN3ZkM2RwY2kyeXppeGkwIn0.-u0aVxVb8Nxyn-hvkyyZnw"; //TODO env

const domain = {
  name: "Ether Mail",
  version: "1",
  chainId: 1,
  verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
} as const;

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const account = useAccount();
  const [lat, setLat] = useState(38.7283837617133);
  const [lng, setLng] = useState(-9.152658912920923);
  const [zoom, setZoom] = useState(15);

  /* const { data, error, isLoading, signTypedData } = useSignTypedData({
    domain,
    types,
    message,
    primaryType: "Person",
  });

  useEffect(() => {
    if (!data) return;
    (async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: "Person",
          signature: data,
        })
      );
    })();
  }, [data]); */

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return; // initialize map only once
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    mapRef.current.on("move", () => {
      setLng(+mapRef.current!.getCenter().lng.toFixed(4));
      setLat(+mapRef.current!.getCenter().lat.toFixed(4));
      setZoom(+mapRef.current!.getZoom().toFixed(2));
    });
    // mapRef.current.on("load", () => {
    //   mapRef.current!.addLayer({
    //     id: "rpd_parks",
    //     type: "fill",
    //     source: {
    //       type: "vector",
    //       url: "mapbox://mapbox.3o7ubwm8",
    //     },
    //     "source-layer": "RPD_Parks",
    //     layout: {
    //       visibility: "visible",
    //     },
    //     paint: {
    //       "fill-color": "rgba(61,153,80,0.55)",
    //     },
    //   });
    // });

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
  }, []);

  /*  function hubMyLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: LngLatLike = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          if (mapRef.current) {
            mapRef.current.flyTo({
              center: coords,
              essential: true,
            });

            new Mapbox.Marker().setLngLat(coords).addTo(mapRef.current);

            setLocation(coords);

            const geocodeRequest: GeocodeRequest = {
              query: coords,
              limit: 1,
              types: ["place"] as GeocodeQueryType[],
            };

            geocodingClient
              .reverseGeocode(geocodeRequest)
              .send()
              .then((response) => {
                const match = response.body.features[0];
                setCity(match.place_name);
              });
          }
        },
        (error) => {
          console.log("Unable to retrieve your location", error);
        }
      );
    }
  } */

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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "70vh",
            width: "100%",
            position: "relative",
          }}
        >
          <div className={styles.mapOverlay}>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div
            ref={mapContainerRef}
            style={{ width: "100%", height: "60dvh" }}
          />
        </div>

        {/* {account && <p>Wallet Address: {account.address}</p>} */}
        {/*  <button disabled={isLoading} onClick={() => signTypedData()}>
          {isLoading ? "Check Wallet" : "Hub My Location"}
        </button>
        {data && (
          <div>
            <div>Signature: {data}</div>
            <div>Recovered address {recoveredAddress}</div>
          </div>
        )}
        {error && <div>Error: {error?.message}</div>} */}
      </div>
      <Footer />
    </>
  );
}

export default Map;
