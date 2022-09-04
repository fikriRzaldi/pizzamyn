import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>
                <span className={styles.name}>COLARZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double Ingridients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>Rp. 150.000</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>Rp. 300.000</span>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>
                <span className={styles.name}>COLARZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double Ingridients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>Rp. 150.000</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>Rp. 300.000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rp. 35000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>Rp. 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rp. 70000
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
