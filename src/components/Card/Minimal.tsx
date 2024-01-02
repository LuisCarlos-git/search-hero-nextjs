export function Minimal() {
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden">
      <img
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero" // add name hero
      />
      <div className="p-4 relative">
        <button className="cursor-pointer bg-marvel-red h-12 w-12 flex justify-center items-center rounded-full absolute -top-5 right-5">
          <img src="team-icon.svg" alt="add your team" />
        </button>
        <h2 className="text-4xl font-bold mb-4">Spider man</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nihil nobis, illo iste aspernatur assumenda veritatis. Architecto
          ullam id recusandae eius animi aut modi! Earum quia tempora beatae
          sint quod.
        </p>
      </div>
    </div>
  );
}
