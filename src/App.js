import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Required'
  } else if(values.name.length < 5) {
    errors.name = 'Name is too short'
  }

  if(!values.lastname) {
    errors.lastname = 'Required'
  } else if(values.lastname.length < 5) {
    errors.lastname = 'Lastname is too short'
  }

  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    validate,
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
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Lastname</label>
      <input 
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Email</label>
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