import React from 'react'

const UserForm = () => {
  return (
    <div className='col-sm-6 mb-3 card'>
      <div className='card-body'>
        <h6 className='d-flex align-items-center mb-3'>
          <i className='material-icons text-info mr-2'>Imp Links</i>
        </h6>
        {user.impLinks && (
          <ol>
            {user.impLinks.map((x) => (
              <li key={x._id}>
                <a className='text-secondary' href={x.link}>
                  {x.link}
                </a>
              </li>
            ))}
          </ol>
        )}

        <Form onSubmit={addLinkSubmitHandler}>
          <Form.Group controlId='addLink'>
            <Form.Label>Add Important Link</Form.Label>
            <Form.Control
              as='textarea'
              row='3'
              value={link}
              onChange={(e) => setLink(e.target.value)}></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default UserForm
