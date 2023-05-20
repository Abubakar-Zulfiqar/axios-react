import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

import { ContextApi } from '../Context/Context'

const Update = (props) => {
    // const [id, setId] = useState(0)
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: '',
        email: ''
    })
    const navigate = useNavigate()
    const currentUserId = props.match.params.id

    const { users, editUser } = useContext(ContextApi)

    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    // const onChange = (e) => {
    //     setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        editUser(selectedUser)
        navigate('/')
    }

    return (
        <>
            <Container>
                <h1>Update</h1>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter name' value={selectedUser.name}
                            onChange={(e) => setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={selectedUser.name}
                            onChange={(e) => setSelectedUser({ ...selectedUser, [e.target.email]: e.target.value })}
                        />
                    </Form.Group>
                    <Link to='/read'>
                        <Button className='mx-3' variant='primary' type='submit'
                            onClick={onSubmit}
                        >
                            Update
                        </Button>
                    </Link>
                </Form>
            </Container>
        </>
    )
}

export default Update