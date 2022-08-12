import { Link } from "react-router-dom";
import PageHeader from "./common/PageHeader";
import { useState } from "react";
import { useEffect } from "react";
import cardsService from "./services/CardService";
import Card from "./services/card";

const MyCards=()=>{
  const[cards,setCards]=useState([]);
  useEffect(()=>{
    async function getCards(){
      const{data}=await cardsService.getAll();
      setCards(data)
    }
    getCards();
  },[]);
    return(
        <>
        <PageHeader
        title="My own cards"
        description="these is all my cards in the list below"/>
        <div className="row">
            <Link to="creat-card">create-card</Link>
        </div>
        <div className="row">
          {!cards.length?(
            <p>No Cards in your account..</p>
          ):(
            cards.map((card)=><Card key={card._id} card={card}/>)
          )
          }
          

        </div>
        </>     
    );
};
export default MyCards;