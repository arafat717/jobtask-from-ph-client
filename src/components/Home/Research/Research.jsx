

const Research = () => {
    const researchPapers = [
        {
            id: 1,
            title: 'Research Paper 1',
            author: 'student of Elmwood University',
            link: 'https://www.example.com/research-paper-1',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Sunflower State University',
            link: 'https://www.example.com/research-paper-2',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Maplebrook Polytechnic',
            link: 'https://www.example.com/research-paper-2',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Cedarwood College',
            link: 'https://www.example.com/research-paper-2',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Ivydale University',
            link: 'https://www.example.com/research-paper-2',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Oakridge Institute of Technology',
            link: 'https://www.example.com/research-paper-2',
        },
        {
            id: 2,
            title: 'Research Paper 2',
            author: 'student of Willowbrook College',
            link: 'https://www.example.com/research-paper-2',
        },
       
    ];
    return (
        <div>
            <section className="gradient-background py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white">Recommended Research Papers</h2>
                    <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {researchPapers.map((paper) => (
                            <div
                                key={paper.id}
                                className="bg-white overflow-hidden shadow-md rounded-lg divide-y divide-gray-200"
                            >
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{paper.title}</h3>
                                    <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                        Author: {paper.author}
                                    </p>
                                    <a
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        View Research Paper
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;