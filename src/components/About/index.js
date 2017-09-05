import Component from 'inferno-component'
import './about.css'

export default class About extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='about box'>
        <div className='title jpa'>
          <div className='line' />
          <div className='crossbox-left'>
            <span>ＫＡＴＡ</span>
          </div>
          <div className='crossbox-right'>
            <span>カタリナ</span>
          </div>
        </div>
        <div className='pushdown' />
        <p>This is where i'd put stuff about myself IF THERE WAS ANYTHING</p>
      </div>
    )
  }
}
