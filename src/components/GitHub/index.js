import Component from 'inferno-component'
import superagent from 'superagent'
import './github.css'

export default class GitHub extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ready: true,
      repos: []
    }
  }

  async componentWillMount () {
    try {
      let rsp = await superagent.get('https://api.github.com/users/kayteh/repos?sort=updated')
      console.log(rsp)
      this.setState({ready: true, repos: rsp.body})
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    let r = []

    if (this.state.ready && this.state.repos.length > 0) {
      r = this.state.repos.filter(x => !x.fork).map(x => <Repo data={x} />)
    } else {
      r = <Loading />
    }

    return (
      <div className='github box'>
        {r}
      </div>
    )
  }
}

const Repo = ({ data: {name, html_url, language, stargazers_count, forks, description} }) => {
  return (
    <a href={html_url} className='repo'>
      <span className='jpa repo-name repo-inf'>{name}</span>
      <p className='repo-inf'>{description}</p>
      <div className='repo-bottom'>
        <div className='repo-bot-left'>{tl(language)}</div>
        <div className='repo-bot-center'>⭐️&nbsp;&nbsp;{stargazers_count}</div>
        <div className='repo-bot-right'>🍴&nbsp;&nbsp;{forks}</div>
      </div>
    </a>
  )
}

const Loading = () => {
  return (
    <div>
      hi
    </div>
  )
}

const tl = (str) => {
  if (str === null) {
    return '??'
  }

  const tab = {
    JavaScript: 'JS'
  }

  if (str in tab) {
    return tab[str]
  }

  return str
}
