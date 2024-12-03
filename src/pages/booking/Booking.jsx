import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    axios.get(url , {withCredentials: true})
    .then(res =>{
        setBooking(res.data);
        console.log(res.data);
 
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBooking(data);
    //   });
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm ('Are you sure you want to delete')
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE',
            
        })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if(data.deletedCount > 0) {
                alert('Deleted Successfully')
             const remaining = bookings.filter(booking => booking.id ==! id);
             const update = bookings.find(booking => booking._id === id);
             update.status = 'confirm';
             setBooking(remaining);
            }
          });
    }
  };
  const handelConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status : 'confirm'})
    })
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">My Booking list : {bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          
          <div className="ml-10 w-full">
          <tbody >
            {/* row 1 */}
           {
            bookings.map(data => <BookingRow handelConfirm={handelConfirm} handleDelete={handleDelete} key={data._id } data={data}></BookingRow>)
           }
           
          </tbody>
          </div>
      
          
        </table>
      </div>
    </div>
  );
};

export default Booking;
