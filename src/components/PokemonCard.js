import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Move from './Move.js';
import Weight from './Weight.js';
import Generation from './Generation.js';

const PokemonCard = ({ pokemon }) => {
    const ref = useRef();

    // Map over top five moves
    const details = pokemon?.moves.slice(0, 3).map((move, index) => {
        return <Move moveName={move.move.name.toUpperCase()} key={index} />;
    });

    // Add generation to details
    details.unshift(<Generation generation={'GEN I'} key="generation" />);

    // Add weight to details
    details.unshift(<Weight weight={pokemon.weight} key="weight" />);

    // Scramble letters in pokemon name
    const scrambledName = pokemon.name
        .split('')
        .sort(() => 0.5 - Math.random())
        .join(' ')
        .toUpperCase();

    return (
        <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={ref}
            className="card-container center"
        >
            <FrontSide>
                <img
                    className="mystery-image"
                    alt={pokemon.name}
                    src={
                        pokemon.sprites.other['official-artwork'][
                            'front_default'
                        ]
                    }
                />
                <section className="front-detail">
                    <h1 className="hint">HINT:</h1>
                    <h2>{scrambledName}</h2>
                    <button
                        className="flip-button"
                        onClick={() => {
                            ref.current.toggle();
                        }}
                    >
                        GET ANSWER
                    </button>
                </section>
            </FrontSide>
            <BackSide>
                <img
                    className="back-image"
                    alt={pokemon.name}
                    src={
                        pokemon.sprites.other['official-artwork'][
                            'front_default'
                        ]
                    }
                />
                <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>

                <section className="pokemon-detail">{details}</section>

                <button
                    className="flip-button"
                    onClick={() => {
                        ref.current.toggle();
                    }}
                >
                    BACK
                </button>
            </BackSide>
        </Flippy>
    );
};

export default PokemonCard;
