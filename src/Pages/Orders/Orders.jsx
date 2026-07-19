import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { FadeLoader } from "react-spinners";

function Orders() {
  const [{ user }] = useContext(DataContext);

  const [orders, setOrders] = useState([]);
  const [process, setProcess] = useState(false);

  useEffect(() => {
    setProcess(true);

    if (user) {
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(
          (snapshot) => {
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              })),
            );

            // Stop loading after orders are fetched
            setProcess(false);
          },
          (error) => {
            console.error("Error fetching orders:", error);
            setProcess(false);
          },
        );

      // Cleanup Firestore listener
      return () => unsubscribe();
    } else {
      setOrders([]);
      setProcess(false);
    }
  }, [user]);

  return (
    <LayOut>
      <section className="p-[30px] bg-[#efeeee]">
        <div className="p-5 bg-white">
          <h2 className="text-2xl font-bold border-b-2 border-[#d49644] p-5">
            Your Orders
          </h2>

          {process ? (
            <div className="flex items-center justify-center h-[50vh]">
              <FadeLoader color="#36d7b7" />
            </div>
          ) : (
            <div>
              {orders.length === 0 ? (
                <p className="p-5 text-center font-bold text-xl">
                  You don't have orders yet.
                </p>
              ) : (
                orders.map((eachOrder) => (
                  <div key={eachOrder.id}>
                    <hr />

                    <p className="p-3">
                      <span className="font-bold">Order Id: </span>
                      {eachOrder.id}
                    </p>

                    {eachOrder.data?.basket?.map((order) => (
                      <ProductCard
                        key={order.id}
                        renderAdd={false}
                        renderImg={true}
                        flex={true}
                        productData={order}
                      />
                    ))}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
