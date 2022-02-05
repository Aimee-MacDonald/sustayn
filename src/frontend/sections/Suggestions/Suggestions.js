import React, { useState } from 'react'

import './Suggestions.sass'

const Suggestions = () => {
  const [ createActive, setCreateActive ] = useState(false)
  const [ suggestions, setSuggestions ] = useState([])

  const addSuggestion = e => {
    e.preventDefault()

    const newSuggestion = e.target.newSuggestion.value

    setSuggestions(suggestions => ([...suggestions, {text: newSuggestion, value: 0}]))
    setCreateActive(false)
  }

  const decrementSuggestionValue = index => {
    let newSuggestions = suggestions
    newSuggestions[index].value--
    setSuggestions[newSuggestions]
  }

  const incrementSuggestionValue = index => {
    let newSuggestions = suggestions
    newSuggestions[index].value++
    setSuggestions[newSuggestions]
  }

  return (
    <div id='Suggestions'>
      {!createActive && (
        <div id='suggestionList'>
          {suggestions.map((suggestion, i) => (
            <div key={i} className='suggestion'>
              <p>{suggestion.text}</p>
              <div className='voting'>
                <button onClick={() => decrementSuggestionValue(i)}>-</button>
                <p>{suggestion.value}</p>
                <button onClick={() => incrementSuggestionValue(i)}>+</button>
              </div>
            </div>
          ))}
          <button onClick={() => setCreateActive(true)}>Create a Suggestion</button>
        </div>
      )}

      {createActive && (
        <form onSubmit={addSuggestion}>
          <p>Create Suggestion</p>
          <input id='newSuggestion'/>
          <button type='reset' onClick={() => setCreateActive(false)}>Cancel</button>
          <button type='submit'>Add</button>
        </form>

      )}
    </div>
  )
}

export default Suggestions