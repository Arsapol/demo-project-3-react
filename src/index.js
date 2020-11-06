import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LayoutComponents from './views/layout-components'
import LayoutComponents1 from './views/layout-components1'
import Page from './views/page'
import ReusableComponents from './views/reusable-components'
import ReusableComponents1 from './views/reusable-components1'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LayoutComponents} path="/layout-components" />
        <Route exact component={LayoutComponents1} path="/layout-components1" />
        <Route exact component={Page} path="/" />
        <Route exact component={ReusableComponents} path="/reusable-components" />
        <Route exact component={ReusableComponents1} path="/reusable-components1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
