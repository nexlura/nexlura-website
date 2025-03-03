'use client'

import { useId, useState } from "react";
import { FadeIn } from "./FadeIn";
import { Button } from "./Button";
import { enqueueSnackbar } from "notistack";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  budget?: string;
  message?: string
}

function TextInput({
  label,
  error,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string, error?: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold ${error ? 'peer-focus:text-red-550' : 'peer-focus:text-gray-950'} peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold ${error ? 'peer-[:not(:placeholder-shown)]:text-red-550' : 'peer-[:not(:placeholder-shown)]:text-neutral-950'} ${error ? 'text-red-500' : 'text-neutral-500'} `}
      >
        {error ? error : label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}


const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.name]: false })
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required *'
    if (formData.email && !formData.email.includes('@'))
      newErrors.email = 'Enter a valid email.'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^\+?\d{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required *'
    if (!formData.message.trim()) newErrors.message = 'Message is required *'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Returns true if no errors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true);

      // make fetch request with post method and pass the body
      fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            // clear form inputs
            setFormData({
              name: '',
              phone: '',
              email: '',
              company: '',
              message: '',
              budget: '',
            })

            // display notistack message
            enqueueSnackbar(
              'Thanks for contacting! We will get back to you soon.',
              {
                variant: 'success',
                autoHideDuration: 6000,
                anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
              },
            );

            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        })
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name *"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextInput
            label="Phone *"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <TextInput
            label="Email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Message *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="$2K – $25K"
                  name="budget"
                  value="$2K – $25K"
                  onChange={handleChange}
                />
                <RadioInput
                  label="$25K – $50K"
                  name="budget"
                  value="$25K – $50K"
                  onChange={handleChange}
                />
                <RadioInput
                  label="$50K – $100K"
                  name="budget"
                  value="$50K – $100K"
                  onChange={handleChange}
                />
                <RadioInput
                  label="More than $100K"
                  name="budget"
                  value="More than $100K"
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        </div>

        {!isLoading ? (
          <Button type="submit" className="mt-10 h-10 cursor-pointer">
            Let’s work together
          </Button>
        ) : (
          <Button className="mt-10 h-10 cursor-pointer">
            <span className="loader"></span>
          </Button>
        )}
      </form>
    </FadeIn>
  )
}

export default ContactForm