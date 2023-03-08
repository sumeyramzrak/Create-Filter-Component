import React, { useState, useRef } from 'react';
import '../Styles/FilterComponent.css';
import { Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export function FilterComponent(props) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(undefined);
    const dropdownRef = useRef(undefined);
    const modalRef = useRef(undefined);
    const [selectedFilterList, setSelectedFilterList] = useState([]);
    const filters = ["shopping", "clothes", "cleaning"];
    const handleApply = () => {
        alert("Filters applied!")
        setIsOpen(false)
        debugger;
    }
    const openFilter = () => {
        var a = props.filterList;
        debugger;
        setIsOpen(isOpen => !isOpen)
    }
    const handleSelect = filt => {
        debugger;
        const isSelected = selectedFilterList.includes(filt);
        const newSelection = isSelected ? selectedFilterList.filter(f => f !== filt) : [...selectedFilterList, filt];
        setSelectedFilterList(newSelection);
    }

    return (
        <div>
            <div className='filter'>
                <button ref={buttonRef} onClick={openFilter} className="filter__button"><i className="bi bi-funnel-fill"></i></button>
                {isOpen ? (
                    <div ref={dropdownRef} className="filter__dropdown">
                        <div className='filter-list' style={{ display: 'flex', flexDirection: 'column' }}>
                                {filters.map((filt, index) => {
                                    const isSelected = selectedFilterList?.includes(filt);
                                    return (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={() => handleSelect(filt)}
                                            />
                                            <span>{filt}</span>
                                        </label>
                                    );
                                })}
                            <div className="filter__dropdown__actions">
                                <Button className="filter__dropdown_button">Apply</Button>
                                {/* <Button onClick={()=>{props.applyFilter(selectedFilterList),setIsOpen(false)}} className="filter__dropdown_button">Apply</Button> */}
                            </div>
                        </div>
                    </div>) : null}
            </div>
        </div>
    );
}