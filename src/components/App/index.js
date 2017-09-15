import Component from 'inferno-component'
import './registerServiceWorker'
import Background from '../Background'
import About from '../About'
import Twitch from '../Twitch'
import GitHub from '../GitHub'
import './App.css'

const lowerContentClass = {
  0: [ 'hidden' ],
  1: [ 'staged' ],
  2: [ 'loaded' ]
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ready: 0,
      scrolled: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: 1 })
    }, 1000)
    setTimeout(() => {
      this.setState({ ready: 2 })
    }, 3000)
  }
  render () {
    return (
      <div className='App fs'>
        <Background ready={this.state.ready >= 1} />
        <div className='hero'>
          <About />
          <a href='#lc' className={['hero-scroll', ...lowerContentClass[this.state.ready]].join(' ')}>
            more stuff<br />↓
          </a>
          <div className={['hero-scroll-flair', ...lowerContentClass[this.state.ready]].join(' ')}>
            more stuff<br />↓
          </div>
        </div>
        <div id='lc' className={['lower-content', ...lowerContentClass[this.state.ready]].join(' ')}>
          <Twitch ready={this.state.ready === 2} />
          <GitHub />
        </div>
      </div>
    )
  }
}

export default App
