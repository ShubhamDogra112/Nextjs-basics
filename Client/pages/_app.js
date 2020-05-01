import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../styles/global.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }




  // global css imported here
  // images added in the public/images
  // components are created in Components 
  // globall css file is added in the styles directory 
  // component level css files are created as name.module.css and classes are importes as className = {styles.name}

