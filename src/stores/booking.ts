import create from 'zustand';
import {Image as Images} from '@assets';

type BookingInformation = Vehicle & {
  booking_id: string;
  date_booked: string;
  booked_time: string;
};

type BookingState = {
  items: BookingInformation[];
};

type BookingActions = {
  book: (item: BookingInformation) => any;
};

type BookingStore = BookingState & BookingActions;

export const useBookingStore = create<BookingStore>((set, get) => ({
  items: [
    {
      model: 'Hino 300',
      brand: 'Hiace',
      plate_number: 'SLM8080Z',
      booking_id: 'GBE8080C',
      date_booked: '07 April 2021',
      booked_time: '08',
      image: Images.nissanVanSmall,
    },
    {
      model: 'NV350',
      brand: 'Nissan',
      plate_number: 'SLM8080Z',
      booking_id: 'GLB1200U',
      date_booked: '',
      booked_time: '08',
      image: Images.nissanVanSmall,
    },
  ],
  book: item => {
    let _items = Object.assign({item}, get().items);
    set({items: _items});
  },
}));
