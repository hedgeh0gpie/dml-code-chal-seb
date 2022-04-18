const Djinni = require('./../models/djinniModel')
const APIFeatures = require('./../utils/apiFeatures')

exports.getAllDjinn = async (req, res) => {
  try {
    const features = new APIFeatures(Djinni.find(), req.query).filter().sort().limitFields().paginate()
    const djinn = await features.query

    res.status(200).json({
      status: 'success',
      results: djinn.length,
      data: {
        djinn
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.getDjinni = async (req, res) => {
  try {
    const djinni = await Djinni.findById(req.params.id)

    if (djinni === null) {
      throw 'No Djinni exists with this ID!'
    }

    res.status(200).json({
      status: 'success',
      data: {
        djinni
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
    console.log(err)
  }
}

exports.createDjinni = async (req, res) => {
  try {
    const newDjinni = await Djinni.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        djinni: newDjinni
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
    console.log(err.message)
  }
}

exports.updateDjinni = async (req, res) => {
  try {
    const djinni = await Djinni.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      status: 'success',
      data: {
        djinni
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.deleteDjinni = async (req, res) => {
  try {
    await Djinni.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      message: 'Djinni successfully deleted!',
      data: null
    })
    console.log('Djinni successfully deleted!')
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
