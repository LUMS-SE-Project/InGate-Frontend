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

export default function UserFlow({navigation}): JSX.Element {
  const [page, setPage] = useState(1);
  const [locationSelected, setLocationSelected] = useState('');
  const [cart, setCart] = useState([]);
  const [partial, setPartial] = useState(false);
  const [genderPref, setGenderPref] = useState('None');
  const [custLocation, setCustLocation] = useState('');
  const [reason, setReason] = useState('');
  const [additional, setAdditional] = useState('');
  const [block, setBlock] = useState(false);
  const [orderData, setorderData] = useState();

    useEffect(()=>{
        console.log(`The page is ${page}`)
    }, [page])
  
  return (
    <>
      {page === 1 && (
        <ItemsPage
          setPage={setPage}
          setLocationSelected={setLocationSelected}
        />
      )}
      {page === 2 && (
        <RestaurantMenu
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
        />
      )}
      {page === 9 && (
        <DostOrdersPage setOrderData={setorderData} setPage={setPage} />
      )}
      {page === 10 && <DostOrders3 orderData={orderData} setPage={setPage} />}
      {page === 11 && <DostOrders4 orderData={orderData} setPage={setPage} />}
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
        />
      )}
    </>
  );
  setPartial;
}
