import {AnimateSharedLayout} from "framer-motion"
import "../styles.scss";
import Layout from "../components/Layout";

function App({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Layout>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </AnimateSharedLayout>
  )
}

export default App
