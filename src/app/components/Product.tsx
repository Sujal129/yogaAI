// src/pages/Product.tsx

"use client";
import { useEffect, useState } from 'react';
import YogaCard from "../components/Card";
import StateStore from "../states/StateStore";
import HoveringDetailedCard from '../components/HoveringDetailedCard';
import HeroImage from '../components/assets/HeroImage.png';
import Image from 'next/image';

interface YogaPose {
  PoseName: string;
  PoseDescription: string;
  PoseSteps: string[];
  Precautions: string[];
  Benefits: string[];
}

export default function ProductPage() {
  const [diseaseDescription, setDiseaseDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<YogaPose | undefined | null>(null);
  const [fadeClass, setFadeClass] = useState<string>('fade-in');
  const { responseArray, setResponseArray, selectedCard, setSelectedCard } = StateStore();

  useEffect(() => {
    if (responseArray) {
      const data = responseArray!.find(p => p.PoseName === selectedCard);
      setFadeClass('fade-in');
      setSelectedPhoto(data);

    }
  }, [selectedCard]);

  const getPoses = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const diseaseCures = await fetch("/api/cures", {
          method: "POST",
          body: JSON.stringify({
            diseaseDescription: diseaseDescription
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const response = await diseaseCures.json();
        setResponseArray(response.posesArray);
        setDiseaseDescription("");
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
      setSelectedCard(null);
    }
  };

  const closeModal = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setSelectedPhoto(null);
      setSelectedCard(null);
    }, 300); // Match this timeout with the duration of fade-out animation
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 mt-10 md:mt-4 ">
      <h1 className="flex justify-center mb-4">
        <Image src={HeroImage} alt="yoga" className="w-1/2 h-1/2 md:w-1/2 md:h-1/2 inline-block" />
      </h1>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter your Health Issue..."
          className="px-4 py-2 rounded-full border border-gray-300 w-full md:w-96"
          value={diseaseDescription}
          onChange={(e) => setDiseaseDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              getPoses();
            }
          }}
        />
        <button
          onClick={getPoses}
          className="px-4 py-2 bg-green-700 text-white rounded-full w-full md:w-auto"
        >
          {isLoading ? (
            <div>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            </div>
          ) : 'Search'}
        </button>
      </div>
      <div>
        {selectedPhoto && (
          <div className={`fixed inset-0 z-40 flex justify-center items-center ${fadeClass}`}>
            <HoveringDetailedCard
              PoseName={selectedPhoto.PoseName}
              PoseDescription={selectedPhoto.PoseDescription}
              PoseSteps={selectedPhoto.PoseSteps}
              Precautions={selectedPhoto.Precautions}
              Benefits={selectedPhoto.Benefits}
              closeModal={closeModal}
            />
          </div>
        )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {responseArray && responseArray.map((pose: YogaPose, index: number) => (
          <YogaCard
            key={index}
            PoseName={pose.PoseName}
            PoseDescription={pose.PoseDescription}
            PoseSteps={pose.PoseSteps}
            Precautions={pose.Precautions}
            Benefits={pose.Benefits}
            PoseId={index}
            onClick={() => setSelectedCard(pose.PoseName)} // Add onClick to set selected card
          />
        ))}
      </div>
    </div>
  );
}



// "use client";
// import { useEffect, useState } from 'react';
// import YogaCard from "./Card";
// import StateStore from "../states/StateStore";
// import HoveringDetailedCard from './HoveringDetailedCard';
// import HeroImage from '../components/assets/HeroImage.png';
// import Image from 'next/image';
// interface YogaPose {
//     PoseName: string;
//     PoseDescription: string;
//     PoseSteps: string[];
//     Precautions: string[];
//     Benefits: string[];
// }

// export default function ProductPage() {
//     const [diseaseDescription, setDiseaseDescription] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [selectedPhoto, setSelectedPhoto] = useState<YogaPose | undefined | null>(null);
//     const [fadeClass, setFadeClass] = useState<string>('fade-in');
//     const { responseArray, setResponseArray, selectedCard, setSelectedCard } = StateStore();

//     useEffect(() => {
//         if (responseArray) {
//             const data = responseArray!.find(p => p.PoseName === selectedCard);
//             setFadeClass('fade-in');
//             setSelectedPhoto(data);
//             if (data) {
//                 window.scrollTo({ top: 0, behavior: 'smooth' });
//             }
//         }
//     }, [selectedCard]);

//     const getPoses = async () => {
//         if (!isLoading) {
//             setIsLoading(true);
//             try {
//                 const diseaseCures = await fetch("api/cures", {
//                     method: "POST",
//                     body: JSON.stringify({
//                         diseaseDescription: diseaseDescription
//                     })
//                 });

//                 const response = await diseaseCures.json();
//                 setResponseArray(response.posesArray);
//                 setDiseaseDescription("");
//             } catch (error) {
//                 console.error(error);
//             }
//             setIsLoading(false);
//             setSelectedCard(null);
//         }
//     };

//     const closeModal = () => {
//         setFadeClass('fade-out');
//         setTimeout(() => {
//             setSelectedPhoto(null);
//             setSelectedCard(null);
//         }, 300); // Match this timeout with the duration of fade-out animation
//     };

//     return (
//         <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 ">
//             <h1 className="flex justify-center">
//                 <Image src={HeroImage} alt="yoga" className="w-1/2 h-1/2 md:w-1/2 md:h-1/2 inline-block" />
//             </h1>
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                 <input
//                     type="text"
//                     placeholder="Enter your Health Issue..."
//                     className="px-4 py-2 rounded-full border border-gray-300 w-full md:w-96"
//                     value={diseaseDescription}
//                     onChange={(e) => setDiseaseDescription(e.target.value)}
//                     onKeyDown={(e) => {
//                         if (e.key === 'Enter' && !e.shiftKey) {
//                             e.preventDefault();
//                             getPoses();
//                         }
//                     }}
//                 />
//                 <button className="px-4 py-2 bg-green-700 text-white rounded-full w-full md:w-auto">
//                     {isLoading ? <div>
//                         <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white">/</div>
//                     </div> : 'Search'}
//                 </button>
//             </div>
//             <div>
//                 {selectedPhoto && (
//                     <div className={`inset-0 flex justify-center items-center w-full h-full  ${fadeClass}`}>
//                         <HoveringDetailedCard
//                             PoseName={selectedPhoto.PoseName}
//                             PoseDescription={selectedPhoto.PoseDescription}
//                             PoseSteps={selectedPhoto.PoseSteps}
//                             Precautions={selectedPhoto.Precautions}
//                             Benefits={selectedPhoto.Benefits}
//                             closeModal={closeModal}
//                         />
//                     </div>
//                 )}
//             </div>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
//                 {responseArray && responseArray.map((pose: YogaPose, index: number) => (
//                     <YogaCard
//                         key={index}
//                         PoseName={pose.PoseName}
//                         PoseDescription={pose.PoseDescription}
//                         PoseSteps={pose.PoseSteps}
//                         Precautions={pose.Precautions}
//                         Benefits={pose.Benefits}
//                         PoseId={index}
//                         onClick={() => setSelectedCard(pose.PoseName)} // Add onClick to set selected card
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }