import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

import ItemsPage from './Items';
import RestaurantMenu from './RestaurantMenu';
import KhareedarOrderDetails1 from './KhareedarOrderDetails1';
import KhareedarOrderDetails2 from './KhareedarOrderDetails2';
import OrderPlaced from './OrderPlaced';
import PartialOrder from './PartialOrder';
import RequestItem from './RequestItemPage';
import DostFeedback from './DostFeedback';
import DostOrdersPage from './DostOrders';
import DostOrders3 from './DostOrders3';
import DostOrders4 from './DostOrders4';
import OrderFailed from './OrderFailed';
import OrderCompleted from './OrderCompleted';
import KhareedarFeedback from './KhareedarFeedback';
import CustomerLandingPage from './CustomerLandingPage';
import SeeOrders from './SeeOrders';

export default function UserFlow({navigation} : any): JSX.Element {
  const [page, setPage] = useState(0);
  const [locationSelected, setLocationSelected] = useState('');
  const [cart, setCart] = useState([]);
  const [partial, setPartial] = useState(false);
  const [genderPref, setGenderPref] = useState('None');
  const [custLocation, setCustLocation] = useState('');
  const [reason, setReason] = useState('');
  const [additional, setAdditional] = useState('');
  const [block, setBlock] = useState(false);
  const [orderData, setorderData] = useState();
  const [allOrders, setAllOrders] = useState([]);
  const [whichOrder, setWhichOrder] = useState(0);
  const [whichDostOrder, setWhichDostOrder] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(()=>{
    if (page==1) {
      setCart([])
    }
  }, [page])

  const AddToCart = (item: any) => {
    const index = cart.findIndex((cartItem: any) => cartItem.item_name === item.item_name);
    if (index !== -1) {
      const newCart : any = cart;
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  const RemoveFromCart = (item: any) => {
    const index = cart.findIndex((cartItem: any) => cartItem.item_name === item.item_name);
    if (index !== -1) {
      const newCart : any = cart;
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

    useEffect(()=>{
        console.log(`The page is ${page}`)
    }, [page])
  
  return (
    <>
      {page === 0 && <CustomerLandingPage setPage= {setPage} />}
      {page === 1 && (
        <ItemsPage
          setPage={setPage}
          setLocationSelected={setLocationSelected}
        />
      )}
      {page === 2 && (
        <RestaurantMenu
          AddToCart={AddToCart}
          RemoveFromCart={RemoveFromCart}
          cart={cart}
          setPage={setPage}
          locationSelected={locationSelected}
          setCart={setCart}
        />
      )}
      {page === 3 && <RequestItem setPage={setPage} />}
      {page === 4 && <KhareedarOrderDetails1 cart={cart} setPage={setPage} />}
      {page === 5 && (
        <PartialOrder
          cart = {cart}
          custLocation={custLocation}
          setPartial={setPartial}
          setCustLocation={setCustLocation}
          setGenderPref={setGenderPref}
          setPage={setPage}
        />
      )}
      {page === 6 && <OrderPlaced setPage={setPage} />}
      {page === 7 && (
        <KhareedarOrderDetails2
          partial={partial}
          genderPref={genderPref}
          cart={cart}
          custLocation={custLocation}
          locationSelected={locationSelected}
          setPage={setPage}
          allOrders = {allOrders}
          whichOrder = {whichOrder}
        />
      )}
      {page === 8 && (
        <DostFeedback
          reason={reason}
          additional={additional}
          setPage={setPage}
          setReason={setReason}
          setAdditional={setAdditional}
          setBlock={setBlock}
          orderId={orderId}
        />
      )}
      {page === 9 && (
        <DostOrdersPage setOrderData={setorderData} setPage={setPage} whichDostOrder={whichDostOrder} setWhichDostOrder={setWhichDostOrder} setOrderId={setOrderId}/>
      )}
      {page === 10 && <DostOrders3 orderData={orderData} setPage={setPage} whichDostOrder={whichDostOrder}/>}
      {page === 11 && <DostOrders4 orderData={orderData} setPage={setPage} whichDostOrder={whichDostOrder} />}
      {page === 12 && <OrderCompleted setPage={setPage} />}
      {page === 13 && <OrderFailed setPage={setPage} />}
      {page === 14 && (
        <KhareedarFeedback
          reason={reason}
          additional={additional}
          setPage={setPage}
          setReason={setReason}
          setAdditional={setAdditional}
          setBlock={setBlock}
          whichDostOrder={whichDostOrder}
          
        />
      )}
      {page === 15 && <SeeOrders setPage= {setPage} allOrders={allOrders} setAllOrders={setAllOrders} whichOrder={whichOrder} setWhichOrder={setWhichOrder}/>}
    </>
  );
  setPartial;
}
