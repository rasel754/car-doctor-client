import banner1 from "../../assets/images/banner/1.jpg"
import banner2 from "../../assets/images/banner/2.jpg"
import banner3 from "../../assets/images/banner/3.jpg"
import banner4 from "../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">

        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />

          <div className="absolute flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            
            <div className="text-white space-y-7 pl-12 w-1/2">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-secondary btn-outline">Lates Project</button>
                </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            
            <div className="text-white space-y-7 pl-12 w-1/2">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-secondary btn-outline">Lates Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            
            <div className="text-white space-y-7 pl-12 w-1/2">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-secondary btn-outline">Lates Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            
            <div className="text-white space-y-7 pl-12 w-1/2">
                <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                    <button className="btn btn-primary mr-5">Discover More</button>
                    <button className="btn btn-secondary btn-outline">Lates Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;