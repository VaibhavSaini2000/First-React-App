import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;
/*
<> </> is short form of React.Fragment which enables us to group together 
bunch of React elemets and then return it. The alternative is to use a div 
to enclose all the React elements.
Now if you use a div that'll add in one more node into our DOM by using 
the React fragment, you don't add in an extra node into the DOM, you just 
add in the React elements directly into the DOM. So that's the reason for 
using the React fragment here.
*/