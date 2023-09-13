import "./FilterCheckbox.css";

function FilterCheckbox () {
  return (
    <div className="search__container-checkbox">
    <label className="search__checkbox-label">
      <span className="search__checkbox-text">Короткометражки</span>
      <input
        className="search__checkbox"
        type="checkbox"
        name="searchCheckbox"
        id="searchCheckbox"
      />
      <span className="search__checkbox-button" />
    </label>
  </div>
  )
}

export default FilterCheckbox;