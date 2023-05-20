import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { v4 as uuid } from "uuid";

import { ContextApi } from '../Context/Context'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const { addUser } = useContext(ContextApi)

    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('submitted')
    //     axios.post('https://6385d33dbeaa64582669a496.mockapi.io/crud-axios', {
    //         name: name,
    //         email: email,
    //         header
    //     })
    //         .then(() => {
    //             navigate('/read')
    //         })
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            id: uuid(),
            name,
            email
        }
        addUser(newUser)
        navigate('/read')
        console.log(newUser)
    }
    // const onChange = (e) => {
    //     setName(e.target.value)
    //     setEmail(e.target.value)
    // }

    return (
        <>
            <Container>
                <div className='d-flex justify-content-between mt-4'>
                    <h1>Create</h1>
                    <Link to='/read'>
                        <Button variant='primary'>Show Data</Button>
                    </Link>
                </div>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Button variant='primary' type='submit' onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Create