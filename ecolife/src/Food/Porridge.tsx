import { useState } from "react";
import styled from "../Food/Porridge.module.css";
import Modal from "./Modal";
import Header from "../Header/Header";
const Porridge = () => {
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
                  오트밀
                  <div className={styled.amount}>
                    60g
                    <a
                      href="https://www.coupang.com/vp/products/291586661?itemId=19739996956&vendorItemId=5294988339&src=1139000&spec=10799999&addtag=400&ctag=291586661&lptag=AF0831180&itime=20240111040528&pageType=PRODUCT&pageValue=291586661&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040528&redirect=landing&traceid=V0-153-ac8e889ddabe47c1&mcid=42f36994d3d14ee69d32d5380cf9ad93&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040527750125351663&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.two}>
                  참치
                  <div className={styled.amount}>
                    1캔
                    <a
                      href="https://www.coupang.com/vp/products/7563552512?itemId=19931659520&vendorItemId=87031185504&src=1139000&spec=10799999&addtag=400&ctag=7563552512&lptag=AF0831180&itime=20240111040556&pageType=PRODUCT&pageValue=7563552512&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040556&redirect=landing&traceid=V0-153-83a056dbff1c8efe&mcid=8e3bd2cb922d48579e1b23810731c8d6&placementid=&clickBeacon=b0ALLB2V1hSy%2Fyt%2BHKVryRsAqPA9ZBkhRrUYKY7RGmLORS99M4f%2F3QgIbzR1b8UZHmyS3th%2FhxUV%2Be0rz7oLoDW%2BTGvLbPHTbztxcKE5HuTNUM2PjI6yf4jyzd6BtBrIfqbd8IRWCfiQn%2BKlGQrpha8OylxpZiP0LDdkGEMd%2FgMnI3K0NBWixznnPrIT56MtbsXHhSM7Ia%2FB1CSS5Tm9ILOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2BhnVyIFAzR4R92wuvBMQ8l%2BPubakZ009zG97XS14xsZzTsFw5sBgcR%2FHGmgH%2BKuqfpmUbcgnc3YHOIw3oM0B7M8d5YidujsuK2%2B6GIXUxzDiA96oS4Y5epXwcHtetyzmC0PjCBZoij3cfX%2FSmHUZvee2Fr1e%2FzNDVIjACN61edCX51iDWNKVa6uXbNBxIATsKXVWJyVliDNl3Qaf%2FwXTNsU3AgcoQId2ypPf6Z6OeYtNX%2BVPHrkYqzOepMJFy4KJQCOJC9gRi1gmoo%2B4OAyAUM9vgo2%2FjMIZStNO4AahrE5tvp%2Fc%2BHHSHRnD4U57tFzYhJ3WbhE19lSlDnYz0clfupxTfzXmZHKJJU7OQ4wJdLJUCr86VlkS5D9x1WZv6QPzm51U8yqPwLX0n6o3dwxMuLuik8t6%2FffeLu9uVwwPEaXsrguOuda7kP8L8Wsyd7VywRnpeI7y6g%2FXEOKPEfYFPhDxnfJBJI3wSNAolP42cxDeMt8dvkblbLsFGu3MFo3gAga7%2FVoeac9Juu4hvd6IzaQEuYQnjQv90dUpSb4KsdtUVC1OxuRlJmzr%2BL4%2FQATeNj%2BdtEDT7bbcMo8eltMzBpeXT6T%2F2P1kWolmMwzFX3MgeBzq4Cwcc6kXX%2FqQVtpoWP&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040556089279894538&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.three}>
                  물
                  <div className={styled.amount}>
                    2.5컵
                    <a
                      href="https://www.coupang.com/vp/products/1767600418?itemId=13430258598&vendorItemId=80684818451&src=1139000&spec=10799999&addtag=400&ctag=1767600418&lptag=AF0831180&itime=20240111040705&pageType=PRODUCT&pageValue=1767600418&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040705&redirect=landing&traceid=V0-153-f10410bb040b0b37&mcid=a8b31043f65f4473ba9ffca47c0ddf73&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040705252125358685&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.four}>
                  소금
                  <div className={styled.amount}>
                    1꼬지
                    <a
                      href="https://www.coupang.com/vp/products/6978355650?itemId=12717968475&vendorItemId=70610150039&src=1139000&spec=10799999&addtag=400&ctag=6978355650&lptag=AF0831180&itime=20240111040740&pageType=PRODUCT&pageValue=6978355650&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040740&redirect=landing&traceid=V0-153-a696fe4d7aa8c57b&mcid=aca27be4dc704e8097e15163f6896325&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040739862042627207&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  깨
                  <div className={styled.amount}>
                    1숟가락
                    <a
                      href="https://www.coupang.com/vp/products/5047238981?itemId=6803306059&vendorItemId=74095994447&src=1139000&spec=10799999&addtag=400&ctag=5047238981&lptag=AF0831180&itime=20240111040803&pageType=PRODUCT&pageValue=5047238981&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040803&redirect=landing&traceid=V0-153-cd950dfa5b4d733a&mcid=69cd3b63dfdc4ea8b160e1c2384df43e&placementid=&clickBeacon=r%2B9o0Jaabr6%2F2QVA91mwQS92QCOH%2BLUrY%2BEnW6jVHTwRMaoYSv80FDfgQoVhIve2szublzT5zvnZkBLBCk%2F5Svz9wvdo9Jvz%2BZgV%2Bch1uJhpRm0fsw2rfVrRGaDVSyjrp%2BrnS2TtDqa1rjwnR2W6PnuBB7tOX1AVQ0pvW6%2Bp2WNE1BQbq1T3urbovRGaOwpCbvAro6SH1fyWryRSByXEXjMq09rl9bCF%2ByElqTh7rUAllAR8O1HzBpXZH5ij2bdMXgIpqcK%2F577MQPjFst7US%2BUQFx5H3TdMx8pkWUk9%2BaupNm3CiCnfWPjxDXKEf0%2Fo%2B8xavAzp4Oe0ydgqGrR8AZiSnmQgnjPRZ0kDFJDj3VCbR7fsf37rmfP%2B2GotFAhQywJmRJRmstayM%2BGKb6OX7pLAeu9MDZouf82k%2FMX5xU%2F%2BpH50ZFSCiBTTiDdAcuD38qOaUUICIn2XD3pb%2FyrzytIhECBVaNF2%2BZ64f4wGmFsn4YsAp6F8yk5PDidBxqcmOV1baffdn6gILtUqAXceeSNFu8GF1gj%2FBAGK6cRYgdrZ6I2jqYLlx%2FAI%2FQCLCu1GGKTxcbsq2el51NonQZc6cWT1QRarrWDkMphIhW7STf4uJ20sjlHxtuWISS%2BmC9TRXjP5G0nRH%2B6kfpoIpDVsD6%2FTxia1lNmCZTusW%2FTQPWdF3ZakQ6%2BPpBBp6QpsSUDLjow%2FNes7wM62zuNGYFauf%2B%2BiWKOW8fYFSyIvNFz1Sj55LkPjXe9JDTyX7Y7Pe3wo3RAJR68klMkvsoEzI0yfDtjWpx%2FNhf%2FIE%2BvL%2FtSc4GYklfg8CKYZ%2Bsr065pe7fIy95rXuiJ8GMPqA58grsPC4GybkSew2orPK4ESMblGADsN9VYv8cwKYQuXvI%2FOhqb9&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040802847161445208&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styled.ing2}>
                <div className={styled.six}>
                  표고버섯
                  <div className={styled.amount}>
                    2개
                    <a
                      href="https://www.coupang.com/vp/products/7540632310?itemId=19822268545&vendorItemId=87362999085&src=1139000&spec=10799999&addtag=400&ctag=7540632310&lptag=AF0831180&itime=20240111033518&pageType=PRODUCT&pageValue=7540632310&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111033518&redirect=landing&traceid=V0-153-18ad7f9d2ab5b898&mcid=bd7de4151dfe419b9ef684b304f1fcf7&placementid=&clickBeacon=HDSOXEje5mhutkOGUHxXqHrOH7f3KDRQY9%2BoZAKuZVQhNUfO1euPpGq0DwdN%2BfSCHmyS3th%2FhxUV%2Be0rz7oLoGoy%2FdLfrJLS8JTYdeFgzCen1imlqjOm8H6IrUI1ILZYI8Ic31F9zp9pXoKnu5VJM%2Bhe4F1clNaDla0UJOUgSWmyto97s%2FCnQ8BVmGYbshV%2BNb2CWmV3%2BuRmgvWtPoOkebOWDG2pnVN5wRPXTAu05%2BNmyntOdS04FAVXS9%2FrtT%2Bh3%2B6UkWS55VILiuswlsuq88p6fEFnBqI2dxVvKJhdbYtpaAeJnCvEhbjHUmhdOInxmUbcgnc3YHOIw3oM0B7M8YEYsBTJ8m1Ae%2F85IOODZ7jvzEzOW%2FgT2jMH9aMmvnKubmiQBCFqh8pz%2F7SR6YBSgRWuJcmUSBrVOOLc4yuifdMd49jMHnu%2F6EDnNEFLE03m7d8%2FJKC531%2BAg8c3XK92WziHMyHPs7amJixP1moZt2sKSWBFnY%2BIql0JG3A5gnoeyoabLL%2BSGmNP0SkUrUefYO%2F7DrY0C60SDpSZOsuuEHbXrGXYgwJ3XtcoYj1fi%2Fd67KxVnDM6n5i2VvsAdte%2B5JxF%2FawDh0x61vulkFjj7u6ikQTkUyFgAptXZLdKjnAk91xb%2FZqOsMe0gheN2DTG4%2FETnXKaVjRoFoD4J4ZIowiA%2FUuwGxiV7YSNElgmxZPkyPl2%2BcMCT%2Ffo1%2FeV6Zfjxdr1%2BNX1GEk8CgflauZgC6%2Fa%2FXOJOmpRw80oGeU52XRngjBhOy4yQeAiEdOfoREN0Kpia1vE3u%2BNwOlL6gFfYoyPPcwq2ZJfXo0pEa0BAyNLUuiVo%2BpnyW1f2EET6zOFRa3NuKEyaCRPwX6ezBnUwFdAc5J0KwE962F9T8VBj7M6&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111033518005279895899&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.seven}>
                  국간장
                  <div className={styled.amount}>
                    1스푼
                    <a
                      href="https://www.coupang.com/vp/products/6501532175?itemId=18369735043&vendorItemId=81879427942&src=1139000&spec=10799999&addtag=400&ctag=6501532175&lptag=AF0831180&itime=20240111040830&pageType=PRODUCT&pageValue=6501532175&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040830&redirect=landing&traceid=V0-153-b79100224b3e98b7&mcid=ceb2d638559b460b98cb3d461a479033&placementid=&clickBeacon=1vho29L9WQs2AIU9OjO8dAWminzDLgdoJ0pI7ELngem%2FxblvB9AvRDJ0hkLmBz5M3k0H4rPWu0okZXcv921a%2BxUdtGo6aDxU4V8KcUJGztNueLgUJEvYStFrGB1OFVuWYIHRskq2OUlgggUNJPZj3vursCe94xj6%2BnBBIqQR7%2BxZS9z7UEat1DE5E4HtgmAHPScrRd9OOn9yEUqtcryg3RITSw821xKPBS%2FIPgmGIUB2wYj9J%2FOP1VvMzPBkR0l58BOP0xg4mXq0tAr2BbNcflgt6bhpTkPPFaQvu9%2F%2FBlxY1%2B1FwB3de5geX9GD0zKvN2dkK9ibSBCKY64XsMvffPKLx3cYXwBztsrIupRo8pCT%2FK341YHJ8XBjW5077T1mvRaKjw5D%2BaClTpq8yd4pCAllTqWcLBr9BxopiEMAkBLhL%2FaFO1MwVSM7PXmK2CcO927f4XOgBj7oMwxl8Bsn3znemWj1a4czP3cwBjFA0W%2BqSklvzo9rkjhDa4Fhk4Oo4hTg4PbxaPdw6NaLN3rAY887ekDdhWQp%2F2Zg243yDyqmbgB0GJXtBXXNDt27ExHVdwd%2BqlsSfdtUdxNzWYI2WFG2uVVqs82GAjwhF4OgOCYKL%2BktvDe%2B8%2BulX8np%2FHyo%2FRjzPoTZDA3dHNSdpt819jEvN0TLbg5DNRlt3uhX7U1q%2BrGKWqaNN20KlucKwR1skXNbj77c%2F%2BCqcOlO%2Bgvde1TDvUBYC0j7RZ8Aka21V2vJ44jpj%2FxFYLpw%2FdwlseKVuxCq0MoPSla6bkBp9xCTaSzfBfy2Urh4jTDg0On5%2BBD5b8TC7QVI%2B3rz9ktDpzUBW2sxMF5VFiwRB%2B1FlqrK4YCZ7B9tiI1%2Bni3UDM98fmd9LztOzHT%2FCFkS0OS%2F2%2B%2F4&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040829945208182615&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  참기름
                  <div className={styled.amount}>
                    1스푼
                    <a
                      href="https://www.coupang.com/vp/products/4839606171?itemId=150802728&vendorItemId=76804555183&src=1139000&spec=10799999&addtag=400&ctag=4839606171&lptag=AF0831180&itime=20240111040849&pageType=PRODUCT&pageValue=4839606171&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111040849&redirect=landing&traceid=V0-153-ed94b07afc9c7a07&mcid=54eaf071c5614bf9a5a71cf08cbd08d3&placementid=&clickBeacon=Ss%2FkYCvgOXmkKWE72xZQ25qs%2FN4NhaB3E%2FOsq0O3H7JxJthE5qFH%2BZ%2FYjEwgXvdC%2BW7DR1j%2FuGkn4%2BEVDnC2sX9R2pV7NRfLVdfS6uvj%2Fao3hQOE%2BkGuw1B35EzG1xM2L0znCGvh1U7yFQ5UDaIokD7RBBSLWMDMZtQ2jN61hkDGQFe6%2BSoYchxM%2Fi7BxB93824Lmnz8DVIwcwLEZSQ%2FOdsYcx6ci6E4tfrA82JndrtHo4%2FMbx%2FXuJqgUhVHlCjvXuAgmlqA2S7UFfEZatoRoHr%2BjQXhabDC3rBgvcH5CKIa0ssvnUsLDZGierB8Df2G4TKre%2Fh3qylWQ3IrTFIZ8KvJ%2BFNPmXRHfoac5ku5EYOjmX52umv7A11hDdDHunYNbgjdJYxnOXhThC3%2B90ujbLS1L522%2BRkLnMlWBiZYacy2dWzOHZU5gIms8NkTFNalc4Q17IXrDfOabyNbV8f98Dh2bSkcNNNS3nJa8vhWi1Py%2FWIhnBz1u05sNMJFEl5XBXO%2BxAh%2Bor8AIKCQobADzKk9DObm7SJZgHOpLCTMkhWZd4AcH31Wh%2F5xse7HxuB8pYGlRQrQf%2Fi5s348NEvtWJJCDZ9mlqLDIA66Id%2BCbvDD2n%2Fnts34liPyi3oys1YMi1Djep7yGZjtFLtMW3AlxDM9npyafAD6BGO7z3J418eRCE9b4IbYYQ8DIC2u1hwXDy2Gr6sxGx2tW2BAJQmPVZ7tH4luUwVOe19VwjwHjYYex5YW8o1hMoTt539bfuGJqVT%2FKfoH4zRqnZP6kBEvw3ceFao1pDZYG%2FFSJq061v%2BT9b4zyHxkR%2FR6yOOkVNghlyy%2FyAPMWDUg1FNhAYZ7Bhwvx6KjbaJzcfQuCwyoYE8Xact9ez79qOeOmFKaKcFu&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111040849195321158236&contentkeyword=&subparam=&isAddedCart="
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
                  <h4>
                    1. 저울이 없으시면 대략 종이컵을 이용하시면 되는데요
                    오트밀1컵이 약 60g, 버섯은 없으면 패스해도 무방해요
                  </h4>
                </div>
                <div className={styled.rec2}>
                  <h4>2. 참치는 기름을 빼고 준비해주세요</h4>
                </div>
                <div className={styled.rec3}>
                  <h4>
                    3. 버섯은 작게 다져주고 몇조각은 슬라이스해서 준비했어요^^
                  </h4>
                </div>
                <div className={styled.rec4}>
                  <h4>
                    {" "}
                    4. 물2.5컵에 김치, 국간장1, 소금 한꼬집넣고 끓여주세요
                  </h4>
                </div>
                <div className={styled.rec5}>
                  <h4>
                    {" "}
                    5. 물이 끓어오르면 오트밀과 참치를 넣고 오트밀이 퍼질때까지
                    끓여주세요
                  </h4>
                  <h5>💡저는 참치2/3을 넣고 나머지는 토핑으로 올려줬어요^^</h5>
                </div>
                <div className={styled.rec6}>
                  <h4>
                    6. 푹퍼진 오트밀참치죽은 그릇에 담고 참기름,깨를 뿌려내면
                    완성
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
export default Porridge;
