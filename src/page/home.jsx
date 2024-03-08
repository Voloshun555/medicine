import React from 'react'
import { Pharmacies } from '../components/pharmacies/pharmacies'
import  ListPharmacies  from '../components/list-pharmacies/listPharmacies'
import s from "./pageStyle.module.scss"
import { useSelector } from 'react-redux'

export const Home = () => {
  const filter = useSelector((state) => state.filter.items);
   const shop = useSelector((state) => state.shop.shopList);
   
  const medicine = filter[0]?.medications;
  console.log("медикаменти:", medicine);
  console.log("список магазинів:", shop);

  return (
    <section className={s.container}>
      <div className={s.wrapShop}>
        <Pharmacies />
        <ListPharmacies medicines={medicine} shopList={shop} />
      </div>
    </section>
  );
}
