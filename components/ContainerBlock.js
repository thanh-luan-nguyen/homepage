import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function ContainerBlock({ children }) {
  return (
    <div className=''>
      <Head>
        <title>Thanh Luan</title>
      </Head>
      <main>
        <Navbar />
        <div className=''>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
