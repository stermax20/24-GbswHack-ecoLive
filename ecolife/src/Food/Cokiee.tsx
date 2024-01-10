import Header from "../Header/Header";
import styled from "../Food/Cokiee.module.css";
import { useState } from "react";
import Modal from "./Modal";
const Cokiee = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const openMadal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };
  return (
    <div>
      <Header />
      <div className={styled.inner}>
        {/* <div className={styled.img}>
        <img src={Img} />
        </div> */}
        <div className={styled.recipe}>
          <h1>두가지 재료로 만드는 오트밀 바나나 쿠키</h1>
          <button onClick={openMadal} className="btn">
            계량법 안내
          </button>
          <Modal modalOpened={modalOpened} closeModal={closeModal} />
          <div className={styled.ingredient}>
            <h2>재료</h2>
            <div className={styled.ing_box}>
              <div className={styled.ing1}>
                <div className={styled.one}>
                  바나나
                  <div className={styled.amount}>
                    1개
                    <a
                      href="https://www.coupang.com/vp/products/218520566?itemId=12538585521&vendorItemId=79807000363&src=1139000&spec=10799999&addtag=400&ctag=218520566&lptag=AF0831180&itime=20240111030233&pageType=PRODUCT&pageValue=218520566&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111030233&redirect=landing&traceid=V0-153-1286db42c5993e56&mcid=aee6eab51dbe481b8f15dc9995878bb1&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111030233595142491628&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styled.ing2}>
                <div className={styled.five}>
                  오트밀
                  <div className={styled.amount}>
                    80g
                    <a
                      href="https://www.coupang.com/vp/products/5422062462?itemId=8191651240&vendorItemId=75479778188&src=1139000&spec=10799999&addtag=400&ctag=5422062462&lptag=AF0831180&itime=20240111030257&pageType=PRODUCT&pageValue=5422062462&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111030257&redirect=landing&traceid=V0-153-344a1b8163a66494&mcid=63a93eb1425e4e63b5441c990386ebc9&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111030256758208181053&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.recipe}>
              <h2>조리순서</h2>
              <div className={styled.rec1}>
                <h4>1. 먼저 잘 익은 바나나를 준비해주세요.</h4>
                <h5>
                  💡 익지 않은 바나나는 맛이 없어요.당류를 전혀 넣지 않기때문에
                  잘 익은 바나나를 사용해주시는 것이 맛있습니다.
                </h5>
              </div>
              <div className={styled.rec2}>
                <h4>2. 볼에 넣고 으깨주세요.</h4>
              </div>
              <div className={styled.rec3}>
                <h4>3. 오트밀을 준비합니다.</h4>
                <h5>
                  💡 오트밀종류에 따라 식감이 달라집니다. 저는 압착오트밀을
                  사용했습니다.
                </h5>
              </div>
              <div className={styled.rec4}>
                <h4> 4. 으깬 바나나에 압착오트밀을 넣고 섞어주세요.</h4>
              </div>
              <div className={styled.rec5}>
                <h4> 5. 실온에 30분간 불려둡니다.</h4>
                <h5>💡오트밀을 불리는 과정입니다.</h5>
              </div>
              <div className={styled.rec6}>
                <h4>6. 27g씩 나눠서 동그랗게 성형해주세요.</h4>
              </div>
              <div className={styled.rec7}>
                <h4> 7. 팬닝 후 160도로 예열된 오븐에 11분 구워주세요.</h4>
              </div>
              <div className={styled.rec8}>
                <h4>
                  {" "}
                  8. 한 김 식힌 후 드셔주시면 됩니다. 쫀득한 식감의
                  오트밀쿠키에요.바나나와 오트밀! 두가지재료로만 만들었기때문에
                  부담없이 먹을수 있는 다이어트간식이에요.
                </h4>
              </div>
              <div className={styled.rec9}>
                <h4>
                  9. 자극적인 맛이 아니라 심심하게 느끼실 수 있지만 씹으면 씹을
                  수록 고소합니다.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cokiee;
