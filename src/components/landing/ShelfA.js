import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bin1 from '../bins/Bin1';



export default function ShelfA({ id }) {
    return (
        <div>

            <Link to={`/bins/A`}>
                <div className="ShelfA">
                    <h1> Shelf A </h1>
                </div>
            </Link>

        </div>
    )
}