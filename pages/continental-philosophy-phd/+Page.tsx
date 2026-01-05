import Content from '../../content/continental-philosophy-phd/index.mdx'
import { SignupForm } from '../../components/SignupForm'

export default function Page() {
  return (
    <article className="prose max-w-none">
      <h1>Continental Philosophy PhD</h1>
      <p>A rigorous 4-year program covering the continental tradition from Plato through phenomenology, critical theory, and post-structuralism.</p>
      <p><strong>Status:</strong> Year 1, Semester 1 — <em>Starts January 5, 2026</em></p>

      <div className="my-8 p-6 border-2 border-black">
        <h3 className="mt-0">Join the Waitlist</h3>
        <p className="mb-4">The first cohort starts January 2026. Leave your email and we'll reach out with details.</p>
        <SignupForm program="continental-philosophy" source="continental-philosophy-phd" />
      </div>

      <hr />
      <Content />

      <hr />
      <p><a href="/">← Back to OpenGrad</a></p>
    </article>
  )
}
