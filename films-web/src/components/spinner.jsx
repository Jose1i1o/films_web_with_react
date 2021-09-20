import LoadingIcons from "react-loading-icons";
// import styles from "./spinner.module.css";
import { ImSpinner2 } from "react-icons/im";
import styles from "./spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.spinner}>
      {/* <LoadingIcons.Puff stroke="#98ff98" strokeOpacity={0.125} speed={1.5} /> */}
      <ImSpinner2 className={styles.spinning} size={60} />
    </div>
  );
}
