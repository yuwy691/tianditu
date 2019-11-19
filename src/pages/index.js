import styles from './index.css';
import MapView from "@/pages/component/MapView";

export default function () {
  return (
    <div className={styles.normal}>
      <MapView className={styles.map}/>
    </div>
  );
}
