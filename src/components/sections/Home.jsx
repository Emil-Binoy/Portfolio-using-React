export const Home = () => {
  return (
    <section  id="home" className="min-h-screen flex items-center justify-center relative">
        <div data-aos="fade-up" data-aos-delay="200" className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 p-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Hi, Iam Emil Binoy</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Whether it's creating responsive web designs, developing APIs, or optimizing performance, I am committed to delivering work that exceeds expectations and drives results. Let’s collaborate to turn your ideas into impactful web solutions.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white px-5 py-2 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600">View Projects</a>
                <a href="#contact" className="shadow-sm shadow-blue-500/50  bg-blue-500/5 text-blue-500 px-5 py-2 rounded-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500/10">Contact Me</a>
            </div>
        </div>
    </section>
  )
}

