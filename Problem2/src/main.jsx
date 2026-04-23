import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider as UIProvider } from './components/ui/provider'
import { Provider } from 'react-redux'
import store from './Redux/Store'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UIProvider  >
      <App />
    </UIProvider>
  </Provider>

)
