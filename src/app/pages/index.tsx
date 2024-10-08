import Navbar from '../components/Navbar';
import ProductPage from '../components/Product';

export default function Home() {

  return (
    <main className="w-screen min-h-screen items-center justify-between bg-white text-black">
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='overflow-x-hidden w-full overflow-hidden'>
        <ProductPage />
      </div>
    </main>
  );
}

// import Navbar from '../components/Navbar';
// import ProductPage from '../components/Product';  // Adjusted import to match component location
// export default function Home() {

//   return (
//     <main className="w-screen min-h-screen items-center justify-between bg-gray-500">
//       <div className='sticky top-0 z-50'>
//         <Navbar />
//       </div>
//       <div className='overflow-x-hidden w-full overflow-hidden'>
//         <ProductPage />
//       </div>
//     </main>
//   );
// }
