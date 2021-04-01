import React from 'react'

const FollowingBox = ({ name, tips, impLinks }) => {
  return (
    <div>
      <h4>{name}</h4>
      <div className='row gutters-sm'>
        <div className='col-sm-6 mb-3 card'>
          <div className='card-body'>
            <h6 className='d-flex align-items-center mb-3'>
              <i className='material-icons text-info mr-2'>Imp Tips</i>
            </h6>
            {tips && (
              <ol>
                {tips.map((x) => (
                  <li key={x._id}>{x.tip}</li>
                ))}
              </ol>
            )}
          </div>
        </div>

        <div className='col-sm-6 mb-3 card'>
          <div className='card-body'>
            <h6 className='d-flex align-items-center mb-3'>
              <i className='material-icons text-info mr-2'>Imp Links</i>
            </h6>
            {impLinks && (
              <ol>
                {impLinks.map((x) => (
                  <li key={x._id}>{x.link}</li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowingBox
