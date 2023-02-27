import './index.scss'

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span> {
             // Using the map method to create a span element for each character in the strArray
            strArray.map((char, i) => (
                // Setting the key prop to a unique value for efficient updates and rendering
                // Setting the className prop to a string that concatenates the letterClass prop 
                // with an index number incremented by idx
                <span key={char + 1} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
            }
          
        </span>
    )
}
export default AnimatedLetters