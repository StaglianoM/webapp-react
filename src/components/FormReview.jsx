import styles from "./card.module.css";
import { useState } from "react";
import axios from "axios";

const initialFormData = {
    vote: 1,
    name: "",
    text: ""
};

function FormReview({ id, onSuccess = () => { } }) {
    const [formData, setFormData] = useState(initialFormData);

    function onFormChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function storeReview(e) {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        setFormData(initialFormData);
        onSuccess()
        axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div>
                    <strong>Aggiungi Recensione</strong>
                </div>

                <form className={styles.reviewForm} onSubmit={storeReview}>
                    <div className={styles.flex}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            placeholder="anonymous"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={onFormChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="text">Recensione</label>
                        <textarea
                            name="text"
                            id="text"
                            placeholder="Scrivi la tua recensione"
                            value={formData.text}
                            onChange={onFormChange}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="vote">Voto</label>
                        <select
                            name="vote"
                            id="vote"
                            value={formData.vote}
                            onChange={onFormChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <button type="submit">Invia</button>
                </form>
            </div>
        </div>
    );
}

export default FormReview;
