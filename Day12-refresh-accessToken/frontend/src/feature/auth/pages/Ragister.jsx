import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../UserContext.jsx";
import useApi from "../../../shared/api.js";



function Ragister() {

  const api = useApi();

  const { register } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    
    try {
     
      const res = await api.post("/auth/register",form)


      console.log(res.data)

    } catch (submitError) {
     
    } finally {
    }
  }

  return (
    <main className=" flex justify-center font-bold border-2 bg-amber-300 register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <label htmlFor="name">Name</label>
        <input className=" flex border-2 border-bold p-4  bg-white rounded-xl text-black "  
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input className=" flex border-2 border-bold p-4  bg-white rounded-xl text-black "  
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input className=" flex border-2 border-bold p-4  bg-white rounded-xl text-black"  
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && <p role="alert">{error}</p>}
        <button type="submit" className="p-5 text-blue-950 border mt-2 border-black border-4 rounded-2xl bg-amber-50 text-3xl">
          sumbit

        </button>
      </form>
    </main>
  );
}

export default Ragister;
