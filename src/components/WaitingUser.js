import React, { Component } from 'react'
import styled from 'styled-components'; 
export default class WaitingUser extends Component {
    render() {
        const {id,name,time} =  this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-12 my-3">
                <div>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{name}</p>
                             <p className="align-self-center mb-0">{time}</p>
                        </div>
                    </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
  .card {
    border-color: black;
  }
  

 
`;
 