import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/neuralnetwork">Neural Network</Link>
			<Link activeClassName={style.active} href="/tensorflow">Tensor Flow</Link>
		</nav>
	</header>
);

export default Header;
