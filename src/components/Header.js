import React from "react";
import { Link } from "react-router-dom";
import { Outlet} from "react-router-dom";
function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Feature">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/If_else">If_else</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
        </>
    )
}
export default Header;