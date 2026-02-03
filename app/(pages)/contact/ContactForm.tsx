"use client"

import { useState } from "react"

type FormState = {
  name: string
  lastName: string
  email: string
  message: string
}

const createChangeHandler =
  (setForm: React.Dispatch<React.SetStateAction<FormState>>) =>
  (field: keyof FormState) =>
  (value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    lastName: "",
    email: "",
    message: ""
  })

  const handleChange = createChangeHandler(setForm)

  const handleSubmit =
    (data: FormState) =>
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(data)
      setForm({ name: "", lastName: "", email: "", message: "" })
    }

  return (
    <form
      onSubmit={handleSubmit(form)}
      className="w-full max-w-2xl mx-auto flex flex-col gap-4 bg-[#f2f2f2] p-6 rounded-2xl"
    >
      <h1 className="text-2xl font-bold text-(--text-main) text-left mb-4">
        Chat with us
      </h1>

      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm text-(--text-main)">First name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => handleChange("name")(e.target.value)}
            placeholder="Enter first name"
            className="w-full px-4 py-3 rounded-md border border-[#D0D5DD] bg-white outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm text-(--text-main)">Last name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={e => handleChange("lastName")(e.target.value)}
            placeholder="Enter last name"
            className="w-full px-4 py-3 rounded-md border border-[#D0D5DD] bg-white outline-none"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm text-(--text-main)">Email address</label>
        <input
          type="email"
          value={form.email}
          onChange={e => handleChange("email")(e.target.value)}
          placeholder="Enter email address"
          className="w-full px-4 py-3 rounded-md border border-[#D0D5DD] bg-white outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm text-(--text-main)">Message</label>
        <textarea
          value={form.message}
          onChange={e => handleChange("message")(e.target.value)}
          placeholder="Write your message"
          className="w-full px-4 py-3 rounded-md border border-[#D0D5DD] bg-white outline-none min-h-60"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-(--primary) text-white py-3 rounded-md font-semibold"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
