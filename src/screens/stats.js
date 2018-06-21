import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View, Left, Body, Right, Title } from 'native-base';

import { FooterTabNav, HeaderTitle } from '../components/index.js';

export default class Stats extends Component {

	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<Container>
				<HeaderTitle text="Statistics" />
				<Content>

				</Content>
				<Footer>
					<FooterTabNav active="Stats" navigation={this.props.navigation}/>
				</Footer>
			</Container>
		);
	}
}