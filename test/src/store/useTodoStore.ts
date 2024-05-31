import { create } from 'zustand'

const useTodoStore = create((set) => ({
  todo: '',
  setTodo: (text: string) => set({ todo: text }),
  todoList: [],
  setTodoList: (newMemo: string) =>
    set((prev: any) => ({
      memos: [...prev.memos, newMemo],
    })),
}))

export default useTodoStore
