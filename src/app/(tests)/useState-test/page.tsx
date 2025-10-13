"use client";

import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { UserContext } from "@/contexts/UserContextProvider";
import { useSession } from "@/lib/authClient";
import Link from "next/link";
import React, {
  ChangeEvent,
  FormEvent,
  Suspense,
  use,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface FormType {
  name: string;
  email: string;
  password: string;
}

const UseStateTest = () => {
  const [form, setForm] = useState<FormType>({
    name: "name ..",
    email: "email ...",
    password: "",
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ form });
    alert(JSON.stringify(form, null, 2));
  };

  const { theme, setTheme, fontSize, setFontSize } = useContext(ThemeContext);
  const { user } = use(UserContext);

  const nameRef = useRef<string>("example name");

  useEffect(() => {
    setFontSize(20);
  });

  return (
    <React.Fragment>
      <main className={theme == "light" ? "bg-green-50" : "bg-black"}>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={form.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <input type="submit" value="Save" />
        </form>
        <Link href={"/userContext-test"}>User Context</Link>
        <button
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setTheme!((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          Change Theme
        </button>
        <pre>{JSON.stringify(form, null, 2)}</pre>
        <pre>{JSON.stringify(theme, null, 2)}</pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <pre>{JSON.stringify(fontSize, null, 2)}</pre>

        <p>{nameRef.current}</p>
        <button
          type="button"
          onClick={() => alert((nameRef.current = "change"))}
        >
          Change Name
        </button>
      </main>
    </React.Fragment>
  );
};

export default UseStateTest;
