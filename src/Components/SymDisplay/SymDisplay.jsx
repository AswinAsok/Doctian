import React from 'react'

function SymDisplay({symptom, setSymptom, value, setValue}) {
    return (
        <div>
           <div className="display-container">
               {symptom}
               {value}
           </div>
        </div>
    )
}

export default SymDisplay
