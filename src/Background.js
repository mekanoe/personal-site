import './Background.css'
export default ({ready}) => {
  return (<div>
        <div className={'Background Background-ready_' + ready} />
        <div className='Background' style={{zIndex: -101}} />
    </div>
  )
}
