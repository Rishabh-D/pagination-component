import React, { useEffect } from "react";
import "./Pagination.scss";
import createPageLinksArray from "./utils/createPageLinks";
export default function Pagination({
    currentPage,
    numOfPages,
    setCurrentPage,
}) {
    const toPrevPage = () => {
        console.log(currentPage);
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const toNextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage < numOfPages ? prevPage + 1 : prevPage
        );
    };

    console.log(currentPage);
    if (numOfPages < 2) {
        return <></>;
    }

    return (
        <>
            <div className="paginate--container">
                <ul className="paginate--main">
                    {currentPage !== 1 && (
                        <li className="paginate-list">
                            <a
                                className="paginate-link"
                                href="#"
                                onClick={() => {
                                    toPrevPage();
                                }}
                            >
                                {`Previous`}
                            </a>
                        </li>
                    )}
                    {createPageLinksArray(currentPage, numOfPages).map(
                        (thisPage) => {
                            if (thisPage === "...")
                                return (
                                    <li className="paginate-list--ignore">
                                        ...
                                    </li>
                                );
                            return (
                                <li
                                    className={`paginate-list ${
                                        currentPage === thisPage
                                            ? "active-page"
                                            : ""
                                    }`}
                                    key={thisPage.toString()}
                                >
                                    <a
                                        className="paginate-link"
                                        href="#"
                                        onClick={() => {
                                            setCurrentPage(thisPage);
                                        }}
                                    >
                                        {thisPage}
                                    </a>
                                </li>
                            );
                        }
                    )}
                    {currentPage !== numOfPages && (
                        <li className="paginate-list">
                            <a
                                href="#"
                                className="paginate-link"
                                onClick={() => {
                                    toNextPage();
                                }}
                            >
                                {`Next`}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
