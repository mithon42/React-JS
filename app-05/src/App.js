
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {socialIcons} from './data'

const App = () => {
  return (
    <div>
      <h1>Apps</h1>

      <div>
        {socialIcons.map(item => (
          <div key={item.id}>
            <FontAwesomeIcon icon={['fab', item.icon]}/>
          </div>
          ))}
      </div>
    </div>
  )
}

export default App;