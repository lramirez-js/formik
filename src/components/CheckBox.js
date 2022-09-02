import { useField } from 'formik'

const Checkbox = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: 'checkbox'})
  console.log(field)

  return (
    <div className="control">
      <label className="label">
        <input type="checkbox" className="input" {...field} {...props}/>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default Checkbox