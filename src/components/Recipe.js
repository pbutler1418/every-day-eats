import React from "react";
// import foods from "../assets/food_photo_files/foods";
import Card from "react-bootstrap/Card";



function Recipe() {
  // console.log(foods);

  // let foodItems =
  //   foods.length !== 0 &&
  //   foods.map((item, index) => {
  //     return (
  //       <div className="flip-card" key={index}>
  //         <Card className="flip-card-inner">
  //           <div className="flip-card-front">
  //             <Card.Img variant="top" src={item.imgUrl} alt="melissa's food"/>
  //           </div>
  //           <div className="flip-card-back">
  //             <Card.Body>
  //               <Card.Title>{item.name}</Card.Title>
  //               <Card.Text>{item.description}</Card.Text>
  //               <Card.Text>{item.directions}</Card.Text>
  //             </Card.Body>
  //           </div>
  //         </Card>
  //       </div>
  //     );
  //   });
  return (
    <>
      <h1>Recipes</h1>
      <div className="foodItems">
      <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src="https://lh3.googleusercontent.com/oGN8BdxYQmZKX2KK443kPH1nmhySHpAzcZb4gLUTl1ScLi5J872-hMzZ_bHzuxjo9yrsM3QBzQJC_lzhUPU57I9y4tNoqK3hpoxeNisR0vLYbsR5C9ukXB8lvEn9bugPU4ZbuqxpOPq-Pd6IpgauZEZEWbTwe-OuXNxKbO-jWqkP5t2rBWlnSuNSKcHQFlGVsOSh35NXQRPE2B72znzNWueJeHxi96brKLnQrEi0k1zdDveIPRekWv_va3C5EAX7SwNOkMd_noNvJPYAHBotDLYZm7BDSH646g1ReWYEIJKnoO-svqD1aE51zK8hK9331IX2UFPtq7e3WlchNN42GtW92_k9xWK0o6GztNNHUA4m60fHXvtiBPsGedre2nLPByjNs-w3wGTnMMku6zoT8u-7q1QqxZ6viKu5sM2bUwxJQbxvpZGajiruMSqlq2DHgiKVWLd5FojTfVNpeaHM5NKxXDuvGAaDTG3fE7WNFFikoBOlFuvz7_1lZJvlzoBz9RqKb4W5f_Ax_CzgSqwxGiSMcEgJ9X7yoIEs3oZAkI96NAp8v7i0kNEhEFP1Jb0zMWX7oCvssfQc-4tjmeMwr5SkgHWSjc6OSi4EUT7UW8u0oz-HroLGc3TRWNyN9DlZA2RRIr1BKKfpjE8AXSY0Vgro-Jk-nIs6Gy9R4v4mBb0maXXqOpsqjimnvrkk=s345-no?authuser=0" alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <h2>"Healthy no-bake PB oat balls"</h2>
                <p>"I make these weekly - such a good after dinner snack to satisfy your sweet tooth"</p>
                <p>"-1 cup oats -1/2 cup peanut butter -1/4 cup honey -1 tsp vanilla extract-pinch salt-1 tsp of cinnamon-1 tbsp chia seeds-1/4 cup chocolate chips Combine all ingredients, cool the mixture in the refrigerator for ~15 minutes, then roll into tbsp sized balls!"</p>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/pN1uVOEFWl3XFvfUXGMqUjbU4D-Td9zx13Vm5CjTKDNBketVeg6NUcPmK0dseUTnYp_JClr12UT5p_WTxlyBmU7p9kLVxOQH23xe9MyjAF8IhdBvJ9eQVMPdMj1lIkzWqES8_5aqrco_XjDNlira2AtX3qDvgIGr60ynpYD8D2r5bqW5niEarQiakJCg5kkjkrxb1kL-pngPqJazNx49UOblZWjcH2yCHGTyjLLUkCWv-kH-IQ9egXKmOXmFWgvuZzMAtUpcnFl6ZXlTjEt_vwdGOnGny0O5UHiMeLTkiKoxW6foEjBhEzhPJBRJO2zfc5QZ8bUe04bsJbhf-VVD1WcfgV-LEYz6Uo6ShqWciOlQSMXXhemGxO2FQ4owA9z96IYL0EWL0hDwz78styvOE4xizGAXIt-DcOnqsxiOr3aFOJejFLLIv6kwkAfisoyDN1Pq5oVjdHFS9BBqa7L2d8zqBh4Uos53HnLCb8JhM58gAirnzWTJIen65rJt15vLdi9HQU-q0OWeIDlS7wJp2iBm75bkDTzu5OxZ7P0WtECGijzQsXlq8DgUo2L1MMwWu0DdqsylKlIxH_jnMKAjwXlxil1kkcB7oo8b2egsnP9eDhQxEDsqx6SyoabLt_1N79tYiO2eF5kRDBtoDij_7YA2hsEVWPBlWFdSgVnUtUewc7rzd8CTX3JX4cF7=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Homemade yogurt BARK</Card.Title>
                <Card.Text>I make these weekly - such a good after dinner snack to satisfy your sweet tooth</Card.Text>
                <Card.Text>with wax paper (I used non-fat @chobani yogurt) -if you’d like it a little sweeter, you can also add some honey or stevia onto the plain yogurt -drizzle any toppings you’d like (really any fruit, cereal, chocolate works)-place in freezer for about 1-2 hours I liketo take mine out a little under an hour so it’s still a little soft-break apart + enjoy!</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/kVrsaUGhlbR7mQIQEBeX3pA3Gn3CgpQfsD8VkdTlFwD2-aMi6veFiH_rU55oaAINc3wWRubG6J8pxmLVaihvNnNca2Nhob3sVuayJDNFCtq_4wcCh8G2igaax0pnv0vZJzVGHoq0PIvmQWSbC-RAMhjgO0UxTmnomTL1YULORLaTxYzskK6H37--dX1XxgldZkTKApA7Zihd2gxGRWzLLpfD8Rl3ctO-PSo1yUMOfH_oswkeMDPhLTfLSCVYJl7r8_SIDaKOJZ55fvA3SOG9Mp7GXhmVHb1Nux3fLwTFM0OY4vLESIR3QrDDSG2EWZ01OHJw1Qc1nwNjlj7gqddOGvu1wvaBQim3Oa9OdejYmtPxMwW0QflCnWQaXtypYu46l24Ka1Y-grHRytywEqeQT4HCWovFE4a3vBQIlE_sJvqPW6J66rpA7NO7AjwqAGt3btywTsncDp4w-_UzflrcUjr1Ijwh-T7H1jcxfLt4H32IuDnLnkji4-fSfjBJ8ugKXo_EYwnhnDP8TzYHDoXU1Aoz-vu7ItEPEkEZCuQ4ztgw-N9UdH-C5QKZvQ08JYGCyzgSeCrwjwYwFy9TZ_KCh1TyJu0uAmDP37Mk2ScUh0WIwN3C6jwqFJo-2z_rkF0PPWRJtmXDdoyo4ScfIpp8QXWXWRn9U56EuLpd9JNrjftQQ0OdKtgGZb56SZjA=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Smoked salmon toast</Card.Title>
                <Card.Text>that may or may not be a mimosa on the side</Card.Text>
                <Card.Text>1 slice sprouted grain bread, toasted1 ounce cream cheese 2 slices fresh lox 2 slices tomato 1 slice red onion 1 teaspoon capers 1/2 teaspoon fresh dill 1/4 teaspoon freshly ground black pepper 1. Spread with cheese on toasted bread, top with lox, tomato, onion. 2. Sprinkle capers and then dill and add pepper.</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/5_sQUM1oH1zuK6A6TRS_eQC9_daUcKZsHT_THegnr6Y8bz8k3iRuT1zhb-diKWgixDTLlXoJWgfOndK1bVDvNxfeouyenOapfTdknhxmOs7ckbguY944m5N8PXoqYf1ZeYDneDKj8Px_EBn6zqe1xT2o6muHWKBbPogh3nrQCf4e7hqflQGHcS3x703If2sldz_tESb7Nns5ZXZoWPTbBvJ62uuGhW2CXNQxBTMzPDir4W1UmmfjmyeAP1WJsdTf6jFcMAyHHX-U6UBDS5s8Scx-B1QiNiwZNNEa38zRGCIreWPkePWJwq-FSw2xvLwx7_oUW_VD9jtUvSKIJL7GYuq4_mW67kH0OrpjIQCkZzjmAruoK_JoQ3uj6vEzdyyt2nsmrLQwocdL2FOebnmglAg-RFtmKWjkXw24b826D-0Y70R0DXVra48r2P8_TuTwgcFyN6EpadN0HrUb-cf5Gb8nh8rPPX8KRt_s_xpAfjz4ogG9k63v5XIKebnib0Sz4Sd9u48FfwhHyl0wvwfuUyTPrsFXzy18yTHCXXCN5UQEz1_QITlyq6LcNluK3XyP1AIxEvsERPbrkIncWYD77iWiP2z6fduk3MB-qcVdHCKrCxmBw_TlBHl36B_2Lw8HY4uy-eFsmH8u8eHS8EPAOM8YgI5Drevpu0Z9roZd1UANJmbMR9JshHXv5rJ4=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Homemade chocolate chip cookie chip’wich</Card.Title>
                <Card.Text>This definitely isn’t “healthy” but it’s Friday </Card.Text>
                <Card.Text>Made cookies from the nestle toll house chocolate chip cookie recipe + stuffed 2 with some frozen cool whip</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/Pzh7RcXm4gmkoeqjfnOJuAcx-rLB-AiU1PRjDtY6xRdyZYVJerfyM9H5dmFuiTYXAgYt-BRQREoARpQSv72d_R2DcG7uXgoyRBjZXGQnT6wVOj55Tnqv3Lapo8yAud0XdEGz84chMsT-QZimhuGbg2--DhCsiqLYK8D4Y3YPmCHGXMGnmenXjD3fcpAs3V4MBx4pIibGHiUFPXAPpkI6GRoFQjUOW69OFsk8u-zRfMCbqzFrSF94Az49i3eJpXn3xIxkPaV7u5qjzTHBRJCIWFS3qDHoLjeiXDUsIkNUbASNAhXousZ7DXoM_OtC_UV0DQQt5CsN58U0F1Ywn4jvO9W102yI6ejMb7M6IhYI_94eMWSecLXFD5MceHgEnEBPU_9gi5jmwxwRn8gte8s3rpBuPYUqCovKQgpF1KzxzuznnXAokHnIIDlVbFrFezSVqURtiuknwjWJk-sNY8oPqh_ltyd0RbzIjfsFhUmRG5xfPQvUp-KyjtecJBIFOkxRXvBjBwQUDixxAK6f43Q195a2-TBxYGQjsyFcaNV-FsQ_JDGzZpIYjbUDRvqmmELG62uFm-V6KSGuRnqPLOVu06JEw8ZBZIYjxplXCS9rlvoNKaeYszEvNfZQmP7iR7lon2P7zyxZiXZBfMOR3v8ZOxoZL6VttP_QFqDNuYqvTCNNq9ryDyV09CSvhnkI=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Pesto zoodles with tempeh and sun-dried tomatoes</Card.Title>
                <Card.Text>+ Trader Joe’s zucchini spirals + Trader Joe’s organic 3 grain tempeh+ Trader Joe’s kale pesto + Sun-dried tomatoes</Card.Text>
                <Card.Text>-Place zoodles on a skillet with a little bit of oil -Add chopped up tempeh -Add 1/2 cup of pesto -Throw in 4 chopped up sun-dried tomatoes -Cook until tempeh starts to brown and zoodles -Cook on medium heat for 7-10 minutes (until zoodles are al-Dente and tempeh starts to crisp up)</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/PEsO_aBp7bbWYHsYDb0cRBtgP8A9tUhSY4VAwvBTc9kLhWo1GL2mfgo3gr5ugjpvuru-jiuMLCOKkUHqSz-cibg8d1ycLNdjqFjsZ1iJYu3N-snPQz3g6xtlzcKRReJuJpyiKuG419RTKKHY4Oui5z6_tMCrSFHMXXRshJuD7dAO06Kb2710mWqZyJnQLJDFIcI1zMSaXXpnG42FSSCkJJT0fdD4jgQikpXWvCLelzHkiESfVhAB1AnyvBaZGKyFx1Pp10nSnqbkdkhcm4eUwal6AHvttd4JGSOFb_L-vURfBIw7LaekqKO1bVDxRM43KrHRB2jptXfNadJAQDQw0ns7l_RqHD98LnzVblixM_GHBjbABFYf_jcQ4ihZlTl-7Ns5JsHl63bhyr5hS57gpALqjQm0IFQWJtQB9WLn_ZeP7FxZtQxfTdAkCiUCrLF5SF40JFgKLZRo4NoIkqqH8xtVRby1-7WoyZ7Tsv08fLBQN1FirBFN_0AXOvNmbM-D77_Y9EMqEMFDKlEPKFAPRcMrL8Kb7iSt9nn7_C19WmGPeTUblrZCBrjiGi2E-ULwrCiqnXKGhSUCbqAbK_QPlTlKpUTkG-EVDVsauKxLJ3SyLxq915ZHFna__xI18dpfIfnkKUm875_tS5xCYwbRiHSyMA2TOK65lxg7CxXy5Fr7FWKVGTXmUYbkqcXQ=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>PB banana smoothie bowl </Card.Title>
                <Card.Text>any toppings you’d like! (I kind of overdid mine bc I made this bowl for my dad)</Card.Text>
                <Card.Text>5 frozen bananas 1 cup almond milk 2 tbsp PB2 powder 1/2 cup plain vanilla yogurt</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/Z1hzzAisVJsz2m-p1Q7E_SuGYG6oeywu9hTYWbOVnTDpJXulLi6iiumN-26LJ06cVJvOlOHwVAGL4h2F6oQzinzFDygkosBItJ0ur2gBeGhT7nVZhvvcdUTc0BCTHDscCxim5UptjiTZ57yyN7lPW6sI1lKqx8q1be4S0S5JPYRhjTIT-nMslGIPQ3tmgf9fd34eHWhT4fngI841Xb9phaXsHDYLlUIMmCfKbcfWVQjL-kOtm5icV0p3amUP_tBLQmHNIRZ5WOYemQk6TCu-B9Oma2NqyG1K7IU5MIa_llkGOAoP6LvZEWDy1FpxZOBA8jSELkvoEe1b1iLFnUzG4GnKTJR_neGdTR2IUsse6wp8jYlWzfeUhyFOsGvAI4mJVH2e83TKholyd-OoiPJndkLXGnjsL9bs_1mW7rsXgG3zT7rQHJ3GG3VS6GIlMjNzbeckjPnL21dLLsiAt-RViS5O_ZBI0Ilcj8CkzSUTy3-SkP9NDDV_-Vtyp_-K21VtDEWrFk96bpMx5r_6giXPWoqquWfhtJftrVlwHigPN2I1bvHZgMvLwMjFhgPsuWbdZKJGI0ofYiPQ8yZcHxlaaWiUBo6PxuH23uWZ846-RmQox5Eetz1gsl6ggSUaQ2068GVQlFzAPv8OrOEHgCBmAwIxmkwiSP3ZM_inFeCMRVAwoRVVNjavRI4BCSwl=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Sunday breakfast</Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>-Multigrain sandwich thin -2 scrambled eggs -2 slices meatless bacon -1/4 avocado -1 tbsp salsa</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/K2O4As9A6-tB20VXV0AOwNMJQfIYMlMN0oZiCnU1u2qyh8aEMU-R9NU8zsc8o57Kks5vhFZnNr-gjcH7E3zOBgG-vqPFCGu5JvBtc6sQz59-QnFu20lG0E_7rrWnN2dfT6aev_ecmFsLx-LG3eRyyfj6nfDKgQfxYQdClGf9ZHx3Z07rEjbRtF_u6-f-zopAjmVuxc4OMUkUQ7GdKP3iUPlk-VWapL8aniuA_XIaaUa6lfoGut2K8FKTKdyJK6tV6JSp61EfkHLxJqhFeFWJRq691s8dLJAAnnko7qpvIY24GUi1-D1VsedHs5oqlT9hPoTzdYnkmmWzo8htv11Oq2ZkfxkazyvarliLzmmN8iFdQpCmLCXlbRWdpislS13BYFRYZp8vqoWecHqUkDT5h-B1HitIikxig5Mg3GbxBJC0WF0hqmIb5kUgS33gQRyrDRfJX9kNYYwjCJdd_wUHk0WnCsWilAch3pL78txUB1Tf6P4flMCROTGThQ49xByJEAFLHQWgnIghhFmwQjMX9yzKbF0Lw7u90HD1pnhW5h-LoNB3bQJr83GgP0vUhwCj1rfX639-2R1Kn_eS-NMQbiNkfy3JDkMCOkXq3fImmF2ZO3zzZ69sgJ1eLY02KFWi8eCnmR8OnvjsUwrlVBYX5vZto70R_o2R1T-dRp7TTK7smpK7FSq7KEDhe-z5=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Yogurt bowl made with </Card.Title>
                <Card.Text>One of my favorite healthy desserts!</Card.Text>
                <Card.Text>-Nonfat plain Greek yogurt (used red food coloring to make it pink) -Mixed in a little honey for sweetness -Topped with coconut flakes, blueberries, granola</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/ls0rDB3d8Jkxpb3xeHQFcVHnFMDVBTIepz3KanXv92tDe7k0U3QTj6_UgHApdAf6MD_tKlnyq0wHJK-3LuoGE1VKgxfcz3ox7xkqPNKmDGKWK4cjCH_AfguBywNQBMRlO76kgAB9aEgqiUM5W-wbRBeoR4fA6SLPu8kjAvxRYhe5G6sIKCxNmGpKjz8ioX_IzjNl_i3FeEK5gjGKzdfBBQSgsEEXwl7B8-_e41sDEONUS8AXK8fp_4uYZ_sukC3_VnqV-czaFihPmS708IjaX-LPk1m8IJaM90CF0ggZXhq6CdIUABtYg-S6iiodDvlQbwLFsMWoGrlr6zabm1Jhb0LwI3aR_1UMOsowaf-D__GV3_f8-wDKdc7tsW9x3U1hUkT6PPrQ5igfQ1dylN5dyF8zBfiAmhpGFhS3VhS50QcFR374hHiPlhOrc62D3UMZPk5QrXN16fcMbZ3Oikw4ScjrtQ-LoMo8dOjIgughH8jnQisRVn__-JCiyDL5B-1InAFL4JPZk33pmGpwgHGOMv0oF25r84CtPTQhoz27a3YUCof26_XZL7SzX8bGy2ZBRAu_ffyJi8Hq_k9k1Qj6eaX-RpeuacDVZ6SLxC9ljomc-PvLH5ob22naQeR1UhWH1h-O0cLh4ABIdMCraOmMSfWnLpciTh6v8YK5IJe8uDlOdOJ4yLugLB6QgGWn=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Everything but the bagel smoked salmon toast </Card.Title>
                <Card.Text>3 everything but the bagel items featured all in 1 meal</Card.Text>
                <Card.Text>2 slices toast, 2 slices @everything_but_the_bagel flavored lox, 1 tbsp @everything_but_the_bagel dip yogurt dip, Sprinkle on even some more EBTB seasoning, Top with capers</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/kVrsaUGhlbR7mQIQEBeX3pA3Gn3CgpQfsD8VkdTlFwD2-aMi6veFiH_rU55oaAINc3wWRubG6J8pxmLVaihvNnNca2Nhob3sVuayJDNFCtq_4wcCh8G2igaax0pnv0vZJzVGHoq0PIvmQWSbC-RAMhjgO0UxTmnomTL1YULORLaTxYzskK6H37--dX1XxgldZkTKApA7Zihd2gxGRWzLLpfD8Rl3ctO-PSo1yUMOfH_oswkeMDPhLTfLSCVYJl7r8_SIDaKOJZ55fvA3SOG9Mp7GXhmVHb1Nux3fLwTFM0OY4vLESIR3QrDDSG2EWZ01OHJw1Qc1nwNjlj7gqddOGvu1wvaBQim3Oa9OdejYmtPxMwW0QflCnWQaXtypYu46l24Ka1Y-grHRytywEqeQT4HCWovFE4a3vBQIlE_sJvqPW6J66rpA7NO7AjwqAGt3btywTsncDp4w-_UzflrcUjr1Ijwh-T7H1jcxfLt4H32IuDnLnkji4-fSfjBJ8ugKXo_EYwnhnDP8TzYHDoXU1Aoz-vu7ItEPEkEZCuQ4ztgw-N9UdH-C5QKZvQ08JYGCyzgSeCrwjwYwFy9TZ_KCh1TyJu0uAmDP37Mk2ScUh0WIwN3C6jwqFJo-2z_rkF0PPWRJtmXDdoyo4ScfIpp8QXWXWRn9U56EuLpd9JNrjftQQ0OdKtgGZb56SZjA=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Smoked salmon toast</Card.Title>
                <Card.Text>that may or may not be a mimosa on the side</Card.Text>
                <Card.Text>1 slice sprouted grain bread, toasted1 ounce cream cheese 2 slices fresh lox 2 slices tomato 1 slice red onion 1 teaspoon capers 1/2 teaspoon fresh dill 1/4 teaspoon freshly ground black pepper 1. Spread with cheese on toasted bread, top with lox, tomato, onion. 2. Sprinkle capers and then dill and add pepper.</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/L4qe-XD-QTxge188JVyDU-Qg_q7_ZcZw4she9YcUsiNuXKpSF-nMn2gZ1VTuINjwnsGOiHqaR9dfoYA93ClOKBWNk5E7UvGv8u2SEb3o1scS7OUfj-gMgPWVV8PT_G8uuyN6mnwlwAYOtccIejjuLX0Bwq7H-ceL27Nf-tjqh0r7hqZMOqfcn4QfSQlQsmE_t5aYhHwULFEIX2ogoHJSJx0ZWM5XEwO9WY0I8Wt8_zzgcM_mSSjOZjomRtsHwFMmnuDM4u-X6E57BeJ1vCpdIQyXk4Mjw6uAqk2bBv5UbnWfWuFFiNgc6lSmjuUD3ughGWF8ex87tOY4ITW5idBJ9YsbCRJ5VX9DqdDBA06iDy8Bs807A2naIcE_Pa-iDH7BGZwYh5xO_hzX-tLHp9s7mgDGXM3wgJeuuVXbswOQWWZ3v8gvFo9YCJisrYC8rSYooiOOz1u2rZcudW4jULMQchdqS5hnI7rW-dB9xgqaQuRaeWuzflm_1PpcET4Jv98fF-TQbZUwmNWtJoMZGAQ5jwJPy6-QGOsFBiWaOaPbLSFzxOtbTjRNkWf128Omh-fpFbjcAkZpr_ml0pseUfByGDmHsI_TA8wJs5hwgoUkob_FfSrhQ32kGzWnOsMf8M0ajiHemp-MQV0lsvwwFvmO8GiSMjo5jFO9wAxHllu3qCKHzCmAqKLDSopF8qDr=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Kale gnocchi with Arrabbiata sauce </Card.Title>
                <Card.Text>Found this recipe on Pinterest but made the sauce a little differently and cooked the gnocchi in the air fryer.</Card.Text>
                <Card.Text>Kale gnocchi: -Bought frozen from Trader Joe’s -Placed in air fryer at 370 for 10 minutes My take on Arrabbiata sauce:-Heat 2 tbsp oil on skillet, then add 1 tbsp minced garlic-Once garlic browns, add 1/2 can tomato sauce-Add 1 cup of milk -Add salt, pepper, red pepper flakes, basil -Cook to a boil then let simmer until ready to serve</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/WT93UzlGFSY0tVl8wuBpCBX_rK8-zSi-P2yUcchwYG7k_9B52EOIxjiTNYrfb7buOYtPoRmpcAtzQxyjgAqlaczQYkmXfa9Cxh0J3u5WvVH6ouLPzGMlRrYvocpsOClJK8YxwF2kPyUyT5tLUQVH4ZAQHv3XUQ4RmQA5ikkWBDmiiZWn5mhS53A69t1NSR-kDKq1HnoLJR5LWnMwjWvGMeovyZS4jDJVGcGwMDHnB1WhUP8AvsScPGzsihgh2GHq6dWS19L6TgNzv9w3IBlkiNsKLXU1RDHe2LJkOta38T-YTwPM--jmpYQXDfs_-y_Kl6HX_F5M_-wJC8z8sPtGzNXly-nclgpef1NSOy_aDXETvneGJwHHhpjDW320UGe6lH5_ZGF3npwlFmwB5nyRKPrhjly9JhCCCESTmAApAtJEvaU6A6s2GT8r1rl5yIjoU126V4ICVWQh-NsY7bKM7gkUOfX7z5jJGIeBKBVjluiZsBFuV-vkrtTta4yJ_Wq-cGrxAu2r7aTeXAPcx4-TX-jVAl589YYaZOKnk3_J7M8LApqTOV5P635K2hC2lxNkC293jKfVgqfccOzWcQVIiV1QiVYdoxkWCN2F6xfYwGl3Wl3-UK2OGJpEcoIp35CYZTacdH6XsMunlsY23YBYQGEjoRjbzAvYtVdxCcDj_sHuJvslrBoQfwDEUbbZ=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Pineapple chicken bowls </Card.Title>
                <Card.Text>Such a fun summer dinner! Found recipe on tasty.com and alternated some ingredients for healthier options</Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/PEsO_aBp7bbWYHsYDb0cRBtgP8A9tUhSY4VAwvBTc9kLhWo1GL2mfgo3gr5ugjpvuru-jiuMLCOKkUHqSz-cibg8d1ycLNdjqFjsZ1iJYu3N-snPQz3g6xtlzcKRReJuJpyiKuG419RTKKHY4Oui5z6_tMCrSFHMXXRshJuD7dAO06Kb2710mWqZyJnQLJDFIcI1zMSaXXpnG42FSSCkJJT0fdD4jgQikpXWvCLelzHkiESfVhAB1AnyvBaZGKyFx1Pp10nSnqbkdkhcm4eUwal6AHvttd4JGSOFb_L-vURfBIw7LaekqKO1bVDxRM43KrHRB2jptXfNadJAQDQw0ns7l_RqHD98LnzVblixM_GHBjbABFYf_jcQ4ihZlTl-7Ns5JsHl63bhyr5hS57gpALqjQm0IFQWJtQB9WLn_ZeP7FxZtQxfTdAkCiUCrLF5SF40JFgKLZRo4NoIkqqH8xtVRby1-7WoyZ7Tsv08fLBQN1FirBFN_0AXOvNmbM-D77_Y9EMqEMFDKlEPKFAPRcMrL8Kb7iSt9nn7_C19WmGPeTUblrZCBrjiGi2E-ULwrCiqnXKGhSUCbqAbK_QPlTlKpUTkG-EVDVsauKxLJ3SyLxq915ZHFna__xI18dpfIfnkKUm875_tS5xCYwbRiHSyMA2TOK65lxg7CxXy5Fr7FWKVGTXmUYbkqcXQ=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>PB banana smoothie bowl</Card.Title>
                <Card.Text>any toppings you’d like! (I kind of overdid mine bc I made this bowl for my dad)</Card.Text>
                <Card.Text>5 frozen bananas 1 cup almond milk 2 tbsp PB2 powder 1/2 cup plain vanilla yogurt</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/lGmoAXAY-LEulPGQr84Obti5WQBq_A3PqzgZLLNvoC9fIxCKxt-gOBHKiWOnLzGuyUb1X61Z5PVL9a7rRbQjWdx3FI8Rzht-LZoi3skz-jT_u1tnE0h5ySMDe10qRUPQ9yt-nNHbTkPWvJcd5qtPrJVQND_IRy82ERF7A7BVhay-ieM56cQ0g7ir6je_hEkmGJditl5reQRtggvfuGx9RYwzv2N5TgnWsXA5y0Nr5SKh9XK6HRBoBthgUUJnLdhAxAgjx5M9EGpFNxieg5fpbyu4x0aIH4JWrsMoqvKek_XC3Txox0LCqBtu7ABw8-oRDQ4cGLEWUspOA4tE3mmZpOg2uAVzqB89rbuBe6FkNy58FvPDo0Zi4QkTXSm6ze9Mq6WN-BytfSvx0tLdZexQ-jpAwG7ZqiDy0yX4NwY9cXE7CBa0qf775GlaxnKWHvEm6l2Ug8ac0DSFANrIeiqh-VPZmCktRRIRFoUj36nZt30EIBuv8IyP4ZQFpJqJrhDftNunMpltJSZHjR3QA5MEgDGsE2JDS8xjFeqtURg4bL3VJUJb5SVxzuRAgjjl9Esl1tHYlvX3vbMMX_8c10lrvHfYnlULAo1YzHcxMda-LeVGfZEYLzeoeVNDpY5gel3g2UWoiGnZLAuJkDnyGKg9xpzI9DPIeUsMDQhg8RdBRCk-GIqF9ObvpvuZ5eFA=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Summertime salad</Card.Title>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/iVhA4SsngwxtGUBGsTXzA_97fSfzBv0gRgJemdgETwgHalVe2VsqNovC7I63GX8NsM-scj1ttU5h0JxCP613F7slu0Vy0btpRglAVfBN1cMLCSdebdEX_lZNK4ELR9yjQ5Jmb-BnNc-S7K2hfXCKQ3mSzpSHs5gVvzrwGFaES7xF-VcYZDt_uWMaYUnrVv-31KGu4LsApgJBQfA9ZXmVYuEJPrgTgZfN2yoZmhpMDC9afPT0COCVha9t8bjzxpu9ezCLZE0akaraeD7B3OojybFc_50p3oZp7zcFaNQNv7mjjpr8n2yH4Wjz7n0Qtwkqv6QmiKRBR3rsvAj6sma8StQZfuJ16ZnwQMoCepUdxeukxVY638hrDTBF5_EoQzct2Mt7H_sogHxpnhaIbxekKlh2N6sKRHSf8dbTlJQ7_csFPZQf9vPp-ogPcuGF_Tx9gfHcwDDL3-bRA_nVpk8PTdI-r4cGuvl1hoaZ67gwhJ3N88bN5-FIVfM4UX5b3ueHJhyb2qrRkpSi2ZzmJLKn5Csr9wqn04Z9BdwkG1X3fqhBUjB74CFCMp3NDP9UP4xSvm_hBa3n4W_Mh6VA8NHr2ihAecMJQEAfWVNCuQFgF-bgp74sbDd-BH4HoAwmK2VvnIe3BFNuURcMJoWCKIgMcUq6c8-og_VFnAQnI68vtz8mwEGmEKkfayoIy3O9=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Fun Avocado Toast</Card.Title>
                <Card.Text>My favorite savory breakfast</Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/NM4cmYdnBsC2_aOo2HFTVMhA3kqntR2wwFewQa1P9_XQLuDAaOuhUvOhrScd-nCLlhHA1hCA0OdcnnW7KNPOaUocp9Ud9hyMkwio0y3Rt1dckFFAD6OQK6BFuorDvYtMEU5R4xaNBDCwQa1CDBAqSF9jB93t2HFGAuFZL7Rs0BjlEAOJiiOja0ocROMODGgYSCvf2wBfPPsTr9cngU-rew3RDQNaPG76hZek51jwENZ3SLsaRE1XWphkP3T2Fi7BjQQpcil83tqQKrjaATTcg5WT5gTp7GQDlWTybPHS8lvqQQpnyXoNNY0RShUHb8YjsBRAZgSf-dlQDmaaD5hVJtKCjK77EZJCUb2ohmOorOXLhsN8YKiyYWqKel_YmAfqjOgY3tCmW2RngExp6nh1Zf_EeKLBNa6MIpgpUGyoT52dcJu00sGXV8ChlsrjvKXuBhI-101GnoFN0xz3sXscRieJgyGIUcHSksdiOmvgJ5GkngKKfT12x8ffZgZqNhBsuUG1zgDkTGioWVOb0ZKUAJgZ_rXsRho6ehMEyPVCKL6IQAOcIx5sKN6OfYjvlRD1J6flM7bISuAtUjNrws1KHwOmTkCTp6ZUhFBZbW2ui5EuOA_ZoZ8NEV3Db9wOC8kLYEk7kl0Rj7LZrKqXp7fdj3dJiyY7l0Dmfuw4IewKA8Q_cJS53r5nzEJHMTFI=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Air-fried tofu, sweet potato wedges and a side salad</Card.Title>
                <Card.Text>Dinnnnner 🍴</Card.Text>
                <Card.Text>TOFU:-1 tbsp oil -2 tbsp soy sauce -salt and pepper -1 garlic clove (minced)— then throw in air fryer at 370 for 15 minutes SWEET POTATOES: -1 tbsp oil -salt and pepper -rosemary -garlic powder then bake at 400 for 30/40 minutes SALAD is simple, but I did use @traderjoes green goddess salad dressing which is yummm</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/zoE33BfyuEMuyLlQtMhy9EmyUW6D3gdiB5eUF2UGML56MMFO96nIuvfGClxdgnuXV60wa0L_8I39jLIh7x-SXvX6Xc71IpVj9dbXTdKQR2vEvad16NVkh5LC94U10zCXnm-KfRY1yRS-Cu0rneJm_q_jUNo9_y0Qp1Gp4XPkQ4R9RBytKTGgNMc_6oVJ3GkDqg2evDeymdt9pSZODiVxqvRDPUA04Sez66fBEo6HCLO8UWdOwEXITab7okkq2A0MHuJot2tDwWIiXUKDS1AG8gOi3IP1jtEzhoouxjqVldep1ChO_K-bdYAyabRv6oUPRn8B_PtblVDaGD4pS7d2b3gCouuX5Kkh02Vi4EVnXNP80U13Wl3I6Im7DsHVMt_WsLTBAj1Y8OeCw4gV-BMd8May6DmNXpvNUjloM76Q-Rb_lOKz1hUuTbao6jSzJs3Dz-OmPy202U6scqbVZ-0lP69WYTBpvm5M_mX17LoWKoQXH7hpBkgwX7ni2nN2UDOk1vPiaE_ahZAnsVd3kszMLPOLwv4BmQ6XfCQhsHkWzv7eiDFRkYDGBOK1h6qduU2JvS5jvtdlPXhZYKm3MoKELzehRjK67l0082Za4ZIMTABgUgdFz22LS_YPIXAYLGaip6Li90INxM_2MKOXLJLp2XOqdtK1vlt0Ba-Ccl55QJjI-bvjo12RPQHpyu5F=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Breakfast bowl 2-in-1 • green smoothie + oats!</Card.Title>
                <Card.Text>Made some instant oats with cocoa powder , placed in 1/2 of bowl, and then poured a green smoothie on the other side </Card.Text>
                <Card.Text>Green smoothie = 1/2 avocado, 1 tbsp super greens powder, 1 pear, 1 cup almond milk, 1 scoop vanilla protein powder Then topped with fun toppings!</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/aBhMjVRJWkSbX0Hbeg8vPzYl-Doxo6JRK16uBUwysY7IffOzNYRvG88iq4kk0SyGJQ4DPlRqs0cTL4U9cGHFOu-q_XKX0PMk3nqUNJxaWz7cgnUr5xAtS9gxGctNAEhOroCVV_wJkMUf1aBabbhUrnyqMHO19S-iDI2VG2Qd6qAu2gyRPGpAsV3Wav7twmCnIQR3SbfRQ41cKUr3YIkqkJr30vrqvDuk6pQHXGWVMXzsVuQX_lsytPQsnjoROm2yBmfRgnxFGRvmpqLZrg0VZhN2NfcDmYtULnBy3YCsZ83VWZbGAJZSSR7u7BPSVcxhZdPEhbtvqPb15u6wzUbBSpmlf1R7-7jMu8MbcwqBWLKwHpwBPQiIxhKlltnSzH0HmWYn4N6Nw8QhJaLZaHqsLVBi4GVn5uwgMbN90FxEFB2ynTsaGCkQih0w6_h4garOMkaEvz4uajrvAlz6sUGEMeHxd2gsmqlt0F2luRe6fG9zA3NCoKe9ebLIrEl04-xNSURnGSHMouxm60sgw2xI6Ah3JnOSf3Rj6KZsfR6Up9FxeSFjwZy1BeYjsjiXkaM2A51aTBud3GF54C3Ca0BljMNvk6SKIo9wurAUJySd3hbPnsGLQB36yihjd8B-JAn0XJGOTGaSRBRtx1vqjFVEEmXqMK7sRMB25t96lH8KrlHJEaIKLy8AFa6j8mDE=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>5 ingredient homemade granola bars</Card.Title>
                <Card.Text>First time making these and they did not disappoint, the entire plate was finish by my family in under an hour!</Card.Text>
                <Card.Text>2 cups old fashioned oats 1/2 cup almond butter 3/4 cup honey 1/2 cup crushed up trail mix then combine and press onto pan melt 3/4 cup chocolate chips and spread on top then refrigerate for an hour Cut up and serve</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/vF6nDwvadxjcnRpfE-7Z4oKflwoklJ5ZoIaVpWGzIL3MbUdIs26opEwjLuRhGHACdAHPJ-vs1N1FVfE94sGfjcC16zI-nh1L5SKZQtXnfokOAm0CVSck5u2y5NBKuMLzqA_FeGf1eZirndNuDdjokXCgyM5HJR03Ojmcbvw0bGYWQEhDwlxj8sCNoyhkB6j_d0Mwt0SmlzF21PHDJMN_tv5g0z454OX3j0jMNrta9r6BW97m1DzIOQKxV8-TEKrXlPhJCjBbNKNrkr-SIwX1rDQIa5wHHhsfeDdU0aae_APC4Ul0osPieLSv3P_QkomU1tHbDYSyy74W5rRvQ4m0a4yiqrc2QzWRRgzBY4jrUIUanJuDTGnNN2-BRmebfI3USMuw9y2cCnH9B8oAuFIlOI7TPirjzgdY5OBDzCffhoTAJwSrVDKZ1mvZzzMVsX0XYM7_N5PZizZlWZA_DaE-5vbrqRHCN8qSBR4cw921fJRx3LCCoSFQW_8T37hmHWz30-cyJTEAHeDwL29yX_9_UfcXaMTEbsuUP5IrkIpxxCex7Ci3OfCQWoY_ZEeDiTsy4SDQEn4T50PAdvAnpWORfGuIXhPnZ3UZvxmzXKyq1CO_XxNpHBoM8rrH_HAj7hnt2PQpz2GZDqv2ig9FROhe8VyaEQRcMtZ0mnHFchBqzWTpTei66lgCN5-EZjaN=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Lunch today: cauliflower and broccoli patties over brown rice and sautéed baby tomatoes</Card.Title>
                <Card.Text>First time trying these patties from @traderjoes and they were wayyy better than I was expecting.</Card.Text>
                <Card.Text>2 of them is only 100 calories!! + 1/2 cup of brown rice is 180 calories... for a total of lunch being only 280 calories!</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/IZQDKn35OaPtzz_h-nygEwTBiAePmq_q7XybYGU2FRN62fJw7rZgLRPl1Fbadvpqoe1RxzedbQnfXPVc3VkAQG7VJh6gxtvNdw4kFz8RmnYylsSV2WqFV1G2rUMQKyVJZ4DjkpKIHphkDpCILY3LpXHy-EQQX_Vpo47wjtiWFnXr-fReJuMILO9hC_Ha7trfrbb3kheoSvtRessa-MYiM4I5mHOr-i17JQ7sM3U1F0jXapNH_ZtqTp3APYZ1ObUL4La0ewvKU1CcE9H2KYglGfY9x29s_7thaT5kiuI3b03lsu0cYCttEzZU2-eCTwQ6QAkUALzQMNlHcBuFpdxJmz9sTYdpXQlDC70XlAy0anEFJwu2Fq1rStHhkzuPLNdMBEWYMc4mVQsOL89WKRPZ8RH3FjdMDncxgb30miVj099M9qeLVjQWIq0s2PXLG0MVKf5IjVaJKb_sgNlSwBa2JZ8q3kN2hEZA75co_N2Bfe9ilpaDRo5_eWb9WwYRHQ6d_8f9HWdr7tlrCB5otd2Lmw2FowCtIzlD8ePZShDLVvc2g1o99qAVxuK37MYJfo4iK8BVZCDLtD7hvX_3IiS974XE8LTIVJQI7Hs2R9l1lgtg2OklmvnupMgWrXnBLUZVkS96WHIG29KQpKqb-gxP19Cxqy_zXwmnWFSpMTnxKHvpqqloi1KP2BVRlZAa=s222-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Chickpea chocolate chip blondies</Card.Title>
                <Card.Text>flourless, gluten free and under 100 calories for one!</Card.Text>
                <Card.Text>Ingredients: ❁ 1 can drained chickpea ❁ 1/2 cup of oats ❁ 1 egg ❁ 2 tsp cinnamon ❁ 2 tsp baking soda ❁ 2 tsp vanilla extract ❁ 3 tbsp honey (or maple syrup) ❁ 1/4 tsp salt ❁ 1/4 cup chocolate chips then mix all ingredients in a blender or food processor (except chocolate chips) then spread onto 8x8 pan and top with chocolate chips then cook at 350 for 12-15 minutes or until your fork comes out clean</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/PaCv0IG8ikWEy2-Rus2M8BdJ5Z2jC4W-Cmq-tdiNVxQ3HQgzzSEwAtIj771I_Ibn7Js8zzdK1mF0M3sjeabyv986YKzjRNWbOsT_kkgwacjhSagulo1PZHNVvIAxeWBHM5P4G8-47YTDjNYh2XHyLHxI4z_n5vyt1SuZQiA2ICs3R0zLapOQqGK5TrxtEGVtwGSE4hDt9T2SKD80aOG6sHokuRNYDVgh9CGJam4mfaJTCB3eouhT96xJJ0fAaScFOrgK7XI6WqPtEozoFcdjsjAPk_ChampRjNZkKjALxq2f2fuLpPsR5Rj6r8tKtcLfWYOcpVoCfM3s56rr27DzROdASX7_zl8BFJCpCIuvUl3s8UMcu0wAmeN9NCDtOYzOfl4-i2LlhWTJPadmfq9C9NyErc9E3NvvwXfAuTEvDeZwycvxMozace45G6aZanARyhaCIAEjLwV94dotGz2zKWjc_zMT4ELkQBRa_qVHCLF9Fyl58V2kxcdeURJeTBhRdqUxMU_hf55gSqbV2kAtuoAbkCn9XOW00TLkiDQ8iYG9PnpMRIbfoCcS4Kx3ZwlwcdmZnhmklDRuyKgTLAtrRBV_bmHnvBUWo3mwzwqwCW6LwSP67_AA4mjDdQRscJYNex0XyQsiy4HvQxTjRkWmbM09_x_S__4Co7RT3T4C-HKMGipGLidIlvOrabPT=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Healthy banana oat pancakes </Card.Title>
                <Card.Text>Starting off Monday right </Card.Text>
                <Card.Text>This recipe made around 10 pancakes: 1 1/2 cup oats,3 bananas, 3 tbsp plain non-fat yogurt, 3 eggs, 2 tsp baking powder, 1 tsp vanilla extract, Mash it all up and ready to cook on a pan </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/VqzUz4WdIOBycCpm3pv056rHook4w_PH5q91msVp2hLblKa4gLVxfpfI8bIqKaWUgGsCrm7kFHrce2pR94sxcXTYHZm6PxJJ0Icbnz_BoLAzuRM1ViGPjcM-kxKXwC0yTYDtU5jpeo2hUpBJfyOMLU4EezyqQBXgvQ-5LK9P4cPrdVnZfDizLKCX6ENLRoqtjRONmYdeBZvq-QZsORRPxG3kvcRrXYH7PbGIRGLD9yyOUkvtc_c4b8gDD9vzHqK1ocCLLa9lR6zvYG4UgdBLUE2n74VF_stOvfKvgxyocPK3hEMg2949mQQlMBDiwcE-nzifuoAT0gJqtL4HRjHHuRFEuH4cgZ0hzcCpIDGl_WtI6JSCZuaBW9_iO3mQWY6_xNcgUcGmwQ7A4cEV8c6elvMFG0MZgzwXAUOsw5h2WvPKfuDGPpTwS-tNGsGNwPXTq2lskmLVS8O2l20lv_Z6Crq4md61xFjC0pRjS0yNudLfBeSsFXzW1vv1wNGxY8ggM_7adSpPa9_BoqzphheWwiivRTHMgMqahiZnJ6jj-_mLNxy7Kto6OCtpQlKHtGnzAPqzVYA9KKD55GkJ12-o9URURtigNed_FtqZ7Tdnr8A6MGkx7okfqj2jOf42gE_dG6WXfEjwNvgXwRty-4qVcc0Xt-Wl3n6-Je4Fz3uU0KNuugerpc6DTC4BW-O6=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Double chocolate chip peanut butter stuffed cookies</Card.Title>
                <Card.Text>Happy Friday!!! These are in no shape healthy, but they’re amazing, and on the weekends I allow myself some sweets</Card.Text>
                <Card.Text>I had some leftover homemade plain chocolate chip cookie dough and wanted to do something different with it - I added some cocoa powder and extra chocolate chips into the dough, then I stuffed each cookie dough ball with some peanut butter</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/7dyhDJSqafXdCLSIU0TS_nVaRHyosrngAGQ_xZ0I2sXVUVdVQKaY03zRVzz-J4JiKJr4VTws68WRwjVT245rPwizciNZ9dVZXRQm0Ka0_aiJRx0lo8IJnCNTSvanZCryVNadIXWdizjP6dm-0fFJKqHv8hOkm-TPmQGImMQYQR8oOG_yZD5akUZaMk8r_-syc92ZLoU91GiaPoCtpHR8smuVEmZciKxd6_gPGHkihZpN31abo5YED8Y7lgn-0pZnTb7Rz1wS3YzKxQGKwME7QW8FxkJ91BIG_dZ1jP1MoZecLcpxUWRX4u996jKLWq0peC2akKT3za4dSdHngLrlFZjbfDdq8X9JTkxYJpUZ2FnE570DadV1NxtahxAyIx2ZjKMfg3uobF2IWJ79ugkoeaqAglI-zHx8sy8c-QUoPAO2B7opTv2rTV4MtSBSUTSFkC36SrMmvfbIHz_UuBCdS08ZSQotJP5_0oDBPxhwwn_bi5xzTYetI4qfD887chZ-Go6UShUDVPb_hZI6JWUj2aFmP8VaSv6WowYyF4WKVX_TzT_cRbIuhPANn8ivn83esQG_Z5d6jYsULx0uimIq9ix5UviyOzHuypi7ZHa3isbc1cm4rjxKCTBpWoHuNieX1uFJRAu-tOhMSLgmXQQXa0eq3QEy_BWPKiqv1chEHOk10e3QKQJJJEL3e2_u=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Salmon burgers with coleslaw and chipotle mayo</Card.Title>
                <Card.Text>Salmon burgers were pre made but I made the coleslaw and spicy mayo from scratch!</Card.Text>
                <Card.Text>Coleslaw: •3 cups of coleslaw  •1/2 cup Greek plain yogurt •2 tbsp mayo •1 tbsp Apple cider vinegar •Salt and pepper to taste Spicy mayo: •1/2 cup mayo •3 tbsp hot sauce •1 tsp chili pepper •1 tsp cayenne pepper SUCH A GOOD DINNER!</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="flip-card">
          <Card className="flip-card-inner">
            <div className="flip-card-front">
              <Card.Img variant="top" src= "https://lh3.googleusercontent.com/KKYfWUMJ5Sxh6wZzdya-QEw-4YuXQO5mHu9Cwra8DPM9VWuNO8RymH0ZBEUyPX6HRH-g8IlUVKp_fnAdHfPRfrDvs890SxJr9pQNySOPjmapeth6RIqlSIithkj7Rs_6Nyf0zdUm92VGLrtJS_c5D4XegpDWnU7dulCUK5ESWeXj6-xSD3WNohOMUM7hbTIGygfxbe-R9KoJE19keQJ_ZQwv3kPFyGtVILjt3WNXBkkyj_7bCEoj3f7eQR9wVYRKwfpP7JOr42SgPwfOwg6wwITouWsyzwr_B-JmzuKCc-LkrmEKrEFrFLou8WYM1ctLocCWb1v3YQcg-Apqi3ZxlPezCgClrrUTd2KIq8X2X17Oti6k49vt-ATVbgLRFwp-vxrqtiUeNoJ5br5swOGpJ4Svd-wxTD7zm-DERub7FuPz7sh-m8IA8-h0Xe1iQ79zk_EbQ1gUZOT_k_MU2kVh3xrm_Yw1BB4pXi9NvOBmSW1pRmR1S1FwW3NXC2BWaQiVAX2sGQL4USEM6AoZB6IXX1OjqPAkEZDriLsfAXEbhv2CgruXU0vwrT6HYVXn21anRFo7_JbnVPdfEKxyoWA-BFLpmlUOaXYp1GPIdUMlMU5f8s4wj8sAq4uvL_JPXFeeFCRrGqfsMBtBqdzV1Ta7GhliZgADJ-4dQkqf5Bxc1byhkzj0HPBCp2LMqxO8=s640-no?authuser=0"alt="melissa's food"/>
            </div>
            <div className="flip-card-back">
              <Card.Body>
                <Card.Title>Shrimp Alfredo Chickpea Pasta</Card.Title>
                <Card.Text>I rarely have any type of pasta so this was a nice treat cooked this in less than 20 minutes too</Card.Text>
                <Card.Text>-1 box of chickpea pasta -15-20 large shrimp -1/2 jar Alfredo sauce -handful of broccoli florets -top with salt and parmesean cheese to taste</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
        </div>
    </>
  );
}
export default Recipe;
