import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Col } from 'react-bootstrap'
import style from '../css/FollowingBox.module.css'
const FollowingBox = ({ name, tips, impLinks }) => {
  return (
    <>
      <h6>Name:- {name}</h6>
      <div className={style.tipLinkBox}>
        <div>
          <h6>Imp Links</h6>
          {tips && (
            <ul>
              {tips.map((x) => (
                <li key={x._id}>{x.tip}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h6>Imp Tips</h6>
          {impLinks && (
            <ul>
              {impLinks.map((x) => (
                <li key={x._id}>
                  <a className='text-secondary' href={x.link}>
                    {x.link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default FollowingBox
