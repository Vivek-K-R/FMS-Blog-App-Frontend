import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const logout=()=>{
        sessionStorage.clear()
        navigate("/")
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/create">Create a post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">View All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewmy">View My post</a>
        </li>
        <li class="nav-item">
          <button className="btn btn-success" onClick={logout}>LOG OUT</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar