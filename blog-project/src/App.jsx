import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import AuthService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  AuthService.getCurrentUser()
  .then((userData) => {
    if(userData) {
      dispatch()
    }
  })
  .finally()
}, [])
  return (
    <>
      <div>blog with appwrite</div>
    </>
  )
}

export default App
