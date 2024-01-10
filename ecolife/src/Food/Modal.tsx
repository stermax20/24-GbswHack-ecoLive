import styles from "../Food/Modal.module.css";

const Modal = (props: any) => {
  return (
    <>
      {props.modalOpened ? (
        <div>
          <div className={styles.overlay} onClick={props.closeModal}></div>
          <div className={styles.content_box}>
            <h2>계량법 안내</h2>
            <div className={styles.box}>
              <div className={styles.title}>1큰술(1T, 1Ts) = 1숟가락</div>
              <div className={styles.amount}>
                15ml = 3t 
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1작은술(1t, 1ts)</div>
              <div className={styles.amount}>
                <br /> 5ml 
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1컵(1Cup, 1C)</div>
              <div className={styles.amount}>
                <br /> 200ml = 16T
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1종이컵</div>
              <div className={styles.amount}>
                <br /> 180ml
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1oz</div>
              <div className={styles.amount}>
                <br /> 28.3g
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1파운드(lb)	</div>
              <div className={styles.amount}>
                <br /> 약 0.453 킬로그램(kg)
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1갤런(gallon)	</div>
              <div className={styles.amount}>
                <br /> 약 3.78 리터(ℓ)
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1꼬집	</div>
              <div className={styles.amount}>
                <br /> 약 2g 정도이며 '약간'이라고 표현하기도 함
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />조금</div>
              <div className={styles.amount}>
                <br /> 약간의 2~3배
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />적당량</div>
              <div className={styles.amount}>
                <br /> 기호에 따라 마음대로 조절해서 넣으란 표현
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1줌</div>
              <div className={styles.amount}>
                <br /> 한손 가득 넘치게 쥐어진 정도
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />크게 1줌 = 2줌	</div>
              <div className={styles.amount}>
                <br /> 1줌의 두배
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1주먹	</div>
              <div className={styles.amount}>
                <br /> 여자 어른의 주먹크기, 고기로는 100g
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />1토막	</div>
              <div className={styles.amount}>
                <br /> 2~3cm두께 정도의 분량
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />마늘 1톨	</div>
              <div className={styles.amount}>
                <br /> 깐 마늘 한쪽
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />생강 1쪽	</div>
              <div className={styles.amount}>
                <br /> 마늘 1톨의 크기와 비슷
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />생강 1톨	</div>
              <div className={styles.amount}>
                <br /> 아기 손바닥만한 크기의 통생강 1개
              </div>
              </div>
            <div className={styles.box}>
              <div className={styles.title}><br />고기 1근	</div>
              <div className={styles.amount}>
                <br /> 600g 
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />채소 1근	</div>
              <div className={styles.amount}>
                <br /> 400g
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}><br />채소 1봉지	</div>
              <div className={styles.amount}>
                <br /> 200g 정도 
              </div>
            </div>
            <button onClick={props.closeModal} className={styles.btn}>닫기</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Modal;
