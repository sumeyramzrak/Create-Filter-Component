import React, { useState, useRef } from 'react';
import '../Styles/FilterComponent.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export function FilterComponent(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const buttonRef = useRef(undefined);
    const dropdownRef = useRef(undefined);
    const [selectedFilterList, setSelectedFilterList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const filters = ["Shopping", "Clothes", "Cleaning"];
    const handleApply = () => {
        alert("Filters applied!")
        setIsOpen(false);
    }
    const openFilter = () => {
        setIsOpen(isOpen => !isOpen)
        setFilterList(filters);
    }
    const handleSelect = filt => {
        const isSelected = selectedFilterList.includes(filt);
        const newSelection = isSelected ? selectedFilterList.filter(f => f !== filt) : [...selectedFilterList, filt];
        setSelectedFilterList(newSelection);
    }

    return (
        <div>
            <div className='filter'>
                <button ref={buttonRef} onClick={openFilter} className="filter__button" data-testid="filter_button"><i className="bi bi-funnel-fill"></i></button>
                {isOpen ? (
                    <div>
                        <div ref={dropdownRef} className="filter__dropdown">
                            <div className='filter-list' style={{ display: 'flex', flexDirection: 'column', float: 'left' }}>
                                {filterList?.map((filt, index) => {
                                    const isSelected = selectedFilterList?.includes(filt);
                                    return (
                                        <label key={index} style={{ display: 'flex', float: 'left' }}>
                                            <input
                                                type="checkbox"
                                                data-testid="custom-checkbox-element"
                                                checked={isSelected}
                                                onChange={() => handleSelect(filt)}
                                            />
                                            <span>{filt}</span>
                                        </label>
                                    );
                                })}
                            </div>
                            <div>
                                <Button id="filter_apply_button" data-testid="filter_apply_button" onClick={() => { props.applyFilter(selectedFilterList); setIsOpen(false); }}>Apply</Button>
                            </div>
                        </div>
                    </div>) : null}
            </div>
        </div>
    );
}
