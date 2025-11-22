import React from 'react'
import KatigoriaItem from './KatigoriaItem'
import { katigoriaData } from '../data/data'

function Katigoria() {
  return (
    <>
      <section className="katigoria">
        <div className="container">
          <div className="katigoria__title">
            <h1 className="katigoria__title-item">Kategoriyalar</h1>
          </div>
          <div className="katigoria__wrap">
            <div className="katigoria__cards">
              {
                katigoriaData.map(item => (
                  <KatigoriaItem item={item} key={item.id} />
                ))
              }
            </div>
            <div className="katigoria__right">
              <div class="popular-searches">
                <h3>Odamlar ko‘pincha qidirishadi</h3>
                <ul>
                  <li><a href="#">Kolonki с Алисой</a></li>
                  <hr />
                  <li><a href="#">Elektr choynaklar Philips</a></li>
                  <hr />
                  <li><a href="#">Smartfonlar Apple iPhone</a></li>
                  <hr />
                  <li><a href="#">Elektr choynaklar Bosch</a></li>
                  <hr />
                  <li><a href="#">Elektr choynaklar Braun</a></li>
                  <hr />
                  <li><a href="#">Televizorlar Artel</a></li>
                  <hr />
                  <li><a href="#">Televizorlar Sonor</a></li>
                  <hr />
                  <li><a href="#">Oshxona jihozlari BUENO</a></li>
                  <hr />
                  <li><a href="#">Televizorlar Premier</a></li>
                  <hr />
                  <li><a href="#">Televizorlar Xiaomi</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Katigoria