export async function getData(){
    try{
        const response = await fetch("https://dummyjson.com/recipes");

        if(!response.ok){
            throw new Error(`failed to find recipes`);
        }

        const data = await response.json();

        return data.recipes;
    }
    catch(error){
        console.error(`error fetching data: ${error}`);
    }
}