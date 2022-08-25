import "./DeleteCard.css"
import { Link } from "react-router-dom"
export const DeleteCard = ({id, deleteCard}) => {
    return <div className="delete">
        <Link to={"/"}>Cancel</Link>
        <p>Are you sure you would like to delete this card?</p>
        <Link to={"/"}><button onClick={() => deleteCard(id)}>Yes</button></Link>
    </div>
}