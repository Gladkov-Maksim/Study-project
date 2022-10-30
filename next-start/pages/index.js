import Header from './components/Header/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Link from "next/link"

export default function Home() {

  const router = useRouter()

  return (
      <>
          <Header/>
          <main>
              <div>
                  <a
                      onClick={ () => router.push('/about')}
                  >Link</a>
              </div>
          </main>
          <footer></footer>
      </>
  )
}
