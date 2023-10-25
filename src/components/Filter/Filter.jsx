import { useContacts } from 'helpers/hookUseContacts';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contactsSlice';
import { FilterStyle, FilterText, Input } from './filter.styled';

export const Filter = () => {
  const { filter } = useContacts();
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <FilterStyle>
      <FilterText>Find contact by name</FilterText>
      <Input
        name="filter"
        value={filter}
        id="filter"
        type="text"
        placeholder="Search contacs"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
      />
    </FilterStyle>
  );
};
