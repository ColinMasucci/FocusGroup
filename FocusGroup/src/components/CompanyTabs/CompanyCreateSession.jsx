import { useState } from "react"
import supabase from "../../config/supabaseClient"



const CompanyCreateSession = ({setMode}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [formError, setFormError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !description || !rating){
            setFormError('Please fill in all the fields correctly')
            return
        }

        const {data, error} = await supabase
            .from("practice")
            .insert([{title, description, rating}])
            .select()
        if (error){
            console.log(error)
            setFormError("Error Creating Session")
        }
        if (data){
            console.log(data)
            setFormError(null)
            setMode("main")
        }
    }

    const handleCancel = () => {
        setTitle('')
        setDescription('')
        setRating('')
        setMode("main")
    }

    return(
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-indigo-100">
  <h1 className="text-3xl font-bold text-indigo-700 mb-6">Create Session</h1>
  <form onSubmit={handleSubmit} className="space-y-4">

    <div>
      <label htmlFor="title" className="block text-sm font-medium text-indigo-800">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>

    <div>
      <label htmlFor="description" className="block text-sm font-medium text-indigo-800">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
        required
      />
    </div>

    <div>
      <label htmlFor="rating" className="block text-sm font-medium text-indigo-800">Rating</label>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        min={1}
        max={10}
        required
      />
    </div>

    <div className="flex justify-between gap-4">
      <button
        type="button"
        onClick={handleCancel} // <-- You implement this function
        className="w-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
      >
        Create Session
      </button>
    </div>

    {formError && (
      <p className="text-red-600 text-sm mt-2">{formError}</p>
    )}
    
  </form>
</div>

    );
}
export default CompanyCreateSession