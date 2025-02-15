const Card = ({ img, title, description }) => {
  return (
    <div className="card flex flex-col justify-center items-center bg-gradient-to-tr from-[#181923] to-[#11111A] px-5 md:px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div>

      <img  src={img} alt="card image" className="card-image w-full h-full" />
      </div>
      <div className="card-content">
        <h2 className="card-title text-3xl font-bold py-2">{title}</h2>
        <p className="card-description text-xl">{description}</p>
      </div>
    </div>
  );
};
export default Card;
