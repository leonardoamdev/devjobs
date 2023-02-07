import React, { useState } from 'react';
import Button from './Button';
import CheckBox from './CheckBox';
import InputBox from './InputBox';
import useDetectDevice from 'src/hooks/useDetectDevice';
import useSettings from 'src/hooks/useSettings';
import useFocus from 'src/hooks/useFocus';
import SearchIcon from './SearchIcon';
import FilterModal from './FilterModal';

const SearchBar = ({ onSearch }) => {
  const { isTouch, isLaptop } = useDetectDevice();
  const { filter, saveFilter } = useSettings();
  const [isOpenModal, setOpenModal] = useState(false);
  const [inputQueryRef, setInputQueryFocus] = useFocus();
  const [inputLocationRef, setInputLocationFocus] = useFocus();

  const handleFilterChange = (type, value) => {
    saveFilter({ ...filter, [type]: value });
  };

  const handleFocusQueryInput = e => {
    setInputQueryFocus(e);
  };

  const handleFocusLocationInput = e => {
    setInputLocationFocus(e);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    onSearch();
  };

  return (
    <>
      <div className="rounded-md bg-white dark:bg-dark-light flex justify-between items-center w-full h-20 px-4 sticky top-[121px] z-10">
        <div
          className="h-full md:border-r md:border-secondary/20 px-2 flex items-center flex-1 cursor-pointer"
          onClick={handleFocusQueryInput}
        >
          <InputBox
            className="flex-1"
            inputStyle="ml-0 sm:ml-4"
            iconStyle="h-6 w-6 text-primary hidden sm:flex"
            iconSrc="/assets/desktop/icon-search.svg"
            ref={inputQueryRef}
            placeholder={
              isTouch || isLaptop
                ? 'Filter by title…'
                : 'Filter by title, companies, expertise…'
            }
            onChange={e => handleFilterChange('query', e.target.value)}
          />
        </div>
        <div
          className="h-full md:border-r md:border-secondary/20 px-2 flex items-center cursor-pointer"
          onClick={handleFocusLocationInput}
        >
          {!isTouch && (
            <InputBox
              inputStyle="ml-0 sm:ml-4"
              iconStyle="h-6 w-[17px] hidden sm:flex"
              iconSrc="/assets/desktop/icon-location.svg"
              ref={inputLocationRef}
              placeholder="Filter by location…"
              onChange={e => handleFilterChange('location', e.target.value)}
            />
          )}
        </div>
        {!isTouch && (
          <CheckBox
            className="ml-3 px-6 whitespace-nowrap"
            label={isTouch || isLaptop ? 'Full Time' : 'Full Time Only'}
            isChecked={filter.isFullTimeOnly}
            onChange={e =>
              handleFilterChange('isFullTimeOnly', e.target.checked)
            }
          />
        )}
        {isTouch && (
          <Button
            className="mr-1"
            variant="text"
            onClick={() => setOpenModal(true)}
          >
            <img src="/assets/mobile/icon-filter.svg" alt="Filter" />
          </Button>
        )}
        <Button onClick={onSearch}>
          {isTouch ? <SearchIcon /> : 'Search'}
        </Button>
      </div>
      {isOpenModal && isTouch && (
        <FilterModal
          filter={filter}
          onChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SearchBar;
