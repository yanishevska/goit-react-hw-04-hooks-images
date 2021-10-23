import { Component } from "react";
import s from './Searchbar.module.css';
import { toast } from "react-toastify";

class Searchbar extends Component {

    state = {
        queryName: '',
    }

    handleNameChange = e => {
        this.setState({ queryName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.queryName.trim() === '') {
            toast.info("Input name images!");
            return;
        }
        this.props.onSubmit(this.state.queryName );
        this.setState({ queryName: '' });
}

    render() {    
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
    
                    <input
                        value={this.state.queryName}
                        onChange={this.handleNameChange}
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
}
export default Searchbar;
