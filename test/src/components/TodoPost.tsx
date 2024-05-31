import { useState } from 'react'
import useTodoStore from '../store/useTodoStore'

export default function TodoPost() {
  const { todo, todoList } = useTodoStore()
  const [value, setValue] = useState('')
  const onSubmit = (event: any) => {
    event.preventDefault()
    if (value === '') {
      return
    }
    setValue('')
    console.log(value)
  }
  const onChange = (event: any) => setValue(event.target.value)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={value} />
        <button type="submit">작업추가</button>
      </form>
    </div>
  )
}
