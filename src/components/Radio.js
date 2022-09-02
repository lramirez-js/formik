import { useField } from 'formik'

const Radio = ({label, ...props}) => {
  const [field] = useField({...props, type: 'radio'})
  return (
    <div className="control">
      <label className="label">
        <input type="radio" className="radio" {...field} {...props}/>
        {label}
      </label>
    </div>
  )
}

export default Radio