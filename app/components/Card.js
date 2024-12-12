import PropTypes from 'prop-types';

const Card = ({ Icon, title}) => {
  return (
    <div className="card rounded-lg bg-black w-60 shadow-xl text-white p-3 h-15 flex items-center gap-4">
      {/* Icon on the left */}
      <div className="flex-shrink-0">
        {Icon && <Icon size={50} className="text-white" />} {/* Render the passed Icon */}
      </div>

      {/* Content on the right */}
      <div>
        <h2 className="card-title text-lg font-bold">{title}</h2>
        
      </div>
    </div>
  );
};

// PropTypes for validation
Card.propTypes = {
  Icon: PropTypes.elementType, // Pass the icon component as a prop
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Default props
Card.defaultProps = {
  Icon: null, // No default icon; must be provided explicitly
};

export default Card;
