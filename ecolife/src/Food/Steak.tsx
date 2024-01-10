import { useState } from "react";
import styled from "../Food/Steak.module.css";
import Modal from "./Modal";
import Header from "../Header/Header";
const Steak = () => {
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
                  두부
                  <div className={styled.amount}>
                    1모
                    <a
                      href="https://www.coupang.com/vp/products/1275124810?itemId=5680875020&vendorItemId=72979766160&src=1139000&spec=10799999&addtag=400&ctag=1275124810&lptag=AF0831180&itime=20240111032406&pageType=PRODUCT&pageValue=1275124810&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111032406&redirect=landing&traceid=V0-153-628e255743d53519&mcid=2cb3be30be494a30a873dd29bb9a3288&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111032405008101704088&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.two}>
                  계란
                  <div className={styled.amount}>
                    1개
                    <a
                      href="https://www.coupang.com/vp/products/7505247923?itemId=19654406617&vendorItemId=86703392105&src=1139000&spec=10799999&addtag=400&ctag=7505247923&lptag=AF0831180&itime=20240111032419&pageType=PRODUCT&pageValue=7505247923&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111032419&redirect=landing&traceid=V0-153-dea91e7058a59f3b&mcid=746a67657f69479fb4432c84f80efd55&placementid=&clickBeacon=NOqFnV%2Bw1xjPk1BTCn0nuUc%2FS%2Bs%2BMjTN9xAhyitvfEVP8lTWafaROx4ShZ4Qh0n1HmyS3th%2FhxUV%2Be0rz7oLoLg3YTsv14xSi%2BArqxQzG0Opq0TELZ4VSGes6ugkQftipqii%2BFdoWp%2B0IEjnan3UDgSaez5fyBrGPcfW74tELxOgwmGgw3ikcet75nb0%2BRUUtJEeOfO7e%2FUKx1EXCUSh5bOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2BhvKFDAPEE9D5Qc%2FlpjZqbR8VLjf5ZR7F8lwmnh%2BDTt5WGq4394SBHpbeLNGmLLa8JmUbcgnc3YHOIw3oM0B7M8VQdm%2BZgNtkyogKXcCt0Ns%2Fr%2BQdLfeGWKnTXOEPgC%2BUYj5AQx6NwrPtuANwzFC07BhKAoCgpIcZET2edB%2FUiBOUjMrzI4y9uRS0RoxyRv810Yw%2F8LkFj762IRxsrbibO73AgcoQId2ypPf6Z6OeYtNWBYZxwaw3WqEeQaJr06JJDXFhGD0LVlkU%2BHDUmnQNNm%2Fgo2%2FjMIZStNO4AahrE5tsJapevhAwrYk5kOsSKEvcH3G9Qeufhw4YN9UQCVI9EqjfzXmZHKJJU7OQ4wJdLJUCr86VlkS5D9x1WZv6QPzm51U8yqPwLX0n6o3dwxMuLuik8t6%2FffeLu9uVwwPEaXsrguOuda7kP8L8Wsyd7VywRnpeI7y6g%2FXEOKPEfYFPhDxnfJBJI3wSNAolP42cxDeMt8dvkblbLsFGu3MFo3gAga7%2FVoeac9Juu4hvd6IzaQEuYQnjQv90dUpSb4KsdtUVC1OxuRlJmzr%2BL4%2FQATeNj%2BdtEDT7bbcMo8eltMzBpeXT6T%2F2P1kWolmMwzFX3MgeBzq4Cwcc6kXX%2FqQVtpoWP&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111032418658279895593&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.three}>
                  팽이버섯
                  <div className={styled.amount}>
                    1봉
                    <a
                      href="https://www.coupang.com/vp/products/4978080895?itemId=6621218666&vendorItemId=73915101212&src=1139000&spec=10799999&addtag=400&ctag=4978080895&lptag=AF0831180&itime=20240111032437&pageType=PRODUCT&pageValue=4978080895&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111032437&redirect=landing&traceid=V0-153-b9f2caa6109ba90d&mcid=1441de45eb5e43789e272b36a745c2dc&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111032435348226119438&contentkeyword=&subparam="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.four}>
                  양파
                  <div className={styled.amount}>
                    1개
                    <a
                      href="https://www.coupang.com/vp/products/7297155913?itemId=18664370035&vendorItemId=82325863364&src=1139000&spec=10799999&addtag=400&ctag=7297155913&lptag=AF0831180&itime=20240111032455&pageType=PRODUCT&pageValue=7297155913&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111032455&redirect=landing&traceid=V0-153-ca438d218f30564c&mcid=fdf52f9d00ef4ec08afa649080dea719&placementid=&clickBeacon=W7OE67g%2BCNOh8pvh6wszfbhfwJYHJFLDn4FBt1r1uj%2BkPfcLtS7RETsV3TeUe%2BC4HmyS3th%2FhxUV%2Be0rz7oLoGoy%2FdLfrJLS8JTYdeFgzCc2sfZVT9RFr2hx1S7M41H02g4koOVP9tj7%2FO2JW0QxrZgjiwI34TOnilfoGvjLCcCoDXv11dWGEihJ9PeKA%2F4cM4OvE5A0%2F9CvrsFoIBnW9rOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2Bh20k4M3ZgxNrSTU3dcaU1aQVXPoK77A8BgJHp8fT1wVcQ6%2FqYvoIjezWYHhyRt4AFmUbcgnc3YHOIw3oM0B7M8XzAj9aQRsnC%2FW8S%2Fj16XzGWAzEaFKcwVWCW3G%2BGgjQoG9hLArVgL%2Bu7Acy4Qw%2FZ5Uw7QV0qtOcvItNcnkTF0jMDaAcb4QnJShsTJIsHdp7wAeFyojsqIADUET58THYwpQ%2F0pWdBYY7DkPzHH41WmY%2B3XYU0jw960AIWDLq7r2Z0Pi7tKjC0%2BmBK2O%2FWerQMVFyW896y%2FNk6y5cT9axY2%2BKvHiyXGVcKECUL9TJWPEa1iFn8z%2F%2FpH9Hcv6F78unFBI9G%2FV%2BcyMIf7QKg40l2%2BTBpZjKmhmR3tXT%2BOxRYbE5tbvSblFkPzpK6ac%2FbrBkuFkTLiRh%2BahFqNDSbDu65Aj9zRBB2PaIRIiCLuPernSp3Mha%2Bw0CKysaEBw2FCfbFXY27AMFiEgCtsV3jD52VjjYitZKsgPkmuXQlPsHH0rOlJzTUXUvmu1%2Fu6RTimfVU6lwrXDG%2Fg0OAK%2Fyfv1tk3%2FCbsOaDQ25Iv3UfpbCwZn%2BnIFSSxJc18w131d0y2osIiAJWPWhiG29ku9aURHSF9W4Q5TLjPQakngng4ROfyDYs&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111032454945226111543&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  당근
                  <div className={styled.amount}>
                    1/2T
                    <a
                      href="https://www.coupang.com/vp/products/1771785217?itemId=18804958641&vendorItemId=85935631188&src=1139000&spec=10799999&addtag=400&ctag=1771785217&lptag=AF0831180&itime=20240111032513&pageType=PRODUCT&pageValue=1771785217&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111032513&redirect=landing&traceid=V0-153-282dc81e4c036823&mcid=f76e30c93ed843529abeaca357194c80&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111032513391007752727&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  대파
                  <div className={styled.amount}>
                    1대
                    <a
                      href="https://www.coupang.com/vp/products/6528172171?itemId=19223677889&vendorItemId=86340363493&src=1139000&spec=10799999&addtag=400&ctag=6528172171&lptag=AF0831180&itime=20240111033439&pageType=PRODUCT&pageValue=6528172171&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033439&redirect=landing&traceid=V0-153-ea3e109dddeaf065&mcid=83c03c260c9d480f9895221b60b28bb7&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033439296208187540&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styled.ing2}>
                <div className={styled.five}>
                  전분
                  <div className={styled.amount}>
                    4T
                    <a
                      href="https://www.coupang.com/vp/products/2007181305?itemId=3414548322&vendorItemId=71401127566&src=1139000&spec=10799999&addtag=400&ctag=2007181305&lptag=AF0831180&itime=20240111033503&pageType=PRODUCT&pageValue=2007181305&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033503&redirect=landing&traceid=V0-153-628ffbef95010676&mcid=38021f666f934b808833bb5b374a6b75&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033502881074363654&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.six}>
                  소금
                  <div className={styled.amount}>
                    1/3T
                    <a
                      href="https://www.coupang.com/vp/products/7540632310?itemId=19822268545&vendorItemId=87362999085&src=1139000&spec=10799999&addtag=400&ctag=7540632310&lptag=AF0831180&itime=20240111033518&pageType=PRODUCT&pageValue=7540632310&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033518&redirect=landing&traceid=V0-153-18ad7f9d2ab5b898&mcid=bd7de4151dfe419b9ef684b304f1fcf7&placementid=&clickBeacon=HDSOXEje5mhutkOGUHxXqHrOH7f3KDRQY9%2BoZAKuZVQhNUfO1euPpGq0DwdN%2BfSCHmyS3th%2FhxUV%2Be0rz7oLoGoy%2FdLfrJLS8JTYdeFgzCen1imlqjOm8H6IrUI1ILZYI8Ic31F9zp9pXoKnu5VJM%2Bhe4F1clNaDla0UJOUgSWmyto97s%2FCnQ8BVmGYbshV%2BNb2CWmV3%2BuRmgvWtPoOkebOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2Bh3%2B6UkWS55VILiuswlsuq88p6fEFnBqI2dxVvKJhdbYtpaAeJnCvEhbjHUmhdOInxmUbcgnc3YHOIw3oM0B7M8YEYsBTJ8m1Ae%2F85IOODZ7jvzEzOW%2FgT2jMH9aMmvnKubmiQBCFqh8pz%2F7SR6YBSgRWuJcmUSBrVOOLc4yuifdMd49jMHnu%2F6EDnNEFLE03m7d8%2FJKC531%2BAg8c3XK92WziHMyHPs7amJixP1moZt2sKSWBFnY%2BIql0JG3A5gnoeyoabLL%2BSGmNP0SkUrUefYO%2F7DrY0C60SDpSZOsuuEHbXrGXYgwJ3XtcoYj1fi%2Fd67KxVnDM6n5i2VvsAdte%2B5JxF%2FawDh0x61vulkFjj7u6ikQTkUyFgAptXZLdKjnAk91xb%2FZqOsMe0gheN2DTG4%2FETnXKaVjRoFoD4J4ZIowiA%2FUuwGxiV7YSNElgmxZPkyPl2%2BcMCT%2Ffo1%2FeV6Zfjxdr1%2BNX1GEk8CgflauZgC6%2Fa%2FXOJOmpRw80oGeU52XRngjBhOy4yQeAiEdOfoREN0Kpia1vE3u%2BNwOlL6gFfYoyPPcwq2ZJfXo0pEa0BAyNLUuiVo%2BpnyW1f2EET6zOFRa3NuKEyaCRPwX6ezBnUwFdAc5J0KwE962F9T8VBj7M6&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033518005279895899&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.seven}>
                  후추
                  <div className={styled.amount}>
                    톡톡
                    <a
                      href="https://www.coupang.com/vp/products/274010252?itemId=14200733931&vendorItemId=81809988126&src=1139000&spec=10799999&addtag=400&ctag=274010252&lptag=AF0831180&itime=20240111033535&pageType=PRODUCT&pageValue=274010252&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033535&redirect=landing&traceid=V0-153-d8778c25e9339f75&mcid=4e03c4f7fc6c4c1a919d1295eb1b833b&placementid=&clickBeacon=%2Ben3cIcoONP4Vy3EHL6xmBTG0ezb4ZS9SGKu%2FFpeXMCH4ryz7zZoIWuL1g2U55FXHmyS3th%2FhxUV%2Be0rz7oLoLg3YTsv14xSi%2BArqxQzG0PJKeX9gLKnQXcl9Yiz%2BwjG4HcAh5riSzsBOp%2FsynxliKCFly37nfDpsnbAylI0vYuXeRiFfnPbpOQ9Pa1D3Hrwy8lhAG0W87iNPjebZwwvoLOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2Bhzygs1oldHP6P89O23J0DS5A%2FwAybBvGJubuz60eJQfKpRi3RnHM9F80b3RcjZ31ygF3Yjn7TuzF6kt3IKuoKo7TZ%2BVYVgFy9HqiAqCREyvhzbBzy%2BMfFn2RcjYcO60fUDpxJtQKrpKQ3coehrclx7fd7jTx6xDirXdaiusfCZbvG%2BcdaMfEty07zjho8a9BA1J4NMK7UJt4XqOAWMnqeKFyW896y%2FNk6y5cT9axY2%2BLKMh6l076N95dOXU2Y%2FDeGRIHXp5pnK5p0al0NkX%2BWGlieBzxOKuSDKYRNpldp1J5O7uw1uWK9TOy072VMvHmE8h5jZl4gZVgpQxj%2Bh0KIk%2BZ44pjNMaEuNoyKtpYe%2BBSW6cEByPni9OFYDeM%2F61tOdXd9Vw3TzIdNIMfdAHR%2FBg38OA9e98a33V8eij%2BIuEtbf60hoHJzriJqn8BfTmGBweSvvcoTQkiFFq7sp5giu0%2F%2BSCQn89jPIxnwDmwUBco6x3L6x6nwdEcLnC4ulFLE3G6BKPuBLGnOQd1gEBCKr6DEgkvtFBf049p513kTqwIKnt3Dv84fKuvX9Y9%2BpxZuP1rgCKluxzpC6hwexW8SPBtUVHqLazOPbwiCBtw%2BaCxhEPzeu3MLJm2nYk5pF9LA&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033534941278587687&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  돈가스 소스or케찹
                  <div className={styled.amount}>
                    적당히
                    <a
                      href="https://www.coupang.com/vp/products/7038378948?itemId=17397532980&vendorItemId=84566990724&src=1139000&spec=10799999&addtag=400&ctag=7038378948&lptag=AF0831180&itime=20240111033553&pageType=PRODUCT&pageValue=7038378948&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033553&redirect=landing&traceid=V0-153-faacc28f66261e8c&mcid=c285f34121e14c349f2cb8aab4fdacab&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033553051142499127&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.rec_url}>
            <div className={styled.recipe}>
              <h2>조리순서</h2>
              <div className={styled.rec1}>
                <h4>1. 먼저 두부를 면보에 싸서 물기를 꽉 짜줍니다.</h4>
                <h5>💡 물기를 최대한 잘 제거해야 나중에 부서지지 않아요</h5>
              </div>
              <div className={styled.rec2}>
                <h4>2. 야채들을 잘게 다져 줍니다.</h4>
                <h5>
                  💡 버섯은 다른 버섯 사용 가능하고 다른 야채 추가하셔도 되요
                </h5>
              </div>
              <div className={styled.rec3}>
                <h4>
                  3. 두부에 야채들을 섞어주신 뒤
                  계란1개와부침가루4T,소금1/3T,후추톡톡 뿌려 잘 섞어 줍니다.
                </h4>
                <h5>💡 전분가루에 간이 되 있어서 소금을 많이 넣지 마세요</h5>
              </div>
              <div className={styled.rec4}>
                <h4>
                  {" "}
                  4. 반죽을 양손으로 치대면서 동그랗게 모양을 만들어 준 뒤
                  겉면에 전분가루를 묻혀 줍니다.
                </h4>
                <h5>
                  💡겉면에 전분가루를 묻혀 주시면 부서짐을 막아줄수 있어요
                </h5>
              </div>
              <div className={styled.rec5}>
                <h4>
                  {" "}
                  5. 달궈진 후라이팬에 기름을 두르고 약불에서 익혀 줍니다
                </h4>
                <h5>💡자주 뒤집지는 마시고 1-2번만 뒤집어 주세요</h5>
              </div>
              <div className={styled.rec6}>
                <h4>
                  6. 접시에 담아내고 소스를 뿌려주시면 담백한 두부스테이크
                  완성입니다!한입 먹어보니 고기가 전혀 들어가지 않아도
                  담백하면서 참 맛있습니다!
                </h4>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Steak;
