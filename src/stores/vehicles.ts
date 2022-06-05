import create from 'zustand';
import {API} from '@services';

type VehiclesState = {
  availableVehicles: any;
  isLoadingAvailableVehicles: boolean;
  hasErrorAvailableVehicles: boolean;
};

type VehiclesActions = {
  fetchAvailableVehicles: () => void;
};

type VehiclesStore = VehiclesState & VehiclesActions;

export const useVehicles = create<VehiclesStore>(set => ({
  availableVehicles: [],
  isLoadingAvailableVehicles: false,
  hasErrorAvailableVehicles: false,
  fetchAvailableVehicles: async () => {
    set({
      availableVehicles: [],
      isLoadingAvailableVehicles: true,
      hasErrorAvailableVehicles: false,
    });
    try {
      const vehicles = await API.getAvailableItems({
        rentalitemid: '',
        registrationno: '',
        make: '',
        model: '',
        itemcategory: '',
      });
      console.log('vehicles ', vehicles);
      set({
        availableVehicles: vehicles,
        isLoadingAvailableVehicles: false,
        hasErrorAvailableVehicles: false,
      });
    } catch (error) {
      set({
        availableVehicles: [],
        isLoadingAvailableVehicles: false,
        hasErrorAvailableVehicles: true,
      });
    }
  },
}));
