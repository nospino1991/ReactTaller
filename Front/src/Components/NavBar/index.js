import React from 'react';



function Nav(){  //Propiedades que recibe 
  return (
            <nav className="navbar px-navbar">
                    <div className="navbar-header">
                <a>EBIM TECH</a>
                    <a className="navbar-brand" href="/"> </a>
                    </div>

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#px-navbar-collapse"
                        aria-expanded="false"><i className="navbar-toggle-icon"></i></button>

                    <div className="collapse navbar-collapse" id="px-navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="javascript:void(0);" alt="" className="px-navbar-image imgUsuario" />
                                <span className="hidden-md"></span>
                                </a>
                                <ul className="dropdown-menu">
                                <li><a href="/auth/signout"><i className="dropdown-icon fa fa-power-off"></i>&nbsp;&nbsp;Cerrar Sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

    )}
export default Nav;