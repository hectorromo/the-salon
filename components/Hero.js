const Hero = ({ salon }) => {
  console.log(salon);
  return (
    <div>
      <img src={salon.img_url} alt={salon.name} />
      {salon.name}
    </div>
  );
};

export default Hero;
