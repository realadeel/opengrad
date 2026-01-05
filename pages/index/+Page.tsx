import Content from '../../content/index.mdx'
import { SignupForm } from '../../components/SignupForm'

export default function Page() {
  return (
    <article className="prose max-w-none">
      <Content />
      <hr />
      <h2>Join the Waitlist</h2>
      <p>We'll reach out when programs open for enrollment.</p>
      <SignupForm source="home" />
    </article>
  )
}
