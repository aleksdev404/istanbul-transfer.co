import data from './data'


export default () => {

    return (
        <div
            className="hero bg-base-200 py-10"
        >
            <div
                className="hero-content flex-col"
            >
                <h2 className="text-2xl sm:text-5xl text-start sm:text-center font-bold mb-10">Frequently asked questions</h2>
                {
                    data.map((question, index) =>
                        <div key={index} className="collapse bg-base-100 border border-base-300 max-w-150 w-full p-5">
                            <input type="radio" name="my-accordion-1" defaultChecked={index==0} />
                            <div className="collapse-title font-semibold">{question.question}</div>
                            <div className="collapse-content text-sm">{question.answer}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
