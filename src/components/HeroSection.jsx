import heroImg from "../assets/hero-img.png";
import arrow from "../assets/roundarrow.png";

const HeroSection = () => {
    return (
        <section className="px-4 md:px-8 lg:px-12 py-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-sky-50 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                            <p className="text-sm text-gray-500 mb-6">Home &gt; Services</p>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                                <div className="inline-flex items-center gap-2">
                                    <span> Web &amp; Software </span>

                                    <img
                                        src={arrow}
                                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12"
                                    />
                                </div>
                                <br />
                                Development Services
                            </h1>

                            <p className="mt-6 text-gray-600 text-lg max-w-xl">
                                High-performance web and software development built for
                                businesses that need to scale quickly, reliably, and without
                                compromise.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                <button className="bg-blue-500 hover:bg-gray-900 text-white px-7 py-3 rounded-full">
                                    Book A Strategy Call
                                </button>

                                <button className="border border-gray-400 px-7 py-3 rounded-full hover:bg-gray-900 hover:text-white">
                                    View Pricing Module
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <img
                                src={heroImg}
                                alt="Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
