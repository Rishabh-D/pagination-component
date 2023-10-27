import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const fetchCharacters = async (page) => {
        const response = await fetch(
            `${process.env.REACT_APP_RICK_MORTY_PUBLIC_API_BASE_URL}/caracter/?page=${page}`
        );
        if (!response.ok) {
            throw new Error("Network response  not ok");
        }
        return await response.json();
    };

    const { data, status, isPreviousData, isLoading, isError, error } =
        useQuery(
            ["characters", currentPage],
            () => fetchCharacters(currentPage),
            { keepPreviousData: true }
        );

    const numOfPage = data?.info?.pages;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    console.log(currentPage);

    return (
        <div className="container">
            <h1>Rick and Morty</h1>
            <div className="characters">
                {data.results.map((character) => (
                    <Character
                        key={character.id}
                        character={character}
                    ></Character>
                ))}
            </div>
            <Pagination
                numOfPages={numOfPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Characters;
