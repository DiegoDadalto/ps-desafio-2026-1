import styles from './searchbar.module.css'

export default function SearchBar() {
    return <div>
        <form className={styles.searchbar}>
            <input
                type="text"
                id="search"
                placeholder="Buscar"
                name="search" />
        </form>
    </div>
}