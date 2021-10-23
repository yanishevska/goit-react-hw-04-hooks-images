import {useState } from "react";
import s from './Searchbar.module.css';
import { toast } from "react-toastify";

function Searchbar ({onSubmit}) {
    const [queryName, setQueryName] = useState('');

    const handleNameChange = e => {
        setQueryName(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (queryName.trim() === '') {
            return toast.info("Input name images!");
           
        }
      
        setQueryName('');
        onSubmit(queryName);
    };

    
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
    
                    <input
                        value={queryName}
                        onChange={handleNameChange}
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}

export default Searchbar;

