import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import './Orders.css'
import { useStateValue } from "../StateProvider/StateProvider";
import Order from '../Order/Order'
import { collection, doc, orderBy, onSnapshot, query } from 'firebase/firestore';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if(user) {
//         db.collection('users')
//         .doc(user?.uid)
//         .collection('orders')
//         .orderBy('created', 'desc')
//         .onSnapshot(snapshot => (
//             setOrders(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             })))
//         ))
      
//     } 

//     else {
//         setOrders([])
//     }

//   }, [user])


useEffect(() => {
    if (user) {
        const ordersRef = collection(db, 'users', user.uid, 'orders');
        const ordersQuery = query(ordersRef, orderBy('created', 'desc'));

        const unsubscribe = onSnapshot(ordersQuery, snapshot => {
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        }, error => {
            console.error("Error fetching orders:", error);
        });

        return () => unsubscribe(); // Clean up the listener on unmount
    } else {
        setOrders([]);
    }
}, [user]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
