import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
  const handleClearClick = () => {
    reset();
  };
  
  const handleSubmitForm = (data) => {
    console.log(data);
  };
  
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} style={{display:"flex", flexDirection:"column"}}>
      <label>
        Name
        <input {...register('name', { required: true })} />
      </label>
      <label>
        Age
        <input {...register('age', { required: true })} />
      </label>
      <label>
        Address
        <input {...register('address', { required: true })} />
      </label>
      <label>
        Zipcode
        <input {...register('zipcode', { required: true })} />
      </label>
      <label>
        Phone
        <input {...register('phone', { required:true })} />
      </label>
      
      <div> 
        <button type="button" onClick={handleClearClick}>Clear</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;