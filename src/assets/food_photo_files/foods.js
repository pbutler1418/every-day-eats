const foods = [
  {
    id: 1,
    name: "Healthy no-bake PB oat balls",
    imgUrl: "https://lh3.googleusercontent.com/oGN8BdxYQmZKX2KK443kPH1nmhySHpAzcZb4gLUTl1ScLi5J872-hMzZ_bHzuxjo9yrsM3QBzQJC_lzhUPU57I9y4tNoqK3hpoxeNisR0vLYbsR5C9ukXB8lvEn9bugPU4ZbuqxpOPq-Pd6IpgauZEZEWbTwe-OuXNxKbO-jWqkP5t2rBWlnSuNSKcHQFlGVsOSh35NXQRPE2B72znzNWueJeHxi96brKLnQrEi0k1zdDveIPRekWv_va3C5EAX7SwNOkMd_noNvJPYAHBotDLYZm7BDSH646g1ReWYEIJKnoO-svqD1aE51zK8hK9331IX2UFPtq7e3WlchNN42GtW92_k9xWK0o6GztNNHUA4m60fHXvtiBPsGedre2nLPByjNs-w3wGTnMMku6zoT8u-7q1QqxZ6viKu5sM2bUwxJQbxvpZGajiruMSqlq2DHgiKVWLd5FojTfVNpeaHM5NKxXDuvGAaDTG3fE7WNFFikoBOlFuvz7_1lZJvlzoBz9RqKb4W5f_Ax_CzgSqwxGiSMcEgJ9X7yoIEs3oZAkI96NAp8v7i0kNEhEFP1Jb0zMWX7oCvssfQc-4tjmeMwr5SkgHWSjc6OSi4EUT7UW8u0oz-HroLGc3TRWNyN9DlZA2RRIr1BKKfpjE8AXSY0Vgro-Jk-nIs6Gy9R4v4mBb0maXXqOpsqjimnvrkk=s345-no?authuser=0",
    description:
      "I make these weekly - such a good after dinner snack to satisfy your sweet tooth",
    directions:
      "-1 cup oats -1/2 cup peanut butter -1/4 cup honey -1 tsp vanilla extract-pinch salt-1 tsp of cinnamon-1 tbsp chia seeds-1/4 cup chocolate chips Combine all ingredients, cool the mixture in the refrigerator for ~15 minutes, then roll into tbsp sized balls!",
  },
  {
    id: 2,
    name: "Homemade yogurt BARK",
    imgUrl: "https://lh3.googleusercontent.com/pN1uVOEFWl3XFvfUXGMqUjbU4D-Td9zx13Vm5CjTKDNBketVeg6NUcPmK0dseUTnYp_JClr12UT5p_WTxlyBmU7p9kLVxOQH23xe9MyjAF8IhdBvJ9eQVMPdMj1lIkzWqES8_5aqrco_XjDNlira2AtX3qDvgIGr60ynpYD8D2r5bqW5niEarQiakJCg5kkjkrxb1kL-pngPqJazNx49UOblZWjcH2yCHGTyjLLUkCWv-kH-IQ9egXKmOXmFWgvuZzMAtUpcnFl6ZXlTjEt_vwdGOnGny0O5UHiMeLTkiKoxW6foEjBhEzhPJBRJO2zfc5QZ8bUe04bsJbhf-VVD1WcfgV-LEYz6Uo6ShqWciOlQSMXXhemGxO2FQ4owA9z96IYL0EWL0hDwz78styvOE4xizGAXIt-DcOnqsxiOr3aFOJejFLLIv6kwkAfisoyDN1Pq5oVjdHFS9BBqa7L2d8zqBh4Uos53HnLCb8JhM58gAirnzWTJIen65rJt15vLdi9HQU-q0OWeIDlS7wJp2iBm75bkDTzu5OxZ7P0WtECGijzQsXlq8DgUo2L1MMwWu0DdqsylKlIxH_jnMKAjwXlxil1kkcB7oo8b2egsnP9eDhQxEDsqx6SyoabLt_1N79tYiO2eF5kRDBtoDij_7YA2hsEVWPBlWFdSgVnUtUewc7rzd8CTX3JX4cF7=s640-no?authuser=0",
    description:
      "I make these weekly - such a good after dinner snack to satisfy your sweet tooth",
    directions:
    "with wax paper (I used non-fat @chobani yogurt) -if you’d like it a little sweeter, you can also add some honey or stevia onto the plain yogurt -drizzle any toppings you’d like (really any fruit, cereal, chocolate works)-place in freezer for about 1-2 hours I liketo take mine out a little under an hour so it’s still a little soft-break apart + enjoy!",
  },
  {
    id: 3,
    name: "Smoked salmon toast",
    imgUrl: "https://lh3.googleusercontent.com/kVrsaUGhlbR7mQIQEBeX3pA3Gn3CgpQfsD8VkdTlFwD2-aMi6veFiH_rU55oaAINc3wWRubG6J8pxmLVaihvNnNca2Nhob3sVuayJDNFCtq_4wcCh8G2igaax0pnv0vZJzVGHoq0PIvmQWSbC-RAMhjgO0UxTmnomTL1YULORLaTxYzskK6H37--dX1XxgldZkTKApA7Zihd2gxGRWzLLpfD8Rl3ctO-PSo1yUMOfH_oswkeMDPhLTfLSCVYJl7r8_SIDaKOJZ55fvA3SOG9Mp7GXhmVHb1Nux3fLwTFM0OY4vLESIR3QrDDSG2EWZ01OHJw1Qc1nwNjlj7gqddOGvu1wvaBQim3Oa9OdejYmtPxMwW0QflCnWQaXtypYu46l24Ka1Y-grHRytywEqeQT4HCWovFE4a3vBQIlE_sJvqPW6J66rpA7NO7AjwqAGt3btywTsncDp4w-_UzflrcUjr1Ijwh-T7H1jcxfLt4H32IuDnLnkji4-fSfjBJ8ugKXo_EYwnhnDP8TzYHDoXU1Aoz-vu7ItEPEkEZCuQ4ztgw-N9UdH-C5QKZvQ08JYGCyzgSeCrwjwYwFy9TZ_KCh1TyJu0uAmDP37Mk2ScUh0WIwN3C6jwqFJo-2z_rkF0PPWRJtmXDdoyo4ScfIpp8QXWXWRn9U56EuLpd9JNrjftQQ0OdKtgGZb56SZjA=s640-no?authuser=0",
    description:
    "that may or may not be a mimosa on the side",
    directions:
      "1 slice sprouted grain bread, toasted1 ounce cream cheese 2 slices fresh lox 2 slices tomato 1 slice red onion 1 teaspoon capers 1/2 teaspoon fresh dill 1/4 teaspoon freshly ground black pepper 1. Spread with cheese on toasted bread, top with lox, tomato, onion. 2. Sprinkle capers and then dill and add pepper.",
  }
];

export default foods;
