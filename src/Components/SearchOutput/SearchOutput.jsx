import PropTypes from 'prop-types';
import './SearchOutput.css';

const SearchOutput = ({ searchResults, theme }) => {
  return (
    <div className={`search-output ${theme}`}>
      {searchResults.map((result) => {
        // console.log("result.id:", result.id);
        // const loop = () => {
        //   for(let i=0, i<result.recipe.ingredientLines.leng)
        // }
        return (
          <div key={result.recipe.uri} className={`search-result ${theme}`}>
            <img src={result.recipe.image}
            />
            <h3>{result.recipe.label}</h3>
            {/* <p>Calories: {result.recipe.calories}</p> */}
            <br />
            <p><b>Ingredients:</b></p>
            <br />
            <ul>
              {result.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};




SearchOutput.propTypes = {
    searchResults: PropTypes.array.isRequired
};


export default SearchOutput;
