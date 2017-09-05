import Component from 'inferno-component'
import './registerServiceWorker'
import Background from '../Background'
import About from '../About'
import Twitch from '../Twitch'
import GitHub from '../GitHub'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ready: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 1000)
  }
  render () {
    return (
      <div className='App fs'>
        <Background ready={this.state.ready} />
        <About />
        <Twitch />
        <GitHub />
      </div>
    )
  }
}

export default App
