import httpSERVICE from "./httpservice";

export function creatCard(card){
    return httpSERVICE.post("/cards",card);
}
export function getAll(){
    return httpSERVICE.get("/cards/my-cards")
}
export function deleteCard(id) {
    return httpSERVICE.delete(`/cards/${id}`);
  }
  
export function editCard(id, card) {
    return httpSERVICE.put(`/cards/${id}`, card);
  }
  export function getById(id) {
    return httpSERVICE.get(`/cards/${id}`);
  }
const cardsService={
    creatCard,
    getAll,
    deleteCard,
    editCard,
    getById
};
export default cardsService;