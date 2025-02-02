const BookingRow = ({ data, handleDelete, handelConfirm }) => {
  const { CustomerName, email, img, date, due_amount, service_name, _id } =
    data;

  return (
    <div className="w-full">
      <thead>
        <tr>
          <th></th>
          <th>image</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Due Amount</th>

          <th></th>
        </tr>
      </thead>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{CustomerName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </td>

        <td>{email}</td>
        <td>${due_amount}</td>
        <th>
          {  status === 'confirm' ? <span className="text-3xl font-bold">Confirmed</span> :
            <button
              onClick={() => handelConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
             Please Confirm
            </button>
          }{" "}
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
