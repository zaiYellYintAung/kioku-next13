import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="container mx-auto">
      {/* <section className="min-h-screen md:pt-12 lg:pt-14 " id="root">
        <div>Pic</div>
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
      </section>
      <section className="min-h-screen md:pt-12 lg:pt-14 " id="about">
        <div>About this app</div>
        <div>Jumbo tron</div>
      </section>
      <section
        className="min-h-screen md:pt-12 lg:pt-14 "
        id="personalFeatures">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Personal Features</div>
      </section>
      <section className="min-h-screen md:pt-12 lg:pt-14 " id="projectFeatures">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Projects Features</div>
      </section>

      <section className="min-h-screen md:pt-12 lg:pt-14 " id="contact">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Plans</div>
      </section>
      <section className="min-h-screen md:pt-12 lg:pt-14 " id="support">
        <div>
          <h1>Title</h1>
          <p>Descriptions</p>
        </div>
        <div>Plans</div>
      </section> */}
      <Link href="/home">redirect to Home</Link>
      <hr />
      <Link href="/home">redirect to Welcome</Link>
    </main>
  );
}