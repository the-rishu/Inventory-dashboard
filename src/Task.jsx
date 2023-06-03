import React from 'react'
import './Task.css'

import product from './product.js'
import Smalltask from './Smalltask'


const Task = () => {
  return (
    <div className='main-section'>
        <div className="slidebar">
            <div className='logo'>
                <span>Inventory</span><br />
                <span>Management</span><br />
                <span>System</span>
            </div>
            <div className='btn-section'>
               <button className='btn'>Dashboard</button><br />
               <button className='btn'>Item/Product Ctg.</button><br />
               <button className='btn'>Expiry</button><br />
               <button className='btn'>Transfer Order</button><br />
               <button className='btn'>Purchase Order</button><br />
            </div>
            <div className='btn-section'>
                <button className='btn'>Setting</button>
            </div>
        </div>

        {/* Dashboard Section */}
        
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='main-div'>
               
                <Smalltask data={"Top Selling Item"} />
                 <Smalltask data={"Sales Activity"}/>

                <div className='item-list'>
                    <h4>Product Details</h4>
                    <div className='detail'>
                        {
                            product.map(y => (
                            
                               <div className='detail-list' key={y.id}>
                                    <div className='product-detail first'> <span>Low Stock Item</span> <span>{y.low_stock_item}</span></div>
                                    <div className='product-detail'><span>All Items</span> <span>{y.all_items}</span></div>
                                    <div className='product-detail'><span>All Item Groups</span> <span>{y.all_item_groups}</span></div>
                                    <div className='product-detail'><span>Unconfirmed items</span><span>{y.unconfirmed_items}</span></div>
                               </div>
                               
                                   
                            ))
                        }
                    </div>
                </div>

              


            <div className='model'>
                <button className='btn-2' >General</button>
                <button className='btn-2'>Sales</button>
                <button className='btn-2'>Purchase</button>
            </div>

            <Smalltask data={"Expiry Soon"}/>

            <div className='model'>
                <button className='btn-2'>Add User</button>
                <button className='btn-2'>Add Item</button>
                <button className='btn-2'>Inventory Adjustment</button>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Task