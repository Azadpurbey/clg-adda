import ProfDetail from '../models/profDetailModel.js'
//@desc POST prof Details
//@route POST /api/profDetail/
//@access Public

export const addProfDetail = async (req, res) => {
  const prof = await ProfDetail.create({
    img_path: req.body.img_path,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    department: req.body.department,
    designation: req.body.designation,
    areaOfInterest: req.body.areaOfInterest,
  })
  if (prof) {
    res.status(201).json(prof)
  } else {
    res.status(400)
    throw new Error('Prof Details is not added')
  }
}

//@desc GET prof Details by department
//@route GET /api/profDetail/:department
//@access Public

export const getProfDetailByDepartment = async (req, res) => {
  const department = req.params.department

  const profs = await ProfDetail.find({ department })

  if (profs) {
    res.status(201).json(profs)
  } else {
    res.status(400)
    throw new Error('Prof Details is not  fetched properly')
  }
}

//@desc GET prof Details By id
//@route GET /api/profDetail/profile/:id
//@access Public
export const getProfDetailById = async (req, res) => {
  const id = req.params.id
  const prof = await ProfDetail.findById(id)

  if (prof) {
    res.status(201).json(prof)
  } else {
    res.status(400)
    throw new Error('Prof Details is not  fetched properly')
  }
}

//@desc DELETE prof Details
//@route DELETE /api/profDetail/:id
//@access Public

export const deleteProfDetail = async (req, res) => {
  const id = req.params.id

  const prof = await ProfDetail.findById(id)

  if (prof) {
    await prof.remove()
    res.json({ message: 'ProfDetail is deleter ' })
  } else {
    res.status(404)
    throw new Error('Prof Details is not  found')
  }
}

//@desc PUT prof Details
//@route PUT /api/profDetail/edit/:id
//@access Public

export const updateProfDetail = async (req, res) => {
  const id = req.params.id

  const prof = await ProfDetail.findById(id)

  if (prof) {
    ;(prof.img_path = req.body.img_path),
      (prof.name = req.body.name),
      (prof.email = req.body.email),
      (prof.contact = req.body.contact),
      (prof.department = req.body.department),
      (prof.designation = req.body.designation),
      (prof.areaOfInterest = req.body.areaOfInterest)
  } else {
    res.status(404)
    throw new Error('Prof Details is not  found')
  }
  const updatedProf = await prof.save()
  res.status(201).json(updatedProf)
}
