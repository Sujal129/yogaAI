// src/app/page.tsx

import Navbar from './components/Navbar';
import ProductPage from './components/Product';

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center bg-gray-100">
      <div className='sticky top-0 z-50 w-full '>
        <Navbar />
      </div>
      <div className='flex-grow overflow-x-hidden w-full '>
        <ProductPage />
      </div>
    </main>
  );
}


// import Navbar from './components/Navbar';
// import ProductPage from './components/Product';
// export default function Home() {

//   return (
//     <main className=" w-screen min-h-screen items-center justify-between bg-gray-500">
//       <div className='sticky top-0 '>
//         <Navbar />
//       </div>
//       <div className='overflow-x-hidden w-full overflow-hidden'>
//         <ProductPage />
//       </div>
//     </main>
//   );
// }
