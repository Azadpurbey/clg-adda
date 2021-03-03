import ProfDetail from '../models/profDetailModel.js'
//@desc POST prof Details
//@route POST /api/profDetail/
//@access Public

export const addProfDetail = async (req, res) => {
  const prof = await ProfDetail.create({
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

//@desc GET prof Details
//@route GET /api/profDetail/:department
//@access Public

export const getProfDetail = async (req, res) => {
  const department = req.params.department

  const profs = await ProfDetail.find({ department })

  if (profs) {
    res.status(201).json(profs)
  } else {
    res.status(400)
    throw new Error('Prof Details is not  fetched properly')
  }
}
