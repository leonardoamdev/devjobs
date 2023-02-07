import React from 'react';
import InputBox from './InputBox';
import Button from './Button';
import CheckBox from './CheckBox';
import Modal from './Modal';

const FilterModal = ({ onClose, filter, onChange }) => {
  return (
    <Modal>
      <div className="border-0 rounded-md relative flex flex-col w-full bg-white dark:bg-dark-light outline-none focus:outline-none">
        <div className="flex items-start justify-between p-5 border-b border-secondary/[0.2]">
          <InputBox
            inputStyle="ml-4"
            iconStyle="h-6 w-[17px]"
            iconSrc="/assets/desktop/icon-location.svg"
            placeholder="Filter by location…"
            value={filter.location}
            onChange={e => onChange('location', e.target.value)}
          />
        </div>
        <div className="relative p-6 flex-auto">
          <CheckBox
            label="Full Time Only"
            isChecked={filter.isFullTimeOnly}
            onChange={e => onChange('isFullTimeOnly', e.target.checked)}
          />
        </div>
        <div className="flex items-center justify-end px-6 pb-6">
          <Button className="w-full sm:w-auto" onClick={onClose}>
            Search
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
