import React, { useEffect, useState } from "react"

import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { register, formState, handleSubmit } = useForm()

  const { errors } = formState

  const onSubmit = (data) => {
    setSubmitted(false)

    const sendEmail = async (data) => {
      setLoading(true)
      console.log(JSON.stringify(data))
      try {
        await fetch("api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setSubmitted(false)
      }
    }
    sendEmail(data)
    setSubmitted(true)
  }

  return (
    <div>
      <form className="mt-[4rem] grid gap-x-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
          })}
          placeholder="Full Name*"
          className="w-full mb-4 p-4 border-2  rounded-lg focus:outline-none focus:border-purple-500"
        />
        <ErrorMessage className="z-10" errors={errors} name="email" as="p" />
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email Address*"
          className="w-full mb-4 p-4 border-2  rounded-lg focus:outline-none focus:border-purple-500"
        />
        <textarea
          className="w-full mb-4 p-4 border-2  rounded-lg focus:outline-none focus:border-purple-500"
          name="message"
          {...register("message")}
          placeholder="Your Message*"
        ></textarea>
        {loading ? (
          <p className="text-white">Sending ...</p>
        ) : (
          <>
            <input
              type="submit"
              value="SUBMIT"
              className="relative pointer px-5 py-1 text-white uppercase tracking-widest border-gradient bg-transparent w-max"
            />
            {submitted && (
              <p className="text-white">Thank you for getting in touch! I will be in contact with you shortly</p>
            )}
          </>
        )}
      </form>
    </div>
  )
}

export default Form
