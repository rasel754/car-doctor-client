import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
<img className='h-[350px] w-3/4 rounded-lg shadow-2xl' src={person} alt="" /> 
<img className='h-[250px] w-1/2 absolute right-5 top-1/2  rounded-lg border-8 border-white' src={parts} alt="" /> 




</div>
    <div className='w-1/2 space-y-5'>
        <h3 className='text-3xl font-bold text-orange-500'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <button className="btn btn-primary bg-orange-500">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;