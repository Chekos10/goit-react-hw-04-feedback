import PropTypes from 'prop-types';
export const Section = ({ title,children }) => {
return (
    <section>
    <div>
        <h2>{title}</h2>
        {children}
    </div>
    </section>
);
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
