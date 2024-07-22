import styles from "../css/GNB.module.css";
import NButton from "./NButton";
export default function GNB() {
  return (
    <div className={styles.GNBBody}>
      <NButton where="home"></NButton>
      <NButton where="calendar"></NButton>
    </div>
  );
}