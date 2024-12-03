import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title,price,_id,img } = service;
  const {user} =useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const due_amount = form.due_amount.value;
        console.log(name, date, email, due_amount);
        const booking = {
            CustomerName: name,
            email: email,
            date: date,
            due_amount: price,
            service_id:_id,
            service_name:title,
            img:img
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(booking)
        })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if(data.insertedId){
              alert('booking successfully inserted')
            }
          })
      };
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">
        checkout service Name : {title}
      </h1>
      <div>
        <form onSubmit={handleBookService} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                name="date"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                name="due_amount"
                defaultValue={'$'+price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="order confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
