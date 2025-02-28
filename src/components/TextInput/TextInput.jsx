// This componenet is used in Text Input Form to create the form.
// This is a reusable component.

function TextInput({ label, type='text', value, onChange }){

    return (
        <label className="block">
            
            {/* ToDo: Handle Label */}
            {label && <span className="text-gray-700">{label}</span>}
            <input 
                className="w-full px-4 py-2 border border-gray-500 rounded-md"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
            />
        </label>
    )

}

export default TextInput;