
export type BookingTypeData = {
  _id?: string;
  bookingStartDate: string;
  bookingEndDate: string;
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
