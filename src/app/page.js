
import { Suspense } from 'react'
import Products from './products/page'
import LoadingData from './loading'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <Suspense fallback={<LoadingData/>}>
          <Products/>
        </Suspense>
      
    </main>
  )
}
