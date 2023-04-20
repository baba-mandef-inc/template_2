import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'

function Init(props) {
  return (
    <div className="main-wrapper">
      <div id="preloader">
            <div className={"preloader"}>
                <span></span>
                <span></span>
            </div>
        </div>
      <Header />

      {props.children}

      <Footer />
    </div>
  )
}

export default Init
