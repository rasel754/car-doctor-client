import { useEffect, useState } from "react";
import ServucesCard from "./ServucesCard";

const Service = () => {
  const [service, setService] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data2) => {
        setService(data2);
      });
  }, []);
  return (
    <div>
      <div className="text-center space-y-4 mt-9">
        <h3 className="text-3xl font-bold text-orange-500">Our Services</h3>
        <h1 className="text-5xl font-extrabold">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which donot look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service?.map((data) => (
          <ServucesCard key={data._id} data={data}></ServucesCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
