import PropTypes from 'prop-types';
import {
  Label,
  Input,
} from './Filter.styled';

const Filter = ({
  filter,
  onChange,
}) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      value={filter}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      placeholder=""
    />
  </Label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
