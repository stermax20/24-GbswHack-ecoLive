import { useState } from "react";
import styled from "../Food/Brownie.module.css";
import Header from "../Header/Header";
import Img from "../Main/food/image 3 (1).png";
import Modal from "./Modal";

const Brownie = () => {
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
          <h1>고구마 브라우니</h1>
          <button onClick={openMadal} className="btn">
            계량법 안내
          </button>
          <Modal modalOpened={modalOpened} closeModal={closeModal} />
          <div className={styled.ingredient}>
            <h2>재료</h2>
            <div className={styled.ing_box}>
              <div className={styled.ing1}>
                <div className={styled.one}>
                  박력분
                  <div className={styled.amount}>
                    60g
                    <a
                      href="https://www.coupang.com/vp/products/7779357080?itemId=21021955975&vendorItemId=88084985553&src=1139000&spec=10799999&addtag=400&ctag=7779357080&lptag=AF0831180&itime=20240111010542&pageType=PRODUCT&pageValue=7779357080&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111010542&redirect=landing&traceid=V0-153-a602055d7cfd29f1&mcid=e8674329c16646ffae9306e8ff161ad2&placementid=&clickBeacon=5WdBK6zOJEMHGBdcBWdIcghCxG1oKIYbwe8elebSMG6KVh5RyPwVK0uC04LRaI2a%2BW7DR1j%2FuGkn4%2BEVDnC2sX9R2pV7NRfLVdfS6uvj%2FaqYKWdmuHjFJGkWIHF1PyM%2FM2xVpy%2B3nM0JNKXSDm6rfqp29OfUqCGD9%2B0ei3iUwvnVF%2BfzMmo8jSJrKBcSNxqv%2BftxFbAJGMQmu20ua7QoRNsYcx6ci6E4tfrA82JndrtHo4%2FMbx%2FXuJqgUhVHlCjvBnQM4WMMhe%2B1tKREBpPexaHPMXzUcKkDq87RQ%2F6U7m4mqQ2n4Eq2tK7NVtySQb0T4TKre%2Fh3qylWQ3IrTFIZ8LqaT8XIp4%2BRcbxX%2Bu5nqcY8KP9yiJLh2cSzUHll7SU2qYrnR8BC66oRBmCKDr0ua7S1L522%2BRkLnMlWBiZYacwHpeLTOSC9fZ9%2FcsuAe1M7kGL1Hws9MhxrrdYQIkyZDXkiYNoG3TzQin1qJNSHr19y7bnc1pGwQVfyDmQSMTqHfFc%2FiD%2Fyt9kSDD7MCnOOsDiHMyHPs7amJixP1moZt2sb65IMWIAU2INOxVpEx3peFXB%2F4pIUv%2BnzkRW6VToxu%2FX2w6SGsq8rHQn8eE3x2JXrnvcwsM%2FlOV3Z6oGLi8jItzaTG073pY74zfEy8V8F1ly4CWbUI4LwgNd1%2BJ9Jd6WAj4wIxiPFVPQ7xB7EIwT%2BAnighyM8l%2FYf1jJYf5DrP0yez3dTFD79h9LL1guLln7zaHWAMmJUHcZpuC8d2dtE7SEhohNtFzC8tuGvbO3hAsGwlakS35R2UJLNh8QsGfEr7VTPsp%2B%2Fo0EjvfBnOKHkIYTK1Mg7%2FG1GiXixfztXJB1kUZ7ssVMM34TgA8aB8P%2BadEGGmSRAK2DuiNZTPwzY&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111010541802101708830&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.two}>
                  버터
                  <div className={styled.amount}>
                    80g
                    <a
                      href="https://www.coupang.com/vp/products/604230?itemId=89966135&vendorItemId=76549804053&src=1139000&spec=10799999&addtag=400&ctag=604230&lptag=AF0831180&itime=20240111011314&pageType=PRODUCT&pageValue=604230&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111011314&redirect=landing&traceid=V0-153-c54fb6cd91df291d&mcid=8929a456e2104a769873fbe5def2c0eb&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111011313984005019403&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.three}>
                  달걀
                  <div className={styled.amount}>
                    3개
                    <a
                      href="https://www.coupang.com/vp/products/4842938988?itemId=6261001344&vendorItemId=73556670010&src=1139000&spec=10799999&addtag=400&ctag=4842938988&lptag=AF0831180&itime=20240111011329&pageType=PRODUCT&pageValue=4842938988&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111011329&redirect=landing&traceid=V0-153-325498fc41a35b3d&mcid=54adefaa46234492b283079c2f6e041d&placementid=&clickBeacon=&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111011329418278581603&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.four}>
                  코코아가루
                  <div className={styled.amount}>
                    2큰술
                    <a
                      href="https://www.coupang.com/vp/products/7816625752?itemId=21217447357&vendorItemId=88278448611&src=1139000&spec=10799999&addtag=400&ctag=7816625752&lptag=AF0831180&itime=20240111011347&pageType=PRODUCT&pageValue=7816625752&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111011347&redirect=landing&traceid=V0-153-3bcb9efc51bfd8d2&mcid=6471814861bd4ce89b8c007f39917dee&placementid=&clickBeacon=J0MXD1%2FqwG2xKDbLsjkxPnH8U9ttU9kwigJOz61DKmjm7C9xd9P5OUm6C%2FScXzLUkBV5WTCTa1je25GPmHH9IzqAJpyIOFTSVk4SbRJih4bM17y400gHe97w%2BxIyt4KY55msEhvyOO8kFd6UTSC3cnwtCfo%2BVeqREUyW1juEg3X515kmOmr9Hy7hC1uG6DNZhXZWQVzghJMSgNyZP1aJeRLZW%2FSrZAMyvJ5n5hCRxrvFZk2sg4%2B8ZpldCkJEj3Q%2FSmtN6aW6zhrc%2BgvBjV%2FBw%2BdXvA75Tl5ydBMsNUEgBP1YBBdilk4QwlsTh2%2B3zYEZeqPvoRW0XuGWYnTK9NFC0PvMWrwM6eDntMnYKhq0fAHaW%2FsQ%2B1Q4qIZHVHgaMS7NN2hDChvDCsIzEBZ5ZUBSn8PcEw9RO1Mf8Wlw6ikCQDodOFVQdryp24TujLbJtL60ryvLv7Q50op%2Fx2OsjmSKxdB%2FVxTd2mOtnm6G9LG0lx%2FM%2FxhEjnDqBO99wrf8uvuUWcdac4gnkAqSdiAYMBPjKDldW2n33Z%2BoCC7VKgF3HnmBr6g4wSAAoDCuUacFT7Ug0Gd24pXzQTAMqhJ0QMB2GRik8XG7KtnpedTaJ0GXOnFk9UEWq61g5DKYSIVu0k3%2BLidtLI5R8bbliEkvpgvU0V4z%2BRtJ0R%2FupH6aCKQ1bA%2Bv08YmtZTZgmU7rFv00D1nRd2WpEOvj6QQaekKbElAy46MPzXrO8DOts7jRmBWrn%2FvolijlvH2BUsiLzRc9Uo%2BeS5D413vSQ08l%2B2Oz3t8KN0QCUevJJTJL7KBMyNMnw7Y1qcfzYX%2FyBPry%2F7UnOBmJJX4PAimGfrK9OuaXu3yMvea17oifBjD6gOfIK7DwuBsm5EnsNqKzyuBEjG5RgA7DfVWL%2FHMCmELl7yPzoam%2FQ%3D%3D&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111011347125306254815&contentkeyword=&subparam=&isAddedCart="
                      target="_blank"
                    >
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styled.ing2}>
                <div className={styled.five}>
                  다크초콜릿
                  <div className={styled.amount}>
                    160g
                    <a href="https://www.coupang.com/vp/products/7810483591?itemId=21183335524&vendorItemId=88244722794&src=1139000&spec=10799999&addtag=400&ctag=7810483591&lptag=AF0831180&itime=20240111025004&pageType=PRODUCT&pageValue=7810483591&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111025004&redirect=landing&traceid=V0-153-01623f903414b683&mcid=1e11a8374ab347da82ceeed692a5207c&placementid=&clickBeacon=keABxxAvH8MseUbYnWxhWBpk2RnpcVE2m3ri2dAQzAi7IAom0UcqSW1UMvVY8WztkBV5WTCTa1je25GPmHH9IzqAJpyIOFTSVk4SbRJih4b0X1mXQzP28kbSNVRNn78TvC1Of1FTNtNb9mZKlFTxf%2Bh3UgeHpv1WSjFukfJvFix9uqOuIgSSiYbbm0AiYkfAo3mJNlsuU6TB%2F3fBzrFqvFdO2Slfk4HmKYu%2B9QWWD6XFZk2sg4%2B8ZpldCkJEj3Q%2FSmtN6aW6zhrc%2BgvBjV%2FBw%2BF1OLDCGr1wVlRJhRO%2BCbHfSXL7GJIlpZvqSi4vbyCi38KIucdmfZ5Dt%2BMSF8wDWVZbGY98GoUKLsUUYhTXIo0WGJiQwEyyzl2MdRfB%2BN07O7Jxpq%2BBgKtmnC0noIOkJnMsLEUl1Nix4KAKdj%2B4qgqrmFH9YCobhWn5IAwjaKTjc2GG6%2FoYjVdtSY%2BEG5fY%2FIiavvQlXuCUAKwJQiTp3lKjazZFRpvoFZT2HvpZDgRDsmOf2qJJEq28lulu37WGBcjEGpW53R%2BWB2tYM9toILpp6td%2FsRqeTYc9kse459MVNXNTJHKsOCoXJE11wyYrIZsT18KWDh1ZpE7P5dYjhP%2FnXh%2BTv5zBnIFdtJ8vPTb7GGlZ91nmb6Ejm31nuyXUYYHeyOJtg8Kt1naNpgsRc714rwShCOUTnVOTGqKcZkJ5sI%2FyNUPaBXTT42XhsR5cDWnZ3lnlcRjFQoKffTdHcM5vmMXYxomjJ6tO%2B3XUG57hrup2FQqUOmMByjFfBRU8FgEREmYTfsXwjLANQtjLJlf0%2BrJMzCcKO6QRicyhi4JuDUn1hWg%2FK37%2FjW2bEGmbLSIG7oEJIKwgWRZCJ1xRy4mh1KHUUCknwKbMtZ306Yv5&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111025003857278583816&contentkeyword=&subparam=&isAddedCart=" target="_blank">
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.six}>
                  흑설탕
                  <div className={styled.amount}>
                    70g
                    <a href="https://www.coupang.com/vp/products/7143767691?itemId=521438760&vendorItemId=83651647865&src=1139000&spec=10799999&addtag=400&ctag=7143767691&lptag=AF0831180&itime=20240111025020&pageType=PRODUCT&pageValue=7143767691&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111025020&redirect=landing&traceid=V0-153-43e85a3c00024872&mcid=a345602eca6b45cf8772717a1581f2ea&placementid=&clickBeacon=Jia3hDxWIBzF2Q3%2BAvLhYBZxLZpLICAAc1YpWxz5LVvcY3DgmLROwq1mNr1vz5xX%2BW7DR1j%2FuGkn4%2BEVDnC2scvTfLvpPyO4MjkZfpovm0Kml00gq%2Fs%2B2b5duEpXKcJH7ireAgrvr4GpVTYkHvYDVlMCZn0qH0MGo8vnOP5Nz3mauJaIeRsqe4giyh2dvTtt4t%2Bhl5nVzv%2FXSaaQ9ul4DNsYcx6ci6E4tfrA82JndrtHo4%2FMbx%2FXuJqgUhVHlCjvBnQM4WMMhe%2B1tKREBpPexbL3knAR3c9IXHH8GfSQ2CjoVgUF%2BH2gi2xDx3SlUD364TKre%2Fh3qylWQ3IrTFIZ8LqaT8XIp4%2BRcbxX%2Bu5nqcZqEDq4kQYYQQMVlcFkz5u%2B%2BwqkxzeriqLpHKkwX2jTXLS1L522%2BRkLnMlWBiZYacz%2FrGB%2Fj4otLBzK8v6bzUS%2FRyY4Nyw4%2FQ7%2F5NQ5%2FgTwVH42aVhPdNsO87Vn9iNfZL%2BZNHxwkQmcwykf7PfJu8376iVIQt5Wdb8blJEtb4m49Q%2F0pWdBYY7DkPzHH41WmY9%2F6ChHYqrNc0UYXeslEW8EL%2B7C4%2BvtZ2SgNPWwgswISTFJhwdPzKCTyiz7i8zqSAwN86DYYxy0jzFojwuxCi7lt8uBcJE5IXhWlRXXmcyMVtoP9GExo3Tl%2Fm0TRgn%2B%2B1mJM8pKFr7YEz1GZid3payKPRQvUzwOCcI8I373Abzul1EV4dhF0yEcCS%2BY%2FtTHhYcJO7cdcV7c7JxVlFCn97b0IkWOT0jlb%2FpaN%2Bt3k08%2Fs1MPWsaVzTjiS%2FGfZofBnCLoaKXwDOWnfzXJK7Zw0LUcogydlKx2cxqDE4uIBVCidDS9mWKErl%2FIPlG6kZC5OVO0rJz9ku1u2Gckitf96LRY&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111025020021074365765&contentkeyword=&subparam=&isAddedCart=" target="_blank">
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.seven}>
                  고구마中 
                  <div className={styled.amount}>
                    1개
                    <a href="https://www.coupang.com/vp/products/7712929533?itemId=20679679420&vendorItemId=87690704571&src=1139000&spec=10799999&addtag=400&ctag=7712929533&lptag=AF0831180&itime=20240111025034&pageType=PRODUCT&pageValue=7712929533&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111025034&redirect=landing&traceid=V0-153-b2a7029b6cfe05f9&mcid=21305d04d8ea4f3d9d601d704ee60678&placementid=&clickBeacon=2IxyIkxCzyA2h8r5JCbOsG2oIwYqjQsEaJbJAK9j5ZxLGIYL%2FDB7Eygs27UP5Sj4MWMMCswNKNoAyTRrKc%2FRDuxdd22Uvh%2FqkFgT9H%2FxyPdx9MxheqZ0hvuiyizMRjmubXvnHVrJ6KKpChbE3ifmruh7KBF0Gn1ZEAro15SypVcc1d2jnTWsle8d7svf71hfYm%2Fe6bJmQf4o7g5g1PlHbPzHUHY4uUAlJ7NGevdLaRV6aJ8iuRjlG1cR5WUQOpLSwDfiRgRw0p9QnfcTitQdmnK40Psb3gj4qWX%2BOucOx3OjIhcNaZVZLD966e3mln98N2dkK9ibSBCKY64XsMvffPKLx3cYXwBztsrIupRo8pDgAHJg9axEXLgeppw4MLt7Lrhli3eGyJX%2BSd5AVlnDvgllTqWcLBr9BxopiEMAkBL1dqPAI2DtFPqpM9G8kgYDZ8czAyDiB10TlkxwcpjxFWIrwjwNeWnEno%2FSKRAAsMDJ%2Bbf7p0%2B8tkGh8Qd3sNvqFOz2YiZb5EpXKPA2IrODqiywV4wboS3XDCVj3jXBVfJHrxIe8R2u2OfZJXyptAYExsKLS%2FzAoXN1R5eYSL7aEXwnCkeEfF0zAxQlmXIgzAqf92SiRGa6NgoMnHFOhblLBVXcf657hl1e6wt13fxvc8nbpzYa8PyTz0blm9hg1o%2F9eO%2B7L7ugbfxwCciJ3Qk38i7DkoNJEZRtBoq9zD55SRDuxcK9%2FgCFgWuwzdqzuFDGaNAMUpAzfLydWsVslFrak%2BIRPXToYZO5ry3Zz7nD7l0zHddc29JOmuT0q8K8UeFiapOEMQNy%2FmRPmeM%2BLqDUDVMkPMrY6A2%2BPWQ4djJih%2B6QbvYBKwV6nuNqo7RWw5zJWncT0qVidNAe4F95yL3O&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111025034577101707546&contentkeyword=&subparam=&isAddedCart=" target="_blank">
                      <button>구매</button>
                    </a>
                  </div>
                </div>
                <div className={styled.eight}>
                  배이킹
                  <div className={styled.amount}>
                    1작술
                    <a href="https://www.coupang.com/vp/products/1443950730?itemId=2488719358&vendorItemId=70481971750&src=1139000&spec=10799999&addtag=400&ctag=1443950730&lptag=AF0831180&itime=20240111025047&pageType=PRODUCT&pageValue=1443950730&wPcid=16794037100070481412690&wRef=www.10000recipe.com&wTime=20240111025047&redirect=landing&traceid=V0-153-35a38306245c3754&mcid=b96750d42c6e4aa28032c5a8fb246e25&placementid=&clickBeacon=hR2FhPlU7Bx%2FIPEJvDtZdtZRX32VFEqv7P0mL4IZNqWTrjKT5NuURRvNJDMrgtqDW3yN5Elm%2FMIVimbPS2c%2F1i70Yz%2BKJ3ozEQePeUEpnWOAo5SyOfgmDyDxUPQ2gyFkx34qhVIOM3WVJM2chYb8YnQt4ExiFNx3K%2FZdXGBdcCEeZpFe%2BcGPJ5vZmHa2UwcIBaD2UXg%2BF7N8AXBIoOA87ck7lV02UJ58hfyhCeI4qxy64GgOI3zInWk%2F5hQiFaupR48tltWHeK%2FFLllqjPD%2BHgFhR0zXE4GViAKReRclbOrCYwQW0k3kZuo0Eda%2BuDS4AznRE0GXu2ySp3oL43nC%2FuHcXMJ40xVuzsZ%2Fqu7nlgogBjlwDChb%2FD6ODd7pa3gSzmsikUAxV0uUQ%2F%2Ft41hEplBrS3hPEYAvQu4SK1VwDgdV37JlGlFs0t4Q%2BRFv4h2eYli7NQ8KJtXGX5FOKjftI3asIsBNugoaZjMu4sxv6ignAowYmVQcBzefGYbSxu9x6Tj6wBUHz2hYQNSC%2BFLADwV%2Fwm4pe1BK%2FbHehqqvXJzeF%2FgodypApspBMw8hce1J7m3tnzK4bnjNJLgMDjcAKMsvXHc72sDsnKQ4FoYwAzwXX4NP%2BT8J4Fs7U6oL%2BQhu1nSbn7aOdH%2FYAWeB7%2Fz89bD3O2Dq%2B47nJ1iHzrGK6POaReu0%2BOpigwvLL2BxQm5G%2Bfo%2FCatBdMbu3kefnPAtUkleK3un8fEBjlvpXsHkYi4nZ63RJG6Vbc3rpZi0%2Ff6EAzRSh%2BlgWxDxIlsY5EBs9a7YaYTbSqVw1F1QobAB%2Fy3hlBM6gOz%2FhRshmGLzeHxnuxSdbMycj7hlzbH5SSILy5tCGWwNkPZR44FY2lIzLlYqK31u3NGzySCj39t%2Fwvxzpjo95xFW4bJLt6lX5mqBDQ%3D%3D&campaignid=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=31850C%7CMIXED&contenttype=&subid=10000recipe12&impressionid=&campaigntype=&requestid=20240111025047342200450266&contentkeyword=&subparam=&isAddedCart=" target="_blank">
                      <button>구매</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.recipe}>
              <h2>조리순서</h2>
              <div className={styled.rec1}>
                <h4>
                  1. 브라우니 만들기는 어렵지않아요 먼저 볼에 가루류 (박력분,
                  코코아가루, 베이킹파우더)를 체에 3회정도 내려 잘 섞어둡니다
                </h4>
              </div>
              <div className={styled.rec2}>
                <h4>2. 또다른 볼에 초콜릿과 버터를 담은후</h4>
              </div>
              <div className={styled.rec3}>
                <h4>3. 중탕으로 초콜릿과 버터를 녹여줍니다</h4>
              </div>
              <div className={styled.rec4}>
                <h4>
                  {" "}
                  4. 버터와 초콜릿이 모두 녹으면 흑설탕을 넣고 설탕이 녹도록
                  섞어주세요
                </h4>
              </div>
              <div className={styled.rec5}>
                <h4> 5. 불에서 볼을 내린후 계란을 한개씩 넣고 절 섞어줍니다</h4>
              </div>
              <div className={styled.rec6}>
                <h4>6. 체에 내려둔 가루류도 넣고 섞어주세요</h4>
              </div>
              <div className={styled.rec7}>
                <h4> 7. 찐득한 브라우니 반죽이 완성되었습니다</h4>
              </div>
              <div className={styled.rec8}>
                <h4>
                  {" "}
                  8. 적당한 용기타 틀에 녹인버터를 바른후.. 브라우니 반죽을
                  부어줍니다
                </h4>
              </div>
              <div className={styled.rec9}>
                <h4>9. 보통은 브라우니에 견과류를 넣어서 먹었는데 오늘은 고구마를
                올려봤어요~ 고구마는 껍질을 벗긴후 작게 깍뚝썰기해서.</h4>
              </div>
              <div className={styled.rec10}>
                <h4>10. 반죽위에 촘촘하게 듬뿍 올려주었어요</h4>
              </div>
              <div className={styled.rec11}>
                <h4>11. 예열한 170도 오븐에서 30분정도 싸우나 시켜주세욧, 반죽의 두께에 따라 시간은 가감해주셔야 하구여 꼬치로 찔러보아 반죽이 묻어나지 않으면 완성이에요</h4>
              </div>
              <div className={styled.rec12}>
                <h4>12. 고구마 브라우니 완성~</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brownie;
