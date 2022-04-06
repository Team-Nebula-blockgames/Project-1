import './styles.css'
export default function InputField({ label, type, placeholder })
{
  return (
      <div className="inputfield">
          <label>{label}
              <br/>
              <input type={type } placeholder={placeholder} /></label>
    </div>
  )
}
