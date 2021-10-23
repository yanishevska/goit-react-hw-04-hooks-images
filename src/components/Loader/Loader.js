import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';

function LoadSpinner() {
  return (
    <div className={s.loaderPosition}>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
  )
}
export default LoadSpinner;