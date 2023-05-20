import React, { createContext, useEffect, useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
    ADD_USER,
    EDIT_USER,
    REMOVE_USER
} from './UserTypes'
import UserReducer from './UserReducer'

const initialState = {
    users: []
}

export const ContextApi = createContext(initialState)

export const Context = (props) => {
    // const [id, setId] = useState(0)
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [data, setData] = useState([])

    // const navigate = useNavigate()

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // const getData = () => {
    //     axios.get('https://6385d33dbeaa64582669a496.mockapi.io/crud-axios')
    //         .then((res) => {
    //             setData(res.data)
    //             console.log('data is ....', res.data)
    //         })
    // }


    // const handleUpdate = (id) => {
    //     axios.put(`https://6385d33dbeaa64582669a496.mockapi.io/crud-axios/${id}`, {
    //         name,
    //         email,
    //     })
    //         .then(() => {
    //             navigate('/read')
    //         })
    // }


    // const handleDelete = (id) => {
    //     axios.delete(`https://6385d33dbeaa64582669a496.mockapi.io/crud-axios/${id}`)
    //         .then(() => {
    //             getData()
    //         })
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    // Actions


    const addUser = (user) => {
        dispatch({
            type: ADD_USER,
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: EDIT_USER,
            payload: user
        })
    }

    const removeUser = (id) => {
        dispatch({
            type: REMOVE_USER,
            payload: id
        })
    }

    return (
        <ContextApi.Provider
            value={{ users: state.users, removeUser, addUser, editUser }}>
            {props.children}
        </ContextApi.Provider>
    )
}
