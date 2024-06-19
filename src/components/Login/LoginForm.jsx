import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { Button, Checkbox, Label, TextInput, Alert } from "flowbite-react";
import { PassHandle } from "../../middleware/funct";
import axios from "axios";
import { appAuth } from "../../firebase/firebaseCon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../../middleware/LoginSlice";

function LoginForm() {
  const { dispatch } = useUserContext();
  const [err, setErr] = useState({
    isvalidate: false,
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { handleInputPass } = PassHandle();
  function handleInput(e) {
    const { name, value } = e.target;
    setData((body) => ({
      ...body,
      [name]: value,
    }));
  }
  const navigate = useNavigate();
  const LoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${import.meta.env.VITE_API_URL}/api/login`,
          {
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          dispatch({ type: "LOGIN", payload: res.data });
          signInWithEmailAndPassword(appAuth, data.email, data.password)
            .then((res) => {
              localStorage.setItem("userToken", res.user.accessToken);
            })
            .catch((err) => console.error(err));
          navigate(`/app/${res.data.session}`);
        })
        .catch((err) => {
          setErr({ isvalidate: true, pesan: err.response.data.Message });
        });
    } catch (error) {
      if (error) {
        setErr(error.response?.data?.Message);
      }
    }
  };
  return (
    <>
      <div className="">
        {err.isvalidate && (
          <Alert color="failure">
            <span className="font-medium"></span> {err}
          </Alert>
        )}
        <form
          className="mx-auto w-full flex max-w-md flex-col gap-6"
          onSubmit={(e) => LoginSubmit(e)}
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                className="text-stone-600"
                value="email / username"
              />
            </div>
            <TextInput
              id="email1"
              value={data.email}
              onChange={(e) => handleInput(e)}
              type="email"
              name="email"
              placeholder="user@vidzi.my.id"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                className="text-stone-600"
                value="Kata Sandi"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleInput(e), setErr(handleInputPass(e));
              }}
              required
            />
            {err && (
              <p style={{ color: err.warna, fontSize: 12 }}>{err?.pesan}</p>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 border-primary-800">
              <Checkbox
                id="remember"
                className="text-primary-600 border-primary-800"
              />
              <Label htmlFor="remember" className="text-stone-600">
                Ingat Saya
              </Label>
            </div>
            <div className="flex gap-2 text-sm text-stone-600">
              <p>Lupa kata sandi? </p>
              <Link to="/forgot-password" className="underline text-blue-700">
                Klik disini
              </Link>
            </div>
          </div>
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Masuk
          </Button>
          <div className="flex gap-2 w-fit mx-auto text-stone-800 text-md">
            <p>Belum punya akun?</p>
            <Link to="/signup" className="underline text-blue-700">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
