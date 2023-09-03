export function handleSubmit({ form, setForm }) {
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
