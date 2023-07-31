/* About.js */
import './About.css';

export const About = ({ theme }) => {
  return (
    <div className={`about-container ${theme}`}>
      {/* <img
        src="https://img.freepik.com/premium-photo/food-cooking-background-fresh-saffron-garlic-cilantro-basil-cherry-tomatoes-peppers-olive-oil-spices-herbs-vegetables-light-grey-slate-table-food-ingredients-top-view_253362-11380.jpg?w=2000"
        className="background-image"
      /> */}
      <div className={`text-overlay ${theme}`}>
        <h2>Enter the items in your fridge <br />and find your next favorite recipe</h2>
      </div>
    </div>
  );
};

export default About;
