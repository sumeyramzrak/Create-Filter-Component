import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card, Row, Table } from 'react-bootstrap'
import { FilterComponent } from '../Components/FilterComponent';

export function ExpensesList(props) {
    const [isOpen, setIsOpen] = useState(false);
    const filters = ["Shopping", "Clothes", "Cleaning"];
    const [expenses, setExpenses] = useState([]);

    useEffect(()=>{setExpenses(props.data);},[]);
    const ApplyFilterData = (selectedFilterList) => {
        setExpenses(props.data.filter(item => (selectedFilterList.includes(item.category))));
        if(selectedFilterList.length==0) 
        { 
        setExpenses(props.data);
        }
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
                                        <div style={{display:'flex'}}>category
                                            <FilterComponent filterList={filters}
                                                openControl={isOpen}
                                                applyFilter={(filter) => ApplyFilterData(filter)}
                                            ></FilterComponent>
                                        </div>
                                    </th>
                                    <th>amount</th>
                                    <th>detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses?.map((item, i) => {
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