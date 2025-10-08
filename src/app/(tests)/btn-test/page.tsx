"use client";

import Btn from "@/components/share/Btn";
import CustomeForm from "@/components/share/CustomeForm";
import React, { FormEvent } from "react";

const BtnTestPage = () => {
  return (
    <React.Fragment>
      <main>
        <Btn
          type="button"
          className="px-4 py-2 bg-red-600 text-white"
          onClick={() => alert("jhihihi")}
        >
          Click
        </Btn>

        <div className="mx-auto w-full max-w-xl my-4 text-center">
          <CustomeForm
            className=""
            children="Name"
            btnProps={{ type: "submit" }}
            inputProps={{
              placeholder: "Enter Your Name",
              name: "name",
              id: "name",
              className: "p-2 border-2 rounded mx-1",
            }}
            formProps={{
              className: "w-full",
              onSubmit: (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                //   const form = e.target as HTMLFormElement;
                //   const formData = new FormData(form);
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                console.log({ name });

                console.log(Object.fromEntries(formData.entries()));
              },
            }}
          />
          <CustomeForm
            className=""
            children="Email"
            btnProps={{ type: "submit" }}
            inputProps={{
              placeholder: "Enter Your Email",
              name: "email",
              id: "email",
              className: "p-2 border-2 rounded mx-1",
            }}
            formProps={{
              onSubmit: (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                //   const form = e.target as HTMLFormElement;
                //   const formData = new FormData(form);
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email") as string;
                console.log({ email });

                console.log(Object.fromEntries(formData.entries()));
              },
            }}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default BtnTestPage;
