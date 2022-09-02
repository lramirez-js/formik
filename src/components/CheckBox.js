import { useField } from 'formik'

const Checkbox = ({children, ...props}) => {
  const [field, meta] = useField({...props, type: 'checkbox'})
  return (
    <div className="control">
      <label className="label">
        <input type="checkbox" className="checkbox" {...field} {...props}/>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default Checkbox