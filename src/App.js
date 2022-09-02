import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/CheckBox';
import TextInput from './components/TextInput';

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

  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <Field name="select" as="select" className="input">
          <option value="myOption1">Option 1</option>
          <option value="myOption2">Option 2</option>
        </Field>
        <br />

        <label>Lastname</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <Checkbox name="terms">
          Accept terms.
        </Checkbox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
    
  )
}

export default App;