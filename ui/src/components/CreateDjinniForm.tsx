import { useState, FC, ChangeEventHandler } from 'react'

import { DjinniCreationPayload, useCreateDjinni } from 'client/hooks/useCreateDjinni'
import 'styles/CreateDjinniForm.css'
import { Djinni } from 'client/operations'

const CreateDjinniForm: FC = () => {
  const [name, setName] = useState('My Djinni')
  const [element, setElement] = useState('Venus')
  const [description, setDescription] = useState('This spirit is talented in the ways of React and Node!')
  const [hp, setHp] = useState(0)
  const [pp, setPp] = useState(0)
  const [atk, setAtk] = useState(0)
  const [def, setDef] = useState(0)
  const [agi, setAgi] = useState(0)
  const [lck, setLck] = useState(0)
  const [damage, setDamage] = useState('+30')
  const [battleEffect, setBattleEffect] = useState(`Increases Adept's programming skills`)
  const [icon, setIcon] = useState('venus_djinn.gif')
  const [image] = useState('created_djinn.png')
  const [star, setStar] = useState('star_venus.gif')

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = event => {
    setName(event.target.value)
  }
  const handleElementChange: ChangeEventHandler<HTMLSelectElement> = event => {
    setElement(event.target.value)
  }
  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = event => {
    setDescription(event.target.value)
  }
  const handleHpChange: ChangeEventHandler<HTMLInputElement> = event => {
    setHp(Number(event.target.value))
  }
  const handlePpChange: ChangeEventHandler<HTMLInputElement> = event => {
    setPp(Number(event.target.value))
  }
  const handleAtkChange: ChangeEventHandler<HTMLInputElement> = event => {
    setAtk(Number(event.target.value))
  }
  const handleDefChange: ChangeEventHandler<HTMLInputElement> = event => {
    setDef(Number(event.target.value))
  }
  const handleAgiChange: ChangeEventHandler<HTMLInputElement> = event => {
    setAgi(Number(event.target.value))
  }
  const handleLckChange: ChangeEventHandler<HTMLInputElement> = event => {
    setLck(Number(event.target.value))
  }
  const handleDamageChange: ChangeEventHandler<HTMLInputElement> = event => {
    setDamage(event.target.value)
  }
  const handleBattleEffectChange: ChangeEventHandler<HTMLInputElement> = event => {
    setBattleEffect(event.target.value)
  }
  const handleIconAndStarChange: ChangeEventHandler<HTMLSelectElement> = event => {
    switch (event.target.value) {
      case 'Mercury':
        setIcon('mercury_djinn.gif')
        setStar('star_mercury.gif')
        break
      case 'Mars':
        setIcon('mars_djinn.gif')
        setStar('star_mars.gif')
        break
      case 'Jupiter':
        setIcon('jupiter_djinn.gif')
        setStar('star_jupiter.gif')
        break
      default:
        setIcon('venus_djinn.gif')
        setStar('star_venus.gif')
        break
    }
  }

  const newDjinniRequest: DjinniCreationPayload = {
    name,
    element,
    description,
    hp,
    pp,
    atk,
    def,
    agi,
    lck,
    damage,
    battleEffect,
    image,
    icon,
    star
  }

  const createMutation = useCreateDjinni()

  return (
    <section className='section-create'>
      <div className='row'>
        <div className='create'>
          <div className='create__form'>
            <form action='#' className='form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Create a New Djinni!</h2>
              </div>

              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  value={name}
                  onChange={handleNameChange}
                  id='name'
                  required
                />
                <label htmlFor='name' className='form__label'>
                  Djinni Name
                </label>
              </div>

              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  value={description}
                  onChange={handleDescriptionChange}
                  id='description'
                  required
                />
                <label htmlFor='description' className='form__label'>
                  Description
                </label>
              </div>

              <div className='form-row form-row__element'>
                <div className='form__group'>
                  <label htmlFor='element' className='form__label form__label--element'>
                    Element
                  </label>
                  <select
                    className='form__input form__input--select'
                    name='element'
                    id='element'
                    defaultValue='Venus'
                    onChange={e => {
                      handleElementChange(e)
                      handleIconAndStarChange(e)
                    }}
                  >
                    <option value='Venus'>Venus</option>
                    <option value='Mercury'>Mercury</option>
                    <option value='Mars'>Mars</option>
                    <option value='Jupiter'>Jupiter</option>
                  </select>
                </div>
              </div>

              <div className='form-row'>
                <div className='form__group'>
                  <input type='number' className='form__input' value={hp} onChange={handleHpChange} id='hp' required />
                  <label htmlFor='hp' className='form__label'>
                    HP
                  </label>
                </div>

                <div className='form__group'>
                  <input type='number' className='form__input' value={pp} onChange={handlePpChange} id='pp' required />
                  <label htmlFor='pp' className='form__label'>
                    PP
                  </label>
                </div>
              </div>

              <div className='form-row'>
                <div className='form__group'>
                  <input
                    type='number'
                    className='form__input'
                    value={atk}
                    onChange={handleAtkChange}
                    id='atk'
                    required
                  />
                  <label htmlFor='atk' className='form__label'>
                    Atk
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='number'
                    className='form__input'
                    value={def}
                    onChange={handleDefChange}
                    id='def'
                    required
                  />
                  <label htmlFor='def' className='form__label'>
                    Def
                  </label>
                </div>
              </div>

              <div className='form-row'>
                <div className='form__group'>
                  <input
                    type='number'
                    className='form__input'
                    value={agi}
                    onChange={handleAgiChange}
                    id='agi'
                    required
                  />
                  <label htmlFor='agi' className='form__label'>
                    Agi
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='number'
                    className='form__input'
                    value={lck}
                    onChange={handleLckChange}
                    id='lck'
                    required
                  />
                  <label htmlFor='lck' className='form__label'>
                    Lck
                  </label>
                </div>
              </div>

              <div className='form__group'>
                <input type='text' className='form__input' value={damage} onChange={handleDamageChange} id='damage' />
                <label htmlFor='damage' className='form__label'>
                  Damage
                </label>
              </div>

              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  value={battleEffect}
                  onChange={handleBattleEffectChange}
                  id='battleEffect'
                  required
                />
                <label htmlFor='battleEffect' className='form__label'>
                  Battle Effect
                </label>
              </div>
            </form>
            <button className='btn btn--white' onClick={() => createMutation.mutate(newDjinniRequest)}>
              Create New Djinni
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateDjinniForm
