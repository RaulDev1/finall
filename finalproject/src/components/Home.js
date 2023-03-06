import React from "react";
import react, { useState } from 'react';
import "./navbar.css"
import "./home.css"

const Home = () => {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }


    return (
        <section className="hero">
            <h1 className="counter">{count}</h1>
                 <div className="stick"></div>
        <div>
        <img className="item1" src="https://sun9-27.userapi.com/impg/MT6hn5jY41mwRzrKnOOS_OlP8Dm_WvgZ8aVS8g/VeCaWGcyigg.jpg?size=403x388&quality=95&sign=a1da98fd17f2eefce9fd43510601fc4e&type=album" alt="picture"/>
        </div>
        <div>
        <img className="item2" src="https://static.wixstatic.com/media/a9ff3b_3be32fd5866944a0b2bd867c8e0dbaf9.jpg/v1/fill/w_408,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_3be32fd5866944a0b2bd867c8e0dbaf9.jpg" alt="picture"/>
        </div>
        <div>
            <h2 className="text3">УМ И СОБЛАЗН</h2>
        </div>
        <div>
        <img className="item3" src="https://static.wixstatic.com/media/a9ff3b_e3d29ce5f3e946e2b2b4c710e6e7ca75.jpg/v1/fill/w_408,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9ff3b_e3d29ce5f3e946e2b2b4c710e6e7ca75.jpg" alt="picture"/>
        </div>
        <div className="item4"> </div>
        <div>
        <a href="/homegoods1"> <img className="item5" src="https://sun9-20.userapi.com/impg/Y259yo5kOPJ4ibcMmy_gJ-4KpRkncATSSVs0kg/B2gdZNU-bc4.jpg?size=262x426&quality=96&sign=d5c0a10e8e141def54b639cf50738cc5&type=album"></img> </a>        </div>
        <div>
        <a href="/homegoods"> <img className="item6" src="https://sun9-63.userapi.com/impg/5H-vwnDpR4nH7gE7jBIOmLDJ8ImlZcHulWqTNA/1HdqH-MuelE.jpg?size=261x425&quality=96&sign=9a22caccf33171c50cfdb19b2ff751e8&type=album"></img> </a>
        </div>
        <div>
        <a href="/homegoods2"> <img className="item7" src="https://sun9-33.userapi.com/impg/miBeyrvJEbB9suwtmrHj2fLfdmNrhMUPxnN9TA/gkLALYSfkDw.jpg?size=261x424&quality=96&sign=1df28225c6f41fb3fce8d9060bedab90&type=album"></img> </a>        </div>
        <div>
            <h2 className="text5">НОВЫЕ ПОСТУПЛЕНИЯ</h2>
        </div>
        <div>
            <form className="input1">
                <label for="name"></label>
                <input type="text" id="name1" placeholder="     Добавьте эл.почту*"></input>
            </form>
        </div>

        <div className="liner"></div>
        <div className="liner2"></div>

        <div className="box1"></div>

        <div className="spring">ВЕСЕННИЕ ОБРАЗЫ</div>

        <button className="button1">
          <h2>OK</h2>
         </button>

         <a href="/accessories"> <img className="item8" src="https://sun9-35.userapi.com/impg/n3rkeVM4WO03GRTGgtyDFjXY7w1C6jEbualFXw/OX2ib2T9QkA.jpg?size=379x354&quality=96&sign=2fdc46561575a628095602ad50f341f6&type=album"></img> </a>

        <a href="/sale"> <img className="item10" src="https://sun9-49.userapi.com/impg/8CgpfCCtGzUbPvuiqpS-l85tKb19tEzb65PK_Q/WMen0S8w8ho.jpg?size=380x354&quality=96&sign=fd10599750aca80d5f73fcca2a683185&type=album"></img> </a>
        <a className="womenss" href="/womens">В женский отдел</a>
        <a className="menss" href="/mens">В мужской отдел</a>
        <div mainfooter></div>

        <div className="subscribe">ПОДПИШИТЕСЬ НА НОВОСТИ</div>
        <div className="first">и первыми узнавайте обо всех скидках, предложениях и новинках</div>

        <div className="freedom">СИЛА И СВОБОДА</div>
        <div className="summer">ГОТОВЬТЕСЬ К ЛЕТУ</div>

        <div className="footer11"></div>

        <div className="vestaft1">ВЕСТА</div>
            

        <div className="line21"></div>
        <div className="line31"></div>
        <div className="line41"></div>
        <div className="textft11">ПОМОЩЬ КЛИЕНТАМ</div>
        <div className="textft111">ЗАХОДИТЕ К НАМ</div>
        <div className="textft21">ПРИСОЕДИНЯЙТЕСЬ</div>

        <div className="textft31">Политика доставки ></div>
        <div className="textft41">Политика возврата ></div>
        <div className="textft51">Контакты ></div>
        <div className="textft61">О нас ></div>
        <div className="textft71">ул. Арбат, 1а, Москва,</div>
        <div className="textft81">119019, Россия</div>
        <div>
        <img className="item601" src="https://static.wixstatic.com/media/8cabc8e4a93c458bbf6508caed8ad7d2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8cabc8e4a93c458bbf6508caed8ad7d2.png" alt="picture"/>
        </div>

        <div>
        <img className="item611" src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3470ec8ca26475da4b228f0199b5d3d.png" alt="picture"/>
        </div>

        <div>
        <img className="item621" src="https://static.wixstatic.com/media/7177d158c36d432b93f51e54f80e2f3c.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7177d158c36d432b93f51e54f80e2f3c.png" alt="picture"/>
        </div>

        <div>
        <img className="item631" src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d7ffe259c9e54f59837481b3dd0130eb.png" alt="picture"/>
        </div>

        </section>
    )
}

export default Home;