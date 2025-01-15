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
    const [isFormValid, setIsFormValid] = useState(false)

    function onFormChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function storeReview(e) {
        e.preventDefault();
        setIsFormValid(true)
        console.log("Form Submitted:", formData);
        const data = {
            ...formData,
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: parseInt(formData.vote)
        }


        if (!data.name || !data.vote || data.vote < 1 || data.vote > 5) {

            console.log('form is not valid')
            setIsFormValid(false)
            return
        }

        setFormData(initialFormData);
        onSuccess()

        axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                setIsFormValid(false)
            });
    }

    return (
        <div className={styles.containerCard}>
            <div className={styles.form}>
                <div>
                    <strong>Aggiungi Recensione</strong>
                </div>

                <form className={styles.reviewForm} onSubmit={storeReview}>
                    <div className={styles.flex}>
                        <label htmlFor="name">Nome*</label>
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
                        <label htmlFor="vote">Voto*</label>
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
                    <div>
                        {isFormValid === false && <div> I Dati non sono validi! </div>}
                    </div>
                    <button type="submit">Invia</button>
                </form>
            </div>
        </div>
    );
}

export default FormReview;
