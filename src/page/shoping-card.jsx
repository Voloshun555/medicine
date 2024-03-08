import { useSelector } from "react-redux";
import { Forma } from "../components/forma/forma";
import  ListPharmacies  from "../components/list-pharmacies/listPharmacies";
import s from "./pageStyle.module.scss";


const ShopingCard = () => {
const shop = useSelector((state) => state.shop.shopList);
  return (
    <div className={s.container}>
      <div className={s.wrapShop}>
        <Forma />
        <ListPharmacies medicines={shop} shopList={shop} step={ true} />
      </div>
      <div className={s.submit}>
        <p>Total price:</p>
        <button className={s.buttonSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default ShopingCard;
