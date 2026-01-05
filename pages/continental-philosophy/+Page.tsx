import Content from '../../content/continental-philosophy/index.mdx'
import { SignupForm } from '../../components/SignupForm'

export default function Page() {
  return (
    <article className="prose max-w-none">
      <h1>Continental Philosophy</h1>
      <p>A rigorous 4-year program covering the continental tradition from Plato through phenomenology, critical theory, and post-structuralism—culminating in an original book-length project.</p>
      <p><strong>Status:</strong> Year 1, Semester 1 — <em>Started January 5, 2026</em></p>

      <div className="my-8 p-6 border-2 border-black">
        <h3 className="mt-0">Join the Waitlist</h3>
        <p className="mb-4">The first cohort started January 2026. Leave your email to join a future cohort.</p>
        <SignupForm program="continental-philosophy" source="continental-philosophy" />
      </div>

      <hr />
      <Content />

      <hr />
      <p><a href="/">← Back to OpenGrad</a></p>
    </article>
  )
}
