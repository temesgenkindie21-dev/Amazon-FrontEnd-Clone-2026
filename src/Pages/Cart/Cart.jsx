import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/Numeral/Numeral";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/actions.type";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className="flex justify-center gap-5 mt-5 flex-col lg:flex-row ">
        <div className="p-5 h-auto">
          <h2 className="text-4xl font-bold p-2.5">Hellow</h2>
          <h3 className="text-xl font-bold p-2.5">Your shoping Basket</h3>
          <hr className="m-2.5" />
          {basket?.length === 0 ? (
            <p>Opps! No items in your cart</p>
          ) : (
            basket?.map((items, id) => {
              return (
                <section key={id} className="flex gap-2.5">
                  <ProductCard
                    productData={items}
                    flex={true}
                    renderDescription={true}
                    renderAdd={false}
                    renderImg={true}
                  />
                  <div className="flex flex-col justify-center items-center gap-[3px] ">
                    <button
                      className="py-[3px] px-4 cursor-pointer bg-white font-bold hover:bg-yellow-500 rounded-[5px]"
                      onClick={() => increment(items)}
                    >
                      <i className="ri-arrow-drop-up-line text-[30px]"></i>
                    </button>
                    <span>{items.amount}</span>
                    <button
                      className="py-[3px] px-4 cursor-pointer bg-white font-bold hover:bg-yellow-500 rounded-[5px]"
                      onClick={() => decrement(items.id)}
                    >
                      <i className="ri-arrow-drop-down-line text-[30px]"></i>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        <div className="">
          {basket?.length !== 0 && (
            <div className="p-5 min-w-[300px] h-[80%] flex flex-col items-center gap-5 border-[1px] border-[rgb(193,193,193)] rounded-[5px] bg-[rgb(242,241,241)]">
              <div className="flex gap-5 ">
                <p>Subtotal {basket?.length} items</p>
                <CurrencyFormat amount={total} />
              </div>
              <span className="flex gap-5 ">
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link
                to="/payments"
                className=" text-center items-center w-full border-none rounded-[5px] text-black bg-[#febd69] hover:bg-[#d49644]"
              >
                Continue to checkout
              </Link>
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
