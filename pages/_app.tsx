import '../styles/styles.css'
import '../styles/zoom.css'

// import { Cog8ToothIcon } from '@heroicons/react/24/outline'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return <>
    <Component {...pageProps} />
    <script defer src="https://analytics.eu.umami.is/script.js" data-website-id="9108253b-bd4d-49be-87a3-9689be313969"></script>
  </>
}