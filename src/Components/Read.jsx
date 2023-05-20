import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { Container, Table, Button } from 'react-bootstrap'
import { ContextApi } from "../Context/Context";

const Read = () => {
    const { users, removeUser } = useContext(ContextApi);

    // const [data, setData] = useState([])

    // const getData = useContext(ContextApi)
    // let arr = [getData]

    return (
        <>
            <Container>
                <div className='d-flex justify-content-between mt-4'>
                    <h1>Read</h1>
                    <Link to='/'>
                        <Button variant='secondary'>Create Data</Button>
                    </Link>
                </div>
                <Table className='mt-5' striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        users.map(user => {
                            return (
                                <tbody key={user.id}>
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/update{user.id}$`}>
                                                <Button variant='success'>
                                                    Edit
                                                </Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button variant='danger'
                                                onClick={() => removeUser(user.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                </Table>
            </Container>
        </>
    )
}

export default Read