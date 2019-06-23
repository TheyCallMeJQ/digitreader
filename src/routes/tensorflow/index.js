import { h } from 'preact';
import style from './style';


//It seems like importing raw JS files is enough to run them, here.
//I think we could just say npm install tensorflow or something, for this

//import tfjs-vis
import './js/tfjs-vis.js';

import './js/TensorFlow.js';

//import main script file
import './js/scripts.js';


const TensorFlow = () => (
	<div class={style.neuralnetwork}>

		<h1>TensorFlow Tutorial!</h1>

	</div>
);

export default TensorFlow;
