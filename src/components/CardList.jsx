"use client"
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { Cards } from "@/utils/cards";

const CardList = () => {
  const [currPage,setCurrPage]=useState(1)
  const [itemsPerPage,setItemsPerPage]=useState(4)


  const startIdx=(currPage-1)*itemsPerPage;
  const lastIdx=startIdx+itemsPerPage
  const displayItems=Cards.slice(startIdx,lastIdx)
  const lastPage=Math.ceil(Cards.length/itemsPerPage)
  const nextPage=()=>{
   if(currPage>=1 &&  currPage<=lastPage-1){

      setCurrPage(currPage+1)
    }
  
  
  }
  const prevPage=()=>{
    if(currPage>1){
      setCurrPage(currPage-1)
    }
  }


  return (
    <section className="flex-[5] flex flex-col gap-12 ">
      <h2 className="text-2xl font-bold">Recent Activities</h2>
      <div className="flex flex-col gap-8 w-full h-full ">
        {displayItems?.map((card) => (
          <div className="" key={card.id}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} lastPage={lastPage} currPage={currPage}/>
    </section>
  );
};

export default CardList;
