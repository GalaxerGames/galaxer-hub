import React, { useEffect, useRef, useState } from 'react';
import Mapbox, { LngLatLike, Map as MapboxMap } from 'mapbox-gl';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../components/modules/map.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAccount, useSignTypedData } from 'wagmi';
import MapboxGeocoding, { GeocodeQueryType, GeocodeRequest } from '@mapbox/mapbox-sdk/services/geocoding';
import { recoverTypedDataAddress } from 'viem';

Mapbox.accessToken = 'pk.eyJ1IjoiZ2FsYXhlciIsImEiOiJjbGkwN2x2NzgwN3ZkM2RwY2kyeXppeGkwIn0.-u0aVxVb8Nxyn-hvkyyZnw';
const geocodingClient = MapboxGeocoding({ accessToken: Mapbox.accessToken });

const domain = {
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const;

const types = {
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' },
  ],
  Location: [
    { name: 'city', type: 'string' },
    { name: 'coordinates', type: 'string' },
  ],
} as const;

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const [location, setLocation] = useState<number[] | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const account = useAccount();
  const [recoveredAddress, setRecoveredAddress] = useState<string | null>(null);

  const message = {
    name: 'Galaxer',
    wallet: account?.address || '',
    city: city,
    coordinates: location ? location.toString() : undefined,
  } as const;

  const { data, error, isLoading, signTypedData } = useSignTypedData({
    domain,
    types,
    message,
    primaryType: 'Person',
  });

  useEffect(() => {
    if (!data) return;
    (async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: 'Person',
          signature: data,
        }),
      );
    })();
  }, [data]);

  useEffect(() => {
    if (mapContainerRef.current) {
      Mapbox.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
      const map = new Mapbox.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9,
      });

      mapRef.current = map;

      return () => map.remove();
    }
  }, []);

  function hubMyLocation() {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: LngLatLike = [position.coords.longitude, position.coords.latitude];
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
              types: ['place'] as GeocodeQueryType[],
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
          console.log('Unable to retrieve your location', error);
        }
      );
    }
  }

  return (
    <>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100%' }}>
        <button onClick={hubMyLocation} style={{ position: 'absolute', top: '10px' }}>
          Find Me
        </button>
        <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
      </div>
      {location && <p>Location: {location[0]}, {location[1]}</p>}
      {city && <p>City: {city}</p>}
      {account && <p>Wallet Address: {account.address}</p>}
      <button disabled={isLoading} onClick={() => signTypedData()}>
        {isLoading ? 'Check Wallet' : 'Hub My Location'}
      </button>
      {data && (
        <div>
          <div>Signature: {data}</div>
          <div>Recovered address {recoveredAddress}</div>
        </div>
      )}
      {error && <div>Error: {error?.message}</div>}
    </div>
    <Footer/>
    </>
  );
}

export default Map;