import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = evt => dispatch(setFilter(evt.currentTarget.value));

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
