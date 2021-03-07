import AluminiDetail from '../models/aluminiModel.js'
//@desc POST alumini Details
//@route POST /api/alumini/
//@access Public

export const addAluminiDetail = async (req, res) => {
  const alumini = await AluminiDetail.create({
    img_path: req.body.img_path,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    batch: req.body.batch,
    department: req.body.department,
    designation: req.body.designation,
    linkedIn: req.body.linkedIn,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    facebook: req.body.facebook,
  })
  if (alumini) {
    res.status(201).json(alumini)
  } else {
    res.status(400)
    throw new Error('Alumini Details is not added, some thing went wrong')
  }
}

//@desc GET all alumini Details by Department
//@route GET /api/alumini/
//@access Public
export const getAluminiDetailByDepartment = async (req, res) => {
  const department = req.params.department

  const aluminis = await AluminiDetail.find({ department })

  if (aluminis) {
    res.status(201).json(aluminis)
  } else {
    res.status(400)
    throw new Error('Alumini Details is not  fetched properly')
  }
}

//@desc GET alumini Details by id
//@route GET /api/alumini/:id
//@access Public
export const getAluminiDetailById = async (req, res) => {
  const id = req.params.id

  const alumini = await AluminiDetail.findById(id)

  if (alumini) {
    res.status(201).json(alumini)
  } else {
    res.status(400)
    throw new Error('Alumini Details is not  fetched properly')
  }
}

//@desc DELETE alumini Detail
//@route DELETE /api/alumini/:id
//@access Public
export const deleteAluminiDetail = async (req, res) => {
  const id = req.params.id

  const alumini = await AluminiDetail.findById(id)

  if (alumini) {
    await alumini.remove()
    res.json({ message: 'AluminiDetail is deleter ' })
  } else {
    res.status(404)
    throw new Error('Alumini Details is not  found')
  }
}

//@desc PUT alumini Details
//@route PUT /api/aluminiDetail/edit/:id
//@access Public

export const updateAluminiDetail = async (req, res) => {
  const id = req.params.id

  const alumini = await AluminiDetail.findById(id)

  if (alumini) {
    ;(alumini.img_path = req.body.img_path),
      (alumini.name = req.body.name),
      (alumini.email = req.body.email),
      (alumini.contact = req.body.contact),
      (alumini.batch = req.body.batch),
      (alumini.department = req.body.department),
      (alumini.designation = req.body.designation),
      (alumini.linkedIn = req.body.linkedIn),
      (alumini.twitter = req.body.twitter),
      (alumini.instagram = req.body.instagram),
      (alumini.facebook = req.body.facebook)
  } else {
    res.status(404)
    throw new Error('Alumini Details is not  found')
  }
  const updatedAlumini = await alumini.save()
  res.status(201).json(updatedAlumini)
}
