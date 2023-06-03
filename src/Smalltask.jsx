import React from 'react'
import data from './data.js'
import './Smalltask.css'


const Smalltask = (props) => {
  return (
    <div className='top-sell'>
                 <div className='heading'>
                        <span>{props.data}</span>
                        <span>Filter</span>
                    </div>
                    <div className='item-data'>
                        {
                            data.map(x =>(
                            <div className='item' key={x.id}>
                                <div>
                                    <img className='image' src={x.image} alt={x.name} />
                                </div>
                                <span>{x.name} </span><br />
                                <span>{x.quantity}</span>
                            </div>
                        ))
                        }
                    </div>
                </div>

  )
}

export default Smalltask