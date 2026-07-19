import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/Numeral/Numeral";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/actions.type";
function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const totalPrice = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleError = (e) => {
    setCardError(e.error ? e.error.message : "");
  };
  const handlePrice = async (e) => {
    e.preventDefault();

    try {
      // 1 backend || function --> contact to client secret
      setLoading(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payments/create?total=${Math.round(totalPrice * 100)}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      // 2 react(client) side confirmetion
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(confirmation);
      // console.log(paymentIntent);
      // 3 after the confirmation --> order firestore database save, basket clear
      if (paymentIntent.status === "succeeded") {
        await db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        dispatch({ type: Type.EMPTY_BASKET });
      }
      setLoading(false);
      navigate("/orders", { state: { msg: "you have placed new Order" } });
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <LayOut>
      {/* Header part of payments */}
      <div className="p-5 text-center font-semibold text-2xl bg-[rgb(234,237,237)]">
        Checkout ({totalItem}) items
      </div>

      {/* payment methods */}
      <section className="p-[30px]">
        {/* address */}
        <div className="flex flex-col lg:flex-row p-[30px] gap-5">
          <h3 className="min-w-[300px] text-3xl lg:text-2xl font-bold text-center lg:text-start">
            Delivery Address
          </h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* product list */}
        <div className="flex flex-col lg:flex-row p-[30px] gap-5">
          <h3 className="min-w-[300px] text-3xl lg:text-2xl font-bold text-center lg:text-start">
            Review items and delivery
          </h3>
          <div>
            {basket?.map((items, id) => {
              return (
                <section key={id} className="flex gap-2.5">
                  <ProductCard
                    productData={items}
                    flex={true}
                    renderDescription={false}
                    renderAdd={false}
                    renderImg={true}
                  />
                </section>
              );
            })}
          </div>
        </div>
        <hr />

        {/* card number */}
        <div className="flex flex-col lg:flex-row p-[30px] gap-5">
          <h3 className="min-w-[300px] text-3xl lg:text-2xl font-bold text-center lg:text-start">
            Payment methods
          </h3>
          <div className="max-w-[350px] w-full">
            <div>
              {/* spiner form area */}
              <form onSubmit={handlePrice}>
                {cardError && (
                  <small className="text-red-500">{cardError}</small>
                )}
                <CardElement onChange={handleError} />
                <div className="p-5">
                  <div className="flex text-[16px] gap-2.5">
                    <span>
                      Total order | <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer mt-[15px] w-full border-none rounded-[5px] bg-[#febd69] hover:bg-[#d49644] px-2.5 py-2"
                  >
                    {loading ? (
                      <div className="text-[rgb(52,52,52)] flex justify-center items-center gap-2.5 ">
                        <ClipLoader size={15} color="" />
                        <p>Please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
