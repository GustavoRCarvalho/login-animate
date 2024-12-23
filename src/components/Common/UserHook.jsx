import { useState } from "react"

export const initialUser = {
  User: { value: "", error: "" },
  Password: { value: "", error: "" },
}

export const useUserHook = (initialState = initialUser) => {
  const [form, setForm] = useState(initialState)

  const handleInput = ({ text, type }) => {
    setForm((state) => {
      return { ...state, [type]: { value: text, error: "" } }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const list = Object.keys(form)
    let haveError = false

    list.forEach((field) => {
      if (form[field]?.value === "") {
        setForm((state) => {
          return {
            ...state,
            [field]: { value: state[field].value, error: "Field Empty" },
          }
        })
        haveError = true
      }
    })
    if (!haveError) {
      list.forEach((field) => {
        setForm((state) => {
          return { ...state, [field]: { value: "", error: "" } }
        })
      })
    }
  }

  return { form, handleInput, handleSubmit }
}
