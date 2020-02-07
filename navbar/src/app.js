import React from 'react';
import { Scoped } from 'kremling';
import styles from './root.krem.css';
import { Link } from '@reach/router';

//Build the link for the navbar from the config
const links = activeApps =>
	activeApps.filter(a => a.name !== 'navbar').map(a => ({ name: a.name, href: `/${a.prefix}` }));

const root = ({ activeApps }) => (
	<Scoped postcss={styles}>
		<div className="root navBarHeight">
			{links(activeApps).map(({ href, name }) => (
				<Link key={href} className="primary-navigation-link" to={href}>
					{name}
				</Link>
			))}
		</div>
	</Scoped>
);

export default root;
