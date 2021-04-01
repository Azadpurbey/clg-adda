import Material from '../models/materialModel.js'
import User from '../models/userModel.js'

//@desc Get all related material
//@route Get /api/material
//@access Public
export const getMaterials = async (req, res) => {
  const branch = req.query.branch
  const sem = req.query.sem

  try {
    const data = await Material.find({ sem, branch })
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
  try {
    const user = await User.findById(req.user._id)
    user.password = undefined
    const material = new Material({
      user: user,
      title: req.body.title,
      description: req.body.description,
      path: req.body.path,
      branch: req.body.branch,
      sem: req.body.sem,
    })
    const savedMaterial = await material.save()
    //savedMaterial.user = user
    if (savedMaterial) {
      res.status(201).json(savedMaterial)
    } else {
      res.status(400)
      throw new Error('File is not uploaded')
    }
  } catch (err) {
    res.status(404).json({ error: err })
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
  res.status(201).json(updateMaterial)
}

export const removeMaterial = async (req, res) => {
  const user = await User.findById(req.user._id)
  const material = await Material.findById(req.params.id)
  console.log(user._id, material.user._id, user.isAdmin)
  if (
    user.isAdmin === true ||
    material.user._id.toString() === user._id.toString()
  ) {
    await Material.deleteOne({ _id: req.params.id })
    res.json({ message: 'delete succesfully' })
  } else {
    return res.status(402).json({ error: 'Cant Delete' })
  }
}
