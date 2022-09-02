import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/CheckBox';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Radio from './components/Radio';

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

  if(!values.radio) {
    errors.radio = 'Required'
  }

  return errors
}

function App() {

  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '', doctype: '', radio: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <br />
        <TextInput name="lastname" label="Lastname" />
        <br />
        <TextInput name="email" label="Email" />

        <Field name="select" as="select" className="input">
          <option value="myOption1">Option 1</option>
          <option value="myOption2">Option 2</option>
        </Field>
        <br />
        <Select label="Document type" name="doctype">
          <option value="">Select type</option>
          <option value="word">Word</option>
          <option value="excel">Excel</option>
        </Select>
        <Checkbox name="terms">
          Accept terms.
        </Checkbox>
        <Radio name="radio" value="option1" label="Option 1" />
        <Radio name="radio" value="option2" label="Option 2" />
        <Radio name="radio" value="option3" label="Option 3" />
        <ErrorMessage name="radio" />

        <button type="submit">Send</button>
      </Form>
    </Formik>
    
  )
}

export default App;