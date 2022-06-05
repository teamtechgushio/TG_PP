type RentalErrors<T> = Partial<{
  [key in keyof T]: string[];
}>;

export interface RentalState {
  rentalContract: any;
  error: RentalErrors<Partial<Error>> | null | string;
  loading: boolean;
}
