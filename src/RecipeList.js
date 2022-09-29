const RecipeList = () =>{
    
    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 4
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 5
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 4
        }
    ]

    return (
        <>
            <section>
                {
                    cakes.map((cake, index) =>{
                        return(
                            <div key={index}>
                                <h3>{cake.name}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) =>{
                                        <li key={index}>{ingredient}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section>

            </section>
        </>
    )
}

export default RecipeList;

reduce for total rating then divide by array length
