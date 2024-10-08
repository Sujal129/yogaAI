// src/components/HoveringDetailedCard.tsx
import Image from 'next/image';
import React from 'react';
import foto from './sitting.jpg';

export default function HoveringDetailedCard({ PoseName, PoseDescription, PoseSteps, Precautions, Benefits, closeModal }: any) {
    return (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-lg py-20 px-0">
            <div className="relative bg-white rounded-lg w-11/12 md:w-4/5 lg:w-1/2 max-h-full overflow-auto p-1">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-black">{PoseName}</h1>
                    <button onClick={closeModal} className="text-red-500 text-xl font-bold">X</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <Image src={foto} alt={PoseName} className="object-cover rounded-lg w-full h-64 md:h-80 lg:h-96" />
                        </div>
                        <div className="text-gray-700 text-base mb-4">
                            <div className="mb-4">
                                <h1 className="text-l font-bold mb-2">Benefits:</h1>
                                <ul className="list-disc list-inside">
                                    {Benefits.map((benefit: string, index: number) => (
                                        <li className='italic text-green-500' key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col">
                        <div className="flex-grow  bg-opacity-50 p-0 mb-1 rounded-lg">
                            <h1 className="text-base font-bold mb-2">Description:</h1>
                            <div className='mb-2' >
                                {PoseDescription}
                            </div>
                            <h1 className="text-xl font-bold mb-2">Follow These Steps:</h1>
                            <ul className="text-gray-700 text-base list-disc list-inside">
                                {PoseSteps.map((step: string, index: number) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-0 rounded-lg">

                            {Precautions && Precautions.length > 0 &&
                                <div>
                                    <h1 className="text-l font-bold mb-2">Precautions<span className='text-red-500'>*</span>:</h1>
                                    <ul className="list-disc list-inside">
                                        {Precautions.map((precaution: string, index: number) => (
                                            <li key={index}>{precaution}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// import Image from 'next/image'
// import React from 'react'
// import foto from './sitting.jpg'

// export default function HoveringDetailedCard({ PoseName, PoseDescription, PoseSteps, Precautions, Benefits, closeModal }: any) {
//     return (
//         <div className=" p-4 rounded w-full md:h-2/3 md:w-2/3 object-contain bg-green-500 bg-opacity-30 backdrop-blur-lg  ">
//             <div className="flex justify-between">
//                 <h1 className="text-xl font-bold text-white">{PoseName}</h1>
//                 <button onClick={closeModal} className="text-red-500 text-xl font-bold">X</button>
//             </div>

//             <div className="grid grid-col-1 md:grid-cols-2 gap-4 p-4  bg-white  ">
//                 {/* Left Column */}

//                 <div className="flex flex-col">

//                     <div className="flex-grow h-2/3 bg-gray-300">
//                         {/* Replace the src with the actual image source */}
//                         <Image src={foto} alt={PoseName} className="object-cover h-full w-full" />
//                     </div>
//                     <div className="Description">
//                         <p className="text-gray-700 text-base">{PoseDescription}</p>
//                     </div>

//                 </div>
//                 {/* Right Column */}
//                 <div className="flex flex-col">
//                     <div className="flex-grow bg-blue-200 bg-opacity-50 p-4">
//                         <h1 className="text-xl font-bold">Follow These steps: </h1>
//                         <ul className="text-gray-700 text-base">
//                             {PoseSteps.map((step: string, index: number) => (
//                                 <li key={index}>{index + 1}. {step}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="bg-gray-100 p-4 flex  flex-col">

//                         <div className="benefits">
//                             <h1 className="text-l font-bold">Benefits:</h1>
//                             <ul>
//                                 {Benefits.map((benefit: string, index: number) => (
//                                     <li className='italic text-green-500' key={index}>{index + 1}. {benefit}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         { }
//                         {(Precautions !== undefined && Precautions !== null && Precautions !== "" && Precautions.length > 0) &&
//                             <div className="precautions">
//                                 <h1 className="text-l font-bold">Precautions<span className='text-red-500'>*</span>:</h1>
//                                 <p className="text-gray-700  text-sm ">{Precautions}</p>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

