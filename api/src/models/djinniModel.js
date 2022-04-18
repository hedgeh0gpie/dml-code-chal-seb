const mongoose = require('mongoose')

const djinniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Djinni must have a name'],
      unique: true,
      trim: true
    },
    element: {
      type: String,
      required: [true, 'A Djinni must have an element!']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A Djinni must have a description!']
    },
    hp: {
      type: Number,
      required: [true, 'A Djinni must have HP!']
    },
    pp: {
      type: Number,
      required: [true, 'A Djinni must have PP!']
    },
    atk: {
      type: Number,
      required: [true, 'A Djinni must have Atk!']
    },
    def: {
      type: Number,
      required: [true, 'A Djinni must have Def!']
    },
    agi: {
      type: Number,
      required: [true, 'A Djinni must have Agi!']
    },
    lck: {
      type: Number,
      required: [true, 'A Djinni must have Lck!']
    },
    damage: {
      type: String
    },
    battleEffect: {
      type: String,
      required: [true, 'A Djinni must have a battle effect!']
    },
    image: {
      type: String
    },
    icon: {
      type: String
    },
    star: {
      type: String
    }
  },
  { collection: 'djinn' }
)
const Djinni = mongoose.model('Djinni', djinniSchema)

module.exports = Djinni
