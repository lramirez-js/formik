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
      {/* Formik's unefficient way to set field properties */}
      <input 
        name='name'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Lastname</label>
      {/* Formik's getFieldProps automatically settles the value, onBlur */}
      <input 
        type='text'
        {...formik.getFieldProps('lastname')}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Email</label>

      <input 
        type='email'
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type='submit'>Send</button>
    </form>
  )
}

export default App;