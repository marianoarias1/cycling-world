import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapPreview from '../../components/mapPreview/MapPreview'
import { googleAPI } from '../../firebase/googleAPI'
import { setUserLocation } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePostUserLocationMutation } from '../../services/shopService'
import { locationSelectorStyles } from './locationSelectorStyles'

export const LocationSelector = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" })
  const [error, setError] = useState(null)
  const [address, setAddress] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerPostAddress, result] = usePostUserLocationMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError('El permiso a la camara fue denegado')
        return
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (err) { }
    })();
  }, [location]);

  const onConfirmAddress = () => {
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    };
    dispatch(setUserLocation(locationFormatted));

    triggerPostAddress({ localId, location: locationFormatted });
  };

  return (
    <View style={locationSelectorStyles.container}>
      <View style={locationSelectorStyles.cardContainer}>
        <Text style={locationSelectorStyles.text}>Mi dirección</Text>
        {location.latitude ? (
          <View style={locationSelectorStyles.dataContainer}>
            <Text style={locationSelectorStyles.text}>
              Lat: {location.latitude}, long: {location.longitude}
            </Text>
            <MapPreview location={location} />
            <Text style={locationSelectorStyles.text}>{address}</Text>
            <Pressable onPress={onConfirmAddress} style={locationSelectorStyles.button}>
              <Text style={locationSelectorStyles.text}>Confirm Address</Text>
            </Pressable>
          </View>
        ) : (
          <Text style={locationSelectorStyles.text}>{error}</Text>
        )}
      </View>
    </View>

  )
}
