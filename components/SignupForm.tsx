import { useState } from 'react'

interface Props {
  cohortId: string
  source: string
}

const API_URL = import.meta.env.VITE_SIGNUP_API_URL

export function SignupForm({ cohortId, source }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!API_URL) {
      setStatus('error')
      setErrorMessage('Signup not configured')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, cohort_id: cohortId, source }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed')
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Signup failed')
    }
  }

  if (status === 'success') {
    return (
      <div className="my-8 p-4 border-2 border-black font-mono text-sm">
        <p>Thanks for signing up. We'll be in touch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
          className="flex-1 px-3 py-2 border-2 border-black border-r-0 font-mono text-sm placeholder:text-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-black text-white font-mono text-sm uppercase tracking-wider hover:bg-gray-800 disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Sign up'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-red-600 font-mono text-xs">{errorMessage}</p>
      )}
    </form>
  )
}
