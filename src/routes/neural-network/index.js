import { h } from 'preact';
import style from './style';


//It seems like importing raw JS files is enough to run them, here.
import './js/training-data.js'
import './js/brain.js';
import './js/scripts.js';


const NeuralNetwork = () => (
	<div class={style.neuralnetwork}>

		<h1>Neural Network to identify twitter users by their writing style</h1>
    <h3>To get started:</h3>
    <ul>
        <li>Open 'scripts.js'</li>
        <li>Paste the text of a tweet (must be from either Donald Trump or Kim Kardashian) into the execute function on line 32</li>
        <li>Hit save</li>
        <li>Open the console</li>
        <li>Results will appear in the console</li>
    </ul>
    <h3>To make improvements:</h3>
    <ul>
        <li>Try encoding the text differently by changing the encode() function in 'scripts.js' to see how that affects your outcomes.</li>
        <li>Add more training data to the 'training-data.js' file</li>
        <li>Rework it into something that's actually useful!</li>
    </ul>

	</div>
);

export default NeuralNetwork;
