import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled';

const Section = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Section };
