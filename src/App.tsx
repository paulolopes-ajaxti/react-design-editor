import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Title from './components/layout/Title';
import FlowContainer from './containers/FlowContainer';
import { FiberEditor, FlowEditor, HexGridEditor, ImageMapEditor, WorkflowEditor } from './editors';

type EditorType = 'imagemap' | 'workflow' | 'flow' | 'hexgrid' | 'fiber';

interface IState {
	activeEditor?: EditorType;
}

class App extends Component<any, IState> {
	render() {
		return (
			<div className="rde-main">
				<FlowContainer>
					<div className="rde-content">{<ImageMapEditor />}</div>
				</FlowContainer>
			</div>
		);
	}
}

export default App;
