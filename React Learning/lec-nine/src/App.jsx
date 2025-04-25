import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm();

  async function onSubmit(data){
    // API call stimulate
    await new Promise((resolve)=> setTimeout(resolve, 5000));
    console.log("submitting form", data);
  }

  return (
    <form onSubmit={handleSubmit((onSubmit))}>
      <div>
        <label>first name:</label>
        <input {...register('firstName' ,
        {required:true,
          minLength:{value:5, message:"min lenght atleast 5"}
          })} />
          {errors.firstName && <p>{errors.firstName.message} </p>}
      </div>
      <br />

      <div>
        <label>middle name:</label>
        <input {...register('middleName')} />
      </div>
      <br />

      <div>
        <label>last name:</label>
        <input {...register('lastName')} />
      </div>
      <br />
      <input type='submit' disabled={isSubmitting} value={isSubmitting ? "submtting": "submit" } />
    </form>
  )
}

export default App
