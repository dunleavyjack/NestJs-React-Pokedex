import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import LoadingCard from './LoadingCard';
import axios from 'axios';

const baseURL = 'http://localhost:3000/pokemon';

const PokemonCardContainer = ({ id, loading, setLoading }) => {
    const [currentPokemon, setCurrentPokemon] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/${id}`).then((response) => {
            setCurrentPokemon(response.data);
            setLoading(true);
        });
    }, [id]);

    if (loading) {
        return <PokemonCard pokemon={currentPokemon} />;
    }

    return <LoadingCard />;
};

export default PokemonCardContainer;
