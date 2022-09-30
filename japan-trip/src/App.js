import './App.scss';

function App() {
  return (
    <>
      <header>
        {/*<img src="./img/odigo-Logo.png"/>*/}
        <div className="logo"></div>
        <div>
          <div>Articles</div>
          <div>Locations</div>
          <div>Videos</div>
          <div>Sign in</div>
        </div>
      </header>
      <main>
        <div className="temple"></div>
        <div className="screen"></div>
          <div>
            <div className="head">
              <div>Discover Amazing places in Japan</div>
              <div>
                Jump off balcony, onto stranger's head. Chase ball
                of string hide when guests come over. Being gorgeous
                with belly side up i could pee on this if i had the
                energy but under the bed, for attack the child, open
                the door,
              </div>
              <div>
                <div>
                  <label className="radioAndAnswer">
                    <input type="radio" name="doGo"/>
                    <div className="radioSubstitution"></div>
                    <div>What would you like to do?</div>
                  </label>
                  <input type="text"/>
                </div>
                <div>
                  <label className="radioAndAnswer">
                    <input type="radio" name="doGo"/>
                    <div className="radioSubstitution"></div>
                    <div>Where would you like to go?</div>
                  </label>
                  <input type="text"/>
                </div>
                <div className='button'>SEARCH</div>
              </div>
            </div>
            <div className="benefits-wrapper">
              <div className="benefits-title">Benefits of Odigo</div>
              <div className="benefits-item-wrapper">
                <div className="benefits-item">
                  {/*<img src="./img/icon-temple.png"/>  НЕ МОГУ ПОНЯТЬ ПОЧЕМУ ЭТО НЕ РАБОТАЕТ*/}
                  <div className="temple-icon icon"></div>
                  <div className="title">Welcome to Odigo!</div>
                  <div className="description">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</div>
                  <div>
                    <div className="more">
                      <div>LEARN MORE</div>
                      <div>→</div>
                    </div>
                  </div>
                </div>
                <div className="benefits-item">
                  {/*<img src="./img/icon-temple.png"/>  НЕ МОГУ ПОНЯТЬ ПОЧЕМУ ЭТО НЕ РАБОТАЕТ*/}
                  <div className="guide-icon icon"></div>
                  <div className="title">Your Personal Japan Guide</div>
                  <div className="description">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</div>
                  <div>
                    <div className="more">
                      <div>LEARN MORE</div>
                      <div>→</div>
                    </div>
                  </div>
                </div>
                <div className="benefits-item">
                  {/*<img src="./img/icon-temple.png"/>  НЕ МОГУ ПОНЯТЬ ПОЧЕМУ ЭТО НЕ РАБОТАЕТ*/}
                  <div className="business-icon icon"></div>
                  <div className="title">Promoting Local Businesses</div>
                  <div className="description">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</div>
                  <div>
                    <div className="more">
                      <div>LEARN MORE</div>
                      <div>→</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
