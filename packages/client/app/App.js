import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useStoreState, useStoreActions } from 'easy-peasy';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

//Pages
import Game from './pages/Game';
const App = () => {
    const connect = useStoreActions(actions => actions.socket.connect);
    const socket = useStoreState(state => state.socket.socket);
    const game = useStoreState(state => state.game.game);
    useEffect(() => {
        connect();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                {socket && (
                    <Fragment>
                        <Route exact path="/" component={Game} />
                    </Fragment>
                )}
            </Router>
        </ThemeProvider>
    );
};

export default App;
