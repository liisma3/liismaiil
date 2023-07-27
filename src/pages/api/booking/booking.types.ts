import { CartTypeData } from '@/api/cart/cart.types'
export type BookingTypeData = {
  _id?: string;
  guestId: string;
  emailViewer: string;
  bookingStartDate: string;
  bookingEndDate: string;
  createdAt?: string;
};

export type AddBookingInput = {
  guestId: string;
  bookingStartDate: string;
  bookingEndDate: string;
  createdAt: string;
};
export type UpdateBookingInput = {
  guestId: string;
  bookingStartDate: string;
  bookingEndDate: string;
  createdAt: string;
}
