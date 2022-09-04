import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>ADALAH BENAR INI MOTTO KAMI HAHAHA</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1995 Bintaro #304.
            <br /> Tangerang Selatan, 20205
            <br /> (021) 876-9033
          </p>
          <p className={styles.text}>
            1996 Pondok Aren #304.
            <br /> Tangerang Selatan, 20205
            <br /> (021) 876-9034
          </p>
          <p className={styles.text}>
            1995 Peninggilan #304.
            <br /> Tangerang, 20204
            <br /> (021) 876-9035
          </p>
          <p className={styles.text}>
            1995 Bintaro #304.
            <br /> Petukangan, 20205
            <br /> (021) 876-9033
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 - 23:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
