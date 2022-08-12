import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "./services/CardService";
const DeleteCard=()=>{
    const navigate = useNavigate();
    const params =useParams();
console.log("these is",params)
    useEffect(()=>{
        async function deleteCard(){
            await cardsService.deleteCard(params.id);
            navigate("/my-cards");
        }
        deleteCard();
    },[]);
    return null;
}
export default DeleteCard;