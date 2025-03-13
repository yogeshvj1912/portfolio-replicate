import React, { useContext } from 'react'
import AddContext from '../contextApi/AddContext'

export default function Icons() {
  let contextData = useContext(AddContext)
  return (
    <div className='home-icons' id={contextData.lightOn?"home-icon-on":""}>
    <img src="/images/Facebook.png" alt="" />
    <img src="/images/Instagram.png" alt="" />
    <img src="/images/Twitter.png" alt="" />
    <img src="/images/GitHub.png" alt="" />
    <img src="/images/LinkedIn.png" alt="" />
    <img src="/images/Telegram.png" alt="" />
    <img src="/images/Koo.png" alt="" />
</div>
  )
}
