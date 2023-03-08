import React, { useState } from 'react';
import { Card, Row, Table } from 'react-bootstrap'
import { FilterComponent } from '../Components/FilterComponent';

export function ExpensesList(props) {
    const [newFilterSelection, setNewFilterSelection] = useState([]);
    const [selectedFilterList, setSelectedFilterList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const filters = ["shopping", "clothes", "cleaning"];

    const handleSelect = filt => {
        debugger;
        var a = props.data;
        let isSelected = selectedFilterList.includes(filt)
        // { isSelected ? setNewFilterSelection(newFilterSelection => newFilterSelection.filter(f => f !== filt)) : setSelectedFilterList(selectedFilterList => [...selectedFilterList, filt]) };
        if (isSelected) {
            setNewFilterSelection(selectedFilterList => selectedFilterList.filter(f => f !== filt));
            setSelectedFilterList(newFilterSelection);
            alert("filtre silindi")
        }
        else {
            selectedFilterList.push(filt);
            alert("filtre eklendi")
        }
    }
    const ApplyFilterData = () => {
        props.data(props.data.filter(item => (selectedFilterList.includes(item.category))));
    }
    return (
        <div>
            <Row>
                <Card sm={12} style={{ margin: 'auto' }}>
                    <Card.Header>Expenses List</Card.Header>
                    <Card.Body sm={12} style={{ margin: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>
                                        <div>category
                                            <FilterComponent onApply={() => alert(selectedFilterList)} filterList={filters} 
                                            openControl={isOpen}
                                            applyFilter={(filter) => ApplyFilterData(filter)}
                                            >

                                            </FilterComponent>
                                            </div>
                                    </th>
                                    <th>amount</th>
                                    <th>detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data?.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.category}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.detail}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}