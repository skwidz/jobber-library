import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
};

renderApp();

declare const module: {hot: any};
if(module.hot) {
	module.hot.accept(['./App'], () => {
		renderApp();
	})
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
registerServiceWorker();
