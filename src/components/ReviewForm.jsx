import { useState, useEffect } from "react";
import axios from "axios";

function ReviewForm({ movieIdParam }) {

    //creo una funzione per gestire il submit del form, al momento solo un console log, poi dovrà inviare i dati al backend
    function handleSubmit(event) {
        event.preventDefault()
        console.log("submit form", movieIdParam, formData)

        axios.post(`http://localhost:3000/api/movies/${movieIdParam}/reviews`, formData)
            .then(res => {
                if (res.data.id) {
                    alert("Review added successfully: " + res.data.message);
                    setFormData(values);
                } else {
                    alert("Error adding review " + res.data.error);
                }
            })
            .catch(err => console.error(err.message))
    }



    const values = { name: "Name", text: "Text", vote: 1 }

    const [formData, setFormData] = useState(values)


    function setValue(event) {

        // creo un nuovo oggetto Form con i dati del vecchio form 
        const newFormData = {
            ...formData,
        }

        // aggiorno la proprietà corrispondente al valore di event.target.name di newFormData con il valore di event.target.value
        // Es. newFormData['text'] = "sdfsdfsdf"
        newFormData[event.target.name] = event.target.value;
        // event.target.name è il name dell'input che ha triggerato l'evento, e può essere solo "text", "name", "vote"
        // event.target.value è il valore dell'input che ha triggerato l'evento, è quello che ha digitato l'utente

        // salvo il nuovo formData nello state
        setFormData(newFormData)

    }


    return <div>
        <h3>Add Review</h3>
        <form onSubmit={handleSubmit} className="review-form">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Author" onChange={setValue}></input>
            </div>
            <div>
                <label for="text">Text:</label>
                <textarea id="text" name="text" rows="10" cols="30" placeholder="Review" onChange={setValue}></textarea>
            </div>
            <div>
                <label for="vote">Vote:</label>
                <input type="number" id="vote" name="vote" min="1" max="5" value={formData.vote} onChange={setValue}></input>
            </div>
            <button type="submit">Add Review</button>
            <button type="reset">Reset</button>


        </form>
    </div>
}


export default ReviewForm