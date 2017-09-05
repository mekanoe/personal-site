import './twitch.css'

export default () => {
  return (
    <div className='twitch box'>
      <iframe className='stream' src='https://player.twitch.tv/?channel=jumpystick&autoplay=false' frameborder='0' allowfullscreen='true' scrolling='no' height='378' width='620' />
      <iframe className='chat' src='https://www.twitch.tv/jumpystick/chat?popout=' frameborder='0' scrolling='no' height='378' width='350' />
    </div>
  )
}
