import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input 
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input 
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <input 
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Send</button>
    </form>
  )
}

export default App;