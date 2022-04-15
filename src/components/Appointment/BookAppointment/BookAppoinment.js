import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    _id: "5e8df50be6e8231764dc23de",
    id: 1,
    subject: "Heart",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "Neurologist",
    visitingHour: "10:50 AM - 11:30 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df5aee6e8231764dc23e0",
    id: 3,
    subject: "Dentist",
    visitingHour: "5:00 PM - 6:00 PM",
    totalSpace: 10,
  },
  {
    _id: "5e8df63be6e8231764dc23e1",
    id: 4,
    subject: "orthopedic",
    visitingHour: "7:00 AM - 8:30 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df68de6e8231764dc23e2",
    id: 5,
    subject: "Counseling",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e3",
    id: 6,
    subject: " Female health care",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];

const BookAppoinment = ({ date }) => {
  return (
    <section>
      <h2 className='text-center mb-5' style={{ color: "#1CC7C1" }}>
        Available Appointment on {date.toDateString()}
      </h2>
      <div className='row'>
        {bookingData.map((booking) => (
          <BookingCard
            key={booking.id}
            date={date}
            booking={booking}
          ></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default BookAppoinment;
