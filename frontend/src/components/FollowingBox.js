import React from 'react'

const FollowingBox = () => {
  return (
    <div>
      <h3>Azad</h3>
      <div className='row gutters-sm style1'>
        <div className='col-sm-6 mb-3 card'>
          <div className='card-body'>
            <h6 className='d-flex align-items-center mb-3'>
              <i className='material-icons text-info mr-2'>Imp Tips</i>
            </h6>
            <ol>
              <li>Amazing work</li>
              <li>work HArd</li>
              <li>Amazing work</li>
            </ol>
            {/* {curUser.tips && (
              <ol>
                {curUser.tips.map((x) => (
                  <li key={x._id}>{x.tip}</li>
                ))}
              </ol>
            )} */}
          </div>
        </div>

        <div className='col-sm-6 mb-3 card'>
          <div className='card-body'>
            <h6 className='d-flex align-items-center mb-3'>
              <i className='material-icons text-info mr-2'>Imp Links</i>
            </h6>
            <ol>
              <li>Google.com</li>
              <li>work HArd</li>
              <li>Google.com</li>
            </ol>
            {/* {curUser.impLinks && (
              <ol>
                {curUser.impLinks.map((x) => (
                  <li key={x._id}>{x.link}</li>
                ))}
              </ol>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowingBox
