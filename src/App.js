function AboutUs (){
  return (
      <>
        <h1>GeekTech</h1>
        <p>GeekStudio</p>
      </>
  )
}
function Portfolio(){
  return  (
      <>
        <ul>Animals
          <li>Bear</li>
          <li>Snake</li>
          <li>Monke
            <ul>
              <li>Monke 2
                <ul>
                  <li>
                    Monke 3
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </>
  )
}

function App() {
  return (
    <div>
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}

export default App;
