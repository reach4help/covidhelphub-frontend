import React from 'react'
import Style from './FormSuccess.module.css'
const FormSubmitted = () => {
    return (
        <div>
          <div className={Style.card}>
            <div className={Style.Dcard}>
              <i className="checkmark">✓</i>
            </div>
            <h1>Success</h1> 
              <p>Your Form has been submitted sucessfully<br/> we'll be in touch shortly!</p>
          </div>
        </div>
    )
}

export default FormSubmitted
