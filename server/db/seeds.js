use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Craig Gough",
    guest_email: "craig@gmail.com",
    booking_status: true
  },
  {
    guest_name: "Graham Cowan",
    guest_email: "Graham@hotmail.com",
    booking_status: false
  },
  {
    guest_name: "Frank West",
    guest_email: "Frank@hotmail.com",
    booking_status: true
  }
]);
