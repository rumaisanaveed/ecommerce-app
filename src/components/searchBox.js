const SearchBox = ({ search, setSearch }) => {
    return (
        <main className="search-box">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={search}
                    placeholder="Search Products here...."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </main>
    )
}

export default SearchBox;