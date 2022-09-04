import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />

      <h1 className={styles.title}>FIORA DE GIA</h1>
      <span className={styles.price}>Rp.150.000</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facilis
        assumenda, cupiditate ipsam odio mollitia blanditiis eum facere
        aspernatur temporibus quasi, amet eligendi perferendis quaerat nesciunt
        ducimus, minima deserunt quam beatae a officiis? Eligendi excepturi vel
        dolorem reprehenderit repellat. Exercitationem cumque officiis nostrum
        mollitia praesentium aliquam dolores, culpa aut hic!
      </p>
    </div>
  );
};

export default ProductCard;
