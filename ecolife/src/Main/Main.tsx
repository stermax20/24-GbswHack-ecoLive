import styles from "../Main/Main.module.css";
import Logo from "../Main/Eco Life.png";
import Box from "../Main/Component 1 (1).png";
import Brownie from "../Main/food/image 3 (1).png";
import Cokiee from "../Main/food/image 4.png";
import Steak from "../Main/food/image 5.png";
import Porridge from "../Main/food/image 6.png";
import { useState } from "react";
import Localmap from "../Main/KakaoTalk_20240109_201704174 1.png";
import EcoEffort from "../Main/Rectangle 4.png"
import Card1 from '../Main/Component 2 (4).png'
import Card2 from '../Main/Component 3.png'
import Card3 from '../Main/Component 4.png'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const ecoFoodRef = useRef(null);
  const ecoRecipeRef = useRef(null);
  const ecoEffortRef = useRef(null);

  const scrollToRef = (ref:any) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // 'start', 'center', 'end', or 'nearest'
        inline: 'nearest', // 'start', 'center', 'end', or 'nearest'
      });
    }
  };
  const navigate = useNavigate()
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);
  const [isPopupVisible3, setIsPopupVisible3] = useState(false);
  const [isPopupVisible4, setIsPopupVisible4] = useState(false);

  const [isPopupVisible5, setIsPopupVisible5] = useState(false);
  const [isPopupVisible6, setIsPopupVisible6] = useState(false);
  const [isPopupVisible7, setIsPopupVisible7] = useState(false);
  const [isPopupVisible8, setIsPopupVisible8] = useState(false);
  const [isPopupVisible9, setIsPopupVisible9] = useState(false);
  const [isPopupVisible10, setIsPopupVisible10] = useState(false);
  const [isPopupVisible11, setIsPopupVisible11] = useState(false);
  const [isPopupVisible12, setIsPopupVisible12] = useState(false);
  const [isPopupVisible13, setIsPopupVisible13] = useState(false);
  const [isPopupVisible14, setIsPopupVisible14] = useState(false);
  const [isPopupVisible15, setIsPopupVisible15] = useState(false);
  const [isPopupVisible16, setIsPopupVisible16] = useState(false);

  return (
    <div className={styles.body}>
      <header>
        <div className={styles.inner}>
          <div className={styles.head_container}>
            <div className={styles.head_brand}>
              <img src={Logo} />
            </div>
            <div className={styles.head_logo}>
              <div onClick={() => scrollToRef(ecoFoodRef)}>Eco Food</div>
              <div onClick={() => scrollToRef(ecoRecipeRef)}>Eco Recipe</div>
              <div onClick={() => scrollToRef(ecoEffortRef)}>Eco Effort</div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.inner}></div>
        </div>
      </section>
      <section className={styles.eco_food} ref={ecoFoodRef}>
        <div className={styles.box}>
          <img src={Box} className={styles.box} />
          <div className={styles.food}>
            <img
              src={Brownie}
              onMouseEnter={() => setIsPopupVisible(true)}
              onMouseLeave={() => setIsPopupVisible(false)}
              onClick={() => navigate("/brownie")}
            />
            {isPopupVisible && (
              <div className={styles.popup}>
                저는 고구마 브라우니에오 <br />
                자세한 내용은..
              </div>
            )}
            <img
              src={Cokiee}
              onMouseEnter={() => setIsPopupVisible2(true)}
              onMouseLeave={() => setIsPopupVisible2(false)}
              onClick={() => navigate("/cokiee")}
            />
            {isPopupVisible2 && (
              <div className={styles.popup2}>
                저는 오트밀 바나나 쿠키에오 <br />
                자세한 내용은..
              </div>
            )}
            <img
              src={Steak}
              onMouseEnter={() => setIsPopupVisible3(true)}
              onMouseLeave={() => setIsPopupVisible3(false)}
              onClick={() => navigate("/steak")}
            />
            {isPopupVisible3 && (
              <div className={styles.popup3}>
                저는 두부 스테이크에오 <br />
                자세한 내용은..
              </div>
            )}
            <img
              src={Porridge}
              onMouseEnter={() => setIsPopupVisible4(true)}
              onMouseLeave={() => setIsPopupVisible4(false)}
              onClick={() => navigate("/porridge")}
            />
            {isPopupVisible4 && (
              <div className={styles.popup4}>
                저는 오트밀 참치 미역죽에오 <br />
                자세한 내용은..
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={styles.local_food} ref={ecoRecipeRef}>
        <img src={Localmap} className={styles.map} />
        <div
          className={styles.point}
          id={styles.point5}
          onMouseEnter={() => setIsPopupVisible5(true)}
          onMouseLeave={() => setIsPopupVisible5(false)}
        >
          .
        </div>
        {isPopupVisible5 && (
          <div className={styles.popup5}>
            경기도 이천 <br />
            특산품 : 쌀
          </div>
        )}
        <div
          id={styles.point6}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible6(true)}
          onMouseLeave={() => setIsPopupVisible6(false)}
        >
          .
        </div>
        {isPopupVisible5 && (
          <div className={styles.popup5}>
            경기도 이천 <br />
            특산품 : 쌀
          </div>
        )}
        {isPopupVisible6 && (
          <div className={styles.popup6}>
            충청북도 충주 <br />
            특산품 : 사과
          </div>
        )}
        <div
          id={styles.point7}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible7(true)}
          onMouseLeave={() => setIsPopupVisible7(false)}
        >
          .
        </div>
        {isPopupVisible7 && (
          <div className={styles.popup7}>
            전라남도 완도 <br />
            특산품 : 김
          </div>
        )}
        <div
          id={styles.point8}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible8(true)}
          onMouseLeave={() => setIsPopupVisible8(false)}
        >
          .
        </div>
        {isPopupVisible8 && (
          <div className={styles.popup8}>
            전라남도 보성 <br />
            특산품 : 녹차
          </div>
        )}
        <div
          id={styles.point9}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible9(true)}
          onMouseLeave={() => setIsPopupVisible9(false)}
        >
          .
        </div>
        {isPopupVisible9 && (
          <div className={styles.popup9}>
            경상북도 영양 <br />
            특산품 : 고추
          </div>
        )}
        <div
          id={styles.point10}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible10(true)}
          onMouseLeave={() => setIsPopupVisible10(false)}
        >
          .
        </div>
        {isPopupVisible10 && (
          <div className={styles.popup10}>
            경상북도 풍기  <br />
            특산품 : 인삼
          </div>
        )}
        <div
          id={styles.point11}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible11(true)}
          onMouseLeave={() => setIsPopupVisible11(false)}
        >
          .
        </div>
        {isPopupVisible11 && (
          <div className={styles.popup11}>
            전라남도 나주  <br />
            특산품 : 배
          </div>
        )}
        <div
          id={styles.point12}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible12(true)}
          onMouseLeave={() => setIsPopupVisible12(false)}
        >
          .
        </div>
        {isPopupVisible12 && (
          <div className={styles.popup12}>
            전라남도 광주  <br />
            특산품 : 무등산 수박
          </div>
        )}
        <div
          id={styles.point13}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible13(true)}
          onMouseLeave={() => setIsPopupVisible13(false)}
        >
          .
        </div>
        {isPopupVisible13 && (
          <div className={styles.popup13}>
            경상남도 기장  <br />
            특산품 : 미역
          </div>
        )}
        <div
          id={styles.point14}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible14(true)}
          onMouseLeave={() => setIsPopupVisible14(false)}
        >
          .
        </div>
        {isPopupVisible14 && (
          <div className={styles.popup14}>
            경상북도 상주  <br />
            특산품 : 곶감
          </div>
        )}
        <div
          id={styles.point15}
          className={styles.point}
          onMouseEnter={() => setIsPopupVisible15(true)}
          onMouseLeave={() => setIsPopupVisible15(false)}
        >
          .
        </div>
        {isPopupVisible15 && (
          <div className={styles.popup15}>
            제주특별자치도  <br />
            특산품 : 감귤
          </div>
        )}
      </section>
      <section  ref={ecoEffortRef}>
        <div className={styles.eco_effort} >
          <img src={EcoEffort} className={styles.eco_img}/>
          <h1>Eco Effort</h1>
          <div className={styles.card_box}>
          <img src={Card1} className={styles.card1} />
          <img src={Card2} className={styles.card2} />
          <img src={Card3} className={styles.card3}/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
