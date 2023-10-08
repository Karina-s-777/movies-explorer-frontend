import "./FilterCheckbox.css";

function FilterCheckbox ( { changeShort, firstEntrance, isCheck} ) {
  return (
    <div className="search__container-checkbox">
    <label className="search__checkbox-label">
      <span className="search__checkbox-text">Короткометражки</span>
      <input
        className="search__checkbox"
        type="checkbox"
        name="searchCheckbox"
        id="searchCheckbox"
        checked={isCheck}
        onChange={() => changeShort()}
        disabled={firstEntrance}
      />
      <span className="search__checkbox-button" />
    </label>
  </div>
  )
}

export default FilterCheckbox;