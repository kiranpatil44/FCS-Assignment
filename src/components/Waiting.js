import React, { Component } from 'react'
import WaitingUser from "./WaitingUser";
import Title from './Title';
 const Waiting = () =>{
    let  users = [
    {
      id: 1,
      name: 'Bob Jenkins',
      invite_code: 'bobby231',

    },
    {
      id: 2,
     name: 'Jeremy Randall',
      invite_code: 'austin234',
      
    },
    {
      id: 3,
      name: 'John Apple',
      invite_code: '',
    
    },
    {
      id: 4,
      name: 'Bob Jenkins',
      invite_code: 'alvin145',
  
    },
    {
      id: 5,
      name: 'Greg Smith',
      invite_code: '',
    
    },
    {
      id: 6,
      name: 'Krishna Verma',
      invite_code: 'karthik321',
   
    },
     {
      id: 7,
     name: 'Shweta Sharma',
      invite_code: 'karthik3211',
    
    },
    {
      id: 8,
     name: 'Heer Singh',
      invite_code: '',
    
    },
    {
      id: 9,
     name: 'Rohan Smith',
      invite_code: 'bobby231',
    
    },
    {
      id: 10,
     name: 'Bob Smith',
      invite_code: '',
    
    }
  ]
const array3=[];
users.forEach((value) => 
{ 
    if(value.invite_code==''){
        array3.push(value)
    }
}
);

const newData = [];
array3.map((obj,index)=>{

     newData.push({
       ...obj,
      time : index+1
     })
});

  
//var finalArray = array1.concat(array2, array3);
  console.log(" final array of valid code"+JSON.stringify(newData))


        return (
            <>
            <div className="py-5"> 
            <div className="container">
                <Title name="" title="user in waiting List"/>
                <div className="d-flex justify-content-between m-2">
                  <h2>User-Name</h2>
                   <h2>Waiting-Time</h2>
                </div>
                <div className="row">
{newData.map((product)=>{
    return <WaitingUser key={product.id} product={product}  />
 })   }                  
            </div>
            </div>
            </div>
            </>
        )
    }


export default Waiting;
