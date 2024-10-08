import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import foto from 'C:/Desktop/yoga Project/GuruJi/src/app/components/sitting.jpg';
import StateStore from '../states/StateStore'
const YogaCard = ({ PoseName, PoseDescription,  PoseId }: any) => {


    const { setSelectedCard } = StateStore();



    const showCardDetails = (data: any) => {
        setSelectedCard(PoseName)
    };
    return (
        <div id={PoseId} className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer hover:shadow-2xl transition-all " onClick={showCardDetails} >
            <div className={`rounded  `} >
                <div className={`rounded`}>
                    <Image src={foto} alt={PoseName} className="w-full h-64 object-cover rounded" />
                    <div className="px-6 py-4  bg-[#ecfff3] ">
                        <div className="font-bold  text-xl mb-2">{PoseName}</div>
                        <p className="text-gray-700 text-base line-clamp-2">{PoseDescription}</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default YogaCard;
