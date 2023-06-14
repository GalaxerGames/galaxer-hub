import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useAccount, useSignTypedData } from 'wagmi';
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { recoverTypedDataAddress } from 'viem';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FsYXhlciIsImEiOiJjbGkwN2x2NzgwN3ZkM2RwY2kyeXppeGkwIn0.-u0aVxVb8Nxyn-hvkyyZnw';
const geocodingClient = MapboxGeocoding({ accessToken: mapboxgl.accessToken });

const domain = {
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const

const types = {
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' },
  ],
  Location: [
    { name: 'city', type: 'string' },
    { name: 'coordinates', type: 'string' },
  ],
} as const

export function Map() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const account = useAccount();
  const [recoveredAddress, setRecoveredAddress] = useState(null);

  const message = {
    name: 'Galaxer',
    wallet: account?.address,
    city: city,
    coordinates: location?.toString(),
  } as const

  const { data, error, isLoading, signTypedData } = useSignTypedData({
    domain,
    types,
    message,
    primaryType: 'Person',
  })

  useEffect(() => {
    if (!data) return
    ;(async () => {
      setRecoveredAddress(
        await recoverTypedDataAddress({
          domain,
          types,
          message,
          primaryType: 'Person',
          signature: data,
        }),
      )
    })()
  }, [data])

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    mapRef.current = map;

    return () => map.remove();
  }, []);

  function hubMyLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = [position.coords.longitude, position.coords.latitude];
        mapRef.current.flyTo({
          center: coords,
          essential: true
        });

        new mapboxgl.Marker()
          .setLngLat(coords)
          .addTo(mapRef.current);

        setLocation(coords);

        geocodingClient.reverseGeocode({
          query: coords,
          limit: 1,
          types: 'place'
        })
        .send()
        .then(response => {
          const match = response.body.features[0];
          setCity(match.place_name);
        });

      }, (error) => {
        console.log("Unable to retrieve your location", error);
      });
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100%' }}>
        <button onClick={hubMyLocation} style={{ position: 'absolute', top: '10px' }}>Find Me</button>
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
  );
}
