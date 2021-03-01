import Material from '../models/materialModel.js'

//@desc Get all related material
//@route Get /api/material
//@access Public
export const getMaterials = async (req, res) => {
  const branch = req.query.branch
  const sem = req.query.sem

  try {
    const data = await Material.find({ sem })
    res.json(data)
  } catch (error) {
    return res.json({ error: error })
  }
}

//@desc Get  material by id
//@route Get /api/material
//@access Public
export const getSingleMaterial = async (req, res) => {
  const branch = req.body.branch
  const sem = req.body.sem
  try {
    const data = await Material.findById(req.params.id)
    res.json(data)
  } catch (error) {
    return res.json({ error: error })
  }
}

//@desc Create a material
//@route POST /api/material
//@access Public
export const createMaterial = async (req, res) => {
  const material = await Material.create({
    // user: 'test-name',
    title: 'Test file',
    description: 'Upto 2nd sem',
    path: 'testing-path',
    rating: 4,
    branch: 'MNC',
    sem: 8,
  })
  if (material) {
    res.status(201).json(material)
  } else {
    res.status(400)
    throw new Error('File is not uploaded')
  }
}

//@desc Update a material
//@route PUT /api/material/:id
//@access Public
export const updateMaterial = async (req, res) => {
  const { title, description, branch, sem, path } = req.body
  const material = await Material.findById(req.params.id)
  if (material) {
    ;(material.path = path),
      (material.title = title),
      (material.branch = branch),
      (material.sem = sem),
      (material.description = description)
  } else {
    res.status(400)
    throw new Error('File is not uploaded')
  }

  const updatedMaterial = await material.save()
  console.log('after changes', updateMaterial)
  res.status(201).json(updateMaterial)
}
