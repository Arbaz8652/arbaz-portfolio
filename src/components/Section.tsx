import { getAboutContent, getPersonalInfo } from "@/lib/data";

export default function Section(){
    const persolInfo = getPersonalInfo()
    const about = getAboutContent()
    return (
        <section className="space-y-6">
            <h1 className="text-4xl font-bold">{persolInfo.name}</h1>

            <h2 className="text-xl text-gray-400">
                {persolInfo.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">
                {about.paragraphs}
            </p>
        </section>
    );  
}