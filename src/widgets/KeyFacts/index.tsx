import data from './data'

export default () => {

    return (
        <div
            className="hero bg-base-200 py-5"
        >
            <div
                className="hero-content"
            >
                <div className="grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
                    {
                        data.map((fact, index) =>
                            <div key={index} className="stats bg-white border border-blue-100">
                                <div className="stat sm:p-10">
                                    <div className="stat-figure text-success hidden sm:block">
                                        {fact.icon}
                                    </div>
                                    <div className="stat-title hidden sm:block">{fact.title}</div>
                                    <div className="stat-value text-[1.2rem] sm:text-3xl">{fact.value}</div>
                                    <div className="stat-desc">{fact.desc}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
