import React, {useEffect, useState} from 'react'
import Drinkcards from './Drinkcards'




const Drinkscontainer = ({drinks}) => {

    return (
        <>
            {drinks ? drinks.map(each => {
              return <Drinkcards img={each.strDrinkThumb} instruction={each.strInstructions} name={each.strDrink} glass={each.strGlass} ingredient={[[each.strIngredient1, each.strMeasure1], [each.strIngredient2, each.strMeasure2], [each.strIngredient3, each.strMeasure3], [each.strIngredient4,each.strMeasure4], [each.strIngredient5, each.strMeasure5], [each.strIngredient6, each.strMeasure6], [each.strIngredient7, each.strMeasure7], [each.strIngredient8, each.strMeasure8], [each.strIngredient9, each.strMeasure9], [each.strIngredient10, each.strMeasure10], [each.strIngredient11, each.strMeasure11], [each.strIngredient12, each.strMeasure12], [each.strIngredient13, each.strMeasure13], [each.strIngredient14, each.strMeasure14], [each.strIngredient15, each.strMeasure15]]} />
            }) : <h1>No Cocktails Found</h1>}
        </>
    )
}

export default Drinkscontainer
