import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PokemonCardContainer from '../components/PokemonCardContainer';

const PokemonPage = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value);
        setLoading(false);
    };

    return (
        <article className="page">
            <section className="pokemon-display">
                <PokemonCardContainer
                    id={page}
                    loading={loading}
                    setLoading={setLoading}
                />
                <Pagination
                    count={151}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    showFirstButton
                    showLastButton
                />
            </section>
        </article>
    );
};

export default PokemonPage;
