import { useNavigate } from "react-router-dom";
import styles from '../Header/Header.module.css'
import Logo from '../Main/Eco Life.png'
const Header = () => {
  const navigate = useNavigate();
  return(
    <div>
       <header>
        <div className={styles.inner}>
          <div className={styles.head_container}>
            <div className={styles.head_brand}>
              <img src={Logo} />
            </div>
            <div className={styles.head_logo} onClick={() => navigate("/")}>메인으로 돌아가기</div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header