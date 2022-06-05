import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image as Images} from '@assets';
import {CarCarousel, DrawerContainer} from '@components';
import {AvailableCarCard} from '../../components/AvailableCarCard';
import {SearchBar} from '../../components/SearchBar';
import _ from 'lodash';
import {useVehicles} from '@stores';

const Vehicles = () => {
  const {
    fetchAvailableVehicles,
    availableVehicles,
    isLoadingAvailableVehicles,
    hasErrorAvailableVehicles,
  } = useVehicles();
  useEffect(() => {
    fetchAvailableVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectedCarType, setSelectedCarType] = useState(0);
  const [vehicles, setVehicles] = useState<any>([]);
  useEffect(() => {
    if (availableVehicles.length > 0) {
      setVehicles(availableVehicles);
    }
  }, [availableVehicles]);
  const handleOnSelectCarousel = (index: any) => {
    setSelectedCarType(index);
    setVehicles(_.shuffle(vehicles));
  };

  const handleOnPressCarCard = (index: number) => {
    let newVehicles = [...vehicles];
    newVehicles[index].selected = !newVehicles[index].selected;
    setVehicles(newVehicles);
  };

  const handleOnPressCancelCarCard = (index: number) => {
    let _vehicles = [...vehicles];
    _vehicles[index].selected = false;
    setVehicles(_vehicles);
  };

  const renderAvailableCar = ({item, index}: any) => {
    return (
      <AvailableCarCard
        item={item}
        index={index}
        key={`${index}`}
        handleOnPressCarCard={handleOnPressCarCard}
        handleOnPressCancelCarCard={handleOnPressCancelCarCard}
      />
    );
  };

  return (
    <DrawerContainer
      icon={Images.Icon.vehicle}
      isMainScreen={true}
      title="Vehicles">
      <SearchBar />
      <CarCarousel
        selectedCar={selectedCarType}
        selectCarCarousel={handleOnSelectCarousel}
      />

      {/* <FlatList
        data={vehicles}
        renderItem={renderAvailableCar}
        showsVerticalScrollIndicator={false}
      /> */}

      {vehicles.map((item, index) => renderAvailableCar({item, index}))}
    </DrawerContainer>
  );
};

export default Vehicles;
