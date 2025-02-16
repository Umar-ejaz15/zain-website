import PropTypes from 'prop-types';

const Client = ({ img, name, description, profession }) => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <div>
        <h3 className="text-2xl md:text-4xl">{description}</h3>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full object-center object-cover"
          src={img}
          alt=""
        />
        <h1 className="text-sm md:text-2xl"> {name}</h1>
        <p className="text-sm"> {profession}</p>
      </div>
      <div className="border-b-2 border-gray-400/20 w-full"></div>
    </div>
  );
};

Client.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
};

export default Client;