"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@nextui-org/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("manyndnw");

  return (
    <div className="w-full items-center bg-slate-800 text-slate-50 py-12 flex flex-col">
      {state.succeeded ? (
        <p className="text-3xl">
          Thanks for reaching out! We will be in contact soon to discuss your
          plans for curbing.
        </p>
      ) : (
        <div className="w-full mx-4 flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl uppercase text-center">
            Contact us for a FREE estimate
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 py-4 my-4 max-w-[650px]"
          >
            <div className="flex md:flex-row flex-col items-center">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <span className="mx-4">OR</span>
              <label htmlFor="phone" className="text-xl">
                Phone #
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Phone Number"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="w-full">
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a little bit about your plans"
                className="w-full md:h-20 h-28 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="name" className="text-xl font-bold">
                * Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="mx-4 text-slate-800 p-1"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <Button type="submit" color="primary" disabled={state.submitting}>
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
