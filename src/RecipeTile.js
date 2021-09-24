import React from 'react'

export default function RecipeTile({ recipe }) {
    return (
        <div className="recipeTile">
            <p>{recipe["recipe"]["label"]}</p>
        </div>
    )
}
